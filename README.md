# PromptCraft - AI Prompt Generator

A modern web application that helps users create perfect AI prompts by choosing from 20+ proven prompt styles.

## Features

- 🎨 Beautiful, modern UI design
- 📱 Fully responsive layout
- 🚀 Built with Next.js 15 and TypeScript
- 💨 Styled with Tailwind CSS
- ⚡ Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd promptcraft-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run the deployment command:
```bash
vercel
```

3. Follow the prompts to link your project and deploy.

### Option 2: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 3: Direct Upload

1. Build the project:
```bash
npm run build
```

2. Go to [vercel.com](https://vercel.com)
3. Drag and drop your project folder

## Project Structure

```
promptcraft-app/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   └── PromptCategoryCard.tsx  # Category card component
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── vercel.json          # Vercel configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Customization

### Adding New Prompt Categories

Edit the `promptCategories` array in `app/page.tsx`:

```typescript
const promptCategories = [
  {
    icon: '🎯',
    title: 'Your Category',
    description: 'Category description',
    bgColor: 'bg-color-100'
  },
  // ... more categories
];
```

### Changing Colors

The main brand color is purple (`purple-600`). To change it, search and replace all instances of `purple-600` and `purple-700` with your preferred color.

## License

MIT License