/**
 * Product catalog data
 * Design Philosophy: Modern Minimalist with Warm Accents
 */

export interface Product {
  id: string;
  title: string;
  category: "ebooks" | "templates" | "kids-learning" | "other";
  price: number;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  downloadUrl?: string;
  rating: number;
  reviews: number;
  fileSize: string;
  format: string;
  author?: string;
  releaseDate: string;
}

export const products: Product[] = [
  // E-Books
  {
    id: "ebook-1",
    title: "The Complete Guide to Digital Marketing",
    category: "ebooks",
    price: 29.99,
    description: "Master digital marketing strategies in the modern era",
    longDescription:
      "A comprehensive guide covering SEO, social media marketing, content strategy, and analytics. Perfect for beginners and intermediate marketers looking to enhance their skills.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/hero-books-learning-PfwoDE3N8AjdR8axiuT4Y4.webp",
    features: [
      "10 comprehensive chapters",
      "Real-world case studies",
      "Actionable strategies",
      "Templates and checklists",
    ],
    rating: 4.8,
    reviews: 245,
    fileSize: "12.5 MB",
    format: "PDF, EPUB",
    author: "Sarah Johnson",
    releaseDate: "2025-01-15",
  },
  {
    id: "ebook-2",
    title: "Web Development Essentials",
    category: "ebooks",
    price: 34.99,
    description: "Learn modern web development from scratch",
    longDescription:
      "An in-depth guide to HTML, CSS, JavaScript, and React. Includes practical projects and best practices for building responsive, accessible websites.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/products-showcase-bg-W6hJBnZJC5C48D.webp",
    features: [
      "15 hands-on projects",
      "Code examples included",
      "Best practices guide",
      "Lifetime updates",
    ],
    rating: 4.9,
    reviews: 512,
    fileSize: "25.3 MB",
    format: "PDF, EPUB, HTML",
    author: "Michael Chen",
    releaseDate: "2025-02-01",
  },
  {
    id: "ebook-3",
    title: "Creative Writing Masterclass",
    category: "ebooks",
    price: 24.99,
    description: "Unlock your creative writing potential",
    longDescription:
      "Learn storytelling techniques, character development, and editing strategies from award-winning authors. Includes writing prompts and exercises.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/hero-books-learning-PfwoDE3N8AjdR8axiuT4Y4.webp",
    features: [
      "8 writing modules",
      "Editing checklist",
      "Author interviews",
      "Community access",
    ],
    rating: 4.7,
    reviews: 189,
    fileSize: "8.9 MB",
    format: "PDF, EPUB",
    author: "Emma Williams",
    releaseDate: "2024-12-20",
  },

  // Templates
  {
    id: "template-1",
    title: "Professional Business Proposal Template",
    category: "templates",
    price: 19.99,
    description: "Impress clients with professional proposals",
    longDescription:
      "Customizable business proposal template with multiple design variations. Includes sections for services, pricing, timeline, and terms.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/products-showcase-bg-W6hJBnZJC5C48D.webp",
    features: [
      "5 design variations",
      "Fully editable",
      "MS Word & Google Docs",
      "Free updates",
    ],
    rating: 4.6,
    reviews: 156,
    fileSize: "4.2 MB",
    format: "DOCX, GDOC",
    releaseDate: "2025-01-10",
  },
  {
    id: "template-2",
    title: "Social Media Content Calendar",
    category: "templates",
    price: 14.99,
    description: "Organize your social media strategy",
    longDescription:
      "Complete social media planning template for managing posts across multiple platforms. Includes content ideas, posting schedule, and analytics tracking.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/hero-books-learning-PfwoDE3N8AjdR8axiuT4Y4.webp",
    features: [
      "Monthly planning sheets",
      "Platform templates",
      "Analytics dashboard",
      "Content ideas library",
    ],
    rating: 4.8,
    reviews: 203,
    fileSize: "3.5 MB",
    format: "XLSX, GDSHEET",
    releaseDate: "2025-01-20",
  },
  {
    id: "template-3",
    title: "Invoice & Receipt Template Pack",
    category: "templates",
    price: 12.99,
    description: "Professional invoicing made easy",
    longDescription:
      "Complete set of invoice and receipt templates for freelancers and small businesses. Includes automatic calculations and branding options.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/products-showcase-bg-W6hJBnZJC5C48D.webp",
    features: [
      "10 template variations",
      "Auto-calculations",
      "Customizable branding",
      "Tax field options",
    ],
    rating: 4.7,
    reviews: 298,
    fileSize: "2.8 MB",
    format: "XLSX, DOCX",
    releaseDate: "2024-11-15",
  },

  // Kids Learning Materials
  {
    id: "kids-1",
    title: "ABC Learning Adventure - Interactive Workbook",
    category: "kids-learning",
    price: 9.99,
    description: "Fun alphabet learning for ages 3-5",
    longDescription:
      "Colorful, engaging workbook with alphabet recognition, letter tracing, and phonics activities. Includes stickers and reward charts.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/learning-materials-hero-juQGitfF84zeLeymLbu78c.webp",
    features: [
      "26 alphabet lessons",
      "Printable activities",
      "Sticker sheets included",
      "Parent guide",
    ],
    rating: 4.9,
    reviews: 342,
    fileSize: "18.7 MB",
    format: "PDF",
    releaseDate: "2025-01-05",
  },
  {
    id: "kids-2",
    title: "Math Mastery - Numbers 1-100 Workbook",
    category: "kids-learning",
    price: 11.99,
    description: "Build strong math foundations",
    longDescription:
      "Progressive math workbook covering counting, number recognition, basic addition and subtraction. Colorful illustrations and fun activities.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/hero-books-learning-PfwoDE3N8AjdR8axiuT4Y4.webp",
    features: [
      "100+ practice problems",
      "Progress tracking sheets",
      "Answer key included",
      "Bonus games",
    ],
    rating: 4.8,
    reviews: 267,
    fileSize: "22.4 MB",
    format: "PDF",
    releaseDate: "2025-01-12",
  },
  {
    id: "kids-3",
    title: "Science Explorer - 50 Fun Experiments",
    category: "kids-learning",
    price: 14.99,
    description: "Hands-on science learning for kids",
    longDescription:
      "Collection of 50 safe, easy-to-do science experiments using household items. Includes instructions, explanations, and safety tips.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/products-showcase-bg-W6hJBnZJC5C48D.webp",
    features: [
      "50 experiments",
      "Materials list",
      "Safety guidelines",
      "Educational explanations",
    ],
    rating: 4.9,
    reviews: 421,
    fileSize: "28.5 MB",
    format: "PDF",
    releaseDate: "2024-12-10",
  },

  // Other Resources
  {
    id: "other-1",
    title: "Personal Finance Planning Guide",
    category: "other",
    price: 19.99,
    description: "Take control of your financial future",
    longDescription:
      "Complete guide to budgeting, saving, investing, and retirement planning. Includes worksheets and calculators for financial planning.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/hero-books-learning-PfwoDE3N8AjdR8axiuT4Y4.webp",
    features: [
      "Budget templates",
      "Investment guide",
      "Retirement planner",
      "Expense tracker",
    ],
    rating: 4.7,
    reviews: 178,
    fileSize: "9.3 MB",
    format: "PDF, XLSX",
    author: "David Martinez",
    releaseDate: "2025-01-08",
  },
  {
    id: "other-2",
    title: "Productivity Toolkit - Notion Templates",
    category: "other",
    price: 16.99,
    description: "Organize your life with Notion",
    longDescription:
      "Pre-built Notion templates for task management, habit tracking, project planning, and goal setting. Ready to use and customize.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/products-showcase-bg-W6hJBnZJC5C48D.webp",
    features: [
      "10 Notion templates",
      "Setup guide included",
      "Video tutorials",
      "Community support",
    ],
    rating: 4.8,
    reviews: 234,
    fileSize: "5.1 MB",
    format: "Notion",
    releaseDate: "2025-01-18",
  },
  {
    id: "other-3",
    title: "Freelancer's Toolkit Bundle",
    category: "other",
    price: 39.99,
    description: "Everything you need to start freelancing",
    longDescription:
      "Complete bundle including contract templates, rate calculator, client management system, and marketing materials for freelancers.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663625524357/BxVk3XguSyUFwsNTtq5qot/learning-materials-hero-juQGitfF84zeLeymLbu78c.webp",
    features: [
      "Contract templates",
      "Rate calculator",
      "Client tracker",
      "Marketing templates",
    ],
    rating: 4.9,
    reviews: 356,
    fileSize: "15.8 MB",
    format: "Multiple",
    releaseDate: "2024-12-01",
  },
];

export const categoryInfo = {
  ebooks: {
    name: "E-Books",
    description: "Digital books on various topics, ready to download and read on any device.",
    icon: "BookOpen",
  },
  templates: {
    name: "Templates",
    description: "Ready-to-use templates for documents, presentations, and more.",
    icon: "FileText",
  },
  "kids-learning": {
    name: "Kids Learning Materials",
    description: "Engaging educational content designed specifically for children.",
    icon: "Lightbulb",
  },
  other: {
    name: "Other Resources",
    description: "Curated collection of additional digital products and resources.",
    icon: "Users",
  },
};
