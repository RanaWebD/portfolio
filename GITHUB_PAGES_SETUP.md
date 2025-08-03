# GitHub Pages Setup Guide

## Prerequisites
- Your React app is ready for deployment
- You have a GitHub account
- Your code is pushed to a GitHub repository

## Step 1: Update Configuration

### 1.1 Update package.json
The `package.json` has been updated with:
- `homepage` field: Set to `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`
- `predeploy` script: Runs build before deployment
- `deploy` script: Uses gh-pages to deploy the build folder

### 1.2 Replace Placeholder Values
Update the `homepage` field in `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/REPOSITORY_NAME"
```

Replace:
- `YOUR_USERNAME` with your actual GitHub username
- `REPOSITORY_NAME` with your actual repository name

## Step 2: GitHub Repository Setup

### 2.1 Create Repository (if not already done)
1. Go to GitHub.com
2. Click "New repository"
3. Name it (e.g., "portfolio")
4. Make it public
5. Don't initialize with README (since you already have one)

### 2.2 Push Your Code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

### 3.1 Deploy Command
Run this command to deploy:
```bash
npm run deploy
```

This will:
1. Build your React app (`npm run build`)
2. Create a `gh-pages` branch
3. Push the build files to that branch
4. Make your site available at the homepage URL

### 3.2 Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

## Step 4: Verify Deployment

Your site will be available at:
`https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

## Troubleshooting

### Common Issues:

1. **404 Error**: 
   - Make sure the homepage URL in package.json is correct
   - Ensure the gh-pages branch exists and has content

2. **Build Errors**:
   - Check that all dependencies are installed
   - Ensure there are no syntax errors in your code

3. **Routing Issues** (if using React Router):
   - Add a 404.html file in the public folder
   - Consider using HashRouter instead of BrowserRouter

### For React Router Users:
If you're using React Router, you might need to:
1. Use HashRouter instead of BrowserRouter
2. Or add a 404.html file for client-side routing

## Alternative Method: GitHub Actions (Advanced)

For automatic deployment on every push:

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## Notes
- The first deployment might take a few minutes to become available
- Subsequent deployments are faster
- You can check deployment status in the "Actions" tab of your repository 