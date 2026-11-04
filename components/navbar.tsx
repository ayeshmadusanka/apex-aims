"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Programs",
    href: "#",
    children: [
      { name: "Academic Pillar", href: "/academic-pillar" },
      { name: "University Pillar", href: "/university-pillar" },
      { name: "Project Pillar", href: "/project-pillar" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const externalLinks = [
  {
    name: "Online Payment",
    href: "https://payment.apexinstituteedu.com",
    style: "payment",
  },
  {
    name: "Certificate Validation",
    href: "https://validator.apexinstituteedu.com/",
    style: "validation",
  },
  {
    name: "LMS",
    href: "https://lms.apexinstituteedu.com/",
    style: "lms",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logo = (size: "mobile" | "desktop") => (
    <img
      src="/images/about/aims-logo.webp"
      alt="Apex Institute of Management Services"
      width={270}
      height={97}
      className={size === "desktop" ? "block h-14 w-auto" : "block h-10 w-auto"}
    />
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between gap-4 xl:h-20">
          <a href="/" className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b] focus-visible:ring-offset-2 focus-visible:ring-offset-white">
            <span className="xl:hidden">{logo("mobile")}</span>
            <span className="hidden xl:inline-flex">{logo("desktop")}</span>
          </a>

          <div className="hidden flex-1 items-center justify-end gap-7 xl:flex">
            <div className="flex items-center gap-6">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={dropdownOpen}
                      onClick={() => setDropdownOpen((open) => !open)}
                      className="inline-flex items-center gap-1 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#263f6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b]"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 min-w-52 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-950/15">
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#263f6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b]"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="py-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#263f6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b]"
                  >
                    {item.name}
                  </a>
                ),
              )}
            </div>

            <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
              {externalLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-9 items-center rounded-lg px-3 text-xs font-semibold text-white shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263f6b] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    item.style === "payment"
                      ? "bg-emerald-600 hover:bg-emerald-500"
                      : item.style === "validation"
                        ? "bg-blue-600 hover:bg-blue-500"
                        : "bg-rose-700 hover:bg-rose-600"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="xl:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="h-11 w-11 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#263f6b]"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(88vw,400px)] border-slate-200 bg-white p-6 text-slate-900"
              >
                <div className="mb-8 border-b border-slate-200 pb-6">
                  <SheetTitle className="mb-4 text-left text-slate-900">Explore AIMS</SheetTitle>
                  <a href="/" onClick={() => setIsOpen(false)}>
                    {logo("mobile")}
                  </a>
                </div>

                <div className="flex flex-col gap-1">
                  {navigation.map((item, index) =>
                    item.children ? (
                      <div key={item.name}>
                        <button
                          type="button"
                          aria-expanded={expanded === index}
                          onClick={() =>
                            setExpanded(expanded === index ? null : index)
                          }
                          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#263f6b]"
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              expanded === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {expanded === index && (
                          <div className="mb-2 ml-3 border-l border-slate-200 pl-3">
                            {item.children.map((child) => (
                              <a
                                key={child.name}
                                href={child.href}
                                className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#263f6b]"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="rounded-lg px-3 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#263f6b]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ),
                  )}
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Student Services
                  </p>
                  <div className="flex flex-col gap-2">
                    {externalLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex h-11 items-center justify-center rounded-lg px-4 text-sm font-semibold text-white transition-colors ${
                          item.style === "payment"
                            ? "bg-emerald-600 hover:bg-emerald-500"
                            : item.style === "validation"
                              ? "bg-blue-600 hover:bg-blue-500"
                              : "bg-rose-700 hover:bg-rose-600"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
