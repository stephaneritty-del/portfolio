# Stephane Ritty - Portfolio

A modern, interactive portfolio showcasing AI-powered applications and product leadership.

## 🚀 Features

- **Distinctive Design**: Bold typography (Playfair Display + DM Sans), gradient accents, and smooth animations
- **Live App Demos**: Interactive iframes showcasing each project
- **Mobile Responsive**: Optimized for all screen sizes
- **Fast & Modern**: Built with React + Vite for optimal performance

## 📦 Projects Showcased

1. **VitalEat** - AI-Powered Food Intolerance Tracker
2. **WineCard Selector** - Your Pocket Sommelier
3. **MissionMot** - Social Dinner Game

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Deploy to Vercel (Recommended - FREE)

### Option 1: Deploy via Vercel CLI (Fastest)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd portfolio
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N**
   - What's your project's name? **stephane-ritty-portfolio**
   - In which directory is your code located? **.**
   - Want to override the settings? **N**

5. Your site will be live at: `https://stephane-ritty-portfolio.vercel.app`

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Push to GitHub:**
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live

3. **Custom Domain (Optional):**
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain

## 🎨 Customization

### Update Personal Info
Edit `src/App.jsx`:
- Line 12-14: Update email, name
- Line 16-62: Update projects array with your apps

### Change Colors
Edit `src/App.css`:
- Lines 1-13: Update CSS variables

### Modify Layout
- Hero section: Lines 98-158 in `App.jsx`
- Projects: Lines 160-247
- Contact: Lines 249-262

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Fluid typography using `clamp()`
- Flexible grid layouts
- Touch-friendly buttons
- Optimized iframe heights

## 🔗 Live Demo

Once deployed, your portfolio will be accessible at:
- Vercel: `https://YOUR-PROJECT.vercel.app`
- Custom domain: `https://your-domain.com`

## 📧 Contact

For questions or collaborations:
- Email: stephane.ritty@gmail.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

## 📄 License

© 2025 Stephane Ritty. All rights reserved.
