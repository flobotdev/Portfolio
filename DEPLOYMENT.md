# Deployment Guide

This guide will walk you through deploying your portfolio to production.

## Quick Start

Your project is now set up as a monorepo. Before deploying:

### 1. Install Dependencies

From the root folder:

```bash
npm run install:all
```

This installs dependencies for both client and server.

### 2. Run Locally to Verify

```bash
npm run dev:full
```

This starts both:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Deployment Steps

### Step 1: Push to GitHub

1. Create a new GitHub repository: `https://github.com/yourusername/portfolio`
2. From your project root:

```bash
git init
git add .
git commit -m "Initial commit: Full-stack portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Select your `portfolio` repository
5. Configure:
   - **Framework Preset:** React
   - **Root Directory:** `./client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
6. Add Environment Variable:
   - Key: `REACT_APP_API_URL`
   - Value: (leave blank for now, you'll update after backend is deployed)
7. Click "Deploy"

**Your frontend will be live at:** `https://your-project.vercel.app`

### Step 3: Deploy Backend

Choose **one** option below:

#### Option A: Render.com (Recommended for Free)

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect GitHub repository
5. Configure:
   - **Name:** portfolio-server
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server/server.js`
   - **Root Directory:** Leave blank (Render will find it)
6. Add Environment Variables:
   - `PORT=10000` (Render assigns a port)
   - `NODE_ENV=production`
7. Click "Create Web Service"

**Your backend will be at:** `https://portfolio-server.onrender.com`

#### Option B: Railway.sh

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project → Deploy from GitHub repo
4. Select your repository
5. Configure:
   - **Root Directory:** `server`
   - **Start Command:** `npm start`
6. Add Variables:
   - `NODE_ENV=production`
7. Deploy

### Step 4: Update Frontend with Backend URL

1. Go back to Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Update `REACT_APP_API_URL` with your backend URL:
   - From Render: `https://portfolio-server.onrender.com`
   - From Railway: `https://your-railway-url.up.railway.app`
5. Redeploy (Vercel will rebuild automatically)

### Step 5: Add Custom Domain

#### For Frontend (Vercel):

1. Vercel Dashboard → Project Settings → Domains
2. Add your domain (yourdomain.com)
3. Follow instructions to update DNS records

#### For Backend (Optional):

1. Most services allow custom subdomains
2. Example: `api.yourdomain.com` points to your backend

## Verify Deployment

1. Visit your domain
2. Check that Steam mods load (they fetch from backend)
3. Check browser console for any API errors
4. Test on mobile

## Troubleshooting

### Frontend shows no mods

- Check that `REACT_APP_API_URL` is set correctly in Vercel
- Verify backend is running
- Check browser console for CORS errors

### CORS errors

- Backend has CORS enabled, but verify in `server.js`:

```javascript
app.use(cors());
```

### Backend not loading mods

- Verify the server is running
- Check Render/Railway logs for errors
- Verify PORT environment variable is set

## Next Steps

1. Set up a custom domain
2. Enable HTTPS (automatic with Vercel/Render)
3. Monitor performance with Vercel Analytics
4. Set up automatic deployments (already configured via GitHub)

## Environment Variables Checklist

- [ ] Frontend has `REACT_APP_API_URL` pointing to backend
- [ ] Backend has `NODE_ENV=production`
- [ ] Backend is accessible from frontend URL
- [ ] Steam API calls work in production
- [ ] Images load correctly

## Free Tier Limitations

- **Vercel:** 100 GB bandwidth/month, automatic deploys
- **Render:** Free tier sleeps after 15 min inactivity (upgrading removes this)
- **Railway:** Limited free credits, pay-as-you-go

## Support

If you encounter issues:

1. Check Vercel/Render deployment logs
2. Verify environment variables are set
3. Test backend locally before deploying
4. Check CORS configuration

Happy deploying! 🚀
