import { consultation } from "@/content/site";

export type ConsultationRequest = {
  name: string;
  birthDate: string; // ISO yyyy-mm-dd
  email: string;
  phone: string;
};

export type ConsultationField = keyof ConsultationRequest;

export type ConsultationState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors: Partial<Record<ConsultationField, string>>;
      values: Partial<ConsultationRequest>;
    };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function isValidBirthDate(value: string): boolean {
  if (!ISO_DATE.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) return false;
  return date.getUTCFullYear() >= 1900 && date.getTime() <= Date.now();
}

function isValidPhone(value: string): boolean {
  if (!/^\+?[\d\s()-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

export function readConsultation(formData: FormData): ConsultationRequest {
  const text = (key: ConsultationField) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
  };
  return {
    name: text("name").slice(0, 200),
    birthDate: text("birthDate"),
    email: text("email").slice(0, 254),
    phone: text("phone").slice(0, 32),
  };
}

export function validateConsultation(data: ConsultationRequest): Partial<Record<ConsultationField, string>> {
  const errors: Partial<Record<ConsultationField, string>> = {};
  if (!data.name) errors.name = consultation.errors.name;
  if (!isValidBirthDate(data.birthDate)) errors.birthDate = consultation.errors.birthDate;
  if (!EMAIL.test(data.email)) errors.email = consultation.errors.email;
  if (!isValidPhone(data.phone)) errors.phone = consultation.errors.phone;
  return errors;
}
