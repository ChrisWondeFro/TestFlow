"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Beaker,
  Brain,
  Zap,
  Target,
  Users,
  BarChart3,
  Code,
  CheckCircle,
  Star,
  Play,
  Coffee,
  Heart,
  TrendingUp,
  Shield,
  Sparkles,
} from "lucide-react"

import { ProcessDemo } from "@/components/process-demo"
import { UseCaseTabs } from "@/components/use-case-tabs"
//import { TechArchitecture } from "@/components/tech-architecture"
import { TestBuilderDemo } from "@/components/test-builder-demo"

export default function TestFlowLanding() {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const demoQuestions = [
    "Does coffee improve my focus?",
    "Which email subject line gets more opens?",
    "Do standing desks increase productivity?",
    "Does meditation reduce stress levels?",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoQuestions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const useCases = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Track supplement effects, workout routines, sleep patterns",
      color: "bg-red-500",
    },
    {
      icon: Coffee,
      title: "Productivity",
      description: "Test work environments, tools, and habits",
      color: "bg-amber-500",
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      description: "A/B test campaigns, messaging, and user experience",
      color: "bg-green-500",
    },
    {
      icon: Users,
      title: "Team Dynamics",
      description: "Optimize meetings, communication, and collaboration",
      color: "bg-blue-500",
    },
  ]

  const features = [
    {
      icon: Brain,
      title: "Natural Language Interface",
      description: "Just describe what you want to test - our AI handles the rest",
    },
    {
      icon: Zap,
      title: "Instant Protocol Generation",
      description: "Get scientifically valid test designs in seconds",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Watch your data come alive with interactive visualizations",
    },
    {
      icon: Target,
      title: "Statistical Significance",
      description: "Know when your results are meaningful with built-in statistics",
    },
    {
      icon: Code,
      title: "API-First Design",
      description: "Integrate with any tool or platform you already use",
    },
    {
      icon: Shield,
      title: "Privacy by Design",
      description: "Your data stays yours - we never share or sell it",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      quote: "TestFlow helped us increase conversion rates by 34% in just two weeks.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Research Scientist",
      company: "BioLab",
      quote: "Finally, a tool that makes experimental design accessible to everyone.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emma Thompson",
      role: "Marketing Director",
      company: "GrowthCo",
      quote: "We've run 50+ tests and saved hundreds of hours on analysis.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 opacity-30" style={{ y: backgroundY }}>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100" />
          {/* Animated particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Test{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Anything
              </span>{" "}
              That Matters
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From vitamin effects to team dynamics—turn questions into data-driven answers. No code required.
            </p>
          </motion.div>

          {/* Interactive Demo Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="space-y-4">
                <div className="text-left">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Try it now - Ask a question you want to test:
                  </label>
                  <Input
                    placeholder={demoQuestions[currentDemo]}
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="text-lg p-4 border-2 border-indigo-200 focus:border-indigo-500"
                  />
                </div>
                {userInput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-200"
                  >
                    <div className="text-sm text-gray-600 mb-2">AI Analysis:</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Hypothesis generated</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Variables identified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Test protocol created</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4">
              Start Testing Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <Play className="mr-2 w-5 h-5" />
              Watch 2-min Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">The Testing Problem</h2>
              <div className="space-y-6">
                {[
                  "Setting up experiments is complex and time-consuming",
                  "Statistical analysis requires specialized expertise",
                  "No tools exist for everyday questions and hypotheses",
                  "Results are often inconclusive or misleading",
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200"
                  >
                    <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">The TestFlow Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    <span>AI-powered test design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6" />
                    <span>Natural language interface</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6" />
                    <span>Automated analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6" />
                    <span>Actionable insights</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How TestFlow Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From question to insight in four simple steps</p>
          </motion.div>

          <ProcessDemo />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how people are using TestFlow to answer their most important questions
            </p>
          </motion.div>

          <UseCaseTabs />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features, Simple Interface</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run professional-grade experiments, without the complexity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                      <feature.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Interactive Test Builder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Try our intuitive test builder to see how easy it is to create professional experiments
            </p>
          </motion.div>

          <TestBuilderDemo />
        </div>
      </section>

      {/* Technical Architecture */}

       {/* 
       <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on a modern, scalable foundation with developer-friendly APIs
            </p>
          </motion.div>

          <TechArchitecture />
        </div>
      </section>
      */}
      
      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Trusted by Innovators</h2>
            <p className="text-xl text-gray-600">Join thousands of researchers, marketers, and curious minds</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "10,000+", label: "Tests Created" },
              { number: "1M+", label: "Data Points Analyzed" },
              { number: "500+", label: "Hours Saved Daily" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Start free, scale as you grow</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Perfect for personal experiments",
                features: ["5 tests per month", "Basic analytics", "Email support"],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Professional",
                price: "$29",
                description: "For teams and businesses",
                features: ["Unlimited tests", "Advanced analytics", "Priority support", "Team collaboration"],
                cta: "Start Free Trial",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: ["Custom integrations", "Dedicated support", "SLA guarantee", "Advanced security"],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                    Most Popular
                  </Badge>
                )}
                <Card
                  className={`p-6 h-full ${plan.popular ? "border-indigo-500 border-2 shadow-xl" : "border-gray-200"}`}
                >
                  <CardContent className="p-0">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold mb-2">
                        {plan.price}
                        {plan.price !== "Free" && plan.price !== "Custom" && (
                          <span className="text-lg text-gray-600">/month</span>
                        )}
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-indigo-600 hover:bg-indigo-700" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Start Testing in 60 Seconds</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of innovators who've already discovered the power of data-driven decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email" className="bg-white text-gray-900 border-0" />
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Get Started Free
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">No credit card required • 14-day free trial • Cancel anytime</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Beaker className="w-8 h-8 text-indigo-400" />
                <span className="text-2xl font-bold">TestFlow</span>
              </div>
              <p className="text-gray-400">Turn questions into data-driven answers with AI-powered testing.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TestFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
