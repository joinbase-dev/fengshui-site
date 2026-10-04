"use client";

import { useActionState, useEffect, useRef } from "react";
import { consultation } from "@/content/site";
import { primaryButton } from "@/components/ui/button-styles";
import { submitConsultation } from "@/lib/consultation/submit";
import type { ConsultationField, ConsultationState } from "@/lib/consultation/schema";

type FieldConfig = {
  name: ConsultationField;
  type: "text" | "date" | "email" | "tel";
  autoComplete: string;
  inputMode?: "tel" | "email";
};

const rows: FieldConfig[][] = [
  [
    { name: "name", type: "text", autoComplete: "name" },
    { name: "birthDate", type: "date", autoComplete: "bday" },
  ],
  [
    { name: "email", type: "email", autoComplete: "email", inputMode: "email" },
    { name: "phone", type: "tel", autoComplete: "tel", inputMode: "tel" },
  ],
];

const initialState: ConsultationState = { status: "idle" };

export function ConsultationForm() {
  const [state, formAction, pending] = useActionState(submitConsultation, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status !== "error") return;
    const firstInvalid = formRef.current?.querySelector<HTMLInputElement>('[aria-invalid="true"]');
    firstInvalid?.focus();
  }, [state]);

  const fieldErrors = state.status === "error" ? state.fieldErrors : {};
  // React resets the form after each submission; defaultValue restores what was sent.
  const values = state.status === "error" ? state.values : {};

  return (
    <div className="flex w-full flex-col">
      <form ref={formRef} action={formAction} noValidate className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-6">
          {rows.map((row) => (
            <div key={row[0].name} className="grid gap-6 sm:grid-cols-2">
              {row.map((field) => {
                const error = fieldErrors[field.name];
                const id = `consultation-${field.name}`;
                return (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label htmlFor={id} className="text-caption leading-label font-bold text-text-strong">
                      {consultation.labels[field.name]}
                    </label>
                    <input
                      id={id}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      inputMode={field.inputMode}
                      required
                      defaultValue={values[field.name]}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={error ? `${id}-error` : undefined}
                      className="h-11 w-full rounded-sm border border-border bg-white px-4 text-input font-medium text-ink placeholder:text-placeholder focus:border-brand focus:outline-2 focus:-outline-offset-1 focus:outline-brand aria-invalid:border-brand"
                    />
                    {error && (
                      <p id={`${id}-error`} className="text-caption text-brand">
                        {error}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Honeypot for bots; hidden from people and assistive tech. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <button type="submit" disabled={pending} className={`${primaryButton} sm:self-end`}>
          {pending ? consultation.submitting : consultation.submit}
        </button>
      </form>
      <p role="status" className="mt-4 text-body-2 text-gray-800 empty:mt-0 sm:text-right">
        {state.status === "success" && consultation.success}
        {state.status === "error" && state.message}
      </p>
    </div>
  );
}
