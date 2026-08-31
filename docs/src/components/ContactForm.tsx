"use client";

import { MISSION } from "@/lib/constants";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Stony Brook student");
  const [note, setNote] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[${MISSION.codename}] Collaboration inquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nAffiliation: ${role}\n\n${note}\n\n— Sent from the ${MISSION.codename} project website`,
    );
    window.location.href = `mailto:${MISSION.contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-white p-5 md:p-6">
      <p className="mb-4 text-sm text-muted">
        Messages are sent to{" "}
        <a href={`mailto:${MISSION.contactEmail}`}>{MISSION.contactEmail}</a>.
        Submitting opens your email app with a pre-filled draft addressed to that inbox.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">Full name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-accent"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-accent"
            placeholder="you@institution.edu"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-ink">Affiliation</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1.5 w-full border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-accent"
          >
            <option value="Stony Brook student">Stony Brook student</option>
            <option value="Amateur radio partner">Amateur radio partner</option>
            <option value="Faculty or mentor">Faculty or mentor</option>
            <option value="External collaborator">External collaborator</option>
          </select>
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-ink">Message</span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={5}
            className="mt-1.5 w-full resize-y border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-accent"
            placeholder="Describe your interest, experience, or ground station capability."
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 border border-header bg-header px-5 py-2.5 text-sm font-medium text-white hover:bg-ink"
      >
        {sent ? "Email draft opened" : "Submit inquiry"}
      </button>
      {sent && (
        <p className="mt-3 text-sm text-muted">
          Your email app should open a message to {MISSION.contactEmail}. Review
          the draft and press Send — it will arrive in that inbox.
        </p>
      )}
    </form>
  );
}
