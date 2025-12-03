"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  BookOpen02Icon,
  Login01Icon,
  Message01Icon,
  ChartHistogramIcon,
  GraduationScrollIcon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { Highlighter } from "@/components/ui/highlighter";

const subjects = [
  { emoji: "🧬", name: "Biology" },
  { emoji: "🧪", name: "Chemistry" },
  { emoji: "🧲", name: "Physics" },
  { emoji: "📐", name: "Maths" },
  { emoji: "✍️", name: "English Language" },
  { emoji: "📖", name: "English Literature" },
  { emoji: "💻", name: "Computer Science" },
  { emoji: "🌍", name: "Geography" },
  { emoji: "⏳", name: "History" },
  { emoji: "🧠", name: "Psychology" },
  { emoji: "💼", name: "Business" },
  { emoji: "⛪", name: "Religious Studies" },
  { emoji: "🔬", name: "Combined Science" },
  { emoji: "🇪🇸", name: "Spanish" },
];

const examBoards = [
  { name: "AQA", level: "GCSE & A-Level" },
  { name: "Edexcel", level: "GCSE & IGCSE" },
  { name: "OCR", level: "GCSE" },
];

export default function Home() {
  const [showNavCTA, setShowNavCTA] = useState(false);
  const heroCtaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show nav CTA when hero CTA is NOT visible
        setShowNavCTA(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    const currentRef = heroCtaRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <HugeiconsIcon icon={GraduationScrollIcon} className="size-6" />
            <span className="text-lg font-semibold">Mentiora</span>
          </div>
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-2">
              <Button variant="ghost">About Us</Button>
              <Button variant="ghost">Subjects</Button>
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost">
                Login
                <HugeiconsIcon icon={Login01Icon} className="size-4" strokeWidth={2} />
              </Button>
              <AnimatePresence>
                {showNavCTA && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <Button className="whitespace-nowrap">Try Mentiora</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-40 px-4 overflow-hidden">
          <InteractiveGridPattern
            width={50}
            height={50}
            squares={[50, 15]}
            className="opacity-50 mask-[radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
            squaresClassName="stroke-muted-foreground/20 hover:fill-muted-foreground/10"
          />
          <div className="container relative z-10 mx-auto text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              your revision,<br />
              finally made{" "}
              <Highlighter action="highlight" color="#FF99D9" isView>
                <em>personal</em>
              </Highlighter>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Personalised GCSE & A-Level revision<br />
              built to help you reach your best results.
            </p>
            <Button ref={heroCtaRef} size="lg">
              Try now for free
              <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-5" />
            </Button>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 px-4 border-y bg-muted/50">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground">
              Trusted by 500+ students at Russell Group universities
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How Mentiora Works</h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to revise smarter, not harder.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <HugeiconsIcon icon={BookOpen02Icon} className="size-8" />
                  </div>
                  <CardTitle>Practice Real Exam Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work through realistic, exam-style questions written to
                    match your exact specification. Each one is built to reflect
                    the style, difficulty, and wording of upcoming exams.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <HugeiconsIcon icon={Message01Icon} className="size-8" />
                  </div>
                  <CardTitle>Get Unstuck, Instantly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stuck on a concept? Ask your tutor anything. It won&apos;t give
                    away answers—it guides you with hints and questions until
                    you understand it yourself.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2">
                    <HugeiconsIcon icon={ChartHistogramIcon} className="size-8" />
                  </div>
                  <CardTitle>Watch Your Grade Improve</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    See your predicted grade update in real-time as you
                    practice. Track which topics you&apos;ve mastered and which need
                    work, all calculated automatically.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-24 px-4 bg-muted/50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Study what actually gets marks.
              </h2>
              <p className="text-muted-foreground text-lg">
                Aligned to your exact exam board. No filler. No wasted time.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Exam Boards We Support
                </h3>
                <div className="flex flex-wrap gap-3">
                  {examBoards.map((board) => (
                    <Card key={board.name} className="px-4 py-3">
                      <div className="font-semibold">{board.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {board.level}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Subjects Available
                </h3>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <Badge key={subject.name} variant="secondary">
                      {subject.emoji} {subject.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning System Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                A learning system that never stops improving
              </h2>
              <p className="text-muted-foreground text-lg">
                Every question you answer makes Mentiora smarter about how you
                learn.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">You Study</h3>
                <p className="text-muted-foreground">
                  Answer questions and get instant feedback
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Mentiora Analyzes</h3>
                <p className="text-muted-foreground">
                  We track 50+ data points from every answer
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  You Get Personalized Results
                </h3>
                <p className="text-muted-foreground">
                  Three features that adapt to you in real-time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4 bg-muted/50">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Calculate your savings</h2>
              <p className="text-muted-foreground text-lg">
                See how much you&apos;ll save compared to private tutoring
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Private Tutoring
                    </p>
                    <p className="text-2xl font-bold">£500/month</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Mentiora
                    </p>
                    <p className="text-2xl font-bold">£9.99/month</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      You Save
                    </p>
                    <p className="text-2xl font-bold text-green-600">
                      98% cheaper
                    </p>
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="text-center">
                  <Button size="lg">Start saving today</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">
              Start your journey to better grades
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of students already improving with Mentiora
            </p>
            <Button size="lg">
              Try now for free
              <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HugeiconsIcon icon={GraduationScrollIcon} className="size-6" />
                <span className="text-lg font-semibold">Mentiora</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Personalised learning for GCSE & A-Levels
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Pricing</li>
                <li>Features</li>
                <li>Subjects</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About us</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
