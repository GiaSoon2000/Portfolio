# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ⚡ Fast performance with Next.js
- 📱 Mobile-first approach
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 🌙 Dark mode ready (can be easily added)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information
Update the following files with your information:
- `app/layout.tsx` - Update metadata (title, description, etc.)
- `app/components/About.tsx` - Update your name, title, and description
- `app/components/Experience.tsx` - Update your work experience
- `app/components/Projects.tsx` - Update your projects
- `app/components/Skills.tsx` - Update your skills
- `app/components/Contact.tsx` - Update contact information

### Styling
- Colors: Update the primary color in `tailwind.config.js`
- Fonts: Change the font family in `tailwind.config.js`
- Layout: Modify the components in `app/components/`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Add `"export": "next export"` to your package.json scripts
2. Build and export: `npm run build && npm run export`
3. Deploy the `out` folder to GitHub Pages

## Custom Domain Setup

1. Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Add your domain to your hosting platform (Vercel/Netlify)
3. Update DNS settings as instructed by your hosting platform

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!
