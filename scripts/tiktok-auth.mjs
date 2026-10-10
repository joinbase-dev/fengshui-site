// One-time TikTok login that prints the refresh token Home needs (see docs/tiktok.md).
// Run it on your own computer, signed in to TikTok as the account Home should show:
//
//   TIKTOK_CLIENT_KEY=... TIKTOK_CLIENT_SECRET=... TIKTOK_REDIRECT_URI=https://... \
//     node scripts/tiktok-auth.mjs
//
// It prints a link. Open it, approve, and paste back the full address TikTok sends you
// to (it carries ?code=...). The refresh token it prints lasts a year.
import { randomBytes } from "node:crypto";
import { createInterface } from "node:readline/promises";

const { TIKTOK_CLIENT_KEY: clientKey, TIKTOK_CLIENT_SECRET: clientSecret, TIKTOK_REDIRECT_URI: redirectUri } =
  process.env;
if (!clientKey || !clientSecret || !redirectUri) {
  console.error("Set TIKTOK_CLIENT_KEY, TIKTOK_CLIENT_SECRET and TIKTOK_REDIRECT_URI first.");
  process.exit(1);
}

const state = randomBytes(16).toString("hex");
const authorize = new URL("https://www.tiktok.com/v2/auth/authorize/");
authorize.search = new URLSearchParams({
  client_key: clientKey,
  scope: "user.info.basic,video.list",
  response_type: "code",
  redirect_uri: redirectUri,
  state,
}).toString();

console.log(`\n1. Open this link and approve:\n\n${authorize}\n`);
const rl = createInterface({ input: process.stdin, output: process.stdout });
const returned = new URL((await rl.question("2. Paste the address you were sent to: ")).trim());
rl.close();

if (returned.searchParams.get("state") !== state) {
  console.error("That address is from a different login attempt. Run the script again.");
  process.exit(1);
}
const code = returned.searchParams.get("code");
if (!code) {
  console.error(`No code in that address: ${returned.searchParams.get("error_description") ?? returned}`);
  process.exit(1);
}

const response = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    client_key: clientKey,
    client_secret: clientSecret,
    code,
    grant_type: "authorization_code",
    redirect_uri: redirectUri,
  }),
});
const body = await response.json();
if (!body.refresh_token) {
  console.error("TikTok did not return a token:", body);
  process.exit(1);
}

console.log(`\n3. Add this to Vercel as TIKTOK_REFRESH_TOKEN (Production and Preview):\n\n${body.refresh_token}\n`);
console.log(`It expires in ${Math.round(body.refresh_expires_in / 86400)} days; run this again before then.`);
