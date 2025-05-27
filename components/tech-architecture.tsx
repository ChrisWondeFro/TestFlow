"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Database, Brain, Server, Globe, Lock, Zap, Copy, CheckCheck } from "lucide-react"

export function TechArchitecture() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const architectureNodes = [
    {
      id: "ai-engine",
      name: "AI Engine",
      icon: Brain,
      color: "bg-purple-500",
      position: { x: "20%", y: "30%" },
      size: 60,
      description: "Converts natural language into test protocols using advanced LLMs",
      connections: ["data-store", "api-gateway"],
    },
    {
      id: "data-store",
      name: "Data Store",
      icon: Database,
      color: "bg-blue-500",
      position: { x: "50%", y: "20%" },
      size: 60,
      description: "Secure, scalable storage for test data and results",
      connections: ["ai-engine", "analytics-engine", "api-gateway"],
    },
    {
      id: "analytics-engine",
      name: "Analytics Engine",
      icon: Zap,
      color: "bg-amber-500",
      position: { x: "80%", y: "30%" },
      size: 60,
      description: "Statistical analysis and insight generation",
      connections: ["data-store", "api-gateway"],
    },
    {
      id: "api-gateway",
      name: "API Gateway",
      icon: Server,
      color: "bg-green-500",
      position: { x: "50%", y: "60%" },
      size: 60,
      description: "Secure, RESTful interface for all TestFlow services",
      connections: ["ai-engine", "data-store", "analytics-engine", "client-apps", "security"],
    },
    {
      id: "client-apps",
      name: "Client Apps",
      icon: Globe,
      color: "bg-indigo-500",
      position: { x: "20%", y: "80%" },
      size: 60,
      description: "Web, mobile, and desktop interfaces",
      connections: ["api-gateway"],
    },
    {
      id: "security",
      name: "Security Layer",
      icon: Lock,
      color: "bg-red-500",
      position: { x: "80%", y: "80%" },
      size: 60,
      description: "Authentication, authorization, and data protection",
      connections: ["api-gateway"],
    },
  ]

  const codeExamples = [
    {
      id: "api-example",
      title: "API Usage",
      language: "javascript",
      code: `// Create a new test with the TestFlow API
import { TestFlow } from '@testflow/client';

// Initialize with your API key
const testflow = new TestFlow({
  apiKey: process.env.TESTFLOW_API_KEY
});

// Create a new test
const test = await testflow.createTest({
  question: "Does coffee improve my focus?",
  duration: "14 days",
  metrics: ["focus_score", "tasks_completed", "energy_level"],
  participants: 1
});

console.log(\`Test created with ID: \${test.id}\`);

// Later, add data points
await testflow.addDataPoint({
  testId: test.id,
  date: "2023-05-15",
  condition: "coffee", // or "no_coffee" for control days
  metrics: {
    focus_score: 8.5,
    tasks_completed: 24,
    energy_level: 7.2
  }
});`,
    },
    {
      id: "integration-example",
      title: "Integration Example",
      language: "javascript",
      code: `// Integrate TestFlow with your existing data sources
import { TestFlow } from '@testflow/client';
import { OuraRing } from 'oura-api-client';

// Initialize clients
const testflow = new TestFlow({
  apiKey: process.env.TESTFLOW_API_KEY
});
const oura = new OuraRing({
  accessToken: process.env.OURA_ACCESS_TOKEN
});

// Sync sleep data from Oura Ring to TestFlow test
async function syncSleepData(testId, date) {
  // Get sleep data from Oura
  const sleepData = await oura.getSleepSummary(date);
  
  // Map to TestFlow metrics
  const metrics = {
    sleep_duration: sleepData.duration,
    deep_sleep: sleepData.deep,
    rem_sleep: sleepData.rem,
    sleep_score: sleepData.score
  };
  
  // Add to TestFlow
  await testflow.addDataPoint({
    testId,
    date,
    metrics
  });
  
  console.log(\`Sleep data for \${date} synced to TestFlow\`);
}`,
    },
    {
      id: "workflow-example",
      title: "Test Workflow",
      language: "javascript",
      code: `// Define a custom test workflow
import { TestFlow, TestWorkflow } from '@testflow/client';

// Initialize client
const testflow = new TestFlow({
  apiKey: process.env.TESTFLOW_API_KEY
});

// Define a custom workflow for A/B testing
const abTestWorkflow = new TestWorkflow({
  name: "A/B Test Workflow",
  steps: [
    {
      id: "setup",
      name: "Test Setup",
      action: async (params) => {
        const { variantA, variantB, metric, duration } = params;
        return testflow.createTest({
          question: \`Does \${variantA} or \${variantB} perform better for \${metric}?\`,
          variants: [variantA, variantB],
          primaryMetric: metric,
          duration
        });
      }
    },
    {
      id: "data-collection",
      name: "Data Collection",
      action: async (test, params) => {
        // Implement data collection logic
        // This could be manual or automated
        return test;
      }
    },
    {
      id: "analysis",
      name: "Analysis",
      action: async (test) => {
        return testflow.analyzeTest(test.id);
      }
    }
  ]
});

// Use the workflow
const test = await abTestWorkflow.run({
  variantA: "Blue Button",
  variantB: "Green Button",
  metric: "Click-through Rate",
  duration: "7 days"
});`,
    },
  ]

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Technical Architecture</h3>
          <p className="text-gray-600 mb-6">
            TestFlow is built on a modern, scalable architecture designed for reliability, security, and performance.
            Our API-first approach makes integration seamless with your existing tools and workflows.
          </p>

          <div className="space-y-4">
            {architectureNodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-lg ${activeNode === node.id ? "bg-indigo-50 border border-indigo-200" : "bg-white border"}`}
                onClick={() => setActiveNode(node.id === activeNode ? null : node.id)}
              >
                <div className="flex items-center gap-3 cursor-pointer">
                  <div className={`w-10 h-10 ${node.color} rounded-lg flex items-center justify-center`}>
                    <node.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">{node.name}</div>
                    {activeNode === node.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-gray-600 mt-2"
                      >
                        {node.description}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative bg-gray-900 rounded-xl p-6 h-[400px]">
          {/* Architecture visualization */}
          {architectureNodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute"
              style={{
                left: node.position.x,
                top: node.position.y,
                transform: "translate(-50%, -50%)",
              }}
              whileHover={{ scale: 1.1 }}
              animate={{
                scale: activeNode === node.id ? 1.2 : 1,
                zIndex: activeNode === node.id ? 10 : 1,
              }}
              onClick={() => setActiveNode(node.id === activeNode ? null : node.id)}
            >
              <div
                className={`${node.color} rounded-full flex items-center justify-center cursor-pointer`}
                style={{ width: node.size, height: node.size }}
              >
                <node.icon className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
                <div className="bg-white px-2 py-1 rounded text-xs font-medium shadow-md">{node.name}</div>
              </div>
            </motion.div>
          ))}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            {architectureNodes.flatMap((node) =>
              node.connections.map((targetId, index) => {
                const target = architectureNodes.find((n) => n.id === targetId)
                if (!target) return null

                // Convert percentage strings to numbers
                const sourceX = (Number.parseFloat(node.position.x) / 100) * 100
                const sourceY = (Number.parseFloat(node.position.y) / 100) * 100
                const targetX = (Number.parseFloat(target.position.x) / 100) * 100
                const targetY = (Number.parseFloat(target.position.y) / 100) * 100

                return (
                  <motion.line
                    key={`${node.id}-${targetId}-${index}`}
                    x1={`${sourceX}%`}
                    y1={`${sourceY}%`}
                    x2={`${targetX}%`}
                    y2={`${targetY}%`}
                    stroke={activeNode === node.id || activeNode === targetId ? "#818cf8" : "#4b5563"}
                    strokeWidth={activeNode === node.id || activeNode === targetId ? 2 : 1}
                    strokeDasharray={activeNode === node.id || activeNode === targetId ? "none" : "4,4"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                )
              }),
            )}
          </svg>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Code Examples</h3>
        <Tabs defaultValue="api-example">
          <TabsList className="mb-4">
            {codeExamples.map((example) => (
              <TabsTrigger key={example.id} value={example.id}>
                {example.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {codeExamples.map((example) => (
            <TabsContent key={example.id} value={example.id}>
              <Card className="relative">
                <div className="absolute right-2 top-2 z-10">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(example.code, example.id)}
                    className="h-8 gap-1"
                  >
                    {copied === example.id ? (
                      <>
                        <CheckCheck className="w-4 h-4" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>
                <CardContent className="p-0 overflow-hidden rounded-lg">
                  <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm">
                    <code>{example.code}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
