# Portfolio - Full Stack Application

A complete full-stack portfolio website featuring a React frontend and Node.js/Express backend with Steam Workshop mod integration.

## Project Structure

```
portfolio/
├── client/                 # React frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── .env               # Environment variables (not committed)
│   └── ...
├── server/                # Node.js/Express backend
│   ├── server.js
│   ├── package.json
│   ├── .env               # Environment variables (not committed)
│   └── ...
├── .gitignore
├── .env.example           # Example environment variables
└── README.md
```

## Features

- **Modern React UI** with responsive design
- **Steam Workshop Integration** - Display mod statistics and previews
- **Modular Components** - Carousel, sections, side navigation
- **Environment Configuration** - Secure API endpoint management
- **Full-Stack** - React frontend + Express backend

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies

**Frontend:**

```bash
cd client
npm install
```

**Backend:**

```bash
cd ../server
npm install
```

### 3. Environment Variables

Create `.env` files in both directories:

**`client/.env`:**

```
REACT_APP_API_URL=http://localhost:5000
```

**`server/.env`:**

```
PORT=5000
NODE_ENV=development
```

### 4. Running Locally

**Option A: Run both simultaneously from root**

```bash
npm run dev:full
```

**Option B: Run separately**

Backend:

```bash
cd server
npm run dev
```

Frontend:

```bash
cd client
npm start
```

## Deployment

### Frontend Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Set the root directory to `client/`
3. Add environment variables in Vercel dashboard:
   ```
   REACT_APP_API_URL=https://your-api.com
   ```
4. Deploy

### Backend Deployment (Render.com or Railway.sh)

1. Create account on Render or Railway
2. Connect your GitHub repository
3. Set root directory to `server/`
4. Add environment variables:
   ```
   PORT=5000
   NODE_ENV=production
   ```
5. Deploy and get your API URL
6. Update frontend's `REACT_APP_API_URL` in Vercel

## Available Scripts

### Client

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Server

- `npm run dev` - Start development server with Node
- `npm start` - Start production server

### Root (if using dev:full)

- `npm run dev:full` - Run both client and server concurrently

## Technologies

**Frontend:**

- React 19
- React Router
- CSS3
- React Hooks

**Backend:**

- Express.js
- Node.js
- CORS enabled
- Steam API integration

## API Endpoints

### Steam Mods

- `GET /api/steam/:id` - Get mod statistics from Steam Workshop
  - Returns: subscriptions, preview_url, title, description, etc.

## Environment Variables Reference

Create `.env.example` files to document required variables:

**`client/.env.example`:**

```
REACT_APP_API_URL=http://localhost:5000
```

**`server/.env.example`:**

```
PORT=5000
NODE_ENV=development
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev:full`
4. Push to GitHub
5. Create a Pull Request

## Deployment Checklist

- [ ] Both `package.json` files have correct scripts
- [ ] Environment variables configured locally
- [ ] `.gitignore` includes `node_modules/` and `.env`
- [ ] Frontend builds successfully: `npm run build`
- [ ] Backend starts correctly: `npm run dev`
- [ ] API URL updated for production
- [ ] GitHub repository created and pushed
- [ ] Vercel account created and connected
- [ ] Backend deployment service selected (Render/Railway)
- [ ] Custom domain configured

## License

MIT

## Author

Florina Panaite

## Support

For issues or questions, please open an issue on GitHub.
