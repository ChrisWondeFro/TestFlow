"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Coffee, TrendingUp, Users, CheckCircle, Clock, Lightbulb } from "lucide-react"

const useCases = [
  {
    id: "health",
    title: "Health & Wellness",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-100",
    description: "Track how different factors affect your physical and mental wellbeing",
    example: {
      question: "Does a 10-minute morning meditation reduce my daily stress levels?",
      metrics: ["Perceived stress (1-10)", "Heart rate variability", "Sleep quality"],
      duration: "21 days",
      results: {
        summary: "Morning meditation reduced stress by 32% on average",
        details: [
          "Stress levels decreased from avg. 6.8 to 4.6 on meditation days",
          "Heart rate variability improved by 18%",
          "Sleep quality improved by 22%",
        ],
        significance: "p < 0.01 (highly significant)",
        recommendation: "Continue daily meditation practice",
      },
      testimonial: {
        name: "Alex Chen",
        role: "Software Engineer",
        quote: "I was skeptical about meditation, but TestFlow showed me clear evidence it was working for me.",
      },
    },
  },
  {
    id: "productivity",
    title: "Productivity",
    icon: Coffee,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
    description: "Optimize your work habits and environment for peak performance",
    example: {
      question: "Does working in 25-minute Pomodoro sessions increase my productivity?",
      metrics: ["Tasks completed", "Focus score (1-10)", "Mental fatigue"],
      duration: "14 days",
      results: {
        summary: "Pomodoro technique increased productivity by 27%",
        details: [
          "Completed 38% more tasks during Pomodoro days",
          "Focus scores increased from avg. 5.9 to 7.8",
          "Reported 42% less mental fatigue at end of day",
        ],
        significance: "p < 0.05 (significant)",
        recommendation: "Implement Pomodoro technique with 5-minute breaks",
      },
      testimonial: {
        name: "Maya Johnson",
        role: "Marketing Manager",
        quote: "TestFlow helped me discover that Pomodoro sessions work incredibly well for my productivity style.",
      },
    },
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-100",
    description: "Test campaigns, messaging, and user experience to maximize ROI",
    example: {
      question: "Which email subject line generates higher open rates?",
      metrics: ["Open rate", "Click-through rate", "Conversion rate"],
      duration: "7 days",
      results: {
        summary: "Question-based subject lines increased open rates by 46%",
        details: [
          "Open rates: 32% vs 22% for statement-based subjects",
          "Click-through rates: 8.7% vs 6.2%",
          "Conversion rates: 3.2% vs 2.1%",
        ],
        significance: "p < 0.01 (highly significant)",
        recommendation: "Use question-based subject lines for future campaigns",
      },
      testimonial: {
        name: "David Park",
        role: "Email Marketing Specialist",
        quote: "TestFlow's analysis gave us concrete data to improve our email strategy across all campaigns.",
      },
    },
  },
  {
    id: "team",
    title: "Team Dynamics",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    description: "Improve collaboration, communication, and team satisfaction",
    example: {
      question: "Do daily stand-up meetings improve team coordination?",
      metrics: ["Task handoff time", "Blockers resolved", "Team satisfaction"],
      duration: "30 days",
      results: {
        summary: "Daily stand-ups reduced project delays by 64%",
        details: [
          "Task handoff time decreased from 8.2 to 3.1 hours",
          "Blockers resolved 73% faster",
          "Team satisfaction increased by 28%",
        ],
        significance: "p < 0.01 (highly significant)",
        recommendation: "Continue daily stand-ups, limit to 15 minutes",
      },
      testimonial: {
        name: "Sarah Rodriguez",
        role: "Product Manager",
        quote:
          "TestFlow quantified what we suspected - our stand-ups were making a huge difference in team performance.",
      },
    },
  },
]

export function UseCaseTabs() {
  const [activeTab, setActiveTab] = useState("health")
  const [showResults, setShowResults] = useState(false)

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setShowResults(false)
    setTimeout(() => setShowResults(true), 500)
  }

  const activeCase = useCases.find((uc) => uc.id === activeTab)

  return (
    <Tabs defaultValue="health" onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
        {useCases.map((useCase) => (
          <TabsTrigger
            key={useCase.id}
            value={useCase.id}
            className="flex items-center gap-2 data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700"
          >
            <useCase.icon className={`w-5 h-5 ${useCase.color}`} />
            <span className="hidden md:inline">{useCase.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {useCases.map((useCase) => (
        <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <div
                  className={`inline-flex items-center gap-2 ${useCase.bgColor} ${useCase.color} px-3 py-1 rounded-full text-sm font-medium mb-4`}
                >
                  <useCase.icon className="w-4 h-4" />
                  <span>{useCase.title}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Real-World Example</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Test Question</div>
                      <div className="text-gray-700">{useCase.example.question}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-sm text-gray-500 mb-1">Duration</div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-700" />
                        <span>{useCase.example.duration}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-sm text-gray-500 mb-1">Key Metrics</div>
                      <div className="flex flex-wrap gap-1">
                        {useCase.example.metrics.map((metric, index) => (
                          <Badge key={index} variant="outline" className="bg-white">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button onClick={() => setShowResults(!showResults)} className="w-full">
                    {showResults ? "Hide Results" : "View Results"}
                  </Button>
                </CardContent>
              </Card>

              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-green-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <h4 className="font-bold text-green-800">Results Summary</h4>
                        </div>

                        <div className="p-3 bg-green-50 rounded-lg mb-4">
                          <div className="font-medium text-green-800">{useCase.example.results.summary}</div>
                        </div>

                        <div className="mb-4">
                          <div className="font-medium mb-2">Key Findings</div>
                          <ul className="space-y-2">
                            {useCase.example.results.details.map((detail, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                                <span className="text-sm">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="text-sm text-gray-500 mb-1">Statistical Significance</div>
                            <div className="font-medium">{useCase.example.results.significance}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <div className="text-sm text-gray-500 mb-1">Recommendation</div>
                            <div className="font-medium">{useCase.example.results.recommendation}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Interactive Demo</h3>

                  <div className="space-y-4">
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <div className="text-sm text-gray-300 mb-2">Test Configuration</div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Test Type</span>
                          <span className="text-indigo-300">A/B Comparison</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Control Group</span>
                          <span className="text-indigo-300">Normal Routine</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Test Group</span>
                          <span className="text-indigo-300">
                            {activeCase?.id === "health"
                              ? "Morning Meditation"
                              : activeCase?.id === "productivity"
                                ? "Pomodoro Sessions"
                                : activeCase?.id === "marketing"
                                  ? "Question Subject Lines"
                                  : "Daily Stand-ups"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration</span>
                          <span className="text-indigo-300">{activeCase?.example.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-700 p-4 rounded-lg">
                      <div className="text-sm text-gray-300 mb-2">Data Collection</div>
                      <div className="h-32 bg-gray-800 rounded-lg p-3 flex flex-col justify-between">
                        <div className="flex justify-between text-sm">
                          <span>Day 1-7</span>
                          <span className="text-green-400">Complete</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Day 8-14</span>
                          <span className="text-green-400">Complete</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Day 15-21</span>
                          <span className="text-green-400">Complete</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Analysis</span>
                          <span className="text-green-400">Complete</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-700 p-4 rounded-lg">
                      <div className="text-sm text-gray-300 mb-2">Results Visualization</div>
                      <div className="h-40 bg-gray-800 rounded-lg p-3 flex items-end justify-around">
                        <div className="flex flex-col items-center">
                          <div
                            className="w-16 bg-blue-500 rounded-t"
                            style={{
                              height:
                                activeCase?.id === "health"
                                  ? "60px"
                                  : activeCase?.id === "productivity"
                                    ? "50px"
                                    : activeCase?.id === "marketing"
                                      ? "70px"
                                      : "40px",
                            }}
                          ></div>
                          <div className="mt-2 text-xs">Control</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div
                            className="w-16 bg-green-500 rounded-t"
                            style={{
                              height:
                                activeCase?.id === "health"
                                  ? "100px"
                                  : activeCase?.id === "productivity"
                                    ? "80px"
                                    : activeCase?.id === "marketing"
                                      ? "110px"
                                      : "90px",
                            }}
                          ></div>
                          <div className="mt-2 text-xs">Test</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{activeCase?.example.testimonial.name}</div>
                        <div className="text-sm text-gray-500 mb-2">{activeCase?.example.testimonial.role}</div>
                        <div className="italic text-gray-700">"{activeCase?.example.testimonial.quote}"</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
