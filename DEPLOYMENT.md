# GitHub Automatic Build & Live Deployment

This repository includes a preconfigured GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your website live to GitHub Pages whenever you push code.

## How It Works

1. **Trigger**: Any push to `main` or `master` branch automatically triggers the workflow.
2. **Build**:
   - Sets up Node.js 20.
   - Installs dependencies (`npm install`).
   - Runs TypeScript validation (`npm run lint`).
   - Builds production distribution (`npm run build`).
   - Prepares SPA routing (`cp dist/index.html dist/404.html`) so direct navigation to deep links (`/services`, `/our-work`, etc.) works seamlessly without 404 errors.
3. **Deploy**: Deploys the static assets directly to **GitHub Pages** using official GitHub deployment actions (`actions/deploy-pages@v4`).

## One-Time Setup in GitHub Repository

To enable GitHub Pages deployment for your repo:

1. Push your project to GitHub:
   ```bash
   git add .
   git commit -m "Add auto build and deploy workflow for GitHub"
   git push origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. That's it! Every future commit pushed to `main` or `master` will automatically build and publish live within 60–90 seconds. You will see the live URL in the GitHub Actions tab and under Settings > Pages.
