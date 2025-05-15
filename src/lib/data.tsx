import { CreditCard, Mail, MapPin, Phone, Upload, ShieldCheck, Clock, DollarSign, Award, Zap, Globe, HeartHandshake, BarChart3 } from "lucide-react";

export   const blogPosts = [
    {
      title: "How to Determine the Value of Your Enterprise Software Licenses",
      excerpt:
        "Learn the key factors that influence the resale value of your unused software licenses and how to maximize your return.",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      category: "Valuation",
      date: "May 10, 2023",
      readTime: "5 min read",
    },
    {
      title: "The Legal Framework for Software License Transfers in 2023",
      excerpt:
        "Navigate the complex legal landscape of software license transfers with our comprehensive guide to compliance and best practices.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      category: "Legal",
      date: "April 22, 2023",
      readTime: "8 min read",
    },
    {
      title: "5 Ways Companies Are Optimizing Software Costs Post-Pandemic",
      excerpt:
        "Discover how forward-thinking organizations are managing their software assets to reduce costs and increase efficiency.",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      category: "Strategy",
      date: "March 15, 2023",
      readTime: "6 min read",
    },
  ]

export   const caseStudies = [
    {
      title: "Enterprise Tech Company",
      description: "Recovered $1.2M from unused Adobe and Microsoft licenses after downsizing operations.",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      category: "Enterprise",
      roi: "1200%",
      time: "2 weeks",
    },
    {
      title: "Mid-Size Marketing Agency",
      description: "Sold excess creative suite licenses during slow season, generating $85K in unexpected revenue.",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      category: "SMB",
      roi: "950%",
      time: "5 days",
    },
    {
      title: "Financial Services Firm",
      description: "Recouped $350K from legacy database software licenses after migrating to cloud solutions.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      category: "Finance",
      roi: "800%",
      time: "10 days",
    },
  ]
export   const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: "support@softsell.com",
      action: "Send an email",
      link: "mailto:support@softsell.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "Make a call",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Visit Us",
      details: "123 Software Lane, San Francisco, CA 94107",
      action: "Get directions",
      link: "https://maps.google.com",
    },
  ]
export   const faqs = [
    {
      question: "What types of software licenses can I sell?",
      answer:
        "SoftSell supports a wide range of software licenses including Microsoft, Adobe, Oracle, Autodesk, VMware, SAP, and many others. Both perpetual and subscription licenses can be sold on our platform, subject to the vendor's transfer policies.",
    },
    {
      question: "How is the value of my software license determined?",
      answer:
        "Our AI-powered valuation engine analyzes multiple factors including current market demand, license type, remaining subscription period, version, and historical sales data to provide the most competitive valuation. We continuously update our algorithm to ensure you get the best possible price.",
    },
    {
      question: "How long does the entire process take?",
      answer:
        "The typical timeline is: 24-48 hours for valuation (depending on your plan), 1-2 days for you to review and accept the offer, and 3 business days for payment processing once the transfer is complete. Most transactions are completed within 7-10 days from initial submission.",
    },
    {
      question: "Is selling my software licenses legal?",
      answer:
        "Yes, selling software licenses is legal in most jurisdictions, provided the transfer complies with the vendor's license agreement. Our compliance team reviews each license to ensure it can be legally transferred. We only facilitate transactions that comply with all applicable laws and vendor policies.",
    },
    {
      question: "What payment methods do you support?",
      answer:
        "We support bank transfers, PayPal, and major cryptocurrencies. For enterprise clients, we also offer escrow services and custom payment arrangements. All transactions are secured with bank-level encryption and security protocols.",
    },
    {
      question: "Do I need to provide access to my software accounts?",
      answer:
        "In most cases, you'll need to provide proof of ownership and transfer the license according to the vendor's process. Our team will guide you through the specific requirements for your software. We never request passwords or unauthorized access to your accounts.",
    },
    {
      question: "What happens if a buyer has issues with the license?",
      answer:
        "We offer a 14-day warranty period during which we verify the license is working as described. If there are legitimate issues with the license that weren't disclosed, we'll work with both parties to resolve the situation. This is why we hold funds in escrow until the verification period is complete.",
    },
    {
      question: "Can I sell partial licenses or seat reductions?",
      answer:
        "Yes, many enterprise licenses allow for partial transfers or seat reductions. Our platform supports these transactions, and our licensing experts can help determine if your specific license permits partial sales.",
    },
  ]
  export const publications = [
    { name: "TechCrunch", logo: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Forbes", logo: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Business Insider", logo: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Wired", logo: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "The Wall Street Journal", logo: "https://randomuser.me/api/portraits/men/5.jpg" },
  ]
  export   const steps = [
    {
      icon: <Upload className="h-10 w-10" />,
      title: "Upload License",
      description:
        "Submit your software license details through our secure portal for review. We support all major software vendors.",
      image: "/upload.jpg",
      features: [
        "Secure upload portal",
        "Support for all major vendors",
        "Automated license verification",
        "Instant receipt confirmation",
      ],
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Get Valuation",
      description:
        "Our AI-powered valuation engine analyzes current market conditions to provide the most competitive offer within 24 hours.",
      image: "/valuation.jpg",
      features: [
        "AI-powered pricing algorithm",
        "Market-based valuations",
        "24-hour turnaround time",
        "Detailed valuation report",
      ],
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Get Paid",
      description:
        "Accept our offer and get paid via your preferred payment method within 3 business days, with full transaction security.",
      image: "/credit.jpg",
      features: ["Multiple payment options", "3-day payment guarantee", "Escrow protection", "Transaction dashboard"],
    },
  ]
  export   const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals or small businesses with occasional license sales.",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Up to 5 license listings",
        "Standard valuation (48 hours)",
        "Email support",
        "Basic dashboard",
        "7% commission fee",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with regular software license turnover.",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Up to 25 license listings",
        "Priority valuation (24 hours)",
        "Priority email & chat support",
        "Advanced analytics dashboard",
        "5% commission fee",
        "Bulk upload tool",
        "License compliance check",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with high-volume license management needs.",
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        "Unlimited license listings",
        "Express valuation (12 hours)",
        "24/7 dedicated support",
        "Custom analytics & reporting",
        "3% commission fee",
        "API access",
        "License portfolio management",
        "Custom integration options",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  export   const testimonials = [
    {
      quote:
        "SoftSell made it incredibly easy to sell our excess Adobe licenses after downsizing. The valuation was fair, the process was transparent, and payment was prompt. Their team guided us through every step of the process.",
      author: "Sarah Johnson",
      role: "IT Director",
      company: "Nexus Innovations",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      quote:
        "As a small business owner, I was worried about the process of selling unused software. SoftSell guided me through every step and got me a great price for my Microsoft licenses. Their valuation was 30% higher than competitors.",
      author: "Michael Chen",
      role: "CEO",
      company: "Quantum Solutions",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
    },
    {
      quote:
        "We had hundreds of Oracle licenses after a merger that we no longer needed. SoftSell's enterprise team handled everything professionally and found buyers quickly. The process was smooth and the return on investment was exceptional.",
      author: "David Rodriguez",
      role: "CTO",
      company: "Global Financial Services",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 4,
    },
    {
      quote:
        "SoftSell's platform is intuitive and their valuation engine is spot-on. We've used them multiple times to sell excess licenses as our business needs change, and they consistently deliver great results and excellent customer service.",
      author: "Jennifer Park",
      role: "Operations Manager",
      company: "Innovate Design Studio",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
    },
  ]

  export  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Secure Transactions",
      description:
        "Bank-level security protocols protect your data and financial information throughout the entire process.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Turnaround",
      description: "Get valuations within 24 hours and payment within 3 business days after accepting our offer.",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Best Market Rates",
      description:
        "Our extensive network of buyers ensures you get the highest possible value for your software licenses.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Support",
      description:
        "Our team of software licensing experts is available to guide you through every step of the process.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI-Powered Valuation",
      description:
        "Our proprietary algorithm analyzes thousands of data points to determine the optimal price for your licenses.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Marketplace",
      description:
        "Access buyers from around the world, expanding your potential market and increasing your chances of a premium sale.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Compliance Guaranteed",
      description:
        "We ensure all transactions comply with vendor terms and legal requirements, eliminating compliance risks.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Transparent Reporting",
      description: "Track your license sales with detailed analytics and reporting through our intuitive dashboard.",
    },
  ]


export const navLinks = [
    { href: "#how-it-works", title: "How It Works" },
    { href: "#why-choose-us", title: "Why Choose Us" },
    { href: "#pricing", title: "Pricing" },
    { href: "#testimonials", title: "Testimonials" },
    { href: "#faq", title: "FAQ" },
    { href: "#contact", title: "Contact" },
];

export const cardData = [
  { label: "Clients Served", endValue: 1234, duration: 2 },
  { label: "Millions in Sales", endValue: 5678, duration: 2 },
  { label: "Hours Evaluations", endValue: 24, duration: 2 },
  { label: "Satisfaction Rate", endValue: 99.8, duration: 2 },
];

export const footerLinks = [
  {
    title: "Explore",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Projects", href: "/project" },
      { title: "Events", href: "/event" },
      { title: "Community", href: "/community" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Tutorials", href: "/tutorial" },
      { title: "Workshops", href: "/workshop" },
      { title: "Blogs", href: "/blog" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
];

export const bottomLinks = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
  { title: "Support", href: "/support" },
];
