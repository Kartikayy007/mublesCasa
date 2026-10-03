"use client";

import { FormEvent } from "react";

const EMAIL = "info@furnituremind.in";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const details = String(data.get("details") ?? "");
    const body = [`Name: ${name}`, `Company: ${company}`, `Email: ${email}`, "", details].join("\n");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent("Project brief")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name<input name="name" placeholder="Your name" required /></label>
      <label>Company / hotel<input name="company" placeholder="Company or property name" /></label>
      <label>Email<input name="email" type="email" placeholder="Email address" required /></label>
      <label>Project details<textarea name="details" placeholder="Property type, quantities, timing and anything else we should know" /></label>
      <button className="button button-dark" type="submit">Send project brief <span>↗</span></button>
    </form>
  );
}
