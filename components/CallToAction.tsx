"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CallToActionProps {
  title: string
  description: string
  gradientBg?: string // tailwind bg gradient class
  primaryButton?: {
    label: string
    href: string
    variant?: "default" | "outline"
  }
  secondaryButton?: {
    label: string
    href: string
    variant?: "default" | "outline"
  }
}

export default function CallToAction({
  title,
  description,
  gradientBg = "bg-gradient-to-br from-purple-50 to-pink-50",
  primaryButton,
  secondaryButton,
}: CallToActionProps) {
  return (
    <section className={`py-16 px-6 ${gradientBg}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButton && (
            <Link href={primaryButton.href}>
              <Button
                size="lg"
                variant={primaryButton.variant || "default"}
                className={
                  primaryButton.variant === "outline"
                    ? "border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
                }
              >
                {primaryButton.label}
              </Button>
            </Link>
          )}

          {secondaryButton && (
            <Link href={secondaryButton.href}>
              <Button
                size="lg"
                variant={secondaryButton.variant || "outline"}
                className={
                  secondaryButton.variant === "outline"
                    ? "border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
                }
              >
                {secondaryButton.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
