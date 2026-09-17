/**
 * Knowledge Center articles.
 * Each article renders its own page at /knowledge/<slug>.
 * Content lives here so the card grid and the article pages stay in sync.
 */

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  readTime: string;
  tag: string;
  author: string;
  intro: string;
  sections: ArticleSection[];
  takeaways: string[];
};

export const articles: Article[] = [
  {
    slug: "understanding-idd",
    title: "Understanding Intellectual and Developmental Disabilities",
    desc: "Learn about common developmental disabilities, support strategies, and how programs can help individuals live more independent lives.",
    image:
      "https://images.unsplash.com/photo-1766808982363-7df749493298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjYXJlZ2l2ZXIlMjBzdXBwb3J0JTIwaGFuZHN8ZW58MXx8fHwxNzcyODU2ODI1fDA&ixlib=rb-4.1.0&q=80&w=1600&utm_source=figma&utm_medium=referral",
    readTime: "6 min read",
    tag: "Education",
    author: "New Beginnings Care Team",
    intro:
      "Intellectual and developmental disabilities (IDD) affect how a person learns, communicates, and navigates everyday life. Understanding what IDD is — and what it isn't — is the first step toward building the right support around each individual.",
    sections: [
      {
        heading: "What are intellectual and developmental disabilities?",
        paragraphs: [
          "Intellectual and developmental disabilities are a group of conditions that begin during the developmental period, usually before age 18. They can affect intellectual functioning (such as reasoning, learning, and problem-solving) and adaptive behavior (the everyday social and practical skills people use to live independently).",
          "IDD is not an illness to be cured, and it does not define a person's potential. With the right support, individuals with IDD lead full, meaningful, and independent lives — working, forming relationships, and participating in their communities.",
        ],
      },
      {
        heading: "Common types of developmental disabilities",
        paragraphs: [
          "Developmental disabilities vary widely from person to person. Some of the more commonly recognized include:",
        ],
        bullets: [
          "Autism spectrum disorder, which affects communication, social interaction, and behavior",
          "Down syndrome, a genetic condition that affects learning and physical development",
          "Cerebral palsy, which affects movement, posture, and coordination",
          "Intellectual disability, involving limitations in intellectual functioning and adaptive skills",
          "Fetal alcohol spectrum disorders and other conditions present from early development",
        ],
      },
      {
        heading: "How the right support makes a difference",
        paragraphs: [
          "Effective support starts with seeing the whole person — their strengths, interests, and goals — not just a diagnosis. Individualized plans focus on building skills in the settings where daily life actually happens: at home, in school, at work, and in the community.",
          "Support can include life-skills training, supported employment, community integration, and family education. The goal is always the same: to help each person build the independence and confidence to shape a life they choose.",
        ],
      },
      {
        heading: "Supporting a loved one with IDD",
        paragraphs: [
          "Families and caregivers are essential partners. Learning about your loved one's specific needs, connecting with support programs early, and staying involved in planning all help create consistency and momentum.",
          "You don't have to navigate it alone. Reaching out to a support services organization can help you understand available programs, eligibility, and the next practical steps.",
        ],
      },
    ],
    takeaways: [
      "IDD begins during the developmental period and affects learning and everyday skills.",
      "A diagnosis does not define a person's potential — support does.",
      "Individualized, community-based support builds real independence.",
      "Families are partners; connecting with programs early makes a difference.",
    ],
  },
  {
    slug: "supported-employment-independence",
    title: "How Supported Employment Programs Help Build Independence",
    desc: "Discover how supported employment programs help individuals develop job skills and find meaningful work opportunities.",
    image:
      "https://images.unsplash.com/photo-1695370993586-12fdbea785c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNsdXNpdmUlMjB3b3JrcGxhY2UlMjBlbXBsb3ltZW50JTIwZGl2ZXJzaXR5fGVufDF8fHx8MTc3Mjg1NjgyNXww&ixlib=rb-4.1.0&q=80&w=1600&utm_source=figma&utm_medium=referral",
    readTime: "5 min read",
    tag: "Employment",
    author: "New Beginnings Employment Services",
    intro:
      "Meaningful work is about more than a paycheck. It builds confidence, routine, social connection, and a sense of purpose. Supported employment programs make that possible for individuals with disabilities by pairing real jobs with the right level of ongoing support.",
    sections: [
      {
        heading: "What is supported employment?",
        paragraphs: [
          "Supported employment helps individuals with disabilities find and keep competitive, integrated jobs in their communities — working alongside colleagues, earning a real wage, and doing work that matters to them.",
          "Rather than placing someone in a job and hoping it works out, supported employment provides individualized coaching and support before, during, and after placement, adjusting as the person grows more confident.",
        ],
      },
      {
        heading: "How the process works",
        paragraphs: [
          "Every journey is different, but supported employment generally follows a few key stages:",
        ],
        bullets: [
          "Discovery — understanding the person's strengths, interests, and goals",
          "Job development — finding or shaping a role that fits, with the right employer",
          "On-the-job coaching — building skills and confidence directly in the workplace",
          "Ongoing support — check-ins and problem-solving so the placement lasts",
        ],
      },
      {
        heading: "The benefits go beyond the workplace",
        paragraphs: [
          "Employment builds independence in ways that ripple through every part of life. Earning income supports greater self-determination. A daily routine creates structure. Coworkers become part of a wider social network.",
          "Employers benefit too. Inclusive workplaces gain dedicated, capable team members, and studies consistently show that diverse teams strengthen culture and performance.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "If you or a loved one is interested in supported employment, the best first step is a conversation. A support services team can help assess goals, explain eligibility, and begin the discovery process at a comfortable pace.",
        ],
      },
    ],
    takeaways: [
      "Supported employment places people in real, integrated jobs with ongoing support.",
      "The process is individualized — from discovery through long-term coaching.",
      "Work builds income, routine, connection, and self-determination.",
      "A simple conversation is the first step toward getting started.",
    ],
  },
  {
    slug: "choosing-the-right-program",
    title: "Choosing the Right Disability Support Program for Your Family",
    desc: "A guide to understanding different disability services and how to choose the right support program for your needs.",
    image:
      "https://images.unsplash.com/photo-1770096679916-2cd9c720d400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wbWVudGFsJTIwbGVhcm5pbmclMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzcyODU2ODI2fDA&ixlib=rb-4.1.0&q=80&w=1600&utm_source=figma&utm_medium=referral",
    readTime: "7 min read",
    tag: "Guide",
    author: "New Beginnings Care Team",
    intro:
      "Choosing a disability support program can feel overwhelming — there are many services, acronyms, and options to weigh. This guide breaks down what to look for so you can make a confident, informed decision for your family.",
    sections: [
      {
        heading: "Start with goals, not services",
        paragraphs: [
          "Before comparing programs, get clear on what matters most for your loved one. Is the priority building independent living skills? Finding employment? Expanding social connections? Daytime engagement and enrichment?",
          "When you lead with goals, it becomes much easier to see which programs are a genuine fit — and which simply look good on paper.",
        ],
      },
      {
        heading: "Understand the main types of support",
        paragraphs: [
          "Most support organizations offer a mix of the following services. Knowing the categories helps you ask better questions:",
        ],
        bullets: [
          "Residential support — help with daily living in a home setting",
          "Supported employment — finding and keeping meaningful work",
          "Day programs — structured daytime enrichment and skill-building",
          "Life-skills training — cooking, budgeting, transportation, and self-care",
          "Community integration — participation in community life and activities",
        ],
      },
      {
        heading: "Questions to ask any program",
        paragraphs: [
          "A quality program will welcome your questions. Consider asking:",
        ],
        bullets: [
          "How do you individualize plans to each person's goals?",
          "What does staff training and continuity look like?",
          "How do you involve and communicate with families?",
          "How do you measure and celebrate progress over time?",
          "What does the transition and enrollment process involve?",
        ],
      },
      {
        heading: "Trust the fit",
        paragraphs: [
          "Beyond services and logistics, pay attention to how a program makes you feel. Do the staff listen? Do they see your loved one as a whole person? Is the environment warm and respectful?",
          "The right program is a partner in the journey — patient, communicative, and genuinely invested in your family's goals. When you find that, you'll feel it.",
        ],
      },
    ],
    takeaways: [
      "Lead with your loved one's goals before comparing services.",
      "Learn the main service categories so you can ask sharper questions.",
      "A quality program individualizes plans and partners with families.",
      "Fit and trust matter as much as the service list.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
