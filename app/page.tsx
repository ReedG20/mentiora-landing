"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { Separator } from "@/components/ui/separator";
// import { Slider } from "@/components/ui/slider";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import {
  BookOpen02Icon,
  Message01Icon,
  ChartUpIcon,
  ArrowUpRight01Icon,
  ArrowRight02Icon,
  Dna01Icon,
  Chemistry01Icon,
  GravityIcon,
  CalculatorIcon,
  TextIcon,
  BinaryCodeIcon,
  GlobeIcon,
  ClockIcon,
  Brain02Icon,
  BriefcaseIcon,
  BookIcon,
  Atom02Icon,
  Quran01Icon
} from "@hugeicons/core-free-icons";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import Logo from "@/components/ui/logo";
import { TypingAnimation } from "@/components/ui/typing-animation";
// import UnicornScene from "unicornstudio-react";

// Animation variants
const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const wordAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const cardAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    y: 32,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const subjects = [
  { name: "Biology", icon: Dna01Icon },
  { name: "Chemistry", icon: Chemistry01Icon },
  { name: "Physics", icon: GravityIcon },
  { name: "Maths", icon: CalculatorIcon },
  { name: "English Language", icon: TextIcon },
  { name: "English Literature", icon: BookIcon },
  { name: "Computer Science", icon: BinaryCodeIcon },
  { name: "Geography", icon: GlobeIcon },
  { name: "History", icon: ClockIcon },
  { name: "Psychology", icon: Brain02Icon },
  { name: "Business", icon: BriefcaseIcon },
  { name: "Religious Studies", icon: Quran01Icon },
  { name: "Combined Science", icon: Atom02Icon },
  { name: "Spanish", icon: TextIcon },
];

const examBoards = [
  { name: "AQA", level: "GCSE & A-Level", logo: "/exams/aqa-logo.svg" },
  { name: "Edexcel", level: "GCSE & IGCSE", logo: "/exams/edexcel-logo.svg" },
  { name: "OCR", level: "GCSE", logo: "/exams/ocr-logo.webp" },
];

// const PRIVATE_TUTORING_MONTHLY = 500;
// const MENTIORA_MONTHLY = 9.99;

// function SavingsCalculator() {
//   const [months, setMonths] = useState(6);

//   const privateTutoringCost = PRIVATE_TUTORING_MONTHLY * months;
//   const mentioraCost = MENTIORA_MONTHLY * months;
//   const savings = privateTutoringCost - mentioraCost;
//   const savingsPercentage = Math.round((savings / privateTutoringCost) * 100);

//   return (
//     <Card className="overflow-hidden">
//       <CardContent className="pt-10">
//         {/* Total Savings Display */}
//         <div className="text-center mb-10">
//           <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-2">
//             TOTAL SAVINGS
//           </p>
//           <motion.p
//             key={savings}
//             initial={{ scale: 0.95, opacity: 0.5 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="text-5xl md:text-6xl font-bold text-primary"
//             style={{ fontFamily: "var(--font-geist-sans)" }}
//           >
//             £{savings.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//           </motion.p>
//           <p className="text-muted-foreground mt-2">
//             over {months} month{months !== 1 ? "s" : ""}
//           </p>
//         </div>

//         {/* Slider Section */}
//         <div className="max-w-lg mx-auto mb-10 px-4">
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-sm font-medium">How many months will you study?</p>
//             <motion.span
//               key={months}
//               initial={{ scale: 1.2 }}
//               animate={{ scale: 1 }}
//               className="text-xl font-bold text-primary"
//               style={{ fontFamily: "var(--font-geist-sans)" }}
//             >
//               {months}
//             </motion.span>
//           </div>
//           <Slider
//             value={[months]}
//             onValueChange={(value) => setMonths(value[0])}
//             min={1}
//             max={12}
//             step={1}
//             className="w-full"
//           />
//           <div className="flex justify-between mt-2 text-xs text-muted-foreground">
//             <span>1 month</span>
//             <span>12 months</span>
//           </div>
//         </div>

//         {/* Cost Comparison Cards */}
//         <div className="grid md:grid-cols-3 gap-4">
//           {/* Private Tutoring */}
//           <div className="rounded-xl p-5 bg-red-50 border-2 border-red-100">
//             <p className="text-sm font-semibold text-red-600 mb-2">Private Tutoring</p>
//             <motion.p
//               key={privateTutoringCost}
//               initial={{ opacity: 0.5 }}
//               animate={{ opacity: 1 }}
//               className="text-3xl font-bold text-foreground"
//               style={{ fontFamily: "var(--font-geist-sans)" }}
//             >
//               £{privateTutoringCost.toLocaleString("en-GB")}
//             </motion.p>
//             <p className="text-sm text-muted-foreground mt-1">
//               £{PRIVATE_TUTORING_MONTHLY}/month × {months}
//             </p>
//           </div>

//           {/* Mentiora */}
//           <div className="rounded-xl p-5 bg-blue-50 border-2 border-blue-100">
//             <div className="flex items-center gap-2 mb-2">
//               <p className="text-sm font-semibold text-primary">Mentiora</p>
//             </div>
//             <motion.p
//               key={mentioraCost}
//               initial={{ opacity: 0.5 }}
//               animate={{ opacity: 1 }}
//               className="text-3xl font-bold text-foreground"
//               style={{ fontFamily: "var(--font-geist-sans)" }}
//             >
//               £{mentioraCost.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//             </motion.p>
//             <p className="text-sm text-muted-foreground mt-1">
//               £{MENTIORA_MONTHLY}/month × {months}
//             </p>
//           </div>

//           {/* You Save */}
//           <div className="rounded-xl p-5 bg-blue-50/50 border-2 border-blue-100/50">
//             <p className="text-sm font-semibold text-primary mb-2">You Save</p>
//             <motion.p
//               key={savings}
//               initial={{ opacity: 0.5 }}
//               animate={{ opacity: 1 }}
//               className="text-3xl font-bold text-foreground"
//               style={{ fontFamily: "var(--font-geist-sans)" }}
//             >
//               £{savings.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//             </motion.p>
//             <p className="text-sm text-muted-foreground mt-1">
//               {savingsPercentage}% cheaper
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

export default function Home() {
  const [showNavCTA, setShowNavCTA] = useState(false);
  const heroCtaRef = useRef<HTMLAnchorElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const subjectsRef = useRef<HTMLElement>(null);
  // const pricingRef = useRef<HTMLElement>(null);

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
  // useEffect(() => {
  //   const removeWatermark = () => {
  //     const watermarks = document.querySelectorAll('a[href*="unicorn.studio"]');
  //     watermarks.forEach((el) => el.remove());
  //   };

  //   // Run immediately and observe for dynamically added elements
  //   removeWatermark();
  //   const observer = new MutationObserver(removeWatermark);
  //   observer.observe(document.body, { childList: true, subtree: true });

  //   return () => observer.disconnect();
  // }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Bottom left decorative image */}
      {/* <Image
        src="/student-glyph-dither.png"
        alt=""
        width={500}
        height={500}
        className="absolute bottom-0 -left-12 pointer-events-none mix-blend-multiply hidden lg:block"
        aria-hidden="true"
      /> */}
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
              {/* <Button variant="ghost" className="hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5" onClick={() => pricingRef.current?.scrollIntoView({ behavior: "smooth" })}>Pricing</Button> */}
            </nav>
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" className="hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5">
                <a href="https://www.mentiora.com/login">Login</a>
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
                    <Button asChild className="whitespace-nowrap">
                      <a href="https://www.mentiora.com/register">
                        Try Mentiora
                        <HugeiconsIcon icon={ArrowRight02Icon} className="size-4" strokeWidth={2} />
                      </a>
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
          {/* <div className="absolute inset-0 z-0 hidden lg:block">
            <UnicornScene
              projectId="3RcPyrOTK97Anc0TNg0i"
              width="100%"
              height="100%"
              scale={1}
              dpi={1.5}
              lazyLoad={true}
              altText="Mentiora hero background"
            />
            Cover Unicorn Studio watermark
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[80px] bg-white z-10" />
          </div> */}
          {/* Interactive Grid Pattern overlay with radial fade */}
          <div className="absolute inset-0 z-1 flex items-center justify-center overflow-hidden mask-[radial-gradient(ellipse_at_center,white,transparent_70%)]">
            <InteractiveGridPattern
              width={50}
              height={50}
              squares={[60, 30]}
              className="opacity-60"
              squaresClassName="stroke-gray-400/30 hover:fill-primary/10"
            />
          </div>
          <div className="container relative z-10 mx-auto text-center max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {["your ", "revision,"].map((word, i) => (
                <motion.span key={i} variants={wordAnimation} className="inline-block whitespace-pre">
                  {word}
                </motion.span>
              ))}
              <br />
              {["finally ", "made "].map((word, i) => (
                <motion.span key={i + 2} variants={wordAnimation} className="inline-block whitespace-pre">
                  {word}
                </motion.span>
              ))}
              <motion.span variants={wordAnimation} className="inline-block">
                <Highlighter action="highlight" color="#FF99D9" isView delay={900}>
                  <em>personal</em>
                </Highlighter>
              </motion.span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.55 }}
              className="mb-8"
            >
              <p className="text-xl text-muted-foreground leading-normal">
                <TypingAnimation
                  className="leading-normal"
                  typeSpeed={35}
                  delay={600}
                  loop={false}
                  startOnView={true}
                  showCursor={false}
                >
                  Personalised GCSE & A-Level revision
                </TypingAnimation>
                <br />
                <TypingAnimation
                  className="leading-normal"
                  typeSpeed={35}
                  delay={1900}
                  loop={false}
                  startOnView={true}
                  showCursor={false}
                >
                  built to help you reach your best results.
                </TypingAnimation>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.8 }}
            >
              <Button asChild size="xl" className="px-6">
                <a href="https://www.mentiora.com/register" ref={heroCtaRef}>
                  Try now for free
                  <motion.span
                    animate={{
                      x: [0, 3, 0],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-6" strokeWidth={1.75} />
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <motion.section 
          className="py-12 px-4"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 1.05 }}
        >
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
        </motion.section>

        {/* How It Works */}
        <section ref={featuresRef} className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl font-bold mb-4"
                variants={staggerContainer}
              >
                {["how ", "mentiora ", "works"].map((word, i) => (
                  <motion.span key={i} variants={wordAnimation} className="inline-block whitespace-pre">
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p className="text-muted-foreground text-lg" variants={fadeInUp}>
                Everything you need to revise smarter, not harder.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={cardAnimation}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2">
                      <HugeiconsIcon icon={BookOpen02Icon} className="size-8" />
                    </div>
                    <CardTitle>Practice real exam questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Work through realistic, exam-style questions written to
                      match your exact specification. Each one is built to reflect
                      the style, difficulty, and wording of upcoming exams.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardAnimation}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2">
                      <HugeiconsIcon icon={Message01Icon} className="size-8" />
                    </div>
                    <CardTitle>Get unstuck, instantly</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Stuck on a concept? Ask your tutor anything. It won&apos;t give
                      away answers—it guides you with hints and questions until
                      you understand it yourself.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={cardAnimation}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2">
                      <HugeiconsIcon icon={ChartUpIcon} className="size-8" />
                    </div>
                    <CardTitle>Watch your grade improve</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      See your predicted grade update in real-time as you
                      practice. Track which topics you&apos;ve mastered and which need
                      work, all calculated automatically.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Subjects Section */}
        <section ref={subjectsRef} className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl font-bold mb-4"
                variants={staggerContainer}
              >
                {["study ", "what "].map((word, i) => (
                  <motion.span key={i} variants={wordAnimation} className="inline-block whitespace-pre">
                    {word}
                  </motion.span>
                ))}
                <motion.span variants={wordAnimation} className="inline-block">
                  <Highlighter action="underline" color="#FF99D9" strokeWidth={2.5} isView delay={500}>
                    actually gets marks.
                  </Highlighter>
                </motion.span>
              </motion.h2>
              <motion.p className="text-muted-foreground text-lg" variants={fadeInUp}>
                Aligned to your exact exam board. No filler. No wasted time.
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex flex-col gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold mb-6">
                  Exam boards we support
                </h3>
                <motion.div 
                  className="flex flex-wrap gap-3"
                  variants={staggerContainer}
                >
                  {examBoards.map((board) => (
                    <motion.div key={board.name} variants={cardAnimation}>
                      <Card className="p-4">
                        <div className="flex flex-col items-start gap-2">
                          <Image
                            src={board.logo}
                            alt={`${board.name} logo`}
                            width={60}
                            height={60}
                            className="h-16 w-auto object-contain"
                          />
                          <Separator className="w-full mt-2" />
                          <div className="text-sm text-muted-foreground text-left">
                            {board.level}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold mb-6">
                  Subjects available
                </h3>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={staggerContainer}
                >
                  {subjects.map((subject, index) => (
                    <motion.div 
                      key={subject.name} 
                      variants={cardAnimation}
                      custom={index}
                    >
                      <Card className="px-6 py-4 min-w-[140px]">
                        <div className="flex flex-col items-start gap-3">
                          <HugeiconsIcon icon={subject.icon} className="size-6" />
                          <div className="font-semibold text-base text-left">
                            {subject.name}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Learning System Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl font-bold mb-4"
                variants={staggerContainer}
              >
                {["a ", "learning ", "system ", "that "].map((word, i) => (
                  <motion.span key={i} variants={wordAnimation} className="inline-block whitespace-pre">
                    {word}
                  </motion.span>
                ))}
                <motion.span variants={wordAnimation} className="inline-block">
                  <Highlighter action="underline" color="#FF99D9" strokeWidth={2.5} isView delay={700}>
                    never stops improving
                  </Highlighter>
                </motion.span>
              </motion.h2>
              <motion.p className="text-muted-foreground text-lg" variants={fadeInUp}>
                Every question you answer makes Mentiora smarter about how you
                learn.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="text-center" variants={cardAnimation}>
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">You study</h3>
                <p className="text-muted-foreground">
                  Answer questions and get instant feedback
                </p>
              </motion.div>
              <motion.div className="text-center" variants={cardAnimation}>
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Mentiora analyzes</h3>
                <p className="text-muted-foreground">
                  We track 50+ data points from every answer
                </p>
              </motion.div>
              <motion.div className="text-center" variants={cardAnimation}>
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  You get personalized results
                </h3>
                <p className="text-muted-foreground">
                  Three features that adapt to you in real-time
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section ref={pricingRef} className="py-24 px-4">
          <div className="container mx-auto max-w-3xl">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl font-bold mb-4"
                variants={staggerContainer}
              >
                {["calculate ", "your ", "savings"].map((word, i) => (
                  <motion.span key={i} variants={wordAnimation} className="inline-block whitespace-pre">
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p className="text-muted-foreground text-lg" variants={fadeInUp}>
                See how much you&apos;ll save compared to private tutoring
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardAnimation}
            >
              <SavingsCalculator />
            </motion.div>
          </div>
        </section> */}

        {/* Final CTA */}
        <motion.section 
          className="py-24 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="container mx-auto text-center max-w-3xl">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              variants={staggerContainer}
            >
              {["start ", "your ", "journey ", "to ", "better ", "grades"].map((word, i) => (
                <motion.span key={i} variants={wordAnimation} className="inline-block whitespace-pre">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p className="text-muted-foreground text-lg mb-8" variants={fadeInUp}>
              Join thousands of students already improving with Mentiora
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button asChild size="xl" className="px-6">
                <a href="https://www.mentiora.com/register">
                  Try now for free
                  <motion.span
                    animate={{
                      x: [0, 3, 0],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-6" strokeWidth={1.75} />
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>
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
