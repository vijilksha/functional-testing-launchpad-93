import { useState } from "react";
import { modules, testCases, testScenarioGuide, testStrategyGuide } from "@/data/courseData";
import { practiceProjects } from "@/data/practiceData";
import { aiTestGenTools, toolComparisonTable, promptsGuide, aiAutomationExamples, aiBugDetectionGuide } from "@/data/aiTestingData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ChevronRight, BookOpen, Download, Search, Filter, AlertTriangle, FileText, Target, Shield, ChevronDown, ChevronUp, ClipboardList, Layers, FileCheck, TestTube, Bot, Cpu, Zap, Bug, Code, MessageSquare, Lightbulb } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { downloadGuide } from "@/utils/downloadGuide";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Index = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [expandedScenarios, setExpandedScenarios] = useState<string[]>([]);
  const [selectedPracticeProject, setSelectedPracticeProject] = useState<number>(0);
  const [practiceTab, setPracticeTab] = useState<string>("requirements");
  const currentModule = modules.find(m => m.id === selectedModule);
  const currentLesson = currentModule?.lessons.find(l => l.id === selectedLesson);

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const progress = (completedLessons.length / totalLessons) * 100;

  const markComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const filteredTestCases = testCases.filter(tc => {
    const matchesSearch = tc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tc.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || tc.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(testCases.map(tc => tc.category))];

  const toggleScenarioExpand = (feature: string) => {
    setExpandedScenarios(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Functional Testing Mastery</h1>
                <p className="text-sm text-muted-foreground">Pack 2 - Complete Training Course</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Progress:</span>
                <Progress value={progress} className="w-32 h-2" />
                <span className="text-sm font-medium">{Math.round(progress)}%</span>
              </div>
              <Button variant="outline" size="sm" className="gap-2" onClick={downloadGuide}>
                <Download className="w-4 h-4" /> Download Full Guide
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="course" className="space-y-6">
          <TabsList className="grid w-full max-w-3xl grid-cols-6 mx-auto">
            <TabsTrigger value="course">Course</TabsTrigger>
            <TabsTrigger value="testcases">Test Cases</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="ai-testing">AI Testing</TabsTrigger>
          </TabsList>

          {/* Course Tab */}
          <TabsContent value="course" className="space-y-6">
            {!selectedModule ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module, idx) => (
                  <Card 
                    key={module.id} 
                    className="cursor-pointer hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    onClick={() => setSelectedModule(module.id)}
                  >
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-3`}>
                        <module.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{module.lessons.length} lessons</Badge>
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : !selectedLesson ? (
              <div className="space-y-6">
                <Button variant="ghost" onClick={() => setSelectedModule(null)}>← Back to Modules</Button>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${currentModule?.color} flex items-center justify-center`}>
                    {currentModule && <currentModule.icon className="w-7 h-7 text-primary-foreground" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{currentModule?.title}</h2>
                    <p className="text-muted-foreground">{currentModule?.description}</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {currentModule?.lessons.map((lesson, idx) => (
                    <Card 
                      key={lesson.id} 
                      className="cursor-pointer hover:shadow-soft transition-all"
                      onClick={() => setSelectedLesson(lesson.id)}
                    >
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                            {completedLessons.includes(lesson.id) ? (
                              <CheckCircle className="w-5 h-5 text-success" />
                            ) : (
                              <span className="font-medium">{idx + 1}</span>
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{lesson.title}</h3>
                            <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <Button variant="ghost" onClick={() => setSelectedLesson(null)}>← Back to Lessons</Button>
                <Card>
                  <CardHeader>
                    <CardTitle>{currentLesson?.title}</CardTitle>
                    <p className="text-muted-foreground">{currentLesson?.content.overview}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {currentLesson?.content.sections.map((section, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="font-semibold text-lg">{section.title}</h3>
                        {section.type === "text" && <p className="text-muted-foreground">{section.content}</p>}
                        {section.type === "table" && section.tableData && (
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                              <thead>
                                <tr className="bg-muted">
                                  {section.tableData.headers.map((h, i) => (
                                    <th key={i} className="border border-border p-2 text-left font-medium">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {section.tableData.rows.map((row, i) => (
                                  <tr key={i} className="hover:bg-muted/50">
                                    {row.map((cell, j) => (
                                      <td key={j} className="border border-border p-2">{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Key Takeaways</h4>
                      <ul className="space-y-1">
                        {currentLesson?.content.keyTakeaways.map((t, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success" /> {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button onClick={() => markComplete(currentLesson?.id || "")} className="w-full">
                      {completedLessons.includes(currentLesson?.id || "") ? "✓ Completed" : "Mark as Complete"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Test Cases Tab */}
          <TabsContent value="testcases" className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search test cases..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48"><Filter className="w-4 h-4 mr-2" /><SelectValue placeholder="Filter" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">{filteredTestCases.length} test cases</div>
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {filteredTestCases.map(tc => (
                  <Card key={tc.id} className="hover:shadow-soft transition-all">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="font-mono text-xs">{tc.id}</Badge>
                            <Badge className={tc.priority === "P1" ? "bg-destructive" : tc.priority === "P2" ? "bg-warning text-warning-foreground" : "bg-secondary"}>{tc.priority}</Badge>
                            <Badge variant="secondary">{tc.type}</Badge>
                          </div>
                          <h3 className="font-medium">{tc.title}</h3>
                        </div>
                        <Badge>{tc.category}</Badge>
                      </div>
                      <div className="text-sm space-y-2">
                        <p><span className="font-medium">Preconditions:</span> {tc.preconditions}</p>
                        <p><span className="font-medium">Steps:</span> {tc.steps.join(" → ")}</p>
                        <p><span className="font-medium">Test Data:</span> <code className="bg-muted px-1 rounded">{tc.testData}</code></p>
                        <p><span className="font-medium">Expected:</span> <span className="text-success">{tc.expectedResult}</span></p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          {/* Scenarios Tab */}
          <TabsContent value="scenarios" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Test Scenario Guide
                </CardTitle>
                <p className="text-muted-foreground">{testScenarioGuide.definition}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Why Test Scenarios are Important */}
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    Why Test Scenarios Matter
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {testScenarioGuide.importance?.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Write Test Scenarios */}
                <div className="bg-accent/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">How to Write Effective Test Scenarios</h3>
                  <ol className="grid md:grid-cols-2 gap-2">
                    {testScenarioGuide.howToWrite?.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="font-bold text-primary min-w-[20px]">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Best Practices */}
                <div>
                  <h3 className="font-semibold mb-3">Best Practices</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {testScenarioGuide.bestPractices.map((bp, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {bp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real Examples with Detailed Explanations */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Real-World Examples by Domain</h3>
                  <p className="text-sm text-muted-foreground">Click on each feature to see detailed explanation, business context, testing approach, and key risks.</p>
                  
                  {testScenarioGuide.realExamples.map((ex, i) => {
                    const isExpanded = expandedScenarios.includes(ex.feature);
                    const hasDetails = (ex as any).detailedExplanation;
                    
                    return (
                      <Card key={i} className="border-l-4 border-l-primary overflow-hidden">
                        <Collapsible open={isExpanded} onOpenChange={() => toggleScenarioExpand(ex.feature)}>
                          <CollapsibleTrigger asChild>
                            <CardHeader className="pb-2 cursor-pointer hover:bg-muted/50 transition-colors">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base flex items-center gap-2">
                                  {ex.feature}
                                  {hasDetails && <Badge variant="secondary" className="text-xs">Detailed</Badge>}
                                </CardTitle>
                                {isExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                )}
                              </div>
                            </CardHeader>
                          </CollapsibleTrigger>
                          
                          <CollapsibleContent>
                            <CardContent className="space-y-4">
                              {/* Detailed Explanation Section */}
                              {hasDetails && (
                                <div className="space-y-4 bg-muted/30 rounded-lg p-4">
                                  <div>
                                    <h4 className="font-medium text-sm text-primary mb-1">Overview</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {(ex as any).detailedExplanation.overview}
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h4 className="font-medium text-sm text-primary mb-1">Business Context</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {(ex as any).detailedExplanation.businessContext}
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h4 className="font-medium text-sm text-primary mb-1">Testing Approach</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {(ex as any).detailedExplanation.testApproach}
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h4 className="font-medium text-sm text-destructive mb-2 flex items-center gap-1">
                                      <Shield className="w-4 h-4" />
                                      Key Risks to Test
                                    </h4>
                                    <ul className="grid gap-1">
                                      {(ex as any).detailedExplanation.keyRisks.map((risk: string, j: number) => (
                                        <li key={j} className="flex items-start gap-2 text-sm">
                                          <AlertTriangle className="w-3 h-3 mt-1 text-warning shrink-0" />
                                          <span>{risk}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              )}
                              
                              {/* Scenarios List */}
                              <div>
                                <h4 className="font-medium text-sm mb-2">Test Scenarios ({ex.scenarios.length})</h4>
                                <ul className="grid md:grid-cols-2 gap-2">
                                  {ex.scenarios.map((s, j) => (
                                    <li key={j} className="flex items-start gap-2 text-sm bg-background p-2 rounded">
                                      <span className="text-primary font-bold min-w-[20px]">{j + 1}.</span>
                                      {s}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Strategy Tab */}
          <TabsContent value="strategy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Test Strategy Guide</CardTitle>
                <p className="text-muted-foreground">{testStrategyGuide.definition}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Strategy Components</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {testStrategyGuide.components.map((c, i) => (
                      <Card key={i} className="bg-muted/30">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-primary">{c.name}</h4>
                          <p className="text-sm text-muted-foreground">{c.description}</p>
                          <p className="text-xs mt-2 bg-background p-2 rounded"><span className="font-medium">Example:</span> {c.example}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Domain-Specific Strategies */}
                <div>
                  <h3 className="font-semibold mb-3">Domain-Specific Test Strategies</h3>
                  <div className="grid gap-4">
                    {testStrategyGuide.domainStrategies?.map((ds, i) => (
                      <Card key={i} className="border-l-4 border-l-primary">
                        <CardContent className="p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-lg">{ds.domain}</h4>
                            <Badge variant="secondary">{ds.focus}</Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-primary mb-2">Key Testing Areas</p>
                              <ul className="text-sm space-y-1">
                                {ds.keyAreas.map((area, j) => (
                                  <li key={j} className="flex items-start gap-2">
                                    <CheckCircle className="w-3 h-3 mt-1 text-success shrink-0" />
                                    <span>{area}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-destructive mb-2">Risk Areas</p>
                              <ul className="text-sm space-y-1">
                                {ds.risks.map((risk, j) => (
                                  <li key={j} className="flex items-start gap-2">
                                    <AlertTriangle className="w-3 h-3 mt-1 text-warning shrink-0" />
                                    <span>{risk}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Strategy vs Plan</h3>
                  <div className="overflow-x-auto text-sm">
                    <table className="w-full border-collapse">
                      <thead><tr className="bg-muted"><th className="border border-border p-2 text-left">Aspect</th><th className="border border-border p-2 text-left">Test Strategy</th><th className="border border-border p-2 text-left">Test Plan</th></tr></thead>
                      <tbody>
                        <tr><td className="border border-border p-2">Level</td><td className="border border-border p-2">Project-wide</td><td className="border border-border p-2">Release/Sprint</td></tr>
                        <tr><td className="border border-border p-2">Owner</td><td className="border border-border p-2">Test Manager</td><td className="border border-border p-2">Test Lead</td></tr>
                        <tr><td className="border border-border p-2">Frequency</td><td className="border border-border p-2">Once per project</td><td className="border border-border p-2">Each release</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-6">
            {/* Domain Selector */}
            <div className="flex flex-wrap gap-2 justify-center">
              {practiceProjects.map((project, idx) => (
                <Button
                  key={idx}
                  variant={selectedPracticeProject === idx ? "default" : "outline"}
                  onClick={() => setSelectedPracticeProject(idx)}
                  className="gap-2"
                >
                  <Layers className="w-4 h-4" />
                  {project.requirementDocument.domain}
                </Button>
              ))}
            </div>

            {/* Practice Content Sub-tabs */}
            <div className="flex flex-wrap gap-2 justify-center border-b pb-4">
              {[
                { id: "requirements", label: "Requirements", icon: FileText },
                { id: "strategy", label: "Test Strategy", icon: Target },
                { id: "plan", label: "Test Plan", icon: ClipboardList },
                { id: "scenarios", label: "Test Scenarios", icon: FileCheck },
                { id: "testcases", label: "Test Cases", icon: TestTube }
              ].map(tab => (
                <Button
                  key={tab.id}
                  variant={practiceTab === tab.id ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setPracticeTab(tab.id)}
                  className="gap-2"
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Practice Content */}
            {(() => {
              const project = practiceProjects[selectedPracticeProject];
              const req = project.requirementDocument;
              const strategy = project.testStrategy;
              const plan = project.testPlan;

              return (
                <ScrollArea className="h-[600px]">
                  {/* Requirements Document */}
                  {practiceTab === "requirements" && (
                    <Card>
                      <CardHeader className="bg-primary/5">
                        <div className="flex items-center gap-2">
                          <Badge>{req.domain}</Badge>
                          <Badge variant="outline">v{req.version}</Badge>
                        </div>
                        <CardTitle className="text-xl">{req.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">Project: {req.projectName}</p>
                      </CardHeader>
                      <CardContent className="space-y-6 pt-6">
                        <div>
                          <h3 className="font-semibold mb-2">Description</h3>
                          <p className="text-muted-foreground">{req.description}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Objectives</h3>
                          <ul className="space-y-1">
                            {req.objectives.map((obj, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-success mt-0.5 shrink-0" />
                                {obj}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3">Functional Requirements</h3>
                          <div className="space-y-4">
                            {req.functionalRequirements.map((fr, i) => (
                              <Card key={i} className="bg-muted/30">
                                <CardContent className="p-4">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="outline" className="font-mono">{fr.id}</Badge>
                                    <span className="font-medium">{fr.title}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-3">{fr.description}</p>
                                  <div>
                                    <p className="text-xs font-medium text-primary mb-1">Acceptance Criteria:</p>
                                    <ul className="text-xs space-y-1">
                                      {fr.acceptanceCriteria.map((ac, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                          <span className="text-success">✓</span> {ac}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <Card className="bg-muted/30">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2 text-sm">Non-Functional Requirements</h4>
                              <ul className="text-xs space-y-1">
                                {req.nonFunctionalRequirements.map((nfr, i) => (
                                  <li key={i} className="flex items-start gap-1">• {nfr}</li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-muted/30">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2 text-sm">Assumptions</h4>
                              <ul className="text-xs space-y-1">
                                {req.assumptions.map((a, i) => (
                                  <li key={i} className="flex items-start gap-1">• {a}</li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-muted/30">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2 text-sm">Constraints</h4>
                              <ul className="text-xs space-y-1">
                                {req.constraints.map((c, i) => (
                                  <li key={i} className="flex items-start gap-1">• {c}</li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Test Strategy */}
                  {practiceTab === "strategy" && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary" />
                          Test Strategy - {req.domain}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="font-semibold mb-2">Scope</h3>
                          <p className="text-muted-foreground">{strategy.scope}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Test Objectives</h3>
                          <ul className="space-y-1">
                            {strategy.objectives.map((obj, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <Target className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                {obj}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-muted/30">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2">Test Levels</h4>
                              <div className="flex flex-wrap gap-1">
                                {strategy.testLevels.map((level, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">{level}</Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="bg-muted/30">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2">Test Types</h4>
                              <div className="flex flex-wrap gap-1">
                                {strategy.testTypes.map((type, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">{type}</Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="border-l-4 border-l-success bg-success/5">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2 text-success">Entry Criteria</h4>
                              <ul className="text-sm space-y-1">
                                {strategy.entryExitCriteria.entry.map((e, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CheckCircle className="w-3 h-3 mt-1 text-success shrink-0" /> {e}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="border-l-4 border-l-primary bg-primary/5">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2 text-primary">Exit Criteria</h4>
                              <ul className="text-sm space-y-1">
                                {strategy.entryExitCriteria.exit.map((e, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CheckCircle className="w-3 h-3 mt-1 text-primary shrink-0" /> {e}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3">Risk Analysis</h3>
                          <div className="space-y-2">
                            {strategy.riskAnalysis.map((r, i) => (
                              <Card key={i} className="bg-warning/5 border-l-4 border-l-warning">
                                <CardContent className="p-3 flex items-start gap-4">
                                  <div className="flex-1">
                                    <p className="text-sm font-medium flex items-center gap-2">
                                      <AlertTriangle className="w-4 h-4 text-warning" />
                                      {r.risk}
                                    </p>
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-sm text-muted-foreground">
                                      <span className="font-medium text-success">Mitigation:</span> {r.mitigation}
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Test Environment</h3>
                          <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded">{strategy.testEnvironment}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Tools</h3>
                          <div className="flex flex-wrap gap-2">
                            {strategy.tools.map((tool, i) => (
                              <Badge key={i} variant="secondary">{tool}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Test Plan */}
                  {practiceTab === "plan" && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ClipboardList className="w-5 h-5 text-primary" />
                          Test Plan - {req.domain}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="font-semibold mb-2">Test Approach</h3>
                          <p className="text-muted-foreground">{plan.testApproach}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3">Schedule</h3>
                          <div className="space-y-3">
                            {plan.schedule.map((phase, i) => (
                              <Card key={i} className="bg-muted/30">
                                <CardContent className="p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium">{phase.phase}</span>
                                    <Badge variant="outline">{phase.duration}</Badge>
                                  </div>
                                  <ul className="text-sm space-y-1">
                                    {phase.activities.map((act, j) => (
                                      <li key={j} className="flex items-start gap-2">
                                        <span className="text-primary">→</span> {act}
                                      </li>
                                    ))}
                                  </ul>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="bg-muted/30">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2">Resources</h4>
                              <ul className="text-sm space-y-1">
                                {plan.resources.map((r, i) => (
                                  <li key={i}>• {r}</li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="bg-muted/30">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2">Deliverables</h4>
                              <ul className="text-sm space-y-1">
                                {plan.deliverables.map((d, i) => (
                                  <li key={i}>• {d}</li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Defect Management</h3>
                          <p className="text-sm text-muted-foreground bg-destructive/5 border border-destructive/20 p-3 rounded">{plan.defectManagement}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Test Scenarios */}
                  {practiceTab === "scenarios" && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileCheck className="w-5 h-5 text-primary" />
                          Test Scenarios - {req.domain}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">Derived from requirements analysis</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {project.testScenarios.map((ts, i) => (
                            <Card key={i} className="bg-muted/30">
                              <CardContent className="p-3">
                                <div className="flex items-start gap-3">
                                  <Badge variant="outline" className="font-mono shrink-0">{ts.scenarioId}</Badge>
                                  <div>
                                    <p className="text-xs text-muted-foreground mb-1">{ts.requirement}</p>
                                    <p className="text-sm">{ts.scenario}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Test Cases */}
                  {practiceTab === "testcases" && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <TestTube className="w-5 h-5 text-primary" />
                          Test Cases - {req.domain}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">Detailed test cases derived from scenarios</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {project.testCases.map((tc, i) => (
                          <Card key={i} className="hover:shadow-soft transition-all">
                            <CardContent className="p-4 space-y-3">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <Badge variant="outline" className="font-mono text-xs">{tc.id}</Badge>
                                    <Badge className={tc.priority === "P1" ? "bg-destructive" : "bg-warning text-warning-foreground"}>{tc.priority}</Badge>
                                    <Badge variant="secondary" className="text-xs">{tc.scenario}</Badge>
                                  </div>
                                  <h3 className="font-medium">{tc.title}</h3>
                                </div>
                              </div>
                              <div className="text-sm space-y-2">
                                <p><span className="font-medium">Preconditions:</span> {tc.preconditions}</p>
                                <p><span className="font-medium">Steps:</span> {tc.steps.join(" → ")}</p>
                                <p><span className="font-medium">Test Data:</span> <code className="bg-muted px-1 rounded text-xs">{tc.testData}</code></p>
                                <p><span className="font-medium">Expected Result:</span> <span className="text-success">{tc.expectedResult}</span></p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </CardContent>
                    </Card>
                  )}
                </ScrollArea>
              );
            })()}
          </TabsContent>

          {/* AI Testing Tab */}
          <TabsContent value="ai-testing" className="space-y-6">
            <Tabs defaultValue="tools" className="space-y-4">
              <TabsList className="grid w-full max-w-2xl grid-cols-4 mx-auto">
                <TabsTrigger value="tools" className="gap-1"><Bot className="w-4 h-4" /> AI Tools</TabsTrigger>
                <TabsTrigger value="prompts" className="gap-1"><MessageSquare className="w-4 h-4" /> Prompts</TabsTrigger>
                <TabsTrigger value="examples" className="gap-1"><Code className="w-4 h-4" /> Examples</TabsTrigger>
                <TabsTrigger value="bugs" className="gap-1"><Bug className="w-4 h-4" /> Bug Detection</TabsTrigger>
              </TabsList>

              {/* AI Tools Section */}
              <TabsContent value="tools" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-primary" />
                      AI Test Generation Tools
                    </CardTitle>
                    <p className="text-muted-foreground">Comprehensive guide to AI-powered testing tools with features, examples, and comparisons</p>
                  </CardHeader>
                </Card>

                <ScrollArea className="h-[600px]">
                  <div className="space-y-6">
                    {aiTestGenTools.map((tool, idx) => (
                      <Collapsible key={idx}>
                        <Card className="border-l-4 border-l-primary">
                          <CollapsibleTrigger asChild>
                            <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{tool.name}</CardTitle>
                                <ChevronDown className="w-5 h-5 text-muted-foreground" />
                              </div>
                              <p className="text-sm text-muted-foreground">{tool.description}</p>
                            </CardHeader>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="space-y-4 pt-0">
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Zap className="w-4 h-4 text-warning" /> Key Features</h4>
                                <ul className="grid md:grid-cols-2 gap-1">
                                  {tool.keyFeatures.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle className="w-3 h-3 text-success" /> {f}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-primary/5 p-3 rounded-lg">
                                <h4 className="font-semibold mb-1">How It Uses AI</h4>
                                <p className="text-sm text-muted-foreground">{tool.howItUsesAI}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Real-Time Examples</h4>
                                <ul className="space-y-1">
                                  {tool.realTimeExamples.map((ex, i) => (
                                    <li key={i} className="text-sm flex items-start gap-2"><Target className="w-3 h-3 mt-1 text-primary shrink-0" /> {ex}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold mb-2 text-success">Advantages</h4>
                                  <ul className="space-y-1">
                                    {tool.advantages.map((a, i) => (
                                      <li key={i} className="text-sm flex items-center gap-2"><CheckCircle className="w-3 h-3 text-success" /> {a}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2 text-destructive">Limitations</h4>
                                  <ul className="space-y-1">
                                    {tool.limitations.map((l, i) => (
                                      <li key={i} className="text-sm flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-warning" /> {l}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Best Use Cases</h4>
                                <div className="flex flex-wrap gap-2">
                                  {tool.bestUseCases.map((uc, i) => (
                                    <Badge key={i} variant="secondary">{uc}</Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="bg-muted/50 p-3 rounded-lg">
                                <h4 className="font-semibold mb-2">Architecture/Workflow</h4>
                                <pre className="text-xs overflow-x-auto whitespace-pre font-mono">{tool.workflow}</pre>
                              </div>
                            </CardContent>
                          </CollapsibleContent>
                        </Card>
                      </Collapsible>
                    ))}

                    {/* Comparison Table */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Tool Comparison Matrix</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="bg-muted">
                                {toolComparisonTable.headers.map((h, i) => (
                                  <th key={i} className="border border-border p-2 text-left font-medium">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {toolComparisonTable.rows.map((row, i) => (
                                <tr key={i} className="hover:bg-muted/50">
                                  {row.map((cell, j) => (
                                    <td key={j} className="border border-border p-2">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* Prompts Guide Section */}
              <TabsContent value="prompts" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-warning" />
                      AI Prompt Engineering for QA
                    </CardTitle>
                    <p className="text-muted-foreground">Complete prompts guide from basic to advanced with real project examples</p>
                  </CardHeader>
                </Card>

                <ScrollArea className="h-[600px]">
                  <div className="space-y-6">
                    {promptsGuide.map((category, idx) => (
                      <Card key={idx} className={`border-l-4 ${category.level === "Basic" ? "border-l-success" : category.level === "Intermediate" ? "border-l-warning" : category.level === "Advanced" ? "border-l-destructive" : "border-l-primary"}`}>
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <Badge className={category.level === "Basic" ? "bg-success" : category.level === "Intermediate" ? "bg-warning text-warning-foreground" : category.level === "Advanced" ? "bg-destructive" : "bg-primary"}>{category.level}</Badge>
                            <CardTitle className="text-lg">{category.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {category.prompts.map((p, i) => (
                            <Collapsible key={i}>
                              <CollapsibleTrigger asChild>
                                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors">
                                  <span className="font-medium">{p.purpose}</span>
                                  <ChevronDown className="w-4 h-4" />
                                </div>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <div className="p-3 space-y-3 border-l-2 border-primary/30 ml-2 mt-2">
                                  <div>
                                    <h5 className="font-semibold text-sm mb-1">Prompt Template:</h5>
                                    <div className="bg-muted p-2 rounded text-sm font-mono whitespace-pre-wrap">{p.prompt}</div>
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-sm mb-1">Example:</h5>
                                    <pre className="bg-background border border-border p-2 rounded text-xs overflow-x-auto whitespace-pre-wrap">{p.example}</pre>
                                  </div>
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          ))}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* AI Automation Examples Section */}
              <TabsContent value="examples" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      AI-Assisted Automation Examples
                    </CardTitle>
                    <p className="text-muted-foreground">End-to-end real-time examples with code snippets (Java + Selenium)</p>
                  </CardHeader>
                </Card>

                <ScrollArea className="h-[600px]">
                  <div className="space-y-4">
                    {aiAutomationExamples.map((ex, idx) => (
                      <Collapsible key={idx}>
                        <Card>
                          <CollapsibleTrigger asChild>
                            <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">{ex.title}</CardTitle>
                                <ChevronDown className="w-5 h-5 text-muted-foreground" />
                              </div>
                              <p className="text-sm text-muted-foreground">{ex.scenario}</p>
                            </CardHeader>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="space-y-4 pt-0">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-muted/50 p-3 rounded-lg">
                                  <h4 className="font-semibold text-sm mb-1">Sample Input</h4>
                                  <p className="text-sm">{ex.sampleInput}</p>
                                </div>
                                <div className="bg-success/10 p-3 rounded-lg">
                                  <h4 className="font-semibold text-sm mb-1">Expected Output</h4>
                                  <p className="text-sm">{ex.expectedOutput}</p>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm mb-2">Code Snippet (Java + Selenium)</h4>
                                <pre className="bg-background border border-border p-3 rounded text-xs overflow-x-auto"><code>{ex.codeSnippet}</code></pre>
                              </div>
                              <div className="bg-primary/5 p-3 rounded-lg">
                                <h4 className="font-semibold text-sm mb-1">Explanation</h4>
                                <p className="text-sm text-muted-foreground">{ex.explanation}</p>
                              </div>
                            </CardContent>
                          </CollapsibleContent>
                        </Card>
                      </Collapsible>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* Bug Detection Section */}
              <TabsContent value="bugs" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bug className="w-5 h-5 text-destructive" />
                      AI Bug Detection Guide
                    </CardTitle>
                    <p className="text-muted-foreground">How AI helps detect bugs faster with real-time examples</p>
                  </CardHeader>
                </Card>

                <ScrollArea className="h-[600px]">
                  <div className="space-y-6">
                    {/* Bug Types */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Types of Bugs AI Can Detect</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {aiBugDetectionGuide.bugTypes.map((bug, i) => (
                            <div key={i} className="p-3 border rounded-lg hover:shadow-soft transition-all">
                              <h4 className="font-semibold text-sm mb-1">{bug.type}</h4>
                              <p className="text-xs text-muted-foreground mb-2">{bug.description}</p>
                              <p className="text-xs bg-primary/5 p-2 rounded"><span className="font-medium">AI Detection:</span> {bug.howAIDetects}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Detection Methods */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">How AI Detects Bugs Internally</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {aiBugDetectionGuide.detectionMethods.map((method, i) => (
                          <div key={i} className="p-4 border-l-4 border-l-primary bg-muted/30 rounded-r-lg">
                            <h4 className="font-semibold mb-1">{method.method}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {method.examples.map((ex, j) => (
                                <Badge key={j} variant="outline" className="text-xs">{ex}</Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Real-Time Examples */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Real-Time Bug Detection Examples</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {aiBugDetectionGuide.realTimeExamples.map((ex, i) => (
                          <Collapsible key={i}>
                            <CollapsibleTrigger asChild>
                              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors">
                                <span className="font-medium text-sm">{ex.scenario}</span>
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <div className="p-3 space-y-2 border-l-2 border-destructive/30 ml-2 mt-2">
                                <p className="text-sm"><span className="font-medium">Description:</span> {ex.description}</p>
                                <p className="text-sm bg-warning/10 p-2 rounded"><span className="font-medium">AI Detection:</span> {ex.aiDetection}</p>
                                <p className="text-sm bg-success/10 p-2 rounded"><span className="font-medium">Resolution:</span> {ex.resolution}</p>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Tester Guidelines */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">How Testers Should Work With AI</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {aiBugDetectionGuide.testerGuidelines.map((guide, i) => (
                            <div key={i} className="p-4 border rounded-lg">
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-primary" />
                                {guide.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">{guide.description}</p>
                              <ul className="space-y-1">
                                {guide.tips.map((tip, j) => (
                                  <li key={j} className="text-xs flex items-center gap-2"><CheckCircle className="w-3 h-3 text-success" /> {tip}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
