# 🚀 DEPLOYMENT GUIDE - Stephane Ritty Portfolio

## Quick Start (5 Minutes to Live Site!)

### Prerequisites
- GitHub account (you already have)
- Vercel account (you already have)
- Your portfolio files (done! ✅)

---

## 🎯 Method 1: GitHub + Vercel (RECOMMENDED - Easiest)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Description: "Professional portfolio showcasing AI-powered applications"
4. Public or Private: **Public** (recommended for portfolio)
5. DON'T initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Your Code to GitHub

Open your terminal and run these commands:

```bash
cd portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio - React + Vite"

# Add GitHub as remote (REPLACE with YOUR username)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Click "Import" next to your `portfolio` repository
4. Vercel will auto-detect settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"
6. Wait 1-2 minutes... ☕
7. Done! 🎉

Your site will be live at: `https://portfolio-YOUR_USERNAME.vercel.app`

---

## 🎯 Method 2: Vercel CLI (For Advanced Users)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

(Follow the browser login prompt)

### Step 3: Deploy

```bash
cd portfolio
vercel
```

Answer the prompts:
- Set up and deploy? **Y**
- Which scope? (Select your account)
- Link to existing project? **N**
- Project name? **stephane-ritty-portfolio**
- In which directory? **. (press enter)**
- Override settings? **N**

Done! Your site is live! 🎉

---

## 🎨 Customizing Your Portfolio

### Change Your Apps URLs

Edit `src/App.jsx` - Lines 16-62:

```javascript
const projects = [
  {
    title: "VitalEat",
    url: "https://YOUR-ACTUAL-APP-URL.vercel.app",  // ← Change this
    // ... rest of config
  },
  // ... more projects
];
```

### Update Social Links

Edit `src/App.jsx` - Lines 32-39:

```javascript
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_PROFILE" ...>
```

### After Making Changes

```bash
git add .
git commit -m "Update app URLs and social links"
git push
```

Vercel will automatically redeploy! (Takes ~1 minute)

---

## 🌐 Adding a Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `stephaneritty.com`)
4. Follow DNS instructions from your domain registrar
5. Wait for DNS propagation (5-48 hours)
6. Done! Your site is at your custom domain

---

## 🆓 Cost Breakdown

| Service | Cost |
|---------|------|
| GitHub Repository | FREE |
| Vercel Hosting | FREE |
| Custom Domain | $10-15/year (optional) |
| **TOTAL** | **$0** (or $10-15/year with domain) |

### Vercel Free Tier Includes:
✅ Unlimited deployments
✅ Automatic HTTPS
✅ Global CDN
✅ 100GB bandwidth/month
✅ Serverless functions
✅ Automatic previews for pull requests

---

## 🔧 Troubleshooting

### Problem: Build fails on Vercel

**Solution:** Check that `package.json` has all dependencies:
```bash
cd portfolio
npm install
npm run build
```

If it builds locally, commit and push:
```bash
git add .
git commit -m "Fix build dependencies"
git push
```

### Problem: Apps not loading in iframes

**Solution:** Your app URLs might block iframe embedding. Check:
1. Go to each app's Vercel settings
2. Add `X-Frame-Options: SAMEORIGIN` header
3. Or update iframe to open in new tab instead

### Problem: Changes not showing up

**Solution:** 
1. Clear browser cache (Ctrl+Shift+R)
2. Check Vercel dashboard for deployment status
3. Make sure you pushed to GitHub: `git push`

---

## 📊 Monitoring Your Site

### Analytics (Optional - FREE)

Vercel provides built-in analytics:
1. Go to your project → "Analytics" tab
2. View visitors, page views, and performance

### Uptime Monitoring (Optional)

Free services:
- UptimeRobot (https://uptimerobot.com)
- Better Uptime (https://betteruptime.com)

---

## 🎯 Next Steps After Deployment

1. ✅ Share your portfolio URL with contacts
2. ✅ Add to your LinkedIn profile
3. ✅ Add to your resume
4. ✅ Update your email signature
5. ✅ Share on social media

---

## 📞 Need Help?

If you get stuck:
1. Check the error message in Vercel dashboard
2. Review this guide again
3. Check GitHub repository settings
4. Verify all files are pushed: `git status`

---

## 🎉 You're Done!

Your professional portfolio is now:
✅ Live on the internet
✅ Automatically deploying on updates
✅ Showing your projects interactively
✅ Mobile-responsive
✅ Fast and modern
✅ Costing you $0/month

**Your Live URL:** `https://portfolio-YOUR_USERNAME.vercel.app`

Time to share it with the world! 🚀
