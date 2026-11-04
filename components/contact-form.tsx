"use client"

import { useRef, useState, type FormEvent } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT_EMAIL } from "@/lib/site-contact"

export default function ContactForm() {
  const [emailLink, setEmailLink] = useState("")
  const [submitNotice, setSubmitNotice] = useState("")
  const formOpenedAt = useRef(Date.now())

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    if (String(formData.get("website") ?? "").trim()) return

    if (Date.now() - formOpenedAt.current < 1200) {
      setSubmitNotice("Please take a moment to review your message before continuing.")
      return
    }

    const firstName = String(formData.get("firstName") ?? "").trim()
    const lastName = String(formData.get("lastName") ?? "").trim()
    const fullName = [firstName, lastName].filter(Boolean).join(" ")
    const email = String(formData.get("email") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()
    const subject = `Website inquiry from ${fullName}`
    const body = [`Name: ${fullName}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`, "", message].join("\n")
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSubmitNotice("")
    setEmailLink(mailto)
    window.location.href = mailto
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
        <h2 className="flex items-center text-xl font-semibold text-slate-900 sm:text-2xl">
          <MessageCircle className="mr-3 h-5 w-5 text-[#263f6b]" aria-hidden="true" />
          Send a message
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
          Fill out the form and your email app will open with the message ready to send.
        </p>
      </div>

      <form className="space-y-5 p-5 sm:p-8" onSubmit={handleSubmit}>
        <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
          <Label htmlFor="website">Leave this field empty</Label>
          <Input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name <span aria-hidden="true">*</span></Label>
            <Input id="firstName" name="firstName" autoComplete="given-name" placeholder="Enter your first name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name <span aria-hidden="true">*</span></Label>
            <Input id="lastName" name="lastName" autoComplete="family-name" placeholder="Enter your last name" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address <span aria-hidden="true">*</span></Label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="your@email.com" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message <span aria-hidden="true">*</span></Label>
          <Textarea id="message" name="message" placeholder="Tell us about your requirements or questions..." rows={6} required />
        </div>

        <Button
          type="submit"
          className="min-h-12 w-full rounded-lg bg-[#263f6b] font-semibold text-white hover:bg-[#1e3356]"
        >
          Send message <ArrowRight aria-hidden="true" />
        </Button>

        {submitNotice && (
          <p aria-live="polite" className="text-sm leading-6 text-slate-600">{submitNotice}</p>
        )}

        {emailLink && (
          <p aria-live="polite" className="text-sm leading-6 text-slate-600">
            If your email app did not open, <a href={emailLink} className="font-semibold text-[#263f6b] underline underline-offset-4">open the prepared email here</a>.
          </p>
        )}
      </form>
    </div>
  )
}
