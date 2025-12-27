import { useState } from "react";
import { modules, testCases, testScenarioGuide, testStrategyGuide } from "@/data/courseData";
import { practiceProjects } from "@/data/practiceData";
import { aiTestGenTools, toolComparisonTable, promptsGuide, aiAutomationExamples, aiBugDetectionGuide } from "@/data/aiTestingData";
import { stlcAgileProjects, stlcDocumentation, automationDecisionMatrix } from "@/data/stlcAgileData";
import { agileBasics, jiraOverview, domainRequirements, handsOnPhases, agileTemplates, enhancedTestingActivities, interviewQuestions, traineeChecklists } from "@/data/agileJiraData";
import { interviewCategories, interviewTips } from "@/data/interviewPrepData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ChevronRight, BookOpen, Download, Search, Filter, AlertTriangle, FileText, Target, Shield, ChevronDown, ChevronUp, ClipboardList, Layers, FileCheck, TestTube, Bot, Cpu, Zap, Bug, Code, MessageSquare, Lightbulb, GitBranch, Users, PlayCircle, Settings, Briefcase, Layout, HelpCircle, CheckSquare, Presentation } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { downloadGuide, downloadInterviewPrepGuide } from "@/utils/downloadGuide";
import { downloadInterviewPrepPPT, downloadAgileJiraPPT, downloadSTLCAgilePPT } from "@/utils/pptDownload";
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
  const [selectedStlcDomain, setSelectedStlcDomain] = useState<number>(0);
  const [stlcTab, setStlcTab] = useState<string>("userstories");
  const [expandedStlcItems, setExpandedStlcItems] = useState<string[]>([]);
  const [selectedAgileDomain, setSelectedAgileDomain] = useState<number>(0);
  const [agileTab, setAgileTab] = useState<string>("basics");
  const [expandedAgileItems, setExpandedAgileItems] = useState<string[]>([]);
  const [completedChecklist, setCompletedChecklist] = useState<string[]>([]);
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
        {/* Uniqueness Banner */}
        <div className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_40%)]" />
          <div className="relative px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
                    What Makes Us Unique
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  India's Most Comprehensive QA Training
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Built specifically for freshers with zero testing knowledge — from fundamentals to interview-ready in one structured program.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-primary">11</div>
                  <div className="text-xs text-muted-foreground">Learning Modules</div>
                </div>
                <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-primary">80+</div>
                  <div className="text-xs text-muted-foreground">Test Cases</div>
                </div>
                <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-xs text-muted-foreground">Industry Domains</div>
                </div>
                <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Interview Ready</div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Real-World Scenarios", "AI Testing Module", "Agile & Jira Practice", "Downloadable Guides", "Domain-Specific Training", "Interview Prep Kit"].map((feature) => (
                <span key={feature} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 border border-border/50 text-sm text-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="course" className="space-y-6">
          <TabsList className="grid w-full max-w-6xl grid-cols-9 mx-auto">
            <TabsTrigger value="course">Course</TabsTrigger>
            <TabsTrigger value="testcases">Test Cases</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="ai-testing">AI Testing</TabsTrigger>
            <TabsTrigger value="stlc-agile">STLC Agile</TabsTrigger>
            <TabsTrigger value="agile-jira">Agile & Jira</TabsTrigger>
            <TabsTrigger value="interview-prep">Interview Prep</TabsTrigger>
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

          {/* STLC Agile Tab */}
          <TabsContent value="stlc-agile" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <GitBranch className="w-5 h-5 text-primary" />
                      STLC with Agile Methodology - Hands-on Training
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">
                      Complete software testing lifecycle using Agile methodology. Learn to decompose features into user stories, 
                      create test plans, write test cases, analyze automation candidates, and build regression/smoke test suites.
                    </p>
                  </div>
                  <Button onClick={downloadSTLCAgilePPT} className="gap-2" variant="default">
                    <Presentation className="w-4 h-4" />
                    Download as PPT
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {stlcAgileProjects.map((project, idx) => (
                    <Button
                      key={idx}
                      variant={selectedStlcDomain === idx ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedStlcDomain(idx)}
                      className="gap-2"
                    >
                      <span>{project.domainIcon}</span>
                      {project.domain}
                    </Button>
                  ))}
                </div>
                <div className="bg-accent/10 rounded-lg p-4">
                  <h3 className="font-semibold text-lg">{stlcAgileProjects[selectedStlcDomain]?.feature}</h3>
                  <p className="text-sm text-muted-foreground">{stlcAgileProjects[selectedStlcDomain]?.featureDescription}</p>
                </div>
              </CardContent>
            </Card>

            <Tabs value={stlcTab} onValueChange={setStlcTab} className="space-y-4">
              <TabsList className="grid w-full grid-cols-8">
                <TabsTrigger value="requirements" className="gap-1 text-xs"><FileText className="w-3 h-3" /> Requirements</TabsTrigger>
                <TabsTrigger value="workflow" className="gap-1 text-xs"><Lightbulb className="w-3 h-3" /> Workflow</TabsTrigger>
                <TabsTrigger value="userstories" className="gap-1 text-xs"><Users className="w-3 h-3" /> Stories</TabsTrigger>
                <TabsTrigger value="testplans" className="gap-1 text-xs"><ClipboardList className="w-3 h-3" /> Plans</TabsTrigger>
                <TabsTrigger value="testcases" className="gap-1 text-xs"><FileCheck className="w-3 h-3" /> Cases</TabsTrigger>
                <TabsTrigger value="automation" className="gap-1 text-xs"><TestTube className="w-3 h-3" /> Auto</TabsTrigger>
                <TabsTrigger value="sprint" className="gap-1 text-xs"><PlayCircle className="w-3 h-3" /> Sprint</TabsTrigger>
                <TabsTrigger value="regression" className="gap-1 text-xs"><Settings className="w-3 h-3" /> Reg</TabsTrigger>
              </TabsList>

              {/* Requirements Document */}
              <TabsContent value="requirements" className="space-y-4">
                <ScrollArea className="h-[550px]">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{stlcAgileProjects[selectedStlcDomain]?.requirementDocument.title}</CardTitle>
                          <Badge variant="outline">v{stlcAgileProjects[selectedStlcDomain]?.requirementDocument.version}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{stlcAgileProjects[selectedStlcDomain]?.requirementDocument.overview}</p>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2"><Target className="w-4 h-4 text-primary" /> Business Objectives</h4>
                          <ul className="space-y-1">
                            {stlcAgileProjects[selectedStlcDomain]?.requirementDocument.businessObjectives.map((obj, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-success" />{obj}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> Functional Requirements</h4>
                          <div className="space-y-3">
                            {stlcAgileProjects[selectedStlcDomain]?.requirementDocument.functionalRequirements.map((req, i) => (
                              <Card key={i} className="border-l-4 border-l-primary">
                                <CardContent className="p-4">
                                  <div className="flex items-start justify-between mb-2">
                                    <div>
                                      <Badge variant="outline" className="font-mono text-xs mb-1">{req.id}</Badge>
                                      <h5 className="font-semibold">{req.title}</h5>
                                    </div>
                                    <Badge className={req.priority === "Must Have" ? "bg-destructive" : req.priority === "Should Have" ? "bg-warning text-warning-foreground" : "bg-secondary"}>{req.priority}</Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">{req.description}</p>
                                  <div>
                                    <span className="text-xs font-medium">Acceptance Criteria:</span>
                                    <ul className="mt-1 space-y-1">
                                      {req.acceptanceCriteria.map((ac, j) => (
                                        <li key={j} className="text-xs flex items-center gap-1"><ChevronRight className="w-3 h-3" />{ac}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-muted/30 p-3 rounded-lg">
                            <h4 className="font-semibold text-sm mb-2">Non-Functional Requirements</h4>
                            <ul className="space-y-1">{stlcAgileProjects[selectedStlcDomain]?.requirementDocument.nonFunctionalRequirements.map((nfr, i) => <li key={i} className="text-xs flex items-center gap-1"><ChevronRight className="w-3 h-3" />{nfr}</li>)}</ul>
                          </div>
                          <div className="bg-warning/10 p-3 rounded-lg">
                            <h4 className="font-semibold text-sm mb-2">Constraints</h4>
                            <ul className="space-y-1">{stlcAgileProjects[selectedStlcDomain]?.requirementDocument.constraints.map((c, i) => <li key={i} className="text-xs flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-warning" />{c}</li>)}</ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* Workflow Explanation */}
              <TabsContent value="workflow" className="space-y-4">
                <ScrollArea className="h-[550px]">
                  <div className="space-y-4">
                    <Card className="bg-primary/5">
                      <CardContent className="p-4">
                        <p className="text-sm">{stlcAgileProjects[selectedStlcDomain]?.workflowExplanation.introduction}</p>
                      </CardContent>
                    </Card>
                    {stlcAgileProjects[selectedStlcDomain]?.workflowExplanation.steps.map((step, idx) => (
                      <Card key={idx}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">{step.step}</div>
                            <CardTitle className="text-base">{step.title}</CardTitle>
                          </div>
                          <p className="text-sm text-muted-foreground ml-11">{step.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-3 ml-11">
                          <div>
                            <h5 className="text-sm font-semibold mb-1">Key Activities</h5>
                            <ul className="space-y-1">{step.keyActivities.map((a, i) => <li key={i} className="text-xs flex items-center gap-1"><CheckCircle className="w-3 h-3 text-success" />{a}</li>)}</ul>
                          </div>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-muted/30 p-2 rounded">
                              <h5 className="text-xs font-semibold mb-1">Deliverables</h5>
                              <ul>{step.deliverables.map((d, i) => <li key={i} className="text-xs">• {d}</li>)}</ul>
                            </div>
                            <div className="bg-primary/10 p-2 rounded">
                              <h5 className="text-xs font-semibold mb-1">Tips</h5>
                              <ul>{step.tips.map((t, i) => <li key={i} className="text-xs">💡 {t}</li>)}</ul>
                            </div>
                          </div>
                          {step.example && <div className="bg-success/10 p-2 rounded text-xs"><strong>Example:</strong> {step.example}</div>}
                        </CardContent>
                      </Card>
                    ))}
                    <Card>
                      <CardHeader><CardTitle className="text-lg">Requirement to User Story Mapping</CardTitle></CardHeader>
                      <CardContent className="space-y-3">
                        {stlcAgileProjects[selectedStlcDomain]?.workflowExplanation.featureToStoryMapping.map((mapping, idx) => (
                          <div key={idx} className="border rounded-lg p-3">
                            <Badge variant="outline" className="mb-2">{mapping.requirement}</Badge>
                            <div className="flex flex-wrap gap-1 mb-2">{mapping.identifiedFeatures.map((f, i) => <Badge key={i} variant="secondary" className="text-xs">{f}</Badge>)}</div>
                            {mapping.userStories.map((us, i) => (
                              <div key={i} className="bg-muted/30 p-2 rounded text-sm">
                                <span className="font-mono text-xs">{us.storyId}</span>: {us.explanation}
                              </div>
                            ))}
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* User Stories */}
              <TabsContent value="userstories" className="space-y-4">
                <ScrollArea className="h-[550px]">
                  <div className="space-y-4">
                    {stlcAgileProjects[selectedStlcDomain]?.userStories.map((story, idx) => (
                      <Card key={idx} className="border-l-4 border-l-primary">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge variant="outline" className="font-mono mb-2">{story.id}</Badge>
                              <CardTitle className="text-lg">{story.title}</CardTitle>
                            </div>
                            <div className="flex gap-2">
                              <Badge className={story.priority === "High" ? "bg-destructive" : story.priority === "Medium" ? "bg-warning text-warning-foreground" : "bg-secondary"}>
                                {story.priority}
                              </Badge>
                              <Badge variant="outline">{story.storyPoints} SP</Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="bg-muted/50 p-3 rounded-lg space-y-1">
                            <p className="text-sm"><span className="font-medium">As a</span> {story.asA}</p>
                            <p className="text-sm"><span className="font-medium">I want</span> {story.iWant}</p>
                            <p className="text-sm"><span className="font-medium">So that</span> {story.soThat}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Acceptance Criteria</h4>
                            <ul className="space-y-1">
                              {story.acceptanceCriteria.map((ac, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                                  {ac}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* Test Plans */}
              <TabsContent value="testplans" className="space-y-4">
                <ScrollArea className="h-[550px]">
                  <div className="space-y-4">
                    {stlcAgileProjects[selectedStlcDomain]?.testPlans.map((plan, idx) => (
                      <Card key={idx}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="font-mono">{plan.userStoryId}</Badge>
                            <CardTitle className="text-lg">Test Plan</CardTitle>
                          </div>
                          <p className="text-sm text-muted-foreground">{plan.objective}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-sm mb-2">Scope</h4>
                              <ul className="space-y-1">
                                {plan.scope.map((s, i) => (
                                  <li key={i} className="text-sm flex items-center gap-2">
                                    <Target className="w-3 h-3 text-primary" /> {s}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm mb-2">Test Types</h4>
                              <div className="flex flex-wrap gap-1">
                                {plan.testTypes.map((t, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">{t}</Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="bg-muted/30 p-3 rounded-lg">
                            <h4 className="font-semibold text-sm mb-1">Approach</h4>
                            <p className="text-sm text-muted-foreground">{plan.approach}</p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-success/10 p-3 rounded-lg">
                              <h4 className="font-semibold text-sm mb-2">Entry Criteria</h4>
                              <ul className="space-y-1">
                                {plan.entryExitCriteria.entry.map((e, i) => (
                                  <li key={i} className="text-xs flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3" /> {e}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-primary/10 p-3 rounded-lg">
                              <h4 className="font-semibold text-sm mb-2">Exit Criteria</h4>
                              <ul className="space-y-1">
                                {plan.entryExitCriteria.exit.map((e, i) => (
                                  <li key={i} className="text-xs flex items-center gap-1">
                                    <ChevronRight className="w-3 h-3" /> {e}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                              <AlertTriangle className="w-4 h-4 text-warning" /> Risks
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {plan.risks.map((r, i) => (
                                <Badge key={i} variant="outline" className="text-xs bg-warning/10">{r}</Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* Manual Test Cases */}
              <TabsContent value="testcases" className="space-y-4">
                <ScrollArea className="h-[550px]">
                  <div className="space-y-4">
                    {stlcAgileProjects[selectedStlcDomain]?.manualTestCases.map((tc, idx) => (
                      <Collapsible key={idx}>
                        <Card>
                          <CollapsibleTrigger asChild>
                            <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors">
                              <div className="flex items-start justify-between">
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <Badge variant="outline" className="font-mono text-xs">{tc.id}</Badge>
                                    <Badge variant="outline" className="font-mono text-xs">{tc.userStoryId}</Badge>
                                    <Badge className={tc.priority === "High" ? "bg-destructive" : tc.priority === "Medium" ? "bg-warning text-warning-foreground" : "bg-secondary"}>
                                      {tc.priority}
                                    </Badge>
                                  </div>
                                  <CardTitle className="text-base">{tc.title}</CardTitle>
                                </div>
                                <div className="flex items-center gap-2">
                                  {tc.automationCandidate ? (
                                    <Badge className="bg-success">Automatable</Badge>
                                  ) : (
                                    <Badge variant="outline">Manual Only</Badge>
                                  )}
                                  <ChevronDown className="w-4 h-4" />
                                </div>
                              </div>
                            </CardHeader>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="space-y-4 pt-0">
                              <div>
                                <h4 className="font-semibold text-sm mb-2">Preconditions</h4>
                                <ul className="flex flex-wrap gap-2">
                                  {tc.preconditions.map((p, i) => (
                                    <Badge key={i} variant="secondary" className="text-xs">{p}</Badge>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm mb-2">Test Steps</h4>
                                <div className="border rounded-lg overflow-hidden">
                                  <table className="w-full text-sm">
                                    <thead className="bg-muted">
                                      <tr>
                                        <th className="p-2 text-left w-12">#</th>
                                        <th className="p-2 text-left">Step</th>
                                        <th className="p-2 text-left">Expected Result</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {tc.steps.map((step, i) => (
                                        <tr key={i} className="border-t">
                                          <td className="p-2 font-mono">{i + 1}</td>
                                          <td className="p-2">{step.step}</td>
                                          <td className="p-2 text-success">{step.expectedResult}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className={`p-3 rounded-lg ${tc.automationCandidate ? 'bg-success/10' : 'bg-muted/50'}`}>
                                <h4 className="font-semibold text-sm mb-1">
                                  {tc.automationCandidate ? '✓ Automation Candidate' : '✗ Manual Only'}
                                </h4>
                                <p className="text-sm text-muted-foreground">{tc.automationReason}</p>
                              </div>
                            </CardContent>
                          </CollapsibleContent>
                        </Card>
                      </Collapsible>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* Automation Analysis */}
              <TabsContent value="automation" className="space-y-4">
                <ScrollArea className="h-[550px]">
                  <div className="space-y-4">
                    {stlcAgileProjects[selectedStlcDomain]?.automationAnalysis.map((analysis, idx) => (
                      <Card key={idx}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="font-mono">{analysis.userStoryId}</Badge>
                              <CardTitle className="text-lg">Automation Analysis</CardTitle>
                            </div>
                            <Badge className="bg-primary">{analysis.automationPercentage}% Automatable</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Recommended Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {analysis.recommendedTools.map((tool, i) => (
                                <Badge key={i} variant="secondary">{tool}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Test Case Analysis</h4>
                            <div className="space-y-2">
                              {analysis.testCases.map((tc, i) => (
                                <div key={i} className={`p-3 rounded-lg border ${tc.automatable ? 'border-success/30 bg-success/5' : 'border-muted'}`}>
                                  <div className="flex items-start justify-between mb-2">
                                    <Badge variant="outline" className="font-mono text-xs">{tc.testCaseId}</Badge>
                                    <div className="flex gap-2">
                                      <Badge variant={tc.automatable ? "default" : "outline"} className={tc.automatable ? "bg-success" : ""}>
                                        {tc.automatable ? "Automate" : "Manual"}
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">ROI: {tc.roi}</Badge>
                                      <Badge variant="outline" className="text-xs">Complexity: {tc.complexity}</Badge>
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-1">{tc.reason}</p>
                                  <p className="text-xs"><span className="font-medium">Framework:</span> {tc.framework}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* Sprint Automation */}
              <TabsContent value="sprint" className="space-y-4">
                <ScrollArea className="h-[550px]">
                  <div className="space-y-4">
                    {stlcAgileProjects[selectedStlcDomain]?.sprintAutomation.map((sprint, idx) => (
                      <Card key={idx}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <PlayCircle className="w-5 h-5 text-primary" />
                              Sprint {sprint.sprintNumber}
                            </CardTitle>
                            <div className="flex gap-2">
                              <Badge variant="secondary">{sprint.metrics.automated}/{sprint.metrics.totalTests} Automated</Badge>
                              <Badge className="bg-primary">{sprint.metrics.coverage}% Coverage</Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Sprint Goals</h4>
                            <ul className="grid md:grid-cols-2 gap-2">
                              {sprint.goals.map((goal, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                  <Target className="w-4 h-4 text-primary" /> {goal}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Automated Tests</h4>
                            <div className="space-y-3">
                              {sprint.automatedTests.map((test, i) => (
                                <Collapsible key={i}>
                                  <CollapsibleTrigger asChild>
                                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors">
                                      <div className="flex items-center gap-2">
                                        <Code className="w-4 h-4 text-primary" />
                                        <span className="font-medium text-sm">{test.testName}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Badge variant={test.type === "Smoke" ? "default" : test.type === "Regression" ? "secondary" : "outline"} className="text-xs">
                                          {test.type}
                                        </Badge>
                                        <Badge variant="outline" className="text-xs">{test.framework}</Badge>
                                        <ChevronDown className="w-4 h-4" />
                                      </div>
                                    </div>
                                  </CollapsibleTrigger>
                                  <CollapsibleContent>
                                    <div className="mt-2">
                                      <pre className="bg-background border border-border p-3 rounded text-xs overflow-x-auto"><code>{test.code}</code></pre>
                                    </div>
                                  </CollapsibleContent>
                                </Collapsible>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              {/* Regression/Smoke Tests */}
              <TabsContent value="regression" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Smoke Tests */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="w-5 h-5 text-warning" />
                        Smoke Tests
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {stlcAgileProjects[selectedStlcDomain]?.smokeTests.executionStrategy}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">CI/CD Integration</h4>
                        <p className="text-xs text-muted-foreground">{stlcAgileProjects[selectedStlcDomain]?.smokeTests.ciCdIntegration}</p>
                      </div>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-2">
                          {stlcAgileProjects[selectedStlcDomain]?.smokeTests.tests.map((test, i) => (
                            <div key={i} className="p-3 border rounded-lg hover:shadow-soft transition-all">
                              <div className="flex items-start justify-between mb-1">
                                <Badge variant="outline" className="font-mono text-xs">{test.id}</Badge>
                                <Badge className={test.priority === "P0" ? "bg-destructive" : test.priority === "P1" ? "bg-warning text-warning-foreground" : "bg-secondary"}>
                                  {test.priority}
                                </Badge>
                              </div>
                              <h4 className="font-medium text-sm">{test.name}</h4>
                              <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                                <span>⏱ {test.estimatedTime}</span>
                                <span>🔄 {test.frequency}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Regression Tests */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Settings className="w-5 h-5 text-primary" />
                        Regression Tests
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {stlcAgileProjects[selectedStlcDomain]?.regressionTests.executionStrategy}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">CI/CD Integration</h4>
                        <p className="text-xs text-muted-foreground">{stlcAgileProjects[selectedStlcDomain]?.regressionTests.ciCdIntegration}</p>
                      </div>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-2">
                          {stlcAgileProjects[selectedStlcDomain]?.regressionTests.tests.map((test, i) => (
                            <div key={i} className="p-3 border rounded-lg hover:shadow-soft transition-all">
                              <div className="flex items-start justify-between mb-1">
                                <Badge variant="outline" className="font-mono text-xs">{test.id}</Badge>
                                <Badge className={test.priority === "P0" ? "bg-destructive" : test.priority === "P1" ? "bg-warning text-warning-foreground" : "bg-secondary"}>
                                  {test.priority}
                                </Badge>
                              </div>
                              <h4 className="font-medium text-sm">{test.name}</h4>
                              <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                                <span>⏱ {test.estimatedTime}</span>
                                <span>🔄 {test.frequency}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Agile & Jira Tab */}
          <TabsContent value="agile-jira" className="space-y-6">
            {/* Header with Download Button */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">Agile & Jira Training</h2>
                <p className="text-muted-foreground">Complete guide to Agile methodology and Jira tool</p>
              </div>
              <Button onClick={downloadAgileJiraPPT} className="gap-2" variant="default">
                <Presentation className="w-4 h-4" />
                Download as PPT
              </Button>
            </div>
            
            <Tabs value={agileTab} onValueChange={setAgileTab} className="space-y-6">
              <TabsList className="grid w-full max-w-4xl grid-cols-8 mx-auto">
                <TabsTrigger value="basics">Basics</TabsTrigger>
                <TabsTrigger value="jira">Jira</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="handson">Hands-On</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="testing">Testing</TabsTrigger>
                <TabsTrigger value="interview">Interview</TabsTrigger>
                <TabsTrigger value="checklist">Checklist</TabsTrigger>
              </TabsList>

              {/* Agile Basics */}
              <TabsContent value="basics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      {agileBasics.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{agileBasics.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Scrum Roles */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Scrum Roles</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {agileBasics.scrumRoles.map((role, i) => (
                          <Card key={i} className="border-l-4 border-l-primary">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">{role.role}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <ul className="space-y-1">
                                {role.responsibilities.map((r, j) => (
                                  <li key={j} className="text-sm flex items-start gap-2">
                                    <CheckCircle className="w-3 h-3 mt-1 text-success shrink-0" />
                                    {r}
                                  </li>
                                ))}
                              </ul>
                              <div className="bg-accent/10 p-2 rounded text-xs">
                                <span className="font-medium">Example: </span>{role.realWorldExample}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Ceremonies */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Scrum Ceremonies</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {agileBasics.ceremonies.map((ceremony, i) => (
                          <Collapsible key={i} open={expandedAgileItems.includes(`ceremony-${i}`)} onOpenChange={() => setExpandedAgileItems(prev => prev.includes(`ceremony-${i}`) ? prev.filter(x => x !== `ceremony-${i}`) : [...prev, `ceremony-${i}`])}>
                            <Card>
                              <CollapsibleTrigger asChild>
                                <CardHeader className="cursor-pointer hover:bg-muted/50">
                                  <div className="flex items-center justify-between">
                                    <CardTitle className="text-base">{ceremony.name}</CardTitle>
                                    <div className="flex items-center gap-2">
                                      <Badge variant="outline">{ceremony.duration}</Badge>
                                      {expandedAgileItems.includes(`ceremony-${i}`) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{ceremony.purpose}</p>
                                </CardHeader>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <CardContent className="pt-0 space-y-3">
                                  <div>
                                    <h5 className="text-sm font-medium mb-1">Participants</h5>
                                    <div className="flex flex-wrap gap-1">
                                      {ceremony.participants.map((p, j) => (
                                        <Badge key={j} variant="secondary" className="text-xs">{p}</Badge>
                                      ))}
                                    </div>
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-medium mb-1">Outcomes</h5>
                                    <ul className="space-y-1">
                                      {ceremony.outcomes.map((o, j) => (
                                        <li key={j} className="text-xs flex items-center gap-1">
                                          <CheckCircle className="w-3 h-3 text-success" />{o}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="bg-warning/10 p-2 rounded">
                                    <h5 className="text-sm font-medium mb-1">Tips</h5>
                                    <ul className="space-y-1">
                                      {ceremony.tips.map((t, j) => (
                                        <li key={j} className="text-xs flex items-center gap-1">
                                          <Lightbulb className="w-3 h-3 text-warning" />{t}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </CardContent>
                              </CollapsibleContent>
                            </Card>
                          </Collapsible>
                        ))}
                      </div>
                    </div>

                    {/* Artifacts */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Scrum Artifacts</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {agileBasics.artifacts.map((artifact, i) => (
                          <Card key={i}>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">{artifact.name}</CardTitle>
                              <Badge variant="outline" className="w-fit">{artifact.owner}</Badge>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <p className="text-sm text-muted-foreground">{artifact.description}</p>
                              <div className="bg-muted/50 p-2 rounded text-xs">
                                <span className="font-medium">Example: </span>{artifact.example}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Jira Overview */}
              <TabsContent value="jira" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Layout className="w-5 h-5 text-primary" />
                      Jira Overview
                    </CardTitle>
                    <p className="text-muted-foreground">{jiraOverview.whatIsJira}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Why Companies Use Jira */}
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <h3 className="font-semibold mb-3">Why Companies Use Jira</h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {jiraOverview.whyCompaniesUseIt.map((reason, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success" />{reason}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Jira Hierarchy */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Jira Hierarchy: Epic → Story → Task → Sub-task</h3>
                      <div className="space-y-3">
                        {jiraOverview.hierarchy.map((level, i) => (
                          <Card key={i} className={`border-l-4 ${i === 0 ? 'border-l-primary' : i === 1 ? 'border-l-success' : i === 2 ? 'border-l-warning' : i === 3 ? 'border-l-secondary' : 'border-l-destructive'}`}>
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-semibold">{level.level}</h4>
                                <Badge variant="outline">{level.whenToUse}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{level.description}</p>
                              <div className="bg-muted/50 p-2 rounded text-xs">
                                <span className="font-medium">Example: </span>{level.example}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                      <div className="grid md:grid-cols-3 gap-2">
                        {jiraOverview.keyFeatures.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 bg-muted/50 rounded text-sm">
                            <Zap className="w-4 h-4 text-primary" />{feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Domain Requirements */}
              <TabsContent value="requirements" className="space-y-6">
                <div className="flex gap-2 flex-wrap mb-4">
                  {domainRequirements.map((domain, i) => (
                    <Button key={i} variant={selectedAgileDomain === i ? "default" : "outline"} onClick={() => setSelectedAgileDomain(i)} className="gap-2">
                      <Briefcase className="w-4 h-4" />
                      {domain.domain}
                    </Button>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>{domainRequirements[selectedAgileDomain]?.projectName}</CardTitle>
                    <p className="text-muted-foreground">{domainRequirements[selectedAgileDomain]?.businessContext}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Functional Requirements */}
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">Functional Requirements</h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {domainRequirements[selectedAgileDomain]?.functionalRequirements.map((req, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success" />{req}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* How to Identify Features */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-warning" />
                        How to Identify Features (Step-by-Step)
                      </h3>
                      <div className="space-y-4">
                        {domainRequirements[selectedAgileDomain]?.howToIdentifyFeatures.map((step, i) => (
                          <Card key={i} className="border-l-4 border-l-primary">
                            <CardContent className="p-4">
                              <h4 className="font-semibold text-primary mb-2">{step.step}</h4>
                              <p className="text-sm text-muted-foreground mb-3">{step.explanation}</p>
                              <div className="bg-accent/10 p-3 rounded">
                                <span className="font-medium text-sm">Example: </span>
                                <span className="text-sm">{step.example}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Epics and User Stories */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Epics & User Stories</h3>
                      <ScrollArea className="h-[500px]">
                        <div className="space-y-4">
                          {domainRequirements[selectedAgileDomain]?.epics.map((epic, i) => (
                            <Collapsible key={i} open={expandedAgileItems.includes(`epic-${i}`)} onOpenChange={() => setExpandedAgileItems(prev => prev.includes(`epic-${i}`) ? prev.filter(x => x !== `epic-${i}`) : [...prev, `epic-${i}`])}>
                              <Card>
                                <CollapsibleTrigger asChild>
                                  <CardHeader className="cursor-pointer hover:bg-muted/50">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <CardTitle className="text-base flex items-center gap-2">
                                          <Layers className="w-4 h-4 text-primary" />
                                          Epic: {epic.name}
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground">{epic.description}</p>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Badge>{epic.userStories.length} Stories</Badge>
                                        {expandedAgileItems.includes(`epic-${i}`) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                      </div>
                                    </div>
                                  </CardHeader>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <CardContent className="pt-0 space-y-3">
                                    <div className="bg-success/10 p-2 rounded text-sm">
                                      <span className="font-medium">Business Value: </span>{epic.businessValue}
                                    </div>
                                    {epic.userStories.map((story, j) => (
                                      <Card key={j} className="border-l-4 border-l-success">
                                        <CardContent className="p-4 space-y-3">
                                          <div className="flex items-start justify-between">
                                            <div>
                                              <Badge variant="outline" className="font-mono text-xs mb-2">{story.id}</Badge>
                                              <h5 className="font-medium">{story.title}</h5>
                                            </div>
                                            <div className="flex gap-2">
                                              <Badge className={story.priority === "High" ? "bg-destructive" : story.priority === "Medium" ? "bg-warning text-warning-foreground" : "bg-secondary"}>{story.priority}</Badge>
                                              <Badge variant="outline">{story.storyPoints} pts</Badge>
                                            </div>
                                          </div>
                                          <div className="bg-muted/50 p-3 rounded text-sm">
                                            <p><strong>As a</strong> {story.asA},</p>
                                            <p><strong>I want</strong> {story.iWant},</p>
                                            <p><strong>So that</strong> {story.soThat}</p>
                                          </div>
                                          <div>
                                            <h6 className="text-sm font-medium mb-2">Acceptance Criteria</h6>
                                            <ul className="space-y-1">
                                              {story.acceptanceCriteria.map((ac, k) => (
                                                <li key={k} className="text-xs flex items-start gap-2">
                                                  <CheckCircle className="w-3 h-3 mt-0.5 text-success shrink-0" />{ac}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </CardContent>
                                      </Card>
                                    ))}
                                  </CardContent>
                                </CollapsibleContent>
                              </Card>
                            </Collapsible>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Hands-On Phases */}
              <TabsContent value="handson" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PlayCircle className="w-5 h-5 text-primary" />
                      Step-by-Step Hands-On Instructions
                    </CardTitle>
                    <p className="text-muted-foreground">Follow these phases to set up and work with Jira in an Agile environment</p>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px]">
                      <div className="space-y-4">
                        {handsOnPhases.map((phase, i) => (
                          <Collapsible key={i} open={expandedAgileItems.includes(`phase-${i}`)} onOpenChange={() => setExpandedAgileItems(prev => prev.includes(`phase-${i}`) ? prev.filter(x => x !== `phase-${i}`) : [...prev, `phase-${i}`])}>
                            <Card className="border-l-4 border-l-primary">
                              <CollapsibleTrigger asChild>
                                <CardHeader className="cursor-pointer hover:bg-muted/50">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <Badge className="mb-2">{phase.phase}</Badge>
                                      <CardTitle className="text-base">{phase.title}</CardTitle>
                                      <p className="text-sm text-muted-foreground">{phase.objective}</p>
                                    </div>
                                    {expandedAgileItems.includes(`phase-${i}`) ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                  </div>
                                </CardHeader>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <CardContent className="pt-0 space-y-4">
                                  {phase.steps.map((step, j) => (
                                    <div key={j} className="border rounded-lg p-4">
                                      <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                          {step.stepNumber}
                                        </div>
                                        <h5 className="font-semibold">{step.action}</h5>
                                      </div>
                                      <ul className="space-y-1 mb-3">
                                        {step.details.map((d, k) => (
                                          <li key={k} className="text-sm flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />{d}
                                          </li>
                                        ))}
                                      </ul>
                                      <div className="bg-warning/10 p-2 rounded">
                                        <h6 className="text-xs font-medium mb-1 flex items-center gap-1">
                                          <Lightbulb className="w-3 h-3 text-warning" /> Tips
                                        </h6>
                                        <ul className="space-y-1">
                                          {step.tips.map((t, k) => (
                                            <li key={k} className="text-xs">{t}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  ))}
                                  <div className="bg-success/10 p-3 rounded border border-success/20">
                                    <h5 className="text-sm font-medium flex items-center gap-2">
                                      <CheckCircle className="w-4 h-4 text-success" />
                                      Expected Outcome
                                    </h5>
                                    <p className="text-sm mt-1">{phase.expectedOutcome}</p>
                                  </div>
                                </CardContent>
                              </CollapsibleContent>
                            </Card>
                          </Collapsible>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Templates */}
              <TabsContent value="templates" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Agile Document Templates
                    </CardTitle>
                    <p className="text-muted-foreground">Ready-to-use templates for Agile documentation</p>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px]">
                      <div className="space-y-4">
                        {agileTemplates.map((template, i) => (
                          <Collapsible key={i} open={expandedAgileItems.includes(`template-${i}`)} onOpenChange={() => setExpandedAgileItems(prev => prev.includes(`template-${i}`) ? prev.filter(x => x !== `template-${i}`) : [...prev, `template-${i}`])}>
                            <Card>
                              <CollapsibleTrigger asChild>
                                <CardHeader className="cursor-pointer hover:bg-muted/50">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <CardTitle className="text-base">{template.name}</CardTitle>
                                      <p className="text-sm text-muted-foreground">{template.purpose}</p>
                                    </div>
                                    {expandedAgileItems.includes(`template-${i}`) ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                  </div>
                                </CardHeader>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <CardContent className="pt-0 space-y-4">
                                  <div>
                                    <h5 className="font-medium mb-2">Template Sections</h5>
                                    <div className="grid md:grid-cols-2 gap-2">
                                      {template.sections.map((section, j) => (
                                        <div key={j} className="p-2 border rounded text-sm">
                                          <span className="font-medium">{section.sectionName}:</span> {section.content}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div>
                                    <h5 className="font-medium mb-2">Example</h5>
                                    <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto whitespace-pre-wrap">{template.example}</pre>
                                  </div>
                                </CardContent>
                              </CollapsibleContent>
                            </Card>
                          </Collapsible>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Testing Activities */}
              <TabsContent value="testing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TestTube className="w-5 h-5 text-primary" />
                      Testing Activities in Agile Sprint
                    </CardTitle>
                    <p className="text-muted-foreground">Comprehensive guide to all testing activities with detailed deliverables and examples</p>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[700px]">
                      <div className="space-y-6">
                        {enhancedTestingActivities.map((activity, i) => (
                          <Collapsible key={i} open={expandedAgileItems.includes(`activity-${i}`)} onOpenChange={() => setExpandedAgileItems(prev => prev.includes(`activity-${i}`) ? prev.filter(x => x !== `activity-${i}`) : [...prev, `activity-${i}`])}>
                            <Card className="border-l-4 border-l-primary">
                              <CollapsibleTrigger asChild>
                                <CardHeader className="cursor-pointer hover:bg-muted/50">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <CardTitle className="text-lg flex items-center gap-2">
                                        <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-sm">{i + 1}</span>
                                        {activity.activity}
                                      </CardTitle>
                                      <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                                    </div>
                                    {expandedAgileItems.includes(`activity-${i}`) ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                  </div>
                                </CardHeader>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <CardContent className="space-y-6">
                                  {/* What It Is & Why It Matters */}
                                  <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                                      <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                                        <HelpCircle className="w-4 h-4" /> What Is It?
                                      </h5>
                                      <p className="text-sm">{activity.whatItIs}</p>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                      <h5 className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                                        <Target className="w-4 h-4" /> Why It Matters
                                      </h5>
                                      <p className="text-sm">{activity.whyItMatters}</p>
                                    </div>
                                  </div>

                                  {/* Deliverables Section */}
                                  <div>
                                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                      <FileText className="w-5 h-5 text-primary" />
                                      Deliverables ({activity.deliverables.length})
                                    </h4>
                                    <div className="space-y-4">
                                      {activity.deliverables.map((deliverable, j) => (
                                        <Collapsible key={j} open={expandedAgileItems.includes(`del-${i}-${j}`)} onOpenChange={() => setExpandedAgileItems(prev => prev.includes(`del-${i}-${j}`) ? prev.filter(x => x !== `del-${i}-${j}`) : [...prev, `del-${i}-${j}`])}>
                                          <Card className="bg-muted/30">
                                            <CollapsibleTrigger asChild>
                                              <CardHeader className="cursor-pointer hover:bg-muted/50 py-3">
                                                <div className="flex items-center justify-between">
                                                  <div className="flex items-center gap-3">
                                                    <Badge variant="outline">{j + 1}</Badge>
                                                    <div>
                                                      <h5 className="font-medium">{deliverable.name}</h5>
                                                      <p className="text-sm text-muted-foreground">{deliverable.description}</p>
                                                    </div>
                                                  </div>
                                                  {expandedAgileItems.includes(`del-${i}-${j}`) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                                </div>
                                              </CardHeader>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                              <CardContent className="pt-0 space-y-4">
                                                <div className="bg-primary/5 p-3 rounded border">
                                                  <h6 className="text-sm font-medium mb-1">Purpose</h6>
                                                  <p className="text-sm">{deliverable.purpose}</p>
                                                </div>
                                                <div>
                                                  <h6 className="text-sm font-medium mb-2">Key Elements</h6>
                                                  <div className="flex flex-wrap gap-2">
                                                    {deliverable.keyElements.map((element, k) => (
                                                      <Badge key={k} variant="secondary" className="text-xs">{element}</Badge>
                                                    ))}
                                                  </div>
                                                </div>
                                                {deliverable.sampleContent && (
                                                  <div>
                                                    <h6 className="text-sm font-medium mb-2">Sample Content</h6>
                                                    <pre className="bg-background p-4 rounded-lg border text-xs overflow-x-auto whitespace-pre-wrap font-mono">{deliverable.sampleContent}</pre>
                                                  </div>
                                                )}
                                              </CardContent>
                                            </CollapsibleContent>
                                          </Card>
                                        </Collapsible>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Best Practices */}
                                  <div>
                                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                                      <CheckCircle className="w-5 h-5 text-success" />
                                      Best Practices
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-2">
                                      {activity.bestPractices.map((bp, j) => (
                                        <div key={j} className="flex items-center gap-2 p-2 bg-success/10 rounded text-sm">
                                          <CheckCircle className="w-4 h-4 text-success shrink-0" />
                                          {bp}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Domain Example */}
                                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                                      <BookOpen className="w-5 h-5 text-accent-foreground" />
                                      Real-World Example: {activity.domainExample.domain} - {activity.domainExample.scenario}
                                    </h4>
                                    <pre className="bg-background p-4 rounded-lg text-xs overflow-x-auto whitespace-pre-wrap font-mono border">{activity.domainExample.sampleDeliverable}</pre>
                                  </div>
                                </CardContent>
                              </CollapsibleContent>
                            </Card>
                          </Collapsible>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Interview Questions */}
              <TabsContent value="interview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      Interview Questions
                    </CardTitle>
                    <p className="text-muted-foreground">Common interview questions with expected answers</p>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px]">
                      <div className="space-y-6">
                        {interviewQuestions.map((category, i) => (
                          <div key={i}>
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                              <Badge>{category.category}</Badge>
                            </h3>
                            <div className="space-y-3">
                              {category.questions.map((q, j) => (
                                <Collapsible key={j} open={expandedAgileItems.includes(`q-${i}-${j}`)} onOpenChange={() => setExpandedAgileItems(prev => prev.includes(`q-${i}-${j}`) ? prev.filter(x => x !== `q-${i}-${j}`) : [...prev, `q-${i}-${j}`])}>
                                  <Card>
                                    <CollapsibleTrigger asChild>
                                      <CardHeader className="cursor-pointer hover:bg-muted/50 py-3">
                                        <div className="flex items-center justify-between">
                                          <CardTitle className="text-sm font-medium">{j + 1}. {q.question}</CardTitle>
                                          {expandedAgileItems.includes(`q-${i}-${j}`) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                        </div>
                                      </CardHeader>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                      <CardContent className="pt-0 space-y-3">
                                        <div className="bg-success/10 p-3 rounded border border-success/20">
                                          <h5 className="text-sm font-medium mb-1">Expected Answer</h5>
                                          <p className="text-sm">{q.expectedAnswer}</p>
                                        </div>
                                        <div>
                                          <h5 className="text-sm font-medium mb-2">Follow-up Questions</h5>
                                          <ul className="space-y-1">
                                            {q.followUpQuestions.map((fq, k) => (
                                              <li key={k} className="text-xs flex items-center gap-2">
                                                <MessageSquare className="w-3 h-3 text-primary" />{fq}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </CardContent>
                                    </CollapsibleContent>
                                  </Card>
                                </Collapsible>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Checklist */}
              <TabsContent value="checklist" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-primary" />
                      Trainee Checklist
                    </CardTitle>
                    <p className="text-muted-foreground">Track your progress through the Agile & Jira training</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={(completedChecklist.length / traineeChecklists.reduce((acc, c) => acc + c.items.length, 0)) * 100} className="flex-1 h-2" />
                      <span className="text-sm font-medium">{completedChecklist.length}/{traineeChecklists.reduce((acc, c) => acc + c.items.length, 0)} completed</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {traineeChecklists.map((category, i) => (
                        <div key={i}>
                          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Badge variant="outline">{category.category}</Badge>
                          </h3>
                          <div className="space-y-2">
                            {category.items.map((item, j) => {
                              const itemId = `${category.category}-${j}`;
                              const isCompleted = completedChecklist.includes(itemId);
                              return (
                                <div key={j} className={`p-3 border rounded-lg cursor-pointer transition-all ${isCompleted ? 'bg-success/10 border-success/30' : 'hover:bg-muted/50'}`} onClick={() => setCompletedChecklist(prev => isCompleted ? prev.filter(x => x !== itemId) : [...prev, itemId])}>
                                  <div className="flex items-start gap-3">
                                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 ${isCompleted ? 'bg-success border-success' : 'border-muted-foreground'}`}>
                                      {isCompleted && <CheckCircle className="w-4 h-4 text-success-foreground" />}
                                    </div>
                                    <div>
                                      <p className={`text-sm font-medium ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>{item.task}</p>
                                      <p className="text-xs text-muted-foreground">{item.notes}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* Interview Prep Tab */}
          <TabsContent value="interview-prep" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Complete Interview Preparation Package</h2>
              <p className="text-muted-foreground">All questions from all tabs with STLC Agile & Agile-Jira examples and sample documents</p>
              <div className="flex justify-center gap-4 mt-4">
                <Badge variant="secondary" className="text-sm">{interviewCategories.length} Categories</Badge>
                <Badge variant="secondary" className="text-sm">{interviewCategories.reduce((acc, c) => acc + c.questions.length, 0)} Questions</Badge>
              </div>
              <div className="flex gap-3 mt-4">
                <Button onClick={downloadInterviewPrepGuide} className="gap-2" variant="outline">
                  <Download className="w-4 h-4" />
                  Download as Markdown
                </Button>
                <Button onClick={downloadInterviewPrepPPT} className="gap-2" variant="default">
                  <Presentation className="w-4 h-4" />
                  Download as PPT
                </Button>
              </div>
            </div>

            {/* Interview Tips Card */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Interview Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Before Interview</h4>
                    <ul className="text-sm space-y-1">
                      {interviewTips.preparation.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">During Interview</h4>
                    <ul className="text-sm space-y-1">
                      {interviewTips.during.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Common Tips</h4>
                    <ul className="text-sm space-y-1">
                      {interviewTips.common.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Question Categories */}
            <div className="space-y-8">
              {interviewCategories.map((category, catIdx) => (
                <Card key={catIdx}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      {category.category}
                      <Badge variant="outline">{category.questions.length} Questions</Badge>
                    </CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.questions.map((q, qIdx) => (
                      <Collapsible key={qIdx}>
                        <CollapsibleTrigger className="w-full">
                          <div className="flex items-start gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-all text-left">
                            <Badge variant={q.difficulty === "Beginner" ? "secondary" : q.difficulty === "Intermediate" ? "default" : "destructive"} className="shrink-0 mt-1">
                              {q.difficulty}
                            </Badge>
                            <div className="flex-1">
                              <h4 className="font-semibold">{q.question}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{q.shortAnswer}</p>
                            </div>
                            <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="p-4 border border-t-0 rounded-b-lg bg-muted/30 space-y-4">
                            {/* Detailed Answer */}
                            <div>
                              <h5 className="font-semibold text-primary mb-2">Detailed Answer:</h5>
                              <pre className="text-sm whitespace-pre-wrap bg-background p-3 rounded border">{q.detailedAnswer}</pre>
                            </div>

                            {/* STLC Agile Example */}
                            {q.stlcAgileExample && (
                              <div className="border-l-4 border-blue-500 pl-4">
                                <h5 className="font-semibold text-blue-600 mb-2 flex items-center gap-2">
                                  <GitBranch className="w-4 h-4" />
                                  STLC Agile Example:
                                </h5>
                                <p className="text-sm mb-2"><strong>Context:</strong> {q.stlcAgileExample.context}</p>
                                <p className="text-sm mb-2"><strong>Real-World Scenario:</strong> {q.stlcAgileExample.realWorldScenario}</p>
                                {q.stlcAgileExample.sampleDocument && (
                                  <div>
                                    <p className="text-sm font-medium mb-1">Sample Document:</p>
                                    <pre className="text-xs bg-slate-900 text-green-400 p-3 rounded overflow-x-auto">{q.stlcAgileExample.sampleDocument}</pre>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Agile & Jira Example */}
                            {q.agileJiraExample && (
                              <div className="border-l-4 border-purple-500 pl-4">
                                <h5 className="font-semibold text-purple-600 mb-2 flex items-center gap-2">
                                  <Layout className="w-4 h-4" />
                                  Agile & Jira Example:
                                </h5>
                                <p className="text-sm mb-2"><strong>Context:</strong> {q.agileJiraExample.context}</p>
                                <p className="text-sm mb-2"><strong>Real-World Scenario:</strong> {q.agileJiraExample.realWorldScenario}</p>
                                {q.agileJiraExample.sampleDocument && (
                                  <div>
                                    <p className="text-sm font-medium mb-1">Sample Document:</p>
                                    <pre className="text-xs bg-slate-900 text-cyan-400 p-3 rounded overflow-x-auto">{q.agileJiraExample.sampleDocument}</pre>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Tips & Mistakes */}
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-success/10 p-3 rounded">
                                <h5 className="font-semibold text-success mb-2">💡 Tips:</h5>
                                <ul className="text-sm space-y-1">
                                  {q.tips.map((tip, i) => <li key={i}>• {tip}</li>)}
                                </ul>
                              </div>
                              <div className="bg-destructive/10 p-3 rounded">
                                <h5 className="font-semibold text-destructive mb-2">⚠️ Common Mistakes:</h5>
                                <ul className="text-sm space-y-1">
                                  {q.commonMistakes.map((m, i) => <li key={i}>• {m}</li>)}
                                </ul>
                              </div>
                            </div>

                            {/* Follow-up Questions */}
                            <div className="bg-muted p-3 rounded">
                              <h5 className="font-semibold mb-2">🔄 Follow-up Questions to Prepare:</h5>
                              <div className="space-y-3">
                                {q.followUpQuestions.map((fq, i) => (
                                  typeof fq === 'string' ? (
                                    <div key={i} className="text-sm">• {fq}</div>
                                  ) : (
                                    <Collapsible key={i}>
                                      <CollapsibleTrigger className="w-full text-left">
                                        <div className="flex items-center gap-2 p-2 bg-background rounded border hover:bg-muted/50 transition-all">
                                          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                                          <span className="text-sm font-medium">{fq.question}</span>
                                        </div>
                                      </CollapsibleTrigger>
                                      <CollapsibleContent>
                                        <div className="ml-6 mt-2 space-y-3 p-3 border-l-2 border-primary/30">
                                          <div>
                                            <h6 className="text-xs font-semibold text-primary uppercase mb-1">Answer:</h6>
                                            <pre className="text-sm whitespace-pre-wrap bg-background p-2 rounded border">{fq.answer}</pre>
                                          </div>
                                          <div>
                                            <h6 className="text-xs font-semibold text-green-600 uppercase mb-1">Real-Time Example:</h6>
                                            <pre className="text-xs bg-slate-900 text-green-400 p-3 rounded overflow-x-auto">{fq.realTimeExample}</pre>
                                          </div>
                                        </div>
                                      </CollapsibleContent>
                                    </Collapsible>
                                  )
                                ))}
                              </div>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
