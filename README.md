# SoftSell - Software License Resale Landing Page

[View Live Site](https://softsella.netlify.app/)

SoftSell is a fictional single-page responsive marketing website built as part of the Credex Web Development Internship Assignment. It simulates a software resale startup that helps businesses unlock value from unused software licenses.


## 🚀 Features

### 1. Hero Section

* Catchy headline: **“Turn Unused Software Into Cash”**
* Clear subheading explaining the value proposition
* Prominent **Call-to-Action (CTA)** button: *Get a Free Quote*

### 2. How It Works

* Visual 3-step guide:

  * Upload License
  * Get Valuation
  * Get Paid
* Engaging icons/illustrations for each step

### 3. Why Choose Us

* Four key benefits presented as feature tiles:

  * Fast Turnaround
  * Transparent Pricing
  * Secure & Compliant
  * Trusted by Businesses

### 4. Testimonials

* Two dummy customer reviews with name, role, and company for social proof

### 5. Contact / Lead Form

* Fields: Name, Email, Company, License Type (dropdown), Message
* Frontend validation with **React Hook Form** + **Zod**
* Uses `shadcn/ui` components for accessible, clean UI
* Form submission is mocked (no backend integration)

## ✨ Bonus Features

* Placeholder logo and favicon for branding consistency
* SEO optimized with meta tags and dynamic page titles
* Light/Dark mode toggle powered by Tailwind CSS and `useTheme` hook
* Smooth scroll animations implemented with Framer Motion
* (Optional) AI Chat Widget powered by Gemini (mocked for demo)


## 🛠️ Tech Stack

| Technology          | Role                                               |
| ------------------- | -------------------------------------------------- |
| **Next.js**         | React-based frontend framework                     |
| **Tailwind CSS**    | Utility-first CSS for styling and responsiveness   |
| **shadcn/ui**       | Accessible UI components with Tailwind integration |
| **Framer Motion**   | Animations and transitions                         |
| **React Hook Form** | Form state management and validation               |
| **Zod**             | Schema validation for form inputs                  |
| **Headless UI**     | Accessible UI primitives                           |
| **Vercel**          | Hosting platform with CI/CD                        |
| **Gemini (Mocked)** | AI-powered chat support (optional)                 |


## 🎨 Design & UI Choices

* **Color Palette:** Light blues and greens to convey trust, professionalism, and clarity
* **Typography:** Clean, modern sans-serif fonts for excellent readability
* **Layout:** Mobile-first, fully responsive design ensuring great UX across devices
* **Icons:** Used [Lucide Icons](https://lucide.dev/) for minimalist, consistent iconography
* **Accessibility:** Focused on keyboard navigability, ARIA labels, and semantic HTML
* **UI Components:** Leveraged `shadcn/ui` for consistent styling and accessibility best practices


## Validation & Testing

* Responsive testing on multiple device viewports using Chrome DevTools
* Robust form validation:

  * Required fields
  * Proper email format validation
  * Dropdown must have a selection
* Verified light/dark mode toggling functionality
* Smooth animations and transitions tested across major browsers

## Getting Started — Local Development

### Prerequisites

* Node.js (v16+ recommended)
* npm or yarn package manager

### Steps

```bash
# Clone the repository
git clone https://github.com/your-username/softsell.git
cd softsell

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000)


## Contribution

Feel free to open issues or pull requests if you want to contribute or suggest improvements!


## Contact

For feedback or inquiries, use the contact form on the site or reach out via email: **[anujjoshi3105@gmail.com](mailto:anujjoshi3105@gmail.com)**


## License

This project is for demonstration purposes only.
