"use client";

import { useState, useRef } from "react";
import { Send } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/data/contact";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formRef.current) return newErrors;

    const formData = new FormData(formRef.current);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name) {
      newErrors.name = "Name is required.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        id="contact-heading"
        title={contact.heading}
        subtitle={contact.description}
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              autoComplete="name"
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p id="name-error" role="alert" className="text-sm text-destructive">
                {errors.name}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              autoComplete="email"
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Your message..."
              rows={5}
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p id="message-error" role="alert" className="text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          {/* Success state — announced to screen readers */}
          {submitted && (
            <div
              role="status"
              aria-live="polite"
              className="rounded-lg border border-accent-emerald bg-accent-emerald-muted p-4 text-sm text-accent-emerald"
            >
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>

        {/* Contact Links */}
        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground">
            Prefer reaching out directly? Here are my other channels:
          </p>
          <div className="flex flex-col gap-4">
            {contact.links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{link.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
