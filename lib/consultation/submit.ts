"use server";

import { consultation } from "@/content/site";
import { deliverConsultation } from "./deliver";
import { readConsultation, validateConsultation, type ConsultationState } from "./schema";

export async function submitConsultation(
  _previous: ConsultationState,
  formData: FormData,
): Promise<ConsultationState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get("website")) return { status: "success" };

  const request = readConsultation(formData);
  const fieldErrors = validateConsultation(request);
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: consultation.errors.summary, fieldErrors, values: request };
  }

  const delivered = await deliverConsultation(request);
  if (!delivered) {
    return { status: "error", message: consultation.failure, fieldErrors: {}, values: request };
  }
  return { status: "success" };
}
