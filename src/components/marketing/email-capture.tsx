"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

type EmailCaptureProps = {
  source: string;
  compact?: boolean;
};

export function EmailCapture({ source, compact = false }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    setStatus("sent");
  }

  return (
    <form className={compact ? "email-form email-form--compact" : "email-form"} onSubmit={handleSubmit}>
      <input type="hidden" name="source" value={source} />
      <label htmlFor={`email-${source}`}>Email address</label>
      <div className="email-form__row">
        <input
          id={`email-${source}`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button type="submit">
          {compact ? "Notify me" : "Join drop list"} <ArrowRight aria-hidden size={17} />
        </button>
      </div>
      <p role="status">
        {status === "sent"
          ? "You are on the preview list. This local demo does not send data yet."
          : "No spam. Just launch notes, product previews, and early access."}
      </p>
    </form>
  );
}
