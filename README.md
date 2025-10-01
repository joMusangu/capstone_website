# Husky Rover Sensor Data - Capstone Project

A Next.js web application showcasing Team 5's capstone project for Fall 2025.

## 🚀 Live Demo

Visit the live site: [https://yourusername.github.io/capstone-project](https://yourusername.github.io/capstone-project)

## 🛠️ Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/capstone-project.git
cd capstone-project
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

## 📦 Build for Production

```bash
npm run build
```

This will create a static export in the `out` directory that can be deployed to any static hosting service.

## 🚀 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Push your code to the main branch:**
   - The GitHub Action will automatically build and deploy your site
   - You can monitor the deployment in the "Actions" tab

3. **Access your deployed site:**
   - Your site will be available at: `https://yourusername.github.io/capstone-project`

### Manual Deployment:

If you need to deploy manually:

```bash
npm run build
# The static files will be in the 'out' directory
# Upload the contents of 'out' to your hosting service
```

## 🎨 Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Team Showcase**: Displays team member photos and information
- **Project Timeline**: Visual progress tracking
- **Resource Links**: Easy access to project documentation and code

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
├── public/               # Static assets (images, etc.)
├── .github/workflows/    # GitHub Actions workflows
└── out/                  # Static export output (generated)
```

## 👥 Team Members

- Joseph Musangu
- Delphin Iradukunda
- Noah Keung
- Omotoyosi Adams
- Max Heitzman

## 📄 License

This project is part of a capstone course at Texas Tech University.

