import { modules, testCases, testScenarioGuide, testStrategyGuide } from "@/data/courseData";
import { practiceProjects } from "@/data/practiceData";

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

  content += `\n---\n\n*Generated from Functional Testing Mastery Training Course*\n`;
  content += `*Total Modules: ${modules.length} | Total Lessons: ${modules.reduce((acc, m) => acc + m.lessons.length, 0)} | Total Test Cases: ${testCases.length} | Practice Projects: ${practiceProjects.length}*\n`;

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
