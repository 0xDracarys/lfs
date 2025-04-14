import Link from "next/link"
import { CheckCircle2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/40 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-2">
          <div className="relative size-8 overflow-hidden rounded-md bg-primary">
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary-foreground">
              LFS
            </div>
          </div>
          <div className="font-bold tracking-tight text-foreground">LFS Builder</div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight neon-text">
              <span className="text-primary">LFS</span> Builder Subscription
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Choose the plan that works for your Linux From Scratch journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {/* Weekly Plan */}
            <Card className="flex flex-col border-2 border-border hover:border-primary/70 hover:neon-border transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Weekly Explorer</CardTitle>
                <CardDescription>Perfect for quick projects</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4 mt-2 flex items-baseline">
                  <span className="text-4xl font-extrabold">€3.99</span>
                  <span className="ml-2 text-muted-foreground">/week</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Full access to all LFS templates",
                    "Build and customize LFS systems",
                    "Standard tutorial access",
                    "Standard Docker integration",
                    "7-day access (non-recurring)",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full neon-button" asChild>
                  <Link href="/login?plan=weekly">
                    Start 7-Day Access
                    <Zap className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Monthly Plan */}
            <Card className="flex flex-col border-2 border-primary neon-border">
              <div className="absolute right-4 top-0 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                RECOMMENDED
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Monthly Pro</CardTitle>
                <CardDescription>For the dedicated LFS enthusiast</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4 mt-2 flex items-baseline">
                  <span className="text-4xl font-extrabold">€9.99</span>
                  <span className="ml-2 text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Full access to all LFS templates",
                    "Build and customize LFS systems",
                    "Premium tutorial access",
                    "Advanced Docker integration",
                    "Access to new features first",
                    "Priority support",
                    "Unlimited saved builds",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full neon-pulse" asChild>
                  <Link href="/login?plan=monthly">
                    Start Monthly Pro
                    <Zap className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left max-w-6xl mx-auto">
              {[
                {
                  question: "Can I cancel my subscription anytime?",
                  answer: "Yes, you can cancel your subscription at any time from your account settings.",
                },
                {
                  question: "What happens when my subscription ends?",
                  answer: "Your builds will be saved but you'll need an active subscription to make new builds.",
                },
                {
                  question: "Can I switch between plans?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
                },
                {
                  question: "Do you offer academic discounts?",
                  answer:
                    "Yes, we offer discounts for students and educational institutions. Please contact our support.",
                },
                {
                  question: "Is there a free trial?",
                  answer:
                    "We don't currently offer a free trial, but our Weekly Explorer plan is designed for short-term usage.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and cryptocurrency.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-lg border p-4">
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
