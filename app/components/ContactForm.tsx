"use client";

import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form className="cp-form" onSubmit={submit}>
      {sent ? (
        <div className="cp-form-sent">
          <Send size={22} strokeWidth={1.6} />
          <h3>Message noted</h3>
          <p>Thank you — someone from our office will write back shortly.</p>
          <button
            type="button"
            className="cp-btn cp-btn-ghost"
            onClick={() => {
              setSent(false);
              setForm({ name: "", email: "", message: "" });
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <label className="cp-field">
            <span>Name</span>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
            />
          </label>
          <label className="cp-field">
            <span>Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </label>
          <label className="cp-field">
            <span>Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Flex printing orders, government work orders, book queries…"
            />
          </label>
          <button type="submit" className="cp-btn cp-btn-primary">
            Send message <ArrowRight size={15} strokeWidth={2} />
          </button>
        </>
      )}
    </form>
  );
}
