# **App Name**: Brokou Hub

## Core Features:

- Homepage Showcase: Display key services and an engaging hero section with animated elements to capture user attention immediately. Uses GSAP to smoothly animate the website’s introduction when first loaded.
- Service Listing & Detail: Showcase all available services in a grid layout using data fetched from the API, each with a ServiceCard component and subtle hover animations. Provides detailed pages for each service.
- Careers Section: Fetch and display current job openings with the option to use a generative AI tool to assist with formatting or summarizing job descriptions for the OffreEmploiCard components.
- Contact Form Submission: Enable users to send inquiries through a styled, functional form that provides immediate feedback on submission status using ContactForm.jsx.
- Admin Login: Secure admin routes to protect sensitive functionalities, redirecting unauthenticated users to login using localStorage. Leverages tokens (or confirmation) from the api.
- Service Management: Enable admin users to perform CRUD operations on services using protected API routes, including data management displayed in tables and Bootstrap modals for entry modification.

## Style Guidelines:

- Primary color: Rich indigo (#4B0082) to convey professionalism and depth.
- Background color: Light grayish-blue (#F0F8FF) to create a clean, modern backdrop.
- Accent color: Vibrant magenta (#FF00FF) for highlights and interactive elements to draw attention.
- Body and headline font: 'Inter', a grotesque-style sans-serif with a modern look, is recommended.
- Use clean, minimalist icons that complement the overall modern aesthetic of the site. Icons should be related to business, management and analysis.
- Employ a responsive grid system (Bootstrap 5) to ensure adaptability across various devices, with a focus on maintaining visual consistency.
- Integrate GSAP or Anime.js for subtle but engaging animations on page transitions and element appearances to enhance user experience.