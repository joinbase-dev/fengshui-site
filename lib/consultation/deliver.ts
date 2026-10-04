import type { ConsultationRequest } from "./schema";

// The one place that knows where consultation requests go. To connect a CRM,
// email service or form provider, replace the body of this function; the form
// and the server action do not change.
//
// Default: POST the request as JSON to CONSULTATION_WEBHOOK_URL (works with
// Zapier, Make, n8n, Google Apps Script, Formspree and similar).
export async function deliverConsultation(request: ConsultationRequest): Promise<boolean> {
  const url = process.env.CONSULTATION_WEBHOOK_URL;
  if (!url) {
    console.error("Consultation form: CONSULTATION_WEBHOOK_URL is not set; request not delivered.");
    return false;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...request, submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) console.error(`Consultation form: webhook responded ${response.status}.`);
    return response.ok;
  } catch (error) {
    // Message only: the full error can echo the webhook URL, which may carry a secret.
    console.error(
      `Consultation form: webhook request failed (${error instanceof Error ? error.message : "unknown error"}).`,
    );
    return false;
  }
}
