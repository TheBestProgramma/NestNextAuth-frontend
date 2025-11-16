# Vercel Deployment Guide - Frontend

## ✅ Project Structure

Your Next.js app is now in the repository root! Vercel will auto-detect it.

## ✅ Deployment Steps

### Step 1: Import Project (If New)

1. **Go to Vercel Dashboard**

   - Visit [vercel.com](https://vercel.com)
   - Click **Add New** → **Project**

2. **Import from GitHub**

   - Select your repository: `NestNextAuth-frontend`
   - Vercel will auto-detect Next.js

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected) ✅
   - **Root Directory**: Leave empty (root) ✅
   - **Build Command**: `npm run build` (default) ✅
   - **Output Directory**: `.next` (default) ✅
   - **Install Command**: `npm install` (default) ✅

### Step 2: Set Environment Variables

1. **In Project Settings**

   - Go to **Settings** → **Environment Variables**

2. **Add Variable**
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: Your backend API URL
     - Development: `http://localhost:3000`
     - Production: Your deployed backend URL
   - **Environments**: Select all (Production, Preview, Development)
   - Click **Save**

### Step 3: Deploy

1. Click **Deploy**
2. Wait for build to complete
3. Visit your deployment URL

### If You Already Have a Project

1. **Go to Settings**

   - Click on your project
   - Go to **Settings** → **General**

2. **Verify Root Directory**

   - **Root Directory**: Should be empty or `.`
   - If it says `frontend-app`, click **Edit** and clear it

3. **Redeploy**
   - Go to **Deployments**
   - Click **Redeploy** on latest deployment

---

## 🔧 Environment Variables Setup

### Required Environment Variable

In Vercel Dashboard → Settings → Environment Variables:

**Variable Name:** `NEXT_PUBLIC_API_URL`

**Value Options:**

- **Development**: `http://localhost:3000`
- **Preview**: Your preview backend URL
- **Production**: Your production backend URL (e.g., `https://api.yourdomain.com`)

### How to Add:

1. Go to **Settings** → **Environment Variables**
2. Click **Add New**
3. Name: `NEXT_PUBLIC_API_URL`
4. Value: Your backend API URL
5. Select environments (Production, Preview, Development)
6. Click **Save**

---

## 📋 Deployment Checklist

### Before Deploying:

- [ ] Code pushed to GitHub
- [ ] Root directory set to `frontend-app` in Vercel
- [ ] Environment variable `NEXT_PUBLIC_API_URL` set
- [ ] Backend API is accessible (if deploying to production)
- [ ] CORS configured in backend to allow Vercel domain

### After Deploying:

- [ ] Check deployment logs for errors
- [ ] Visit deployed URL
- [ ] Test registration endpoint
- [ ] Test users list endpoint
- [ ] Check browser console for errors
- [ ] Verify API calls are working

---

## 🐛 Troubleshooting

### Error: 404 NOT_FOUND

**Cause**: Usually a build issue or missing files

**Fix**:

- Check that `package.json` is in the root
- Verify build logs for errors
- Ensure all files are committed to GitHub

### Error: Build Failed

**Possible Causes:**

1. **Missing dependencies**

   - Check `package.json` is in `frontend-app/`
   - Check build logs for missing packages

2. **TypeScript errors**

   - Fix any TypeScript errors
   - Check build logs

3. **Environment variables**
   - Ensure `NEXT_PUBLIC_API_URL` is set
   - Check it's available at build time

### Error: Module not found

**Fix**:

- Ensure all dependencies are in `package.json`
- Check `package-lock.json` is committed
- Vercel will run `npm install` automatically

### API Calls Failing

**Possible Causes:**

1. **CORS not configured**

   - Backend needs to allow Vercel domain
   - Check `ALLOWED_ORIGINS` in backend

2. **Wrong API URL**

   - Check `NEXT_PUBLIC_API_URL` environment variable
   - Must be accessible from browser (public URL)

3. **Backend not running**
   - Ensure backend is deployed and running
   - Check backend health endpoint

---

## 🔗 Backend CORS Configuration

Make sure your backend allows requests from Vercel:

### Update Backend CORS

In `apps/gateway/src/main.ts`:

```typescript
app.enableCors({
  origin: [
    "http://localhost:3000", // Local frontend
    "https://your-app.vercel.app", // Vercel deployment
    process.env.ALLOWED_ORIGINS?.split(",") || [],
  ],
  credentials: true,
});
```

Or use environment variable:

```env
ALLOWED_ORIGINS=https://your-app.vercel.app,https://www.your-app.vercel.app
```

---

## 📝 Quick Fix Steps

1. **Go to Vercel Dashboard**
2. **Select your project**
3. **Settings** → **General**
4. **Root Directory** → **Edit** → Enter `frontend-app`
5. **Save**
6. **Deployments** → **Redeploy** (or push new commit)

---

## ✅ Verification

After deployment:

1. Visit your Vercel URL
2. Check if page loads
3. Test registration
4. Test users list
5. Check browser console (F12) for errors
6. Check Network tab for API calls

---

## 🎯 Expected Vercel Settings

### General Settings:

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: Empty (root directory)
- **Build Command**: `npm run build` (auto)
- **Output Directory**: `.next` (auto)
- **Install Command**: `npm install` (auto)

### Environment Variables:

- `NEXT_PUBLIC_API_URL` = Your backend URL

---

**Since all files are in the root, Vercel will auto-detect and deploy correctly! 🚀**
