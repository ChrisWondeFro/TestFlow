"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, ArrowRight, Calendar, BarChart, Settings, Check, Sparkles } from "lucide-react"

export function TestBuilderDemo() {
  const [step, setStep] = useState(1)
  const [question, setQuestion] = useState("")
  const [metrics, setMetrics] = useState<string[]>([""])
  const [duration, setDuration] = useState("14")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleAddMetric = () => {
    setMetrics([...metrics, ""])
  }

  const handleRemoveMetric = (index: number) => {
    const newMetrics = [...metrics]
    newMetrics.splice(index, 1)
    setMetrics(newMetrics)
  }

  const handleMetricChange = (index: number, value: string) => {
    const newMetrics = [...metrics]
    newMetrics[index] = value
    setMetrics(newMetrics)
  }

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 2000)
  }

  const handleReset = () => {
    setStep(1)
    setQuestion("")
    setMetrics([""])
    setDuration("14")
    setIsGenerated(false)
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Test Builder</h3>
        <Button variant="outline" onClick={handleReset}>
          Reset Demo
        </Button>
      </div>

      <div className="flex mb-6">
        {[
          { number: 1, title: "Question" },
          { number: 2, title: "Setup" },
          { number: 3, title: "Generate" },
        ].map((s) => (
          <div key={s.number} className="flex-1">
            <div
              className={`flex flex-col items-center ${step >= s.number ? "opacity-100" : "opacity-50"}`}
              onClick={() => step > s.number && setStep(s.number)}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step > s.number
                    ? "bg-green-100 text-green-600"
                    : step === s.number
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {step > s.number ? <Check className="w-5 h-5" /> : s.number}
              </div>
              <div className="text-sm font-medium">{s.title}</div>
            </div>
            {s.number < 3 && (
              <div className="flex-1 flex items-center justify-center">
                <div className={`h-px w-full ${step > s.number ? "bg-green-400" : "bg-gray-200"}`}></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h4 className="text-lg font-medium mb-4">What do you want to test?</h4>
              <div className="mb-6">
                <Textarea
                  placeholder="e.g., Does drinking green tea in the morning improve my focus?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="h-24"
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setStep(2)} disabled={!question.trim()} className="gap-2">
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h4 className="text-lg font-medium mb-4">Test Setup</h4>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What metrics do you want to track?
                  </label>
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        placeholder={`e.g., Focus score (1-10)`}
                        value={metric}
                        onChange={(e) => handleMetricChange(index, e.target.value)}
                      />
                      {metrics.length > 1 && (
                        <Button variant="ghost" size="icon" onClick={() => handleRemoveMetric(index)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={handleAddMetric} className="mt-2 gap-1">
                    <Plus className="w-4 h-4" />
                    <span>Add Metric</span>
                  </Button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Test Duration (days)</label>
                  <Input type="number" min="1" value={duration} onChange={(e) => setDuration(e.target.value)} />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button onClick={() => setStep(3)} disabled={!metrics[0].trim() || !duration} className="gap-2">
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h4 className="text-lg font-medium mb-4">Generate Test Protocol</h4>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="text-sm font-medium mb-2">Test Summary</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-medium">Question</div>
                      <div className="text-gray-600">{question}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-medium">Metrics</div>
                      <div className="text-gray-600">{metrics.filter((m) => m.trim()).join(", ")}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-gray-600">{duration} days</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button onClick={handleGenerate} disabled={isGenerating || isGenerated} className="gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{isGenerating ? "Generating..." : "Generate Protocol"}</span>
                </Button>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>

      {isGenerated && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-lg font-medium text-green-800">Test Protocol Generated!</h4>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Hypothesis</div>
                  <div className="font-medium">
                    {question.includes("green tea")
                      ? "Green tea consumption in the morning improves focus compared to no green tea"
                      : question.includes("coffee")
                        ? "Coffee consumption improves focus compared to no coffee"
                        : "The test condition improves the measured outcome compared to the control condition"}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                      <div className="font-medium">Test Schedule</div>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>Duration: {duration} days</li>
                      <li>Alternating days design</li>
                      <li>Randomized condition order</li>
                      <li>Daily data collection</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart className="w-5 h-5 text-indigo-600" />
                      <div className="font-medium">Metrics</div>
                    </div>
                    <ul className="space-y-1 text-sm">
                      {metrics
                        .filter((m) => m.trim())
                        .map((metric, index) => (
                          <li key={index}>{metric}</li>
                        ))}
                      <li>Daily journal entry</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-5 h-5 text-indigo-600" />
                      <div className="font-medium">Controls</div>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>Same measurement time daily</li>
                      <li>Consistent sleep schedule</li>
                      <li>Record confounding factors</li>
                      <li>Blinding where possible</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Analysis Plan</div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-1 text-sm">
                      <li>Paired t-test for primary metrics</li>
                      <li>Effect size calculation (Cohen's d)</li>
                      <li>Time series analysis for trends</li>
                      <li>Qualitative analysis of journal entries</li>
                      <li>Statistical significance threshold: p &lt; 0.05</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <Button className="gap-2">
                  <span>Start Test</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
