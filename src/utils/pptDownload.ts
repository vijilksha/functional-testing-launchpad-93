import PptxGenJS from "pptxgenjs";
import { interviewCategories, interviewTips } from "@/data/interviewPrepData";
import { agileBasics, jiraOverview, domainRequirements, handsOnPhases, agileTemplates, enhancedTestingActivities, interviewQuestions, traineeChecklists } from "@/data/agileJiraData";
import { stlcAgileProjects } from "@/data/stlcAgileData";
// Color scheme
const COLORS = {
  primary: "3B82F6",
  primaryDark: "1E40AF",
  secondary: "6366F1",
  success: "22C55E",
  warning: "F59E0B",
  destructive: "EF4444",
  background: "F8FAFC",
  text: "1E293B",
  muted: "64748B",
  white: "FFFFFF"
};

// Helper to add a title slide
const addTitleSlide = (pptx: PptxGenJS, title: string, subtitle: string) => {
  const slide = pptx.addSlide();
  slide.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { color: COLORS.primary } });
  slide.addText(title, { x: 0.5, y: 2, w: 9, h: 1.5, fontSize: 40, bold: true, color: COLORS.white, align: "center" });
  slide.addText(subtitle, { x: 0.5, y: 3.5, w: 9, h: 0.8, fontSize: 18, color: COLORS.background, align: "center" });
  slide.addText("Functional Testing Training Course", { x: 0.5, y: 5, w: 9, h: 0.5, fontSize: 12, color: COLORS.background, align: "center" });
};

// Helper to add a section header slide
const addSectionSlide = (pptx: PptxGenJS, title: string, description?: string) => {
  const slide = pptx.addSlide();
  slide.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { color: COLORS.secondary } });
  slide.addText(title, { x: 0.5, y: 2.5, w: 9, h: 1, fontSize: 32, bold: true, color: COLORS.white, align: "center" });
  if (description) {
    slide.addText(description, { x: 0.5, y: 3.5, w: 9, h: 0.8, fontSize: 16, color: COLORS.background, align: "center" });
  }
};

// Helper to add content slide
const addContentSlide = (pptx: PptxGenJS, title: string, bullets: string[], subtitle?: string) => {
  const slide = pptx.addSlide();
  slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
  slide.addText(title, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 24, bold: true, color: COLORS.white });
  
  if (subtitle) {
    slide.addText(subtitle, { x: 0.5, y: 1, w: 9, h: 0.4, fontSize: 14, color: COLORS.muted, italic: true });
  }
  
  const startY = subtitle ? 1.5 : 1.2;
  const bulletText = bullets.map(b => ({ text: b, options: { bullet: true, indentLevel: 0 } }));
  slide.addText(bulletText, { x: 0.5, y: startY, w: 9, h: 4, fontSize: 14, color: COLORS.text, valign: "top" });
};

// Generate Interview Prep PPT
export const downloadInterviewPrepPPT = async () => {
  const pptx = new PptxGenJS();
  pptx.author = "Functional Testing Training";
  pptx.title = "Interview Preparation Package";
  pptx.subject = "Complete Interview Questions with Examples";

  // Title Slide
  addTitleSlide(pptx, "Interview Preparation Package", "Complete Questions with STLC Agile & Jira Examples");

  // Overview Slide
  const overviewSlide = pptx.addSlide();
  overviewSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
  overviewSlide.addText("Package Overview", { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 24, bold: true, color: COLORS.white });
  
  const totalQuestions = interviewCategories.reduce((acc, cat) => acc + cat.questions.length, 0);
  overviewSlide.addText([
    { text: `Total Categories: ${interviewCategories.length}`, options: { bullet: true } },
    { text: `Total Questions: ${totalQuestions}`, options: { bullet: true } },
    { text: "Includes detailed answers with real-world examples", options: { bullet: true } },
    { text: "STLC Agile practical scenarios", options: { bullet: true } },
    { text: "Agile & Jira workflow examples", options: { bullet: true } },
    { text: "Sample documents and templates", options: { bullet: true } }
  ], { x: 0.5, y: 1.2, w: 9, h: 4, fontSize: 18, color: COLORS.text });

  // Interview Tips Slide
  addSectionSlide(pptx, "Interview Tips", "Before & During Your Interview");
  
  const tipsSlide = pptx.addSlide();
  tipsSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
  tipsSlide.addText("Interview Tips", { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 24, bold: true, color: COLORS.white });
  
  tipsSlide.addText("Before Interview:", { x: 0.5, y: 1, w: 4, h: 0.4, fontSize: 16, bold: true, color: COLORS.primaryDark });
  tipsSlide.addText(interviewTips.preparation.map(t => ({ text: t, options: { bullet: true } })), 
    { x: 0.5, y: 1.5, w: 4.5, h: 2, fontSize: 11, color: COLORS.text });
  
  tipsSlide.addText("During Interview:", { x: 5, y: 1, w: 4.5, h: 0.4, fontSize: 16, bold: true, color: COLORS.primaryDark });
  tipsSlide.addText(interviewTips.during.map(t => ({ text: t, options: { bullet: true } })), 
    { x: 5, y: 1.5, w: 4.5, h: 2, fontSize: 11, color: COLORS.text });

  tipsSlide.addText("Common Tips:", { x: 0.5, y: 3.5, w: 9, h: 0.4, fontSize: 16, bold: true, color: COLORS.primaryDark });
  tipsSlide.addText(interviewTips.common.map(t => ({ text: t, options: { bullet: true } })), 
    { x: 0.5, y: 4, w: 9, h: 1.5, fontSize: 11, color: COLORS.text });

  // Question Categories
  interviewCategories.forEach((category) => {
    addSectionSlide(pptx, `${category.icon} ${category.category}`, category.description);

    category.questions.forEach((q, qIdx) => {
      // Question slide
      const qSlide = pptx.addSlide();
      qSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
      qSlide.addText(`Q${qIdx + 1}: ${category.category}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
      
      // Difficulty badge
      const diffColor = q.difficulty === "Beginner" ? COLORS.success : q.difficulty === "Intermediate" ? COLORS.warning : COLORS.destructive;
      qSlide.addShape("rect", { x: 8.5, y: 0.1, w: 1.2, h: 0.35, fill: { color: diffColor }, rounding: 0.1 } as any);
      qSlide.addText(q.difficulty, { x: 8.5, y: 0.15, w: 1.2, h: 0.25, fontSize: 10, color: COLORS.white, align: "center" });
      
      qSlide.addText(q.question, { x: 0.5, y: 1, w: 9, h: 0.6, fontSize: 18, bold: true, color: COLORS.text });
      qSlide.addText("Short Answer:", { x: 0.5, y: 1.7, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
      qSlide.addText(q.shortAnswer, { x: 0.5, y: 2, w: 9, h: 0.8, fontSize: 12, color: COLORS.text });
      
      // Detailed answer on next slide
      const detailSlide = pptx.addSlide();
      detailSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.secondary } });
      detailSlide.addText("Detailed Answer", { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
      
      const detailedText = q.detailedAnswer.substring(0, 800) + (q.detailedAnswer.length > 800 ? "..." : "");
      detailSlide.addText(detailedText, { x: 0.5, y: 1, w: 9, h: 4.5, fontSize: 11, color: COLORS.text, valign: "top" });

      // STLC Agile Example
      if (q.stlcAgileExample) {
        const stlcSlide = pptx.addSlide();
        stlcSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: "2563EB" } });
        stlcSlide.addText("STLC Agile Example", { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
        
        stlcSlide.addText(`Context: ${q.stlcAgileExample.context}`, { x: 0.5, y: 1, w: 9, h: 0.6, fontSize: 12, bold: true, color: COLORS.text });
        stlcSlide.addText(`Scenario: ${q.stlcAgileExample.realWorldScenario}`, { x: 0.5, y: 1.6, w: 9, h: 0.8, fontSize: 11, color: COLORS.muted });
        
        if (q.stlcAgileExample.sampleDocument) {
          const docText = q.stlcAgileExample.sampleDocument.substring(0, 600);
          stlcSlide.addText("Sample Document:", { x: 0.5, y: 2.4, w: 9, h: 0.3, fontSize: 11, bold: true, color: COLORS.primaryDark });
          stlcSlide.addShape("rect", { x: 0.5, y: 2.7, w: 9, h: 2.8, fill: { color: "1E293B" }, rounding: 0.1 } as any);
          stlcSlide.addText(docText, { x: 0.6, y: 2.8, w: 8.8, h: 2.6, fontSize: 8, color: "22C55E", fontFace: "Courier New" });
        }
      }

      // Agile & Jira Example
      if (q.agileJiraExample) {
        const jiraSlide = pptx.addSlide();
        jiraSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: "7C3AED" } });
        jiraSlide.addText("Agile & Jira Example", { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
        
        jiraSlide.addText(`Context: ${q.agileJiraExample.context}`, { x: 0.5, y: 1, w: 9, h: 0.6, fontSize: 12, bold: true, color: COLORS.text });
        jiraSlide.addText(`Scenario: ${q.agileJiraExample.realWorldScenario}`, { x: 0.5, y: 1.6, w: 9, h: 0.8, fontSize: 11, color: COLORS.muted });
        
        if (q.agileJiraExample.sampleDocument) {
          const docText = q.agileJiraExample.sampleDocument.substring(0, 600);
          jiraSlide.addText("Sample Document:", { x: 0.5, y: 2.4, w: 9, h: 0.3, fontSize: 11, bold: true, color: COLORS.primaryDark });
          jiraSlide.addShape("rect", { x: 0.5, y: 2.7, w: 9, h: 2.8, fill: { color: "1E293B" }, rounding: 0.1 } as any);
          jiraSlide.addText(docText, { x: 0.6, y: 2.8, w: 8.8, h: 2.6, fontSize: 8, color: "06B6D4", fontFace: "Courier New" });
        }
      }

      // Tips & Mistakes slide
      const tipsSlide2 = pptx.addSlide();
      tipsSlide2.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
      tipsSlide2.addText("Tips & Common Mistakes", { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
      
      tipsSlide2.addShape("rect", { x: 0.3, y: 1, w: 4.5, h: 2.2, fill: { color: "DCFCE7" }, rounding: 0.1 } as any);
      tipsSlide2.addText("💡 Tips:", { x: 0.4, y: 1.1, w: 4.3, h: 0.3, fontSize: 14, bold: true, color: COLORS.success });
      tipsSlide2.addText(q.tips.map(t => ({ text: t, options: { bullet: true } })), 
        { x: 0.4, y: 1.5, w: 4.3, h: 1.6, fontSize: 10, color: COLORS.text });
      
      tipsSlide2.addShape("rect", { x: 5.2, y: 1, w: 4.5, h: 2.2, fill: { color: "FEE2E2" }, rounding: 0.1 } as any);
      tipsSlide2.addText("⚠️ Common Mistakes:", { x: 5.3, y: 1.1, w: 4.3, h: 0.3, fontSize: 14, bold: true, color: COLORS.destructive });
      tipsSlide2.addText(q.commonMistakes.map(m => ({ text: m, options: { bullet: true } })), 
        { x: 5.3, y: 1.5, w: 4.3, h: 1.6, fontSize: 10, color: COLORS.text });

      tipsSlide2.addText("🔄 Follow-up Questions:", { x: 0.5, y: 3.4, w: 9, h: 0.3, fontSize: 14, bold: true, color: COLORS.primaryDark });
      tipsSlide2.addText(q.followUpQuestions.map(fq => ({ text: fq, options: { bullet: true } })), 
        { x: 0.5, y: 3.8, w: 9, h: 1.5, fontSize: 10, color: COLORS.text });
    });
  });

  // Thank you slide
  const endSlide = pptx.addSlide();
  endSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { color: COLORS.primary } });
  endSlide.addText("Good Luck!", { x: 0.5, y: 2, w: 9, h: 1, fontSize: 44, bold: true, color: COLORS.white, align: "center" });
  endSlide.addText("You've got this! 🚀", { x: 0.5, y: 3.2, w: 9, h: 0.6, fontSize: 24, color: COLORS.background, align: "center" });
  endSlide.addText(`${totalQuestions} Questions Covered | ${interviewCategories.length} Categories`, 
    { x: 0.5, y: 4.5, w: 9, h: 0.4, fontSize: 14, color: COLORS.background, align: "center" });

  await pptx.writeFile({ fileName: "Interview_Prep_Package.pptx" });
};

// Generate Agile & Jira PPT
export const downloadAgileJiraPPT = async () => {
  const pptx = new PptxGenJS();
  pptx.author = "Functional Testing Training";
  pptx.title = "Agile & Jira Training Guide";
  pptx.subject = "Complete Agile & Jira Training";

  // Title Slide
  addTitleSlide(pptx, "Agile & Jira Training Guide", "Complete Training for Agile Methodology & Jira Tool");

  // Part 1: Agile Basics
  addSectionSlide(pptx, "Part 1: Agile Basics", agileBasics.description);

  // Scrum Roles
  addContentSlide(pptx, "Scrum Roles", 
    agileBasics.scrumRoles.map(r => `${r.role}: ${r.responsibilities.slice(0, 2).join(", ")}`),
    "Key roles in Scrum framework"
  );

  // Detailed Roles slides
  agileBasics.scrumRoles.forEach(role => {
    const slide = pptx.addSlide();
    slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
    slide.addText(role.role, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 24, bold: true, color: COLORS.white });
    
    slide.addText("Responsibilities:", { x: 0.5, y: 1, w: 9, h: 0.3, fontSize: 14, bold: true, color: COLORS.primaryDark });
    slide.addText(role.responsibilities.map(r => ({ text: r, options: { bullet: true } })), 
      { x: 0.5, y: 1.4, w: 9, h: 2, fontSize: 12, color: COLORS.text });
    
    slide.addShape("rect", { x: 0.5, y: 3.5, w: 9, h: 1.2, fill: { color: "F0F9FF" }, rounding: 0.1 } as any);
    slide.addText("Real-World Example:", { x: 0.6, y: 3.6, w: 8.8, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
    slide.addText(role.realWorldExample, { x: 0.6, y: 4, w: 8.8, h: 0.6, fontSize: 11, color: COLORS.text });
  });

  // Scrum Ceremonies
  addSectionSlide(pptx, "Scrum Ceremonies", "Key meetings in Scrum methodology");
  
  agileBasics.ceremonies.forEach(ceremony => {
    const slide = pptx.addSlide();
    slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.secondary } });
    slide.addText(ceremony.name, { x: 0.5, y: 0.15, w: 7, h: 0.5, fontSize: 22, bold: true, color: COLORS.white });
    slide.addText(ceremony.duration, { x: 7.5, y: 0.2, w: 2, h: 0.4, fontSize: 12, color: COLORS.background, align: "right" });
    
    slide.addText(ceremony.purpose, { x: 0.5, y: 1, w: 9, h: 0.6, fontSize: 14, color: COLORS.text });
    
    slide.addText("Purpose:", { x: 0.5, y: 1.7, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
    slide.addText(ceremony.purpose, { x: 0.5, y: 2, w: 9, h: 0.5, fontSize: 11, color: COLORS.muted });
    
    slide.addText("Participants:", { x: 0.5, y: 2.6, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
    slide.addText(ceremony.participants.join(", "), { x: 0.5, y: 2.9, w: 9, h: 0.3, fontSize: 11, color: COLORS.text });
    
    slide.addText("Tips:", { x: 0.5, y: 3.4, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.success });
    slide.addText(ceremony.tips.map(t => ({ text: t, options: { bullet: true } })), 
      { x: 0.5, y: 3.7, w: 9, h: 1.5, fontSize: 10, color: COLORS.text });
  });

  // Artifacts
  addContentSlide(pptx, "Scrum Artifacts", 
    agileBasics.artifacts.map(a => `${a.name} (${a.owner}): ${a.description}`),
    "Key artifacts in Scrum"
  );

  // Part 2: Jira Overview
  addSectionSlide(pptx, "Part 2: Jira Overview", "Project Management Tool Mastery");

  const jiraSlide = pptx.addSlide();
  jiraSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
  jiraSlide.addText("What is Jira?", { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 24, bold: true, color: COLORS.white });
  jiraSlide.addText(jiraOverview.whatIsJira, { x: 0.5, y: 1, w: 9, h: 0.8, fontSize: 14, color: COLORS.text });
  jiraSlide.addText("Why Companies Use Jira:", { x: 0.5, y: 2, w: 9, h: 0.3, fontSize: 14, bold: true, color: COLORS.primaryDark });
  jiraSlide.addText(jiraOverview.whyCompaniesUseIt.map(r => ({ text: r, options: { bullet: true } })), 
    { x: 0.5, y: 2.4, w: 9, h: 2.5, fontSize: 12, color: COLORS.text });

  // Jira Hierarchy
  addSectionSlide(pptx, "Jira Hierarchy", "Epic → Story → Task → Sub-task");
  
  jiraOverview.hierarchy.forEach((level, i) => {
    const colors = [COLORS.primary, COLORS.success, COLORS.warning, COLORS.secondary, COLORS.destructive];
    const slide = pptx.addSlide();
    slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: colors[i] || COLORS.primary } });
    slide.addText(level.level, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 24, bold: true, color: COLORS.white });
    
    slide.addText(level.description, { x: 0.5, y: 1, w: 9, h: 0.6, fontSize: 14, color: COLORS.text });
    slide.addText(`When to Use: ${level.whenToUse}`, { x: 0.5, y: 1.8, w: 9, h: 0.4, fontSize: 12, color: COLORS.muted, italic: true });
    
    slide.addShape("rect", { x: 0.5, y: 2.5, w: 9, h: 1, fill: { color: "F8FAFC" }, rounding: 0.1 } as any);
    slide.addText("Example:", { x: 0.6, y: 2.6, w: 8.8, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
    slide.addText(level.example, { x: 0.6, y: 2.9, w: 8.8, h: 0.5, fontSize: 11, color: COLORS.text });
  });

  // Key Features
  addContentSlide(pptx, "Jira Key Features", jiraOverview.keyFeatures);

  // Part 3: Domain Requirements
  addSectionSlide(pptx, "Part 3: Domain Requirements", "Requirements across different domains");

  domainRequirements.forEach(domain => {
    const slide = pptx.addSlide();
    slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
    slide.addText(domain.domain, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 24, bold: true, color: COLORS.white });
    
    slide.addText(domain.projectName, { x: 0.5, y: 1, w: 9, h: 0.4, fontSize: 16, bold: true, color: COLORS.primaryDark });
    slide.addText(domain.businessContext, { x: 0.5, y: 1.5, w: 9, h: 0.6, fontSize: 12, color: COLORS.muted });
    
    slide.addText("Functional Requirements:", { x: 0.5, y: 2.2, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.success });
    slide.addText(domain.functionalRequirements.slice(0, 6).map(r => ({ text: r, options: { bullet: true } })), 
      { x: 0.5, y: 2.5, w: 9, h: 2.5, fontSize: 10, color: COLORS.text });
  });

  // Part 4: Hands-On Phases
  addSectionSlide(pptx, "Part 4: Hands-On Phases", "Step-by-step Jira workflow");

  handsOnPhases.forEach((phase, i) => {
    const slide = pptx.addSlide();
    slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
    slide.addText(`Phase ${i + 1}: ${phase.phase}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 22, bold: true, color: COLORS.white });
    
    slide.addText(phase.objective, { x: 0.5, y: 1, w: 9, h: 0.5, fontSize: 14, color: COLORS.text });
    
    slide.addText("Steps:", { x: 0.5, y: 1.6, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
    slide.addText(phase.steps.slice(0, 6).map((s, idx) => ({ text: `${idx + 1}. ${s.action}`, options: { bullet: false } })), 
      { x: 0.5, y: 1.9, w: 9, h: 2.5, fontSize: 11, color: COLORS.text });
    
    const allTips = phase.steps.flatMap(s => s.tips).slice(0, 2);
    if (allTips.length > 0) {
      slide.addText("💡 Tips:", { x: 0.5, y: 4.5, w: 9, h: 0.3, fontSize: 11, bold: true, color: COLORS.warning });
      slide.addText(allTips.join(" | "), { x: 0.5, y: 4.8, w: 9, h: 0.4, fontSize: 10, color: COLORS.muted });
    }
  });

  // Part 5: Testing Activities
  addSectionSlide(pptx, "Part 5: Testing Activities", "Complete testing activities in Agile");

  enhancedTestingActivities.forEach((activity, i) => {
    // Activity overview slide
    const slide = pptx.addSlide();
    slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.secondary } });
    slide.addText(`${i + 1}. ${activity.activity}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
    
    slide.addText(activity.description, { x: 0.5, y: 1, w: 9, h: 0.6, fontSize: 12, color: COLORS.text });
    
    slide.addShape("rect", { x: 0.3, y: 1.7, w: 4.5, h: 1.3, fill: { color: "DBEAFE" }, rounding: 0.1 } as any);
    slide.addText("What Is It?", { x: 0.4, y: 1.8, w: 4.3, h: 0.25, fontSize: 11, bold: true, color: "1E40AF" });
    slide.addText(activity.whatItIs.substring(0, 200), { x: 0.4, y: 2.1, w: 4.3, h: 0.8, fontSize: 9, color: COLORS.text });
    
    slide.addShape("rect", { x: 5.2, y: 1.7, w: 4.5, h: 1.3, fill: { color: "DCFCE7" }, rounding: 0.1 } as any);
    slide.addText("Why It Matters", { x: 5.3, y: 1.8, w: 4.3, h: 0.25, fontSize: 11, bold: true, color: "166534" });
    slide.addText(activity.whyItMatters.substring(0, 200), { x: 5.3, y: 2.1, w: 4.3, h: 0.8, fontSize: 9, color: COLORS.text });
    
    slide.addText(`Deliverables (${activity.deliverables.length}):`, { x: 0.5, y: 3.2, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
    slide.addText(activity.deliverables.map(d => ({ text: d.name, options: { bullet: true } })), 
      { x: 0.5, y: 3.5, w: 9, h: 1.5, fontSize: 10, color: COLORS.text });
  });

  // Part 6: Templates
  addSectionSlide(pptx, "Part 6: Agile Templates", "Ready-to-use document templates");

  agileTemplates.forEach(template => {
    const slide = pptx.addSlide();
    slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
    slide.addText(template.name, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 22, bold: true, color: COLORS.white });
    
    slide.addText(`Purpose: ${template.purpose}`, { x: 0.5, y: 1, w: 9, h: 0.4, fontSize: 12, italic: true, color: COLORS.muted });
    
    slide.addText("Sections:", { x: 0.5, y: 1.5, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
    slide.addText(template.sections.map(s => ({ text: `${s.sectionName}: ${s.content}`, options: { bullet: true } })), 
      { x: 0.5, y: 1.8, w: 9, h: 3, fontSize: 10, color: COLORS.text });
  });

  // Part 7: Interview Questions
  addSectionSlide(pptx, "Part 7: Interview Questions", "Common Agile & Jira interview questions");

  interviewQuestions.forEach((iq, i) => {
    iq.questions.slice(0, 3).forEach((q, j) => {
      const slide = pptx.addSlide();
      slide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
      slide.addText(`${iq.category} - Q${j + 1}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 18, bold: true, color: COLORS.white });
      
      slide.addText(q.question, { x: 0.5, y: 1, w: 9, h: 0.6, fontSize: 16, bold: true, color: COLORS.text });
      slide.addText(q.expectedAnswer.substring(0, 500), { x: 0.5, y: 1.8, w: 9, h: 3, fontSize: 11, color: COLORS.muted });
    });
  });

  // Part 8: Trainee Checklist
  addSectionSlide(pptx, "Part 8: Trainee Checklist", "Mastery requirements");

  const checklistSlide = pptx.addSlide();
  checklistSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
  checklistSlide.addText("Trainee Mastery Checklist", { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 24, bold: true, color: COLORS.white });
  const allChecklistItems = traineeChecklists.flatMap(c => c.items.map(item => item.task));
  checklistSlide.addText(allChecklistItems.slice(0, 12).map(item => ({ text: item, options: { bullet: true } })), 
    { x: 0.5, y: 1, w: 9, h: 4.5, fontSize: 12, color: COLORS.text });

  // Thank you slide
  const endSlide = pptx.addSlide();
  endSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { color: COLORS.primary } });
  endSlide.addText("Training Complete!", { x: 0.5, y: 2, w: 9, h: 1, fontSize: 40, bold: true, color: COLORS.white, align: "center" });
  endSlide.addText("Master Agile & Jira 🎯", { x: 0.5, y: 3.2, w: 9, h: 0.6, fontSize: 24, color: COLORS.background, align: "center" });

  await pptx.writeFile({ fileName: "Agile_Jira_Training_Guide.pptx" });
};

// Generate STLC Agile PPT - Complete coverage from Requirements to Regression
export const downloadSTLCAgilePPT = async () => {
  const pptx = new PptxGenJS();
  pptx.author = "Functional Testing Training";
  pptx.title = "STLC Agile Training - All Domains";
  pptx.subject = "Complete STLC with Agile Methodology";

  // Title Slide
  addTitleSlide(pptx, "STLC with Agile Methodology", "Complete Training: Requirements to Regression Testing");

  // Overview Slide
  const overviewSlide = pptx.addSlide();
  overviewSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
  overviewSlide.addText("Training Overview", { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 24, bold: true, color: COLORS.white });
  
  overviewSlide.addText([
    { text: `Domains Covered: ${stlcAgileProjects.length} (E-Commerce, Banking, Telecom, Insurance)`, options: { bullet: true } },
    { text: "Complete STLC lifecycle in Agile methodology", options: { bullet: true } },
    { text: "From Requirements → User Stories → Test Plans → Test Cases", options: { bullet: true } },
    { text: "Automation Analysis with real code examples", options: { bullet: true } },
    { text: "Sprint Automation execution samples", options: { bullet: true } },
    { text: "Regression & Smoke Testing strategies", options: { bullet: true } }
  ], { x: 0.5, y: 1.2, w: 9, h: 4, fontSize: 16, color: COLORS.text });

  // Iterate through each domain
  stlcAgileProjects.forEach((project) => {
    // Domain Section Header
    addSectionSlide(pptx, `${project.domainIcon} ${project.domain} Domain`, project.feature);

    // Requirement Document Slide
    const reqSlide = pptx.addSlide();
    reqSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
    reqSlide.addText(`📋 Requirements: ${project.domain}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
    
    reqSlide.addText(`Document: ${project.requirementDocument.title}`, { x: 0.5, y: 1, w: 9, h: 0.4, fontSize: 14, bold: true, color: COLORS.text });
    reqSlide.addText(`Version: ${project.requirementDocument.version} | Date: ${project.requirementDocument.date}`, { x: 0.5, y: 1.4, w: 9, h: 0.3, fontSize: 11, color: COLORS.muted });
    reqSlide.addText(project.requirementDocument.overview.substring(0, 300), { x: 0.5, y: 1.8, w: 9, h: 1, fontSize: 11, color: COLORS.text });

    reqSlide.addText("Business Objectives:", { x: 0.5, y: 2.9, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
    reqSlide.addText(project.requirementDocument.businessObjectives.slice(0, 4).map(obj => ({ text: obj, options: { bullet: true } })), 
      { x: 0.5, y: 3.2, w: 9, h: 2, fontSize: 10, color: COLORS.text });

    // Functional Requirements Slide
    const funcReqSlide = pptx.addSlide();
    funcReqSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
    funcReqSlide.addText(`Functional Requirements: ${project.domain}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
    
    let yPos = 1;
    project.requirementDocument.functionalRequirements.slice(0, 4).forEach((fr) => {
      funcReqSlide.addText(`${fr.id}: ${fr.title}`, { x: 0.5, y: yPos, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
      funcReqSlide.addText(fr.description.substring(0, 150), { x: 0.5, y: yPos + 0.3, w: 9, h: 0.5, fontSize: 10, color: COLORS.text });
      funcReqSlide.addShape("rect", { x: 8.5, y: yPos, w: 1, h: 0.25, fill: { color: fr.priority === "Must Have" ? COLORS.destructive : COLORS.warning }, rounding: 0.05 } as any);
      funcReqSlide.addText(fr.priority, { x: 8.5, y: yPos, w: 1, h: 0.25, fontSize: 8, color: COLORS.white, align: "center" });
      yPos += 1.1;
    });

    // User Stories Slide
    const storySlide = pptx.addSlide();
    storySlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.secondary } });
    storySlide.addText(`📝 User Stories: ${project.domain}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
    
    yPos = 1;
    project.userStories.slice(0, 3).forEach((story) => {
      storySlide.addText(`${story.id}: ${story.title}`, { x: 0.5, y: yPos, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
      storySlide.addText(`As a ${story.asA}, I want ${story.iWant}, So that ${story.soThat}`, { x: 0.5, y: yPos + 0.35, w: 9, h: 0.5, fontSize: 10, color: COLORS.text });
      storySlide.addShape("rect", { x: 8.5, y: yPos, w: 0.7, h: 0.25, fill: { color: story.priority === "High" ? COLORS.destructive : story.priority === "Medium" ? COLORS.warning : COLORS.success }, rounding: 0.05 } as any);
      storySlide.addText(story.priority, { x: 8.5, y: yPos, w: 0.7, h: 0.25, fontSize: 8, color: COLORS.white, align: "center" });
      yPos += 1.2;
    });

    // Test Plan Slide
    const planSlide = pptx.addSlide();
    planSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
    planSlide.addText(`📊 Test Plans: ${project.domain}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
    
    if (project.testPlans.length > 0) {
      const plan = project.testPlans[0];
      planSlide.addText(`Story: ${plan.userStoryId}`, { x: 0.5, y: 1, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.primaryDark });
      planSlide.addText(`Objective: ${plan.objective}`, { x: 0.5, y: 1.35, w: 9, h: 0.5, fontSize: 11, color: COLORS.text });
      
      planSlide.addText("Test Types:", { x: 0.5, y: 1.9, w: 4, h: 0.3, fontSize: 11, bold: true, color: COLORS.text });
      planSlide.addText(plan.testTypes.map(t => ({ text: t, options: { bullet: true } })), { x: 0.5, y: 2.2, w: 4, h: 1.5, fontSize: 10, color: COLORS.text });
      
      planSlide.addText("Risks:", { x: 5, y: 1.9, w: 4.5, h: 0.3, fontSize: 11, bold: true, color: COLORS.text });
      planSlide.addText(plan.risks.slice(0, 3).map(r => ({ text: r, options: { bullet: true } })), { x: 5, y: 2.2, w: 4.5, h: 1.5, fontSize: 10, color: COLORS.text });
    }

    // Manual Test Cases Slide
    const tcSlide = pptx.addSlide();
    tcSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.secondary } });
    tcSlide.addText(`✅ Test Cases: ${project.domain}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
    
    yPos = 1;
    project.manualTestCases.slice(0, 3).forEach((tc) => {
      tcSlide.addText(`${tc.id}: ${tc.title}`, { x: 0.5, y: yPos, w: 8, h: 0.3, fontSize: 11, bold: true, color: COLORS.primaryDark });
      
      const automationBadge = tc.automationCandidate ? "Auto ✓" : "Manual";
      const badgeColor = tc.automationCandidate ? COLORS.success : COLORS.muted;
      tcSlide.addShape("rect", { x: 8.5, y: yPos, w: 0.9, h: 0.25, fill: { color: badgeColor }, rounding: 0.05 } as any);
      tcSlide.addText(automationBadge, { x: 8.5, y: yPos, w: 0.9, h: 0.25, fontSize: 8, color: COLORS.white, align: "center" });
      
      if (tc.steps.length > 0) {
        tcSlide.addText(`Step 1: ${tc.steps[0].step.substring(0, 80)}`, { x: 0.5, y: yPos + 0.3, w: 9, h: 0.3, fontSize: 9, color: COLORS.text });
        tcSlide.addText(`Expected: ${tc.steps[0].expectedResult.substring(0, 80)}`, { x: 0.5, y: yPos + 0.55, w: 9, h: 0.3, fontSize: 9, color: COLORS.muted, italic: true });
      }
      yPos += 1.1;
    });

    // Automation Analysis Slide
    const autoSlide = pptx.addSlide();
    autoSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: "7C3AED" } });
    autoSlide.addText(`🤖 Automation Analysis: ${project.domain}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
    
    if (project.automationAnalysis.length > 0) {
      const analysis = project.automationAnalysis[0];
      autoSlide.addText(`Automation Coverage: ${analysis.automationPercentage}%`, { x: 0.5, y: 1, w: 9, h: 0.4, fontSize: 16, bold: true, color: COLORS.success });
      autoSlide.addText("Recommended Tools:", { x: 0.5, y: 1.5, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.text });
      autoSlide.addText(analysis.recommendedTools.map(t => ({ text: t, options: { bullet: true } })), { x: 0.5, y: 1.8, w: 9, h: 1, fontSize: 11, color: COLORS.text });
      
      autoSlide.addText("Test Case Analysis:", { x: 0.5, y: 2.9, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.text });
      yPos = 3.2;
      analysis.testCases.slice(0, 3).forEach((tc) => {
        const statusColor = tc.automatable ? COLORS.success : COLORS.warning;
        autoSlide.addShape("rect", { x: 0.5, y: yPos, w: 0.15, h: 0.15, fill: { color: statusColor } });
        autoSlide.addText(`${tc.testCaseId}: ${tc.reason.substring(0, 60)}`, { x: 0.7, y: yPos - 0.05, w: 8.8, h: 0.3, fontSize: 10, color: COLORS.text });
        yPos += 0.4;
      });
    }

    // Sprint Automation Slide
    if (project.sprintAutomation.length > 0) {
      const sprintSlide = pptx.addSlide();
      sprintSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
      sprintSlide.addText(`⚡ Sprint Automation: ${project.domain}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
      
      const sprint = project.sprintAutomation[0];
      sprintSlide.addText(`Sprint ${sprint.sprintNumber} Goals:`, { x: 0.5, y: 1, w: 9, h: 0.3, fontSize: 14, bold: true, color: COLORS.primaryDark });
      sprintSlide.addText(sprint.goals.map(g => ({ text: g, options: { bullet: true } })), { x: 0.5, y: 1.3, w: 9, h: 1.2, fontSize: 11, color: COLORS.text });
      
      sprintSlide.addText(`Metrics:`, { x: 0.5, y: 2.6, w: 9, h: 0.3, fontSize: 12, bold: true, color: COLORS.text });
      sprintSlide.addText([
        { text: `Total Tests: ${sprint.metrics.totalTests}`, options: { bullet: true } },
        { text: `Automated: ${sprint.metrics.automated}`, options: { bullet: true } },
        { text: `Coverage: ${sprint.metrics.coverage}%`, options: { bullet: true } }
      ], { x: 0.5, y: 2.9, w: 9, h: 1, fontSize: 11, color: COLORS.text });
      
      // Code sample slide
      if (sprint.automatedTests.length > 0) {
        const codeSlide = pptx.addSlide();
        codeSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: "1E293B" } });
        codeSlide.addText(`💻 Automation Code: ${sprint.automatedTests[0].testName}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 18, bold: true, color: COLORS.white });
        
        codeSlide.addText(`Framework: ${sprint.automatedTests[0].framework} | Type: ${sprint.automatedTests[0].type}`, 
          { x: 0.5, y: 1, w: 9, h: 0.3, fontSize: 11, color: COLORS.muted });
        
        codeSlide.addShape("rect", { x: 0.3, y: 1.4, w: 9.4, h: 4, fill: { color: "0F172A" }, rounding: 0.1 } as any);
        const codeText = sprint.automatedTests[0].code.substring(0, 800);
        codeSlide.addText(codeText, { x: 0.4, y: 1.5, w: 9.2, h: 3.8, fontSize: 8, color: "22C55E", fontFace: "Courier New" });
      }
    }

    // Regression & Smoke Tests Slide
    const regSlide = pptx.addSlide();
    regSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.secondary } });
    regSlide.addText(`🔄 Regression & Smoke: ${project.domain}`, { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 20, bold: true, color: COLORS.white });
    
    // Smoke Tests
    regSlide.addText("Smoke Tests:", { x: 0.3, y: 1, w: 4.5, h: 0.3, fontSize: 13, bold: true, color: COLORS.success });
    regSlide.addShape("rect", { x: 0.3, y: 1.3, w: 4.5, h: 2, fill: { color: "DCFCE7" }, rounding: 0.1 } as any);
    yPos = 1.4;
    project.smokeTests.tests.slice(0, 4).forEach((t) => {
      regSlide.addText(`${t.priority} | ${t.name.substring(0, 30)}`, { x: 0.4, y: yPos, w: 4.3, h: 0.3, fontSize: 9, color: COLORS.text });
      yPos += 0.4;
    });
    
    // Regression Tests
    regSlide.addText("Regression Tests:", { x: 5, y: 1, w: 4.5, h: 0.3, fontSize: 13, bold: true, color: COLORS.destructive });
    regSlide.addShape("rect", { x: 5, y: 1.3, w: 4.7, h: 2, fill: { color: "FEE2E2" }, rounding: 0.1 } as any);
    yPos = 1.4;
    project.regressionTests.tests.slice(0, 4).forEach((t) => {
      regSlide.addText(`${t.priority} | ${t.name.substring(0, 30)}`, { x: 5.1, y: yPos, w: 4.5, h: 0.3, fontSize: 9, color: COLORS.text });
      yPos += 0.4;
    });

    regSlide.addText("Execution Strategy:", { x: 0.5, y: 3.5, w: 9, h: 0.3, fontSize: 11, bold: true, color: COLORS.text });
    regSlide.addText(project.regressionTests.executionStrategy.substring(0, 200), { x: 0.5, y: 3.8, w: 9, h: 0.8, fontSize: 10, color: COLORS.muted });
    
    regSlide.addText("CI/CD Integration:", { x: 0.5, y: 4.6, w: 9, h: 0.3, fontSize: 11, bold: true, color: COLORS.text });
    regSlide.addText(project.regressionTests.ciCdIntegration.substring(0, 150), { x: 0.5, y: 4.9, w: 9, h: 0.5, fontSize: 10, color: COLORS.muted });
  });

  // Summary Slide
  const summarySlide = pptx.addSlide();
  summarySlide.addShape("rect", { x: 0, y: 0, w: "100%", h: 0.8, fill: { color: COLORS.primary } });
  summarySlide.addText("STLC Agile Workflow Summary", { x: 0.5, y: 0.15, w: 9, h: 0.5, fontSize: 24, bold: true, color: COLORS.white });
  
  summarySlide.addText([
    { text: "1. Requirements Analysis → Understand business needs", options: { bullet: true } },
    { text: "2. Feature Decomposition → Break into User Stories", options: { bullet: true } },
    { text: "3. Test Planning → Define scope & approach per story", options: { bullet: true } },
    { text: "4. Test Case Design → Create manual test cases", options: { bullet: true } },
    { text: "5. Automation Analysis → Decide what to automate", options: { bullet: true } },
    { text: "6. Sprint Automation → Implement automated tests", options: { bullet: true } },
    { text: "7. Regression/Smoke Suites → Ongoing quality assurance", options: { bullet: true } }
  ], { x: 0.5, y: 1.2, w: 9, h: 4, fontSize: 16, color: COLORS.text });

  // End Slide
  const endSlide = pptx.addSlide();
  endSlide.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { color: COLORS.primary } });
  endSlide.addText("STLC Agile Training Complete!", { x: 0.5, y: 2, w: 9, h: 1, fontSize: 36, bold: true, color: COLORS.white, align: "center" });
  endSlide.addText("From Requirements to Regression 🚀", { x: 0.5, y: 3.2, w: 9, h: 0.6, fontSize: 22, color: COLORS.background, align: "center" });
  endSlide.addText(`${stlcAgileProjects.length} Domains | Complete STLC Coverage`, 
    { x: 0.5, y: 4.5, w: 9, h: 0.4, fontSize: 14, color: COLORS.background, align: "center" });

  await pptx.writeFile({ fileName: "STLC_Agile_Complete_Training.pptx" });
};
