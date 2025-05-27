"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Sparkles, Database, BarChart2, ArrowRight, CheckCircle2 } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Ask Your Question",
    icon: MessageSquare,
    description: "Start with a question you want to answer with data",
    color: "bg-blue-500",
    examples: [
      "Does meditation improve my sleep quality?",
      "Which email subject line gets more opens?",
      "Is my new product feature increasing user engagement?",
      "Does my workout routine improve my recovery time?",
    ],
  },
  {
    id: 2,
    title: "AI Designs Your Test",
    icon: Sparkles,
    description: "Our AI creates a scientifically valid test protocol",
    color: "bg-purple-500",
    protocol: {
      hypothesis: "Meditation before bed improves sleep quality",
      variables: [
        { name: "Independent", value: "10-minute meditation before sleep" },
        { name: "Dependent", value: "Sleep quality score (1-10)" },
        { name: "Control", value: "Normal bedtime routine" },
      ],
      duration: "14 days",
      methodology: "Alternate between meditation and control days",
      metrics: ["Sleep duration", "Time to fall asleep", "Number of disruptions", "Morning energy level"],
    },
  },
  {
    id: 3,
    title: "Deploy & Collect Data",
    icon: Database,
    description: "Gather data through our mobile app, integrations, or manual input",
    color: "bg-green-500",
    dataPoints: [
      { day: 1, condition: "Control", sleepQuality: 6.2, timeToSleep: 28, disruptions: 2 },
      { day: 2, condition: "Meditation", sleepQuality: 7.5, timeToSleep: 18, disruptions: 1 },
      { day: 3, condition: "Control", sleepQuality: 5.8, timeToSleep: 32, disruptions: 3 },
      { day: 4, condition: "Meditation", sleepQuality: 7.8, timeToSleep: 15, disruptions: 1 },
      { day: 5, condition: "Control", sleepQuality: 6.5, timeToSleep: 25, disruptions: 2 },
      { day: 6, condition: "Meditation", sleepQuality: 8.1, timeToSleep: 12, disruptions: 0 },
    ],
  },
  {
    id: 4,
    title: "Get Actionable Insights",
    icon: BarChart2,
    description: "Receive clear, data-driven answers to your question",
    color: "bg-amber-500",
    insights: {
      summary: "Meditation before bed significantly improved sleep quality",
      findings: [
        "Sleep quality increased by 28% on meditation days",
        "Time to fall asleep decreased by 42%",
        "Sleep disruptions reduced by 63%",
        "Statistical significance: p < 0.01",
      ],
      recommendation: "Continue the meditation practice for improved sleep quality",
    },
  },
]

export function ProcessDemo() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [exampleIndex, setExampleIndex] = useState(0)
  const [showProtocol, setShowProtocol] = useState(false)
  const [dataIndex, setDataIndex] = useState(0)
  const [showInsights, setShowInsights] = useState(false)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev === 4) {
            setIsAutoPlaying(false)
            return 4
          }
          return prev + 1
        })
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  useEffect(() => {
    if (currentStep === 1) {
      const interval = setInterval(() => {
        setExampleIndex((prev) => (prev + 1) % steps[0].examples.length)
      }, 2000)
      return () => clearInterval(interval)
    }

    if (currentStep === 2) {
      setShowProtocol(true)
    }

    if (currentStep === 3) {
      const interval = setInterval(() => {
        setDataIndex((prev) => {
          if (prev === steps[2].dataPoints.length - 1) {
            return prev
          }
          return prev + 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }

    if (currentStep === 4) {
      setShowInsights(true)
    }
  }, [currentStep])

  const handleStepClick = (step: number) => {
    setCurrentStep(step)
    setIsAutoPlaying(false)

    if (step === 1) {
      setShowProtocol(false)
      setDataIndex(0)
      setShowInsights(false)
    }

    if (step === 2) {
      setShowProtocol(true)
      setDataIndex(0)
      setShowInsights(false)
    }

    if (step === 3) {
      setShowProtocol(true)
      setDataIndex(0)
      setShowInsights(false)
    }

    if (step === 4) {
      setShowProtocol(true)
      setDataIndex(steps[2].dataPoints.length - 1)
      setShowInsights(true)
    }
  }

  const currentStepData = steps.find((step) => step.id === currentStep)

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => handleStepClick(step.id)}
            className={`flex-1 relative ${
              currentStep === step.id
                ? "ring-2 ring-offset-2 ring-indigo-500"
                : currentStep > step.id
                  ? "opacity-80"
                  : "opacity-60"
            } rounded-lg transition-all duration-300`}
          >
            <Card className="h-full">
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  {currentStep > step.id ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : (
                    <step.icon className="w-5 h-5 text-white" />
                  )}
                </div>
                <div className="text-left">
                  <div className="font-medium">{step.title}</div>
                  <div className="text-sm text-gray-500 hidden md:block">{step.description}</div>
                </div>
              </CardContent>
            </Card>
            {step.id < 4 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-6">
        <Button
          onClick={() => {
            setCurrentStep(1)
            setShowProtocol(false)
            setDataIndex(0)
            setShowInsights(false)
            setIsAutoPlaying(true)
          }}
          variant="outline"
          className="gap-2"
        >
          <span>Watch Demo</span>
          {isAutoPlaying ? "Playing..." : "Play"}
        </Button>
      </div>

      <div className="min-h-[400px] bg-gray-50 rounded-xl p-6 border border-gray-200">
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full flex flex-col items-center justify-center"
          >
            <div className="text-center max-w-lg mx-auto">
              <h3 className="text-2xl font-bold mb-6">What do you want to test?</h3>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <motion.div
                  key={exampleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xl font-medium text-indigo-600"
                >
                  "{steps[0].examples[exampleIndex]}"
                </motion.div>
              </div>
              <p className="text-gray-600">
                Start with any question you're curious about. TestFlow works with personal experiments, business
                optimization, scientific research, and more.
              </p>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">AI-Generated Test Protocol</h3>
              <p className="text-gray-600">Our AI designs a scientifically valid experiment</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showProtocol ? 1 : 0, y: showProtocol ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 border border-indigo-100"
            >
              <div className="mb-4">
                <div className="text-sm text-gray-500">Hypothesis</div>
                <div className="font-medium">{steps[1].protocol.hypothesis}</div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-500">Variables</div>
                <div className="grid md:grid-cols-3 gap-4 mt-2">
                  {steps[1].protocol.variables.map((variable, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded">
                      <div className="text-xs font-medium text-gray-500">{variable.name}</div>
                      <div className="font-medium">{variable.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-medium">{steps[1].protocol.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Methodology</div>
                  <div className="font-medium">{steps[1].protocol.methodology}</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-500">Metrics to Track</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {steps[1].protocol.metrics.map((metric, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">Data Collection</h3>
              <p className="text-gray-600">Track your experiment with our easy-to-use tools</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Day</th>
                      <th className="text-left py-2">Condition</th>
                      <th className="text-left py-2">Sleep Quality</th>
                      <th className="text-left py-2">Time to Sleep (min)</th>
                      <th className="text-left py-2">Disruptions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {steps[2].dataPoints.slice(0, dataIndex + 1).map((point, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, backgroundColor: "rgba(236, 253, 245, 1)" }}
                        animate={{ opacity: 1, backgroundColor: "rgba(255, 255, 255, 1)" }}
                        transition={{ duration: 0.5 }}
                        className="border-b"
                      >
                        <td className="py-2">Day {point.day}</td>
                        <td className="py-2">
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              point.condition === "Meditation"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {point.condition}
                          </span>
                        </td>
                        <td className="py-2">{point.sleepQuality}/10</td>
                        <td className="py-2">{point.timeToSleep} min</td>
                        <td className="py-2">{point.disruptions}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {dataIndex < steps[2].dataPoints.length - 1 ? "Collecting data..." : "Data collection complete"}
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  {dataIndex + 1} of {steps[2].dataPoints.length} days
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">Results & Insights</h3>
              <p className="text-gray-600">Clear, actionable insights from your data</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-amber-100">
                <h4 className="font-bold text-lg mb-4">Data Visualization</h4>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <div className="w-full px-4">
                    <div className="flex justify-between mb-2">
                      <div className="text-sm font-medium">Sleep Quality Score</div>
                      <div className="text-sm text-gray-500">Average by condition</div>
                    </div>
                    <div className="relative h-40">
                      <div
                        className="absolute bottom-0 left-[20%] w-[20%] bg-blue-400 rounded-t"
                        style={{ height: "62%" }}
                      >
                        <div className="absolute -top-6 w-full text-center text-sm font-medium">6.2</div>
                      </div>
                      <div
                        className="absolute bottom-0 right-[20%] w-[20%] bg-green-400 rounded-t"
                        style={{ height: "78%" }}
                      >
                        <div className="absolute -top-6 w-full text-center text-sm font-medium">7.8</div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="text-sm">Control</div>
                      <div className="text-sm">Meditation</div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: showInsights ? 1 : 0, x: showInsights ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-md p-6 border border-amber-100"
              >
                <h4 className="font-bold text-lg mb-4">Key Findings</h4>
                <div className="mb-4">
                  <div className="font-medium text-amber-800 mb-2">{steps[3].insights.summary}</div>
                  <ul className="space-y-2">
                    {steps[3].insights.findings.map((finding, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{finding}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="font-medium mb-1">Recommendation</div>
                  <div className="text-gray-700">{steps[3].insights.recommendation}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
