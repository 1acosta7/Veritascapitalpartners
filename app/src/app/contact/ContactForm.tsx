"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function validate(data: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) errors.phone = "Please enter your phone number.";
  if (!data.message.trim()) errors.message = "Please include a message.";
  return errors;
}

const inputClass =
  "w-full bg-forest-black border border-white/10 text-alabaster placeholder-stone-gray/40 font-body text-sm px-5 py-4 focus:outline-none focus:border-bronze transition-colors duration-200";

const labelClass =
  "block font-sans text-[9px] tracking-[0.28em] uppercase text-bronze mb-2";

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    // [Placeholder] — wire up your form handler / API route / email service here
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <div className="w-10 h-px bg-bronze mx-auto mb-8" />
        <h3 className="font-serif text-2xl text-alabaster mb-4">
          Thank You
        </h3>
        <p className="font-body text-stone-gray leading-relaxed max-w-sm mx-auto">
          We&rsquo;ve received your message and will be in touch within one to
          two business days.
        </p>
        <div className="w-10 h-px bg-bronze mx-auto mt-8" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name <span className="text-bronze">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={cn(inputClass, errors.name && "border-red-400/60")}
        />
        {errors.name && (
          <p className="mt-1.5 font-sans text-[9px] tracking-wide text-red-400/80">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="text-bronze">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={cn(inputClass, errors.email && "border-red-400/60")}
        />
        {errors.email && (
          <p className="mt-1.5 font-sans text-[9px] tracking-wide text-red-400/80">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number <span className="text-bronze">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(000) 000-0000"
          className={cn(inputClass, errors.phone && "border-red-400/60")}
        />
        {errors.phone && (
          <p className="mt-1.5 font-sans text-[9px] tracking-wide text-red-400/80">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          How Can We Help? <span className="text-bronze">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us a bit about your situation and what you're hoping to accomplish..."
          className={cn(
            inputClass,
            "resize-none",
            errors.message && "border-red-400/60"
          )}
        />
        {errors.message && (
          <p className="mt-1.5 font-sans text-[9px] tracking-wide text-red-400/80">
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg">
          Send Message
        </Button>
      </div>

      <p className="font-body text-stone-gray/40 text-xs leading-relaxed">
        By submitting this form you agree to be contacted by Veritas Capital
        Partners. Your information will not be shared with third parties.
      </p>
    </form>
  );
}
