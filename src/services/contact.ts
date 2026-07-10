export type ContactPayload = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  inquiryType: string;
  message: string;
};

export type SubmitResult =
  | { ok: true; mode: "endpoint" }
  | { ok: false; mode: "mailto"; mailto: string; reason: string };

export async function submitContactForm(payload: ContactPayload): Promise<SubmitResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.warn("VITE_CONTACT_ENDPOINT is not configured. The contact form will use the mailto fallback.");
    }
    const subject = encodeURIComponent(`Takara Haya inquiry - ${payload.inquiryType}`);
    const body = encodeURIComponent(
      [
        `Full Name: ${payload.fullName}`,
        `Company Name: ${payload.companyName}`,
        `Email Address: ${payload.email}`,
        `Phone Number: ${payload.phone}`,
        `Country: ${payload.country}`,
        `Type of Inquiry: ${payload.inquiryType}`,
        "",
        payload.message,
      ].join("\n"),
    );
    return {
      ok: false,
      mode: "mailto",
      mailto: `mailto:info@takarahaya.com?subject=${subject}&body=${body}`,
      reason: "No live contact endpoint is configured.",
    };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("The contact endpoint did not accept the inquiry.");
  }

  return { ok: true, mode: "endpoint" };
}
