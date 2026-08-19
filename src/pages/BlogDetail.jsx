import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HomeNavbar from "../components/home/HomeNavbar";
import Footer from "../components/home/Footer";
import Banner from "../components/home/Banner";
import GoogleAd from "../components/GoogleAd";

const blogs = {
  1: {
    title: "How to Write a Resume That Gets Noticed",
    excerpt:
      "Learn how to write a resume that gets noticed by recruiters, passes ATS filters, and proves your value with strong achievements, clear formatting, and targeted keywords.",
    keywords: [
      "resume writing tips",
      "how to write a resume",
      "ATS resume",
      "professional summary",
      "resume keywords",
      "job application resume",
    ],
    date: "Aug 10, 2026",
    readTime: "9 min read",
    sections: [
      {
        id: "why-resume-matters",
        heading: "Why Your Resume Matters More Than Ever",
        paragraphs: [
          "Your resume is often the first impression a hiring manager has of your professional story. In a crowded job market, candidates are no longer judged only by their experience but also by how clearly they communicate value. A strong resume does more than list responsibilities; it highlights results, aligns with the job, and shows that you understand what the employer is looking for. When a recruiter scans a page for just a few seconds, your document needs to create a strong impression instantly.",
          "A resume that gets noticed is not necessarily the most creative one. It is usually the clearest, sharpest, and most relevant. It should help a hiring manager quickly understand your background, the problems you have solved, and why you are worth a conversation. If your resume is generic or cluttered, it may never reach the interview stage, no matter how qualified you are. That is why strong formatting, strategic writing, and thoughtful customization matter so much.",
        ],
      },
      {
        id: "start-with-summary",
        heading: "Start With a Strong Professional Summary",
        paragraphs: [
          "The top of your resume is prime real estate. Instead of writing a vague objective like 'looking for a challenging role,' create a professional summary that tells employers who you are and what you bring. Focus on your experience level, top skills, and a measurable achievement. For example, a good summary might say: 'Results-driven marketing manager with 7+ years of experience growing brand awareness, improving conversion rates, and leading cross-functional teams in fast-paced digital environments.' This kind of opening makes your experience immediately relevant.",
          "A strong summary should be short and precise. Two to three sentences are enough. It should signal your expertise without repeating your entire work history. Think of it as your headline. If the hiring manager reads nothing else on the page, they should understand your value and your direction. The summary also gives you an opportunity to include keywords from the job description so your resume is more visible to ATS software and human recruiters.",
        ],
      },
      {
        id: "tailor-to-job",
        heading: "Tailor Every Resume to the Specific Role",
        paragraphs: [
          "One of the best ways to improve your job search results is to customize your resume for each application. A generic resume may seem efficient, but it rarely performs well because it does not speak directly to the employer's needs. Before sending your application, study the job description and identify the skills, tools, and qualifications the company highlights. Then adapt your summary, bullet points, and key skills to match those needs as closely as possible.",
          "This strategy is especially important because most employers use applicant tracking systems to filter resumes before a person ever reads them. ATS platforms look for exact terms, so using the language from the posting can improve your visibility. However, the goal is not to stuff your resume with keywords in a robotic way. The best approach is to naturally incorporate relevant terms into your experience and skills sections while keeping the document readable and professional.",
        ],
      },
      {
        id: "show-impact",
        heading: "Use Action Verbs and Quantify Results",
        paragraphs: [
          "Weak bullet points make resumes feel flat. Strong resumes use active language and evidence of contribution. Instead of saying, 'Responsible for customer service,' say, 'Resolved 150+ customer inquiries weekly while maintaining a 96% satisfaction rating.' This kind of bullet shows initiative, competence, and measurable impact. Words such as delivered, improved, launched, optimized, and led signal action and accountability.",
          "Numbers make a huge difference. Hiring managers are more likely to trust results when they are backed by data. If you increased sales, reduced costs, streamlined operations, or improved response times, include the numbers. Examples such as 'Increased monthly lead generation by 38%' or 'Reduced processing time by 20%' make the story concrete. If exact data is unavailable, use realistic estimates or percentages that are grounded in your work experience. The key is not to exaggerate, but to show the value you created.",
        ],
      },
      {
        id: "ats-friendly-layout",
        heading: "Keep the Format Clean and ATS-Friendly",
        paragraphs: [
          "Formatting may not look like the most exciting part of resume writing, but it strongly affects whether your application is read at all. Use a clean structure with standard section headings such as Experience, Skills, Education, and Certifications. Choose a professional font, keep spacing consistent, and avoid graphics, tables, text boxes, and unusual layouts that can confuse ATS software. Simplicity often works best because it keeps the resume readable both for machines and for people.",
          "A polished format also makes your resume easier to scan under pressure. Recruiters often review dozens of applications in one sitting, so they look for straightforward information quickly. Keep margins clean, use bullet points for clarity, and ensure your most relevant information appears near the top. A document that is easy to read communicates professionalism and respect for the reader's time.",
        ],
      },
      {
        id: "skills-section",
        heading: "Highlight the Right Skills in the Right Place",
        paragraphs: [
          "Your skills section should not be a random list of everything you have ever done. It should be a targeted snapshot of the abilities most relevant to the role. Include both hard skills and soft skills when appropriate. For example, a project manager may list budget planning, risk management, stakeholder communication, Agile methodologies, and dashboard reporting. A designer may highlight Figma, visual storytelling, UX research, and brand systems, while a customer support professional may emphasize CRM tools, conflict resolution, and service recovery.",
          "To make this section stronger, place it near the top of the document and tailor it to match the job posting. The skills section is one of the first places a recruiter checks to decide whether you meet the baseline requirements. If you list the right keywords and show relevant depth, you increase your chances of moving forward. Being specific is always better than being broad. Instead of writing 'communication skills,' show the type of communication you do well, such as client presentations, cross-functional reporting, or stakeholder engagement.",
        ],
      },
      {
        id: "proofread-and-edit",
        heading: "Proofread Carefully and Remove Common Errors",
        paragraphs: [
          "Many resumes fail because of small issues: typos, punctuation mistakes, inconsistent dates, and awkward wording. These problems create the impression that the candidate is careless or not detail-oriented. Even if your experience is excellent, a typo can undermine the entire application. Proofread your resume multiple times and read it aloud to catch awkward sentences. It also helps to ask a trusted friend, mentor, or professional editor to review it with fresh eyes.",
          "A small investment in editing can make a dramatic difference. Use grammar tools, check formatting consistency, and verify that every item on the page supports your candidacy. Your resume should feel precise and deliberate. Every line should add clarity, not confusion. This final layer of attention shows professionalism and makes your profile more credible to employers.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "Learning how to write a resume that gets noticed is about more than polishing a document. It is about telling a clear, credible professional story that matches the jobs you want. The strongest resumes are tailored, measurable, easy to read, and aligned with the keywords hiring teams are actively searching for. When you focus on impact, clarity, and relevance, you make it easier for employers to see your value and easier for them to imagine you in the role.",
          "The best way to improve is to treat your resume as a living career tool. Revisit it regularly, update it with new achievements, and customize it for each opportunity. With the right strategy, your resume becomes more than a list of past jobs; it becomes a powerful part of your career growth and a key to opening new doors.",
        ],
      },
    ],
  },
  2: {
    title: "Top 10 Skills to Include in 2026",
    excerpt:
      "Explore the most valuable resume skills for 2026, from AI literacy and data analysis to communication and leadership, so your profile matches employer demand.",
    keywords: [
      "top skills for resume",
      "resume skills 2026",
      "in demand skills",
      "AI literacy resume",
      "technical skills resume",
      "soft skills resume",
    ],
    date: "Aug 5, 2026",
    readTime: "8 min read",
    sections: [
      {
        id: "why-skills-matter",
        heading: "Why Skills Matter More Than Ever in 2026",
        paragraphs: [
          "The modern job market rewards people who can adapt quickly and deliver value in changing environments. Employers are not just scanning for job titles; they are searching for capabilities. In 2026, companies want people who can work with AI tools, analyze information, communicate clearly, and collaborate across teams. The strongest resumes reflect this shift by showing a mix of technical skills, problem-solving ability, and human strengths that machines cannot easily replace.",
          "Having the right skills on your resume can be the difference between getting shortlisted and being ignored. Recruiters often do a quick screening pass based on keywords, but hiring managers also want proof that you can perform the job. This means your resume should not only list skills; it should connect them to real-world outcomes. A balanced profile that shows both practical competence and adaptability is more attractive in a competitive market.",
        ],
      },
      {
        id: "skill-1",
        heading: "1. AI Literacy",
        paragraphs: [
          "AI literacy is now one of the most valuable skills across almost every industry. It does not mean becoming a machine learning engineer overnight. It means understanding how AI tools work, where they add value, and how to use them responsibly. Candidates who can work with AI for research, productivity, content generation, workflow automation, and analysis stand out because they bring efficiency and adaptability to the workplace.",
          "On a resume, this can look like using tools such as ChatGPT, Copilot, AI writing aids, data analysis assistants, or workflow automation platforms. Employers want people who can adopt new tools and improve processes without losing quality. If you can show that you use AI to save time, improve analysis, or support decision-making, you are demonstrating a modern, future-ready skill set.",
        ],
      },
      {
        id: "skill-2",
        heading: "2. Data Analysis and Interpretation",
        paragraphs: [
          "Data literacy has become essential in almost every professional role. Even if you are not a data scientist, the ability to interpret dashboards, read metrics, and translate numbers into decisions is highly valuable. Employers want people who can measure performance, identify trends, and communicate insights clearly. This skill supports better business decisions and ensures people are working from evidence rather than guesswork.",
          "A resume can highlight this skill through experience with Excel, Google Sheets, Power BI, Tableau, SQL, CRM analytics, or campaign reporting. If you can explain how you used data to improve outcomes, this becomes especially powerful. The goal is not to sound technical for the sake of it, but to show that you can turn raw information into action and results.",
        ],
      },
      {
        id: "skill-3",
        heading: "3. Digital Communication",
        paragraphs: [
          "Communication has always mattered, but digital communication now sits at the center of many roles. This includes writing clear emails, presenting ideas online, managing stakeholder updates, collaborating in tools like Slack, Teams, and Notion, and creating polished documents or presentations. Strong communication is especially important in hybrid and remote environments where teams rely on written communication more than ever.",
          "Employers value candidates who can communicate clearly across channels and audiences. That includes explaining technical details to non-technical teams, writing concise status updates, and building presentations that persuade and inform. If you can show that you communicate with clarity and empathy, your resume will signal a valuable workplace strength.",
        ],
      },
      {
        id: "skill-4",
        heading: "4. Adaptability and Learning Agility",
        paragraphs: [
          "The world of work changes quickly, and companies need employees who can adapt without losing momentum. Learning agility means being open to new systems, adjusting to a changing environment, and absorbing new information efficiently. This is especially important in industries impacted by automation, AI, new regulations, or shifting customer expectations.",
          "Candidates who show adaptability often stand out because they can handle change with confidence. On a resume, this might appear in the form of cross-functional project work, process improvements, role changes, or examples where you learned a new tool quickly and applied it successfully. Adaptability is a future-facing skill because it helps organizations move through uncertainty with less disruption.",
        ],
      },
      {
        id: "skill-5",
        heading: "5. Cybersecurity Awareness",
        paragraphs: [
          "Cybersecurity is no longer reserved for highly technical specialists. Many employers now expect employees to have a basic understanding of secure practices, password management, phishing awareness, and data protection. This skill matters because organizational risk is spread across teams, not just IT departments. Anyone who handles customer data, internal documents, or digital systems benefits from understanding security basics.",
          "You do not need a formal cybersecurity title to show this on your resume. You can highlight familiarity with safe digital workflows, compliance standards, secure multitasking, or training in data privacy. For many employers, a candidate who understands risk reduction is more valuable because they help protect the company while doing their job effectively.",
        ],
      },
      {
        id: "skill-6",
        heading: "6. Project Management and Prioritization",
        paragraphs: [
          "Businesses depend on people who can manage tasks, prioritize properly, and keep projects moving. Project management is a broad skill that includes planning, coordination, stakeholder communication, timeline management, risk awareness, and execution. This is useful in nearly every function, from marketing and HR to sales and software development.",
          "Employers appreciate candidates who can manage priorities without constant supervision. On a resume, this might show up as leading timelines, coordinating resources, tracking milestones, or improving internal procedures. A person who can juggle deadlines and create momentum is a strong asset to any team, especially in fast-moving organizations.",
        ],
      },
      {
        id: "skill-7",
        heading: "7. Leadership and Team Collaboration",
        paragraphs: [
          "Leadership is not only for managers. In the workplace, leadership can mean mentoring others, facilitating collaboration, solving conflict, or influencing outcomes without formal authority. Modern employers value people who can work well with others and take initiative when needed. This skill often translates into stronger team performance, better communication, and smoother execution.",
          "When you highlight leadership on a resume, focus on the impact rather than the title. For example, you may mention that you coordinated a cross-functional team, mentored new hires, improved team workflows, or facilitated customer escalations. This shows that you contribute to organizational success beyond your immediate role and can help others grow along the way.",
        ],
      },
      {
        id: "skill-8",
        heading: "8. Customer Focus and Problem Solving",
        paragraphs: [
          "Almost every business exists to serve someone, whether it is a customer, client, or internal stakeholder. Strong customer focus and problem-solving ability show that you can identify pain points, think critically, and respond effectively. Employers want people who look beyond tasks and focus on outcomes, experience, and satisfaction.",
          "On a resume, this can be demonstrated through conflict resolution, service recovery, process improvements, or product recommendations that improved user satisfaction. A candidate who can combine empathy with analytical thinking is often highly valuable because they solve problems in ways that strengthen trust and maintain customer loyalty.",
        ],
      },
      {
        id: "skill-9",
        heading: "9. Emotional Intelligence",
        paragraphs: [
          "Emotional intelligence remains one of the most treasured workplace skills. It includes self-awareness, empathy, patience, conflict management, and the ability to maintain positive relationships under pressure. Teams perform better when people can navigate personality differences, resolve issues quickly, and maintain professionalism in tense situations.",
          "This is especially important in customer-facing roles, leadership positions, and team-based environments. On a resume, emotional intelligence may not appear as a formal skill section item, but it can be reflected through examples of collaboration, mentorship, conflict resolution, and stakeholder engagement. The stronger your interpersonal skills, the more likely you are to thrive in collaborative work cultures.",
        ],
      },
      {
        id: "skill-10",
        heading: "10. Creativity and Strategic Thinking",
        paragraphs: [
          "Creativity is not limited to design roles. It is also about thinking differently, solving problems with fresh ideas, and creating strategies that support business goals. Strategic thinking allows you to see beyond immediate tasks and consider long-term impact. This is especially valuable in marketing, operations, product work, project planning, and leadership roles.",
          "Resumes stand out when they show initiative and original thinking. For example, you could describe how you redesigned a workflow, improved customer onboarding, or implemented a campaign idea that increased engagement. Employers like candidates who bring energy, imagination, and practical planning to the table.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "The best skills to include in 2026 are a balanced mix of digital fluency, analytical ability, interpersonal strength, and business awareness. Employers are not just looking for people who can do a task; they want professionals who can learn, adapt, collaborate, and contribute to strategic goals. When you build your resume around highly relevant skills and support them with evidence, you create a profile that speaks to both ATS filters and real hiring managers.",
          "The smartest approach is not to list every skill you have ever used. It is to choose the ones that match the role, demonstrate value, and align with how work is changing. In a competitive market, skill clarity is a practical advantage that helps you stand out and stay relevant.",
        ],
      },
    ],
  },
  3: {
    title: "The Power of AI in Resume Building",
    excerpt:
      "Discover how AI resume tools can improve wording, optimize keywords, and help job seekers build stronger applications without losing their personal voice.",
    keywords: [
      "AI resume builder",
      "resume writing AI",
      "ATS optimization",
      "AI tools for job search",
      "resume content generation",
      "AI-assisted resume",
    ],
    date: "Jul 28, 2026",
    readTime: "9 min read",
    sections: [
      {
        id: "why-ai-matters",
        heading: "Why AI Is Becoming Essential in Resume Building",
        paragraphs: [
          "The rise of artificial intelligence has transformed the way job seekers approach applications. What once took hours of rewriting, line editing, and keyword matching can now be supported by AI-powered tools that speed up the process and improve clarity. Resume building is no longer just about listing past jobs; it is about shaping a compelling story that fits the employer's needs. AI helps with that process by suggesting stronger wording, catching weak phrasing, and identifying where keywords may be missing.",
          "This does not mean AI replaces the human element of job searching. In fact, the most successful candidates use AI as a support system rather than a substitute for their own judgment. The strongest resume still depends on your experience, accomplishments, and voice. AI can help you sharpen those strengths, but it cannot replace your personal professional story. When used responsibly, it makes the process faster, smarter, and more strategic.",
        ],
      },
      {
        id: "how-ai-helps",
        heading: "How AI Helps You Write Better Resume Content",
        paragraphs: [
          "AI can support the resume-writing process in several powerful ways. It can rewrite vague bullet points into measurable achievements, suggest stronger action verbs, and improve sentence flow so each line reads more clearly. It can also help you identify missing skills or keywords based on a job description, which is essential for ATS optimization. In practice, this saves time and reduces the stress of starting from a blank page.",
          "For example, a bland bullet like 'Assisted with customer support and sales' can become a stronger, evidence-based statement such as 'Resolved 50+ customer issues weekly while supporting sales conversations that contributed to a 12% increase in upsell conversions.' AI can help generate more polished versions, but the final result still needs your input and validation. That is where human judgment matters. The best AI-assisted resume is clear, accurate, and aligned with the realities of your work.",
        ],
      },
      {
        id: "ats-optimization",
        heading: "AI Can Improve ATS Compatibility",
        paragraphs: [
          "Applicant tracking systems are a major part of modern hiring, and many resumes are filtered out before a recruiter reads them. AI tools can help because they are often designed to scan job descriptions and recommend the terms employers are likely to search for. They can also suggest formatting that is cleaner and more parseable, which is especially useful if you are not sure how to create an ATS-friendly resume.",
          "This does not mean a resume should be written only for machines. The best ATS-friendly resume still feels natural to a person. AI can help you balance these two needs by suggesting relevant terms and structure without overloading the page. A smart job seeker treats AI as a keyword assistant, not a keyword stuffing tool. The goal is relevance, clarity, and professionalism, not awkward repetition.",
        ],
      },
      {
        id: "personalize",
        heading: "AI Makes Personalization Easier",
        paragraphs: [
          "The best resumes are tailored to the role, not copied from a standard template. AI can simplify this personalization step by comparing your existing resume against a specific job description and highlighting where you may need more alignment. It can suggest ways to emphasize relevant accomplishments, reposition responsibilities, and add language that speaks directly to the role's priorities.",
          "That makes AI especially helpful for people applying to multiple jobs with different expectations. Instead of starting over each time, you can refine your main resume for the specific sector or position. For example, if you are applying for a project coordinator role, AI might help reposition your experience around planning, stakeholder communication, and process improvement. If you are aiming for a product role, it may shift focus toward operations, testing, cross-functional collaboration, and analytics. The personalized resume becomes more strategic and compelling.",
        ],
      },
      {
        id: "risks",
        heading: "The Risks of Overusing AI",
        paragraphs: [
          "AI is useful, but it can create problems when overused. One of the biggest risks is generating generic language that sounds polished but lacks authenticity. If every bullet point sounds the same, the resume may feel robotic and disconnected from real experience. Another risk is misrepresenting your work by inventing accomplishments or making claims that are not fully accurate. Employers can usually spot inflated language, and false statements damage trust.",
          "It is also easy to rely too much on suggested keywords and lose your own professional voice. A good resume should sound like you, not like a machine. That is why the best process is to use AI as a drafting partner: generate ideas, improve clarity, test keyword alignment, and then revise carefully with your personal context. Keep the final product honest, concise, and grounded in actual results.",
        ],
      },
      {
        id: "best-practice",
        heading: "A Smart AI Workflow for Resume Building",
        paragraphs: [
          "A strong AI-assisted resume workflow starts with your existing experience. Review your job history, identify your strongest results, and choose the achievements you want to highlight. Then use AI to suggest clearer wording, better organization, or stronger action verbs. After that, compare the draft against the job description and adjust it for relevance. Finally, read the final version yourself and make sure it is honest, specific, and easy to understand.",
          "This process helps you keep the best of both worlds: speed and human judgment. AI reduces tedious work and improves quality, while you remain in control of tone, accuracy, and strategy. With this approach, you can create a resume that feels polished without becoming impersonal. That balance is exactly what employers respond to.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "The power of AI in resume building lies in its ability to make your documents clearer, more relevant, and more efficient to produce. It can help you tighten wording, improve ATS compatibility, and tailor application material to specific roles. However, its real value comes when it supports your own experience instead of replacing it. The strongest resumes are still built on real achievements, thoughtful strategy, and honest communication.",
          "As AI becomes more integrated into hiring and job search, people who learn to use it well will have an advantage. The key is not to chase automation blindly, but to use it responsibly. When paired with your own knowledge and judgment, AI is a powerful tool for creating a resume that is stronger, sharper, and more likely to land interviews.",
        ],
      },
    ],
  },
  4: {
    title: "Common Resume Mistakes to Avoid",
    excerpt:
      "Avoid the resume mistakes that stop candidates from getting interviews, including weak bullets, poor formatting, vague achievements, and generic wording.",
    keywords: [
      "resume mistakes",
      "common resume errors",
      "resume tips",
      "ATS failures",
      "bad resume examples",
      "job search mistakes",
    ],
    date: "Jul 20, 2026",
    readTime: "8 min read",
    sections: [
      {
        id: "why-mistakes-hurt",
        heading: "Why Resume Mistakes Cost Interviews",
        paragraphs: [
          "A resume is not just a summary of your past work; it is a sales document designed to prove your fit for a role. Because recruiters often spend only a few seconds scanning each application, even small mistakes can do serious damage. A weak bullet point, a typo, or a confusing layout may cause your resume to get filtered out or overlooked. In many cases, candidates are more qualified than the people who get interviews, but the presentation of their experience is what holds them back.",
          "This is why it is so important to take a critical look at your document before you send it. The most common mistakes are not always dramatic. They are usually subtle: generic wording, inconsistent formatting, missing metrics, or irrelevant details that distract from the real story. When you remove those issues, your resume becomes stronger, clearer, and much more persuasive.",
        ],
      },
      {
        id: "typos",
        heading: "Mistake 1: Typos and Grammar Errors",
        paragraphs: [
          "Sometimes the simplest mistakes are the most damaging. Typos, punctuation issues, and grammatical errors signal poor attention to detail and can undermine your credibility immediately. Hiring managers often assume that if you cannot proofread your resume, you may not be careful in your work either. This is especially important for roles that involve writing, project coordination, client communication, or compliance-related responsibilities.",
          "The fix is straightforward: read your resume out loud, use a spelling tool, and ask another person to review it. Check for small inconsistencies like date formatting, capitalization, and punctuation. A polished resume should feel professional and deliberate from the top to the bottom. It is worth spending the extra time to get this right because a single error can change how your entire application is perceived.",
        ],
      },
      {
        id: "vague-bullets",
        heading: "Mistake 2: Vague, Generic Bullet Points",
        paragraphs: [
          "A resume full of soft statements such as 'responsible for sales' or 'worked with customers' tells the reader very little. These phrases do not show what you accomplished or how you made a difference. Recruiters want evidence. They want to know what you improved, how you handled situations, and the results you delivered. Generic bullet points make your resume feel forgettable and make it harder for a hiring manager to see your value.",
          "A stronger version of the same point would say, 'Increased repeat customer revenue by 18% by improving outreach response times and creating a weekly client follow-up process.' This version shows action, context, and impact. If you want your resume to stand out, make each bullet point specific, measurable, and outcome-driven. This is one of the fastest ways to improve credibility and improve your chances of getting an interview.",
        ],
      },
      {
        id: "generic-summary",
        heading: "Mistake 3: Generic Summaries and Objective Statements",
        paragraphs: [
          "Many job seekers still use outdated objective statements such as 'seeking a challenging opportunity in a growth-oriented company.' These statements do not tell the employer anything unique or valuable. They also take up space that could be used to highlight your experience and results. In most cases, a professional summary is far more effective because it speaks to your background and value in a concise, strategic way.",
          "A good summary should reflect what you bring to the table, the industries or functions you work in, and the kind of impact you create. It should sound tailored and specific instead of generic. If your summary feels like a template, it will not help your application. Replace vague phrases with meaningful details that demonstrate expertise and direction.",
        ],
      },
      {
        id: "length-format",
        heading: "Mistake 4: Overly Long or Poorly Designed Resumes",
        paragraphs: [
          "A resume should not be a life story. If it is too long, cluttered, or confusing, it may discourage the reader from engaging with your information. For many candidates, a single page is enough if they are early in their career, while a two-page resume is often appropriate for professionals with more experience. The real issue is not page count; it is relevance. Unnecessary content weakens the document and reduces focus.",
          "Formatting also matters. Dense blocks of text, cluttered sections, and inconsistent spacing make the resume harder to scan. Clean sections, balanced margins, and readable spacing make a much stronger impression. The simpler and more readable your layout is, the easier it is for employers to find the information they need. A document that respects the reader's time is almost always stronger than one that tries too hard to impress.",
        ],
      },
      {
        id: "ats-errors",
        heading: "Mistake 5: Ignoring ATS-Friendly Design",
        paragraphs: [
          "Applicant tracking systems review resumes before a person sees them. Many resumes are rejected because they are visually heavy and difficult for ATS tools to parse. This includes overly complex tables, graphics, text boxes, and unusual fonts. While visual creativity can be appealing, it often creates friction when machines are reading the information.",
          "A resume that is simple, structured, and consistent is far more effective. Use standard section headings, plain fonts, and straightforward layouts. If you have a creative portfolio, keep that separate and let the resume remain professional and easy to scan. When you keep the document ATS-friendly, you increase the chance that a human will actually read it.",
        ],
      },
      {
        id: "irrelevant-info",
        heading: "Mistake 6: Including Irrelevant or Outdated Information",
        paragraphs: [
          "Recruiters are not interested in everything you have ever done. They want to see the experience that supports the role you are targeting. Including outdated details, unrelated hobbies, references, or unnecessary personal information can distract from your qualifications. This is particularly common when people use the same resume for every application without adapting it to the position.",
          "A focused resume should include only the material that supports the role. If a bullet point or section does not add value, it probably should not be there. Keep your resume updated, relevant, and aligned with your target job. This clarity makes your profile more convincing and easier for employers to evaluate.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        paragraphs: [
          "Resume mistakes rarely come from one big issue. They usually happen because the document is generic, cluttered, or not reviewed carefully enough. Typos, vague achievements, poor formatting, and irrelevant content can quietly reduce your chances of getting noticed. The good news is that these issues are usually fixable. By focusing on clarity, relevance, and measurable results, you can create a resume that tells a stronger story and feels more trustworthy.",
          "The strongest resumes are not the longest or the fanciest; they are the most precise. Take the time to review, refine, and tailor your application before hitting submit. That small shift in discipline can make a big difference in your career outcomes.",
        ],
      },
    ],
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs[id];

  useEffect(() => {
    if (!blog) return;

    document.title = `${blog.title} | Resume Builder Blog`;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", blog.excerpt);

    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement("meta");
      keywordsTag.setAttribute("name", "keywords");
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute("content", blog.keywords.join(", "));
  }, [blog]);

  if (!blog) {
    return (
      <>
        <Banner />
        <HomeNavbar />
        <div className="min-h-screen bg-white py-16 px-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Blog not found</h1>
          <Link
            to="/blog"
            className="mt-4 inline-block text-green-600 hover:underline"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Banner />
      <HomeNavbar />
      <div className="min-h-screen bg-white py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="mb-6 inline-block text-sm font-medium text-green-600 hover:underline"
          >
            ← Back to Blog
          </Link>

          <article>
            <header className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                Resume Builder Blog
              </p>
              <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                {blog.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500 md:text-sm">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </header>

            <aside className="mb-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-slate-900">Table of contents</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {blog.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="hover:text-green-700 hover:underline">
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
             </aside>

             <GoogleAd className="mb-10" />

             <div className="space-y-8 text-base leading-8 text-slate-700">
               {blog.sections.map((section, index) => (
                 <section id={section.id} key={section.id}>
                   <h2 className="mb-4 text-2xl font-bold text-slate-900">
                     {section.heading}
                   </h2>
                   {section.paragraphs.map((paragraph, pIndex) => (
                     <p key={`${section.id}-${pIndex}`} className="mb-4">
                       {paragraph}
                     </p>
                   ))}

                   {index === 1 && (
                     <GoogleAd className="my-10" />
                   )}

                   {index === 3 && (
                     <GoogleAd className="my-10" />
                   )}
                 </section>
               ))}
             </div>

             <GoogleAd className="mt-10" />
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
