import { modules, testCases, testScenarioGuide, testStrategyGuide } from "@/data/courseData";

export const generateFullGuideMarkdown = (): string => {
  let content = `# Functional Testing Complete Guide
## Pack 2 - Training Course Document

---

# TABLE OF CONTENTS

1. Course Modules
2. Test Cases Library
3. Test Scenario Guide
4. Test Strategy Guide

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
  
  content += `## Best Practices\n\n`;
  testScenarioGuide.bestPractices.forEach(practice => {
    content += `- ${practice}\n`;
  });
  content += "\n";
  
  content += `## Real-World Examples by Feature\n\n`;
  testScenarioGuide.realExamples.forEach(example => {
    content += `### ${example.feature}\n\n`;
    
    // Add detailed explanation if available
    if ((example as any).detailedExplanation) {
      content += `**Overview:** ${(example as any).detailedExplanation.overview}\n\n`;
      
      if ((example as any).detailedExplanation.businessContext) {
        content += `**Business Context:**\n${(example as any).detailedExplanation.businessContext}\n\n`;
      }
      
      if ((example as any).detailedExplanation.testApproach) {
        content += `**Testing Approach:**\n${(example as any).detailedExplanation.testApproach}\n\n`;
      }
      
      if ((example as any).detailedExplanation.keyRisks) {
        content += `**Key Risks:**\n`;
        (example as any).detailedExplanation.keyRisks.forEach((risk: string) => {
          content += `- ${risk}\n`;
        });
        content += "\n";
      }
    }
    
    content += `**Scenarios:**\n`;
    example.scenarios.forEach((scenario, i) => {
      content += `${i + 1}. ${scenario}\n`;
    });
    content += "\n";
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

  content += `---\n\n*Generated from Functional Testing Mastery Training Course*\n`;
  content += `*Total Modules: ${modules.length} | Total Lessons: ${modules.reduce((acc, m) => acc + m.lessons.length, 0)} | Total Test Cases: ${testCases.length}*\n`;

  return content;
};

export const downloadGuide = () => {
  const content = generateFullGuideMarkdown();
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Functional_Testing_Complete_Guide.md";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
