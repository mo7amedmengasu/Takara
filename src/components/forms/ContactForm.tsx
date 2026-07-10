import { useId, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { contact } from "../../data/content";
import { submitContactForm, type ContactPayload } from "../../services/contact";

type Errors = Partial<Record<keyof ContactPayload, string>>;

const initialValues: ContactPayload = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  inquiryType: "Product Inquiry",
  message: "",
};

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "fallback" | "failed">("idle");
  const [fallback, setFallback] = useState<string | null>(null);

  const update = (field: keyof ContactPayload, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      const result = await submitContactForm(values);
      if (result.ok) {
        setStatus("sent");
        setValues(initialValues);
      } else {
        setFallback(result.mailto);
        setStatus("fallback");
      }
    } catch {
      setStatus("failed");
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <input type="text" name="company" autoComplete="off" tabIndex={-1} aria-hidden="true" className="honeypot" />
      <Field
        id={`${id}-fullName`}
        label="Full Name"
        value={values.fullName}
        error={errors.fullName}
        onChange={(value) => update("fullName", value)}
      />
      <Field
        id={`${id}-companyName`}
        label="Company Name"
        value={values.companyName}
        error={errors.companyName}
        onChange={(value) => update("companyName", value)}
      />
      <Field
        id={`${id}-email`}
        label="Email Address"
        value={values.email}
        error={errors.email}
        type="email"
        onChange={(value) => update("email", value)}
      />
      <Field
        id={`${id}-phone`}
        label="Phone Number"
        value={values.phone}
        error={errors.phone}
        type="tel"
        onChange={(value) => update("phone", value)}
      />
      <Field
        id={`${id}-country`}
        label="Country"
        value={values.country}
        error={errors.country}
        onChange={(value) => update("country", value)}
      />
      <label className="form-field" htmlFor={`${id}-inquiryType`}>
        <span>Type of Inquiry</span>
        <select
          id={`${id}-inquiryType`}
          value={values.inquiryType}
          onChange={(event) => update("inquiryType", event.target.value)}
        >
          {contact.inquiryOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="form-field form-field-full" htmlFor={`${id}-message`}>
        <span>Message</span>
        <textarea
          id={`${id}-message`}
          value={values.message}
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          onChange={(event) => update("message", event.target.value)}
        />
        {errors.message ? (
          <small id={`${id}-message-error`} className="form-error">
            {errors.message}
          </small>
        ) : null}
      </label>
      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
          <Send size={18} aria-hidden="true" />
          {status === "loading" ? "Preparing inquiry..." : "Send Inquiry"}
        </button>
        {status === "sent" ? <p className="form-status success">Your inquiry was sent successfully.</p> : null}
        {status === "fallback" && fallback ? (
          <p className="form-status warning">
            No live contact endpoint is configured. <a href={fallback}>Open email fallback</a>.
          </p>
        ) : null}
        {status === "failed" ? (
          <p className="form-status error">The configured contact endpoint could not accept the inquiry.</p>
        ) : null}
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
};

function Field({ id, label, value, error, type = "text", onChange }: FieldProps) {
  return (
    <label className="form-field" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <small id={`${id}-error`} className="form-error">
          {error}
        </small>
      ) : null}
    </label>
  );
}

function validate(values: ContactPayload) {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!values.companyName.trim()) errors.companyName = "Enter your company name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Enter your phone number.";
  if (!values.country.trim()) errors.country = "Enter your country.";
  if (!values.message.trim()) errors.message = "Enter your message.";
  return errors;
}
