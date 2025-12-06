import { useState } from "react";
import { modules, testCases, testScenarioGuide, testStrategyGuide } from "@/data/courseData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ChevronRight, BookOpen, Download, Search, Filter, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

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
              <a href="/Pack2_Functional_Testing_Complete_Guide.md" download>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" /> Download Guide
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="course" className="space-y-6">
          <TabsList className="grid w-full max-w-lg grid-cols-4 mx-auto">
            <TabsTrigger value="course">Course</TabsTrigger>
            <TabsTrigger value="testcases">Test Cases</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
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
                <CardTitle>Test Scenario Guide</CardTitle>
                <p className="text-muted-foreground">{testScenarioGuide.definition}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Best Practices</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {testScenarioGuide.bestPractices.map((bp, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-success" />{bp}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Real Examples by Feature</h3>
                  {testScenarioGuide.realExamples.map((ex, i) => (
                    <Card key={i} className="bg-muted/50">
                      <CardHeader className="pb-2"><CardTitle className="text-base">{ex.feature}</CardTitle></CardHeader>
                      <CardContent>
                        <ul className="grid md:grid-cols-2 gap-1 text-sm">
                          {ex.scenarios.map((s, j) => <li key={j} className="flex items-start gap-2"><span className="text-primary">•</span>{s}</li>)}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
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
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
