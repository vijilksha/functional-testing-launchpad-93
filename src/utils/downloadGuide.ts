import { modules, testCases, testScenarioGuide, testStrategyGuide } from "@/data/courseData";
import { practiceProjects } from "@/data/practiceData";
import { aiTestGenTools, toolComparisonTable, promptsGuide, aiAutomationExamples, aiBugDetectionGuide } from "@/data/aiTestingData";
import { stlcAgileProjects } from "@/data/stlcAgileData";

export const generateFullGuideMarkdown = (): string => {
  let content = `# Functional Testing Complete Guide
## Pack 2 - Training Course Document

---

# TABLE OF CONTENTS

1. Course Modules
2. Test Cases Library
3. Test Scenario Guide
4. Test Strategy Guide
5. Practice Projects (Requirements → Test Cases)
6. AI-Based Testing Materials (Pack 6)
7. STLC with Agile Methodology

---

# PART 1: COURSE MODULES

`;

  // Generate modules content
  modules.forEach((module, moduleIndex) => {
    content += `## Module ${moduleIndex + 1}: ${module.title}\n\n`;
    content += `*${module.description}*\n\n`;
    
    module.lessons.forEach((lesson, lessonIndex) => {
      content += `### Lesson ${lessonIndex + 1}: ${lesson.title}\n\n`;
      content += `**Duration:** ${lesson.duration}\n\n`;
      content += `**Overview:** ${lesson.content.overview}\n\n`;
      
      lesson.content.sections.forEach(section => {
        content += `#### ${section.title}\n\n`;
        
        if (section.type === "text" && section.content) {
          content += `${section.content}\n\n`;
        }
        
        if (section.type === "table" && section.tableData) {
          // Generate markdown table
          const headers = section.tableData.headers;
          content += `| ${headers.join(" | ")} |\n`;
          content += `| ${headers.map(() => "---").join(" | ")} |\n`;
          section.tableData.rows.forEach(row => {
            content += `| ${row.join(" | ")} |\n`;
          });
          content += "\n";
        }
      });
      
      content += `**Key Takeaways:**\n`;
      lesson.content.keyTakeaways.forEach(takeaway => {
        content += `- ${takeaway}\n`;
      });
      content += "\n---\n\n";
    });
  });

  // Generate Test Cases
  content += `# PART 2: TEST CASES LIBRARY\n\n`;
  content += `*Total Test Cases: ${testCases.length}*\n\n`;
  
  // Group by category
  const categories = [...new Set(testCases.map(tc => tc.category))];
  categories.forEach(category => {
    const categoryTests = testCases.filter(tc => tc.category === category);
    content += `## ${category} Test Cases\n\n`;
    
    categoryTests.forEach(tc => {
      content += `### ${tc.id}: ${tc.title}\n\n`;
      content += `- **Priority:** ${tc.priority}\n`;
      content += `- **Type:** ${tc.type}\n`;
      content += `- **Preconditions:** ${tc.preconditions}\n`;
      content += `- **Test Data:** ${tc.testData}\n\n`;
      content += `**Steps:**\n`;
      tc.steps.forEach((step, i) => {
        content += `${i + 1}. ${step}\n`;
      });
      content += `\n**Expected Result:** ${tc.expectedResult}\n\n---\n\n`;
    });
  });

  // Generate Test Scenario Guide
  content += `# PART 3: TEST SCENARIO GUIDE\n\n`;
  content += `## Definition\n\n${testScenarioGuide.definition}\n\n`;
  
  content += `## Test Scenario vs Test Case\n\n`;
  content += testScenarioGuide.vsTestCase + "\n\n";
  
  // Add Importance section
  if ((testScenarioGuide as any).importance) {
    content += `## Why Test Scenarios Are Important\n\n`;
    (testScenarioGuide as any).importance.forEach((item: string) => {
      content += `- ${item}\n`;
    });
    content += "\n";
  }
  
  // Add How to Write section
  if ((testScenarioGuide as any).howToWrite) {
    content += `## How to Write Effective Test Scenarios\n\n`;
    (testScenarioGuide as any).howToWrite.forEach((item: string, index: number) => {
      content += `${index + 1}. ${item}\n`;
    });
    content += "\n";
  }
  
  content += `## Best Practices\n\n`;
  testScenarioGuide.bestPractices.forEach(practice => {
    content += `- ${practice}\n`;
  });
  content += "\n";
  
  content += `## Real-World Examples by Feature\n\n`;
  content += `*The following examples provide detailed test scenarios across multiple application domains including E-commerce, Insurance, Banking, and Telecom. Each example includes business context, testing approach, and key risks to consider.*\n\n`;
  
  testScenarioGuide.realExamples.forEach(example => {
    content += `### ${example.feature}\n\n`;
    
    // Add detailed explanation if available
    if ((example as any).detailedExplanation) {
      const detail = (example as any).detailedExplanation;
      
      if (detail.overview) {
        content += `#### Overview\n\n${detail.overview}\n\n`;
      }
      
      if (detail.businessContext) {
        content += `#### Business Context\n\n${detail.businessContext}\n\n`;
      }
      
      if (detail.testApproach) {
        content += `#### Testing Approach\n\n${detail.testApproach}\n\n`;
      }
      
      if (detail.keyRisks && detail.keyRisks.length > 0) {
        content += `#### Key Risks to Test\n\n`;
        detail.keyRisks.forEach((risk: string) => {
          content += `- ⚠️ ${risk}\n`;
        });
        content += "\n";
      }
    }
    
    content += `#### Test Scenarios\n\n`;
    example.scenarios.forEach((scenario, i) => {
      content += `${i + 1}. ${scenario}\n`;
    });
    content += "\n---\n\n";
  });

  // Generate Test Strategy Guide
  content += `# PART 4: TEST STRATEGY GUIDE\n\n`;
  content += `## Definition\n\n${testStrategyGuide.definition}\n\n`;
  
  content += `## Strategy Components\n\n`;
  testStrategyGuide.components.forEach(component => {
    content += `### ${component.name}\n\n`;
    content += `${component.description}\n\n`;
    content += `**Example:** ${component.example}\n\n`;
  });
  
  if (testStrategyGuide.domainStrategies) {
    content += `## Domain-Specific Test Strategies\n\n`;
    testStrategyGuide.domainStrategies.forEach(ds => {
      content += `### ${ds.domain}\n\n`;
      content += `**Focus:** ${ds.focus}\n\n`;
      
      content += `**Key Testing Areas:**\n`;
      ds.keyAreas.forEach(area => {
        content += `- ${area}\n`;
      });
      content += "\n";
      
      content += `**Risk Areas:**\n`;
      ds.risks.forEach(risk => {
        content += `- ${risk}\n`;
      });
      content += "\n";
    });
  }

  // Generate Practice Projects
  content += `# PART 5: PRACTICE PROJECTS\n\n`;
  content += `*Complete examples showing the full testing workflow: Requirements → Test Strategy → Test Plan → Test Scenarios → Test Cases*\n\n`;
  
  practiceProjects.forEach((project, projectIndex) => {
    const req = project.requirementDocument;
    const strategy = project.testStrategy;
    const plan = project.testPlan;
    
    content += `---\n\n## Project ${projectIndex + 1}: ${req.domain}\n\n`;
    
    // Requirements Document
    content += `### 5.${projectIndex + 1}.1 Requirements Document\n\n`;
    content += `**Document ID:** ${req.id}\n`;
    content += `**Project Name:** ${req.projectName}\n`;
    content += `**Version:** ${req.version}\n\n`;
    content += `**Description:**\n${req.description}\n\n`;
    
    content += `**Objectives:**\n`;
    req.objectives.forEach((obj, i) => {
      content += `${i + 1}. ${obj}\n`;
    });
    content += "\n";
    
    content += `**Functional Requirements:**\n\n`;
    req.functionalRequirements.forEach(fr => {
      content += `#### ${fr.id}: ${fr.title}\n\n`;
      content += `${fr.description}\n\n`;
      content += `**Acceptance Criteria:**\n`;
      fr.acceptanceCriteria.forEach(ac => {
        content += `- ✓ ${ac}\n`;
      });
      content += "\n";
    });
    
    content += `**Non-Functional Requirements:**\n`;
    req.nonFunctionalRequirements.forEach(nfr => {
      content += `- ${nfr}\n`;
    });
    content += "\n";
    
    content += `**Assumptions:**\n`;
    req.assumptions.forEach(a => {
      content += `- ${a}\n`;
    });
    content += "\n";
    
    content += `**Constraints:**\n`;
    req.constraints.forEach(c => {
      content += `- ${c}\n`;
    });
    content += "\n";
    
    // Test Strategy
    content += `### 5.${projectIndex + 1}.2 Test Strategy\n\n`;
    content += `**Scope:** ${strategy.scope}\n\n`;
    
    content += `**Test Objectives:**\n`;
    strategy.objectives.forEach((obj, i) => {
      content += `${i + 1}. ${obj}\n`;
    });
    content += "\n";
    
    content += `**Test Levels:** ${strategy.testLevels.join(", ")}\n\n`;
    content += `**Test Types:** ${strategy.testTypes.join(", ")}\n\n`;
    
    content += `**Entry Criteria:**\n`;
    strategy.entryExitCriteria.entry.forEach(e => {
      content += `- ${e}\n`;
    });
    content += "\n";
    
    content += `**Exit Criteria:**\n`;
    strategy.entryExitCriteria.exit.forEach(e => {
      content += `- ${e}\n`;
    });
    content += "\n";
    
    content += `**Risk Analysis:**\n\n`;
    content += `| Risk | Mitigation |\n`;
    content += `| --- | --- |\n`;
    strategy.riskAnalysis.forEach(r => {
      content += `| ${r.risk} | ${r.mitigation} |\n`;
    });
    content += "\n";
    
    content += `**Test Environment:** ${strategy.testEnvironment}\n\n`;
    content += `**Tools:** ${strategy.tools.join(", ")}\n\n`;
    
    // Test Plan
    content += `### 5.${projectIndex + 1}.3 Test Plan\n\n`;
    content += `**Test Approach:** ${plan.testApproach}\n\n`;
    
    content += `**Schedule:**\n\n`;
    content += `| Phase | Duration | Activities |\n`;
    content += `| --- | --- | --- |\n`;
    plan.schedule.forEach(phase => {
      content += `| ${phase.phase} | ${phase.duration} | ${phase.activities.join(", ")} |\n`;
    });
    content += "\n";
    
    content += `**Resources:** ${plan.resources.join(", ")}\n\n`;
    content += `**Deliverables:** ${plan.deliverables.join(", ")}\n\n`;
    content += `**Defect Management:** ${plan.defectManagement}\n\n`;
    
    // Test Scenarios
    content += `### 5.${projectIndex + 1}.4 Test Scenarios\n\n`;
    content += `| Scenario ID | Requirement | Test Scenario |\n`;
    content += `| --- | --- | --- |\n`;
    project.testScenarios.forEach(ts => {
      content += `| ${ts.scenarioId} | ${ts.requirement} | ${ts.scenario} |\n`;
    });
    content += "\n";
    
    // Test Cases
    content += `### 5.${projectIndex + 1}.5 Test Cases\n\n`;
    project.testCases.forEach(tc => {
      content += `#### ${tc.id}: ${tc.title}\n\n`;
      content += `- **Scenario:** ${tc.scenario}\n`;
      content += `- **Priority:** ${tc.priority}\n`;
      content += `- **Preconditions:** ${tc.preconditions}\n`;
      content += `- **Test Data:** ${tc.testData}\n\n`;
      content += `**Steps:**\n`;
      tc.steps.forEach((step, i) => {
        content += `${i + 1}. ${step}\n`;
      });
      content += `\n**Expected Result:** ${tc.expectedResult}\n\n---\n\n`;
    });
  });

  // PART 6: AI-BASED TESTING MATERIALS
  content += `# PART 6: AI-BASED TESTING MATERIALS (PACK 6)\n\n`;
  content += `*Comprehensive training bundle for AI-augmented testing*\n\n`;

  // 6.1 AI Test Generation Tools
  content += `## 6.1 AI Test Generation Tools\n\n`;
  
  aiTestGenTools.forEach((tool, idx) => {
    content += `### ${idx + 1}. ${tool.name}\n\n`;
    content += `**Description:** ${tool.description}\n\n`;
    
    content += `**Key Features:**\n`;
    tool.keyFeatures.forEach(f => {
      content += `- ${f}\n`;
    });
    content += "\n";
    
    content += `**How It Uses AI:**\n${tool.howItUsesAI}\n\n`;
    
    content += `**Real-Time Examples:**\n`;
    tool.realTimeExamples.forEach(ex => {
      content += `- ${ex}\n`;
    });
    content += "\n";
    
    content += `**Advantages:**\n`;
    tool.advantages.forEach(a => {
      content += `- ✓ ${a}\n`;
    });
    content += "\n";
    
    content += `**Limitations:**\n`;
    tool.limitations.forEach(l => {
      content += `- ⚠ ${l}\n`;
    });
    content += "\n";
    
    content += `**Best Use Cases:**\n`;
    tool.bestUseCases.forEach(uc => {
      content += `- ${uc}\n`;
    });
    content += "\n";
    
    content += `**Architecture/Workflow:**\n\`\`\`\n${tool.workflow}\n\`\`\`\n\n`;
    content += "---\n\n";
  });

  // Tool Comparison Table
  content += `### Tool Comparison Matrix\n\n`;
  content += `| ${toolComparisonTable.headers.join(" | ")} |\n`;
  content += `| ${toolComparisonTable.headers.map(() => "---").join(" | ")} |\n`;
  toolComparisonTable.rows.forEach(row => {
    content += `| ${row.join(" | ")} |\n`;
  });
  content += "\n";

  // 6.2 Prompts Guide
  content += `## 6.2 AI Prompt Engineering for QA\n\n`;
  
  promptsGuide.forEach(category => {
    content += `### ${category.level}: ${category.title}\n\n`;
    
    category.prompts.forEach((p, i) => {
      content += `#### ${i + 1}. ${p.purpose}\n\n`;
      content += `**Prompt Template:**\n\`\`\`\n${p.prompt}\n\`\`\`\n\n`;
      content += `**Example:**\n\`\`\`\n${p.example}\n\`\`\`\n\n`;
    });
  });

  // 6.3 AI-Assisted Automation Examples
  content += `## 6.3 AI-Assisted Automation Examples\n\n`;
  
  aiAutomationExamples.forEach((ex, idx) => {
    content += `### ${idx + 1}. ${ex.title}\n\n`;
    content += `**Scenario:** ${ex.scenario}\n\n`;
    content += `**Sample Input:** ${ex.sampleInput}\n\n`;
    content += `**Expected Output:** ${ex.expectedOutput}\n\n`;
    content += `**Code Snippet (Java + Selenium):**\n\`\`\`java\n${ex.codeSnippet}\n\`\`\`\n\n`;
    content += `**Explanation:** ${ex.explanation}\n\n`;
    content += "---\n\n";
  });

  // 6.4 AI Bug Detection Guide
  content += `## 6.4 AI Bug Detection Guide\n\n`;
  
  content += `### Types of Bugs AI Can Detect\n\n`;
  content += `| Bug Type | Description | How AI Detects |\n`;
  content += `| --- | --- | --- |\n`;
  aiBugDetectionGuide.bugTypes.forEach(bug => {
    content += `| ${bug.type} | ${bug.description} | ${bug.howAIDetects} |\n`;
  });
  content += "\n";

  content += `### How AI Detects Bugs Internally\n\n`;
  aiBugDetectionGuide.detectionMethods.forEach(method => {
    content += `#### ${method.method}\n\n`;
    content += `${method.description}\n\n`;
    content += `**Examples:**\n`;
    method.examples.forEach(ex => {
      content += `- ${ex}\n`;
    });
    content += "\n";
  });

  content += `### Real-Time Bug Detection Examples\n\n`;
  aiBugDetectionGuide.realTimeExamples.forEach((ex, i) => {
    content += `#### ${i + 1}. ${ex.scenario}\n\n`;
    content += `- **Description:** ${ex.description}\n`;
    content += `- **AI Detection:** ${ex.aiDetection}\n`;
    content += `- **Resolution:** ${ex.resolution}\n\n`;
  });

  content += `### How Testers Should Work With AI\n\n`;
  aiBugDetectionGuide.testerGuidelines.forEach(guide => {
    content += `#### ${guide.title}\n\n`;
    content += `${guide.description}\n\n`;
    content += `**Tips:**\n`;
    guide.tips.forEach(tip => {
      content += `- ${tip}\n`;
    });
    content += "\n";
  });

  // PART 7: STLC WITH AGILE METHODOLOGY
  content += `# PART 7: STLC WITH AGILE METHODOLOGY\n\n`;
  content += `*Complete software testing lifecycle using Agile methodology - from requirements to regression testing*\n\n`;

  stlcAgileProjects.forEach((project, projectIndex) => {
    content += `---\n\n## ${project.domainIcon} ${project.domain} Domain\n\n`;
    content += `### Feature: ${project.feature}\n\n`;
    content += `${project.featureDescription}\n\n`;

    // User Stories
    content += `### 7.${projectIndex + 1}.1 User Stories\n\n`;
    project.userStories.forEach(story => {
      content += `#### ${story.id}: ${story.title}\n\n`;
      content += `- **Priority:** ${story.priority} | **Story Points:** ${story.storyPoints}\n\n`;
      content += `**As a** ${story.asA}\n`;
      content += `**I want** ${story.iWant}\n`;
      content += `**So that** ${story.soThat}\n\n`;
      content += `**Acceptance Criteria:**\n`;
      story.acceptanceCriteria.forEach(ac => {
        content += `- ✓ ${ac}\n`;
      });
      content += "\n";
    });

    // Test Plans
    content += `### 7.${projectIndex + 1}.2 Test Plans\n\n`;
    project.testPlans.forEach(plan => {
      content += `#### Test Plan for ${plan.userStoryId}\n\n`;
      content += `**Objective:** ${plan.objective}\n\n`;
      content += `**Approach:** ${plan.approach}\n\n`;
      content += `**Scope:**\n`;
      plan.scope.forEach(s => {
        content += `- ${s}\n`;
      });
      content += "\n";
      content += `**Test Types:** ${plan.testTypes.join(", ")}\n\n`;
      content += `**Entry Criteria:**\n`;
      plan.entryExitCriteria.entry.forEach(e => {
        content += `- ${e}\n`;
      });
      content += "\n";
      content += `**Exit Criteria:**\n`;
      plan.entryExitCriteria.exit.forEach(e => {
        content += `- ${e}\n`;
      });
      content += "\n";
      content += `**Risks:**\n`;
      plan.risks.forEach(r => {
        content += `- ⚠ ${r}\n`;
      });
      content += "\n";
      content += `**Resources:** ${plan.resources.join(", ")}\n\n`;
    });

    // Manual Test Cases
    content += `### 7.${projectIndex + 1}.3 Manual Test Cases\n\n`;
    project.manualTestCases.forEach(tc => {
      content += `#### ${tc.id}: ${tc.title}\n\n`;
      content += `- **User Story:** ${tc.userStoryId}\n`;
      content += `- **Priority:** ${tc.priority}\n`;
      content += `- **Automation Candidate:** ${tc.automationCandidate ? "Yes" : "No"}\n\n`;
      content += `**Preconditions:**\n`;
      tc.preconditions.forEach(p => {
        content += `- ${p}\n`;
      });
      content += "\n";
      content += `**Test Steps:**\n\n`;
      content += `| Step | Action | Expected Result |\n`;
      content += `| --- | --- | --- |\n`;
      tc.steps.forEach((step, i) => {
        content += `| ${i + 1} | ${step.step} | ${step.expectedResult} |\n`;
      });
      content += "\n";
      content += `**Automation Analysis:** ${tc.automationReason}\n\n`;
    });

    // Automation Analysis
    content += `### 7.${projectIndex + 1}.4 Automation Analysis\n\n`;
    project.automationAnalysis.forEach(analysis => {
      content += `#### Analysis for ${analysis.userStoryId}\n\n`;
      content += `**Automation Coverage:** ${analysis.automationPercentage}%\n\n`;
      content += `**Recommended Tools:** ${analysis.recommendedTools.join(", ")}\n\n`;
      content += `| Test Case | Automatable | Complexity | ROI | Framework | Reason |\n`;
      content += `| --- | --- | --- | --- | --- | --- |\n`;
      analysis.testCases.forEach(tc => {
        content += `| ${tc.testCaseId} | ${tc.automatable ? "Yes" : "No"} | ${tc.complexity} | ${tc.roi} | ${tc.framework} | ${tc.reason} |\n`;
      });
      content += "\n";
    });

    // Sprint Automation
    content += `### 7.${projectIndex + 1}.5 Sprint Automation\n\n`;
    project.sprintAutomation.forEach(sprint => {
      content += `#### Sprint ${sprint.sprintNumber}\n\n`;
      content += `**Metrics:** ${sprint.metrics.automated}/${sprint.metrics.totalTests} tests automated (${sprint.metrics.coverage}% coverage)\n\n`;
      content += `**Goals:**\n`;
      sprint.goals.forEach(g => {
        content += `- ${g}\n`;
      });
      content += "\n";
      content += `**Automated Tests:**\n\n`;
      sprint.automatedTests.forEach(test => {
        content += `##### ${test.testName} (${test.type})\n\n`;
        content += `**Framework:** ${test.framework}\n\n`;
        content += `\`\`\`java\n${test.code}\n\`\`\`\n\n`;
      });
    });

    // Smoke Tests
    content += `### 7.${projectIndex + 1}.6 Smoke Tests\n\n`;
    content += `**Execution Strategy:** ${project.smokeTests.executionStrategy}\n\n`;
    content += `**CI/CD Integration:** ${project.smokeTests.ciCdIntegration}\n\n`;
    content += `| ID | Test Name | Priority | Frequency | Est. Time |\n`;
    content += `| --- | --- | --- | --- | --- |\n`;
    project.smokeTests.tests.forEach(test => {
      content += `| ${test.id} | ${test.name} | ${test.priority} | ${test.frequency} | ${test.estimatedTime} |\n`;
    });
    content += "\n";

    // Regression Tests
    content += `### 7.${projectIndex + 1}.7 Regression Tests\n\n`;
    content += `**Execution Strategy:** ${project.regressionTests.executionStrategy}\n\n`;
    content += `**CI/CD Integration:** ${project.regressionTests.ciCdIntegration}\n\n`;
    content += `| ID | Test Name | Priority | Frequency | Est. Time |\n`;
    content += `| --- | --- | --- | --- | --- |\n`;
    project.regressionTests.tests.forEach(test => {
      content += `| ${test.id} | ${test.name} | ${test.priority} | ${test.frequency} | ${test.estimatedTime} |\n`;
    });
    content += "\n";
  });

  content += `\n---\n\n*Generated from Functional Testing Mastery Training Course*\n`;
  content += `*Total Modules: ${modules.length} | Total Lessons: ${modules.reduce((acc, m) => acc + m.lessons.length, 0)} | Total Test Cases: ${testCases.length} | Practice Projects: ${practiceProjects.length} | AI Tools: ${aiTestGenTools.length} | STLC Domains: ${stlcAgileProjects.length}*\n`;

  return content;
};

export const downloadGuide = () => {
  try {
    const content = generateFullGuideMarkdown();
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Functional_Testing_Complete_Guide.md";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 100);
  } catch (error) {
    console.error("Download failed:", error);
    // Fallback method
    const content = generateFullGuideMarkdown();
    const dataUri = "data:text/markdown;charset=utf-8," + encodeURIComponent(content);
    const link = document.createElement("a");
    link.href = dataUri;
    link.download = "Functional_Testing_Complete_Guide.md";
    link.click();
  }
};
