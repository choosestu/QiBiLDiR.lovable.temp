import { useState, type FormEvent } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const data = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => {
        if (i.path[0]) errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sent");
    formEl.reset();
  }

  return (
    <section id="contact" className="py-24 md:py-36 bg-charcoal text-charcoal-foreground">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-charcoal-foreground/50 mb-6">Contact</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-light mb-8">
            Let's start a conversation.
          </h2>
          <p className="text-lg text-charcoal-foreground/70 leading-relaxed max-w-md">
            Interested in learning more about QiBiLDiR? We'd love to connect.
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-6">
          <Field name="name" label="Name" type="text" error={errors.name} />
          <Field name="company" label="Company (optional)" type="text" error={errors.company} />
          <Field name="email" label="Email" type="email" error={errors.email} />
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-charcoal-foreground/50 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={1000}
              className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-charcoal-foreground placeholder:text-charcoal-foreground/30 resize-none"
            />
            {errors.message && <p className="text-destructive text-xs mt-2">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-charcoal text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Send Message
          </button>
          {status === "sent" && (
            <p className="text-sm text-charcoal-foreground/70">Thank you — we'll be in touch.</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type, error }: { name: string; label: string; type: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-charcoal-foreground/50 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-charcoal-foreground placeholder:text-charcoal-foreground/30"
      />
      {error && <p className="text-destructive text-xs mt-2">{error}</p>}
    </div>
  );
}
