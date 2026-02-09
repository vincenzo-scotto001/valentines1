# Valentine's Day Website 💕

A playful Valentine's Day website where the "No" button runs away and the "Yes" button keeps getting bigger!

## Deploy to Vercel

### Method 1: Deploy from GitHub (Recommended)

1. **Create a GitHub repository:**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it something like `valentine-website`

2. **Push your code to GitHub:**
   ```bash
   cd valentine-app
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/valentine-website.git
   git push -u origin main
   ```

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"
   - Done! Your site will be live in ~1 minute

### Method 2: Deploy with Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd valentine-app
   vercel
   ```
   
3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - What's your project's name? **valentine-website**
   - In which directory is your code located? **./**
   - Want to override settings? **N**

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## How It Works

- The "No" button moves to a random position when you hover over it
- Each time the "No" button moves, the "Yes" button grows bigger
- When they finally click "Yes", a celebration screen appears with floating hearts!

Enjoy! 💖
