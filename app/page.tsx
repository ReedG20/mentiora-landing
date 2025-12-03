"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { Slider } from "@/components/ui/slider";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import {
  BookOpen02Icon,
  Message01Icon,
  ChartUpIcon,
  ArrowUpRight01Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import Logo from "@/components/ui/logo";
import UnicornScene from "unicornstudio-react";

const subjects = [
  { name: "Biology" },
  { name: "Chemistry" },
  { name: "Physics" },
  { name: "Maths" },
  { name: "English Language" },
  { name: "English Literature" },
  { name: "Computer Science" },
  { name: "Geography" },
  { name: "History" },
  { name: "Psychology" },
  { name: "Business" },
  { name: "Religious Studies" },
  { name: "Combined Science" },
  { name: "Spanish" },
];

const examBoards = [
  { name: "AQA", level: "GCSE & A-Level" },
  { name: "Edexcel", level: "GCSE & IGCSE" },
  { name: "OCR", level: "GCSE" },
];

const PRIVATE_TUTORING_MONTHLY = 500;
const MENTIORA_MONTHLY = 9.99;

function SavingsCalculator() {
  const [months, setMonths] = useState(6);

  const privateTutoringCost = PRIVATE_TUTORING_MONTHLY * months;
  const mentioraCost = MENTIORA_MONTHLY * months;
  const savings = privateTutoringCost - mentioraCost;
  const savingsPercentage = Math.round((savings / privateTutoringCost) * 100);

  return (
    <Card className="overflow-hidden">
      <CardContent className="pt-10">
        {/* Total Savings Display */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">
            TOTAL SAVINGS
          </p>
          <motion.p
            key={savings}
            initial={{ scale: 0.95, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold text-primary"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            £{savings.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </motion.p>
          <p className="text-muted-foreground mt-2">
            over {months} month{months !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Slider Section */}
        <div className="max-w-lg mx-auto mb-10 px-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-medium">How many months will you study?</p>
            <motion.span
              key={months}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-xl font-bold text-primary"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              {months}
            </motion.span>
          </div>
          <Slider
            value={[months]}
            onValueChange={(value) => setMonths(value[0])}
            min={1}
            max={12}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>1 month</span>
            <span>12 months</span>
          </div>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Private Tutoring */}
          <div className="rounded-xl p-5 bg-red-50 border-2 border-red-100">
            <p className="text-sm font-semibold text-red-600 mb-2">Private Tutoring</p>
            <motion.p
              key={privateTutoringCost}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              £{privateTutoringCost.toLocaleString("en-GB")}
            </motion.p>
            <p className="text-sm text-muted-foreground mt-1">
              £{PRIVATE_TUTORING_MONTHLY}/month × {months}
            </p>
          </div>

          {/* Mentiora */}
          <div className="rounded-xl p-5 bg-blue-50 border-2 border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm font-semibold text-primary">Mentiora</p>
            </div>
            <motion.p
              key={mentioraCost}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              £{mentioraCost.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </motion.p>
            <p className="text-sm text-muted-foreground mt-1">
              £{MENTIORA_MONTHLY}/month × {months}
            </p>
          </div>

          {/* You Save */}
          <div className="rounded-xl p-5 bg-blue-50/50 border-2 border-blue-100/50">
            <p className="text-sm font-semibold text-primary mb-2">You Save</p>
            <motion.p
              key={savings}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              £{savings.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </motion.p>
            <p className="text-sm text-muted-foreground mt-1">
              {savingsPercentage}% cheaper
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const [showNavCTA, setShowNavCTA] = useState(false);
  const heroCtaRef = useRef<HTMLButtonElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const subjectsRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);

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

  // Remove Unicorn Studio watermark
  useEffect(() => {
    const removeWatermark = () => {
      const watermarks = document.querySelectorAll('a[href*="unicorn.studio"]');
      watermarks.forEach((el) => el.remove());
    };

    // Run immediately and observe for dynamically added elements
    removeWatermark();
    const observer = new MutationObserver(removeWatermark);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Bottom left decorative image */}
      <Image
        src="/student-glyph-dither.png"
        alt=""
        width={500}
        height={500}
        className="absolute bottom-0 -left-12 pointer-events-none mix-blend-multiply hidden lg:block"
        aria-hidden="true"
      />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Logo className="h-6" />
          </div>
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-2">
              <Button variant="ghost" className="hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5" onClick={() => featuresRef.current?.scrollIntoView({ behavior: "smooth" })}>Features</Button>
              <Button variant="ghost" className="hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5" onClick={() => subjectsRef.current?.scrollIntoView({ behavior: "smooth" })}>Subjects</Button>
              <Button variant="ghost" className="hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5" onClick={() => pricingRef.current?.scrollIntoView({ behavior: "smooth" })}>Pricing</Button>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5">Login</Button>
              <AnimatePresence>
                {showNavCTA && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <Button className="whitespace-nowrap">
                      Try Mentiora
                      <HugeiconsIcon icon={ArrowRight02Icon} className="size-4" strokeWidth={2} />
                    </Button>
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
          <div className="absolute inset-0 z-0 hidden lg:block">
            <UnicornScene
              projectId="3RcPyrOTK97Anc0TNg0i"
              width="100%"
              height="100%"
              scale={1}
              dpi={1.5}
              lazyLoad={true}
              altText="Mentiora hero background"
            />
            {/* Cover Unicorn Studio watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[80px] bg-white z-10" />
          </div>
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
            <Button ref={heroCtaRef} size="xl" className="px-6">
              Try now for free
              <motion.span
                animate={{
                  x: [0, 3, 0],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-6" strokeWidth={1.75} />
              </motion.span>
            </Button>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <p className="text-center text-muted-foreground mb-6">
              Trusted by 500+ students at Russell Group universities
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-background to-transparent pointer-events-none" />
              <Marquee pauseOnHover className="[--duration:30s] [--gap:4rem]">
                <Image
                  src="/russell-group-universities/bath-logo-CHVRJtA5.png"
                  alt="University of Bath"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/russell-group-universities/birmingham-logo-BymtUVAW.png"
                  alt="University of Birmingham"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/russell-group-universities/bristol-logo-tsb5ph-g.png"
                  alt="University of Bristol"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/russell-group-universities/newcastle-logo-8OvDUHEQ.svg"
                  alt="Newcastle University"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/russell-group-universities/oxford-logo-DDq1u4We.png"
                  alt="University of Oxford"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </Marquee>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section ref={featuresRef} className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">how mentiora works</h2>
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
                  <CardTitle>practice real exam questions</CardTitle>
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
                  <CardTitle>get unstuck, instantly</CardTitle>
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
                    <HugeiconsIcon icon={ChartUpIcon} className="size-8" />
                  </div>
                  <CardTitle>watch your grade improve</CardTitle>
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
        <section ref={subjectsRef} className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                study what{" "}
<Highlighter action="underline" color="#FF99D9" strokeWidth={2.5} isView>
                    actually gets marks.
                  </Highlighter>
              </h2>
              <p className="text-muted-foreground text-lg">
                Aligned to your exact exam board. No filler. No wasted time.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  exam boards we support
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
                  subjects available
                </h3>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <Badge key={subject.name} variant="secondary">
                      {subject.name}
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
                a learning system that{" "}
<Highlighter action="underline" color="#FF99D9" strokeWidth={2.5} isView>
                    never stops improving
                  </Highlighter>
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
                <h3 className="text-xl font-semibold mb-2">you study</h3>
                <p className="text-muted-foreground">
                  Answer questions and get instant feedback
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">mentiora analyzes</h3>
                <p className="text-muted-foreground">
                  We track 50+ data points from every answer
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  you get personalized results
                </h3>
                <p className="text-muted-foreground">
                  Three features that adapt to you in real-time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section ref={pricingRef} className="py-24 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">calculate your savings</h2>
              <p className="text-muted-foreground text-lg">
                See how much you&apos;ll save compared to private tutoring
              </p>
            </div>
            <SavingsCalculator />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">
              start your journey to better grades
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of students already improving with Mentiora
            </p>
            <Button size="xl" className="px-6">
              Try now for free
              <motion.span
                animate={{
                  x: [0, 3, 0],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-6" strokeWidth={1.75} />
              </motion.span>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mentiora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
