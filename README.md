# RECOMEÇO

## YouTube Reference
[Project Tutorial Video](https://www.youtube.com/watch?v=4sbklcQ0EXc): https://www.youtube.com/watch?v=4sbklcQ0EXc

## Package Configurations

### Frontend Package.json
```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@clerk/clerk-react": "^5.14.0",
    "@radix-ui/react-avatar": "^1.1.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-icons": "^1.3.1",
    "@radix-ui/react-scroll-area": "^1.2.0",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-slider": "^1.2.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.1",
    "axios": "^1.7.7",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.454.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hot-toast": "^2.4.1",
    "react-resizable-panels": "^2.1.6",
    "react-router-dom": "^6.27.0",
    "socket.io-client": "^4.8.1",
    "tailwind-merge": "^2.5.4",
    "tailwindcss-animate": "^1.0.7",
    "zustand": "^5.0.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/node": "^22.8.6",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.13.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.11.0",
    "vite": "^5.4.10"
  }
}
```

### Backend Package.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js",
    "seed:songs": "node src/seeds/songs.js",
    "seed:albums": "node src/seeds/albums.js"
  },
  "keywords": [],
  "type": "module",
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@clerk/express": "^1.3.4",
    "cloudinary": "^2.5.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "express-fileupload": "^1.5.1",
    "mongoose": "^8.8.0",
    "node-cron": "^3.0.3",
    "socket.io": "^4.8.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
}
```

## GitHub Setup

### gh config
```bash
gh auth login #usa interface web pra logar ou tokens disponibilizados
gh repo list #lista seus repositorios
gh repo create <user>/<repo> #cria repo remoto --private --public
gh repo delete <user>/<repo> #deleta repo remoto --confirm pula estapa e deleta direto !!!!CUIDADO!!!!
```

### Token Configuration
```bash
git config --global credential.helper store
```
This creates a file to store your credentials in `~/.git-credentials`. You can edit it manually or perform an operation that requires authentication, and then your login information will be saved.

### User Configuration
```bash
git config --global user.name "your_username"
git config --global user.email "your_email"
git config --global init.defaultBranch main
```

### Repository Configuration
1. Create the remote repository on GitHub
2. Navigate to your local repository folder
```bash
git init
git remote add origin "repository_url"
```

### Best Practices
```bash
git status              # Check staging area
git add .               # Add all files to staging
git commit -m "commit"  # Create commit
git push -u origin main # Push to remote
```

## Project Notes

### Tech Stack Overview (00:00:00 - Demo)

Frontend:
- React.js
- Tailwind CSS
- shadcn/ui
- TypeScript
- Zustand

Backend:
- Node.js
- Express.js
- MongoDB
- Socket.io
- JavaScript

### Setup Instructions

#### Frontend Setup (00:02:54)
1. Crie as pastas 'backend' e 'frontend'. Navegue até /frontend e crie o projeto

```bash
npm create vite@latest .
```

2. Select React and TypeScript:
```bash
npm i vite@5.4.10 #para usar versao correta do vite co0nforme o video
npm install
npm run dev
```

3. Clean up project structure:
- Delete `/src/Assets` and `/src/App.css`
- Delete `/src/index.css` contents
- Modify `/src/App.tsx` to basic structure:
```typescript
function App() {
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
```

4. Setup Tailwind:
```bash
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss@3.4.17 init -p
```
Isso cria os arquivos tailwind.config.js e postcss.config.js
No tailwind.config.js edite da seguinte maneira
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

No `/src/index.css` deixe assim:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Instale no vscode a extensão Tailwind CSS IntelliSense

em app.tsx altere a tag h1 adicionando uma className como text-red-500 text-5x1 para testar se funciona

5. Shadcn UI Setup
[Shadcn UI](https://ui.shadcn.com/docs/installation/vite): https://ui.shadcn.com/docs/installation/vite

va para o 3°passo e instale tudo ateh o passo 7
que criara /lib/utils.ts

entao execute o passo 8 no terminal para intalar o component button
```bash
npx shadcn@latest add button
```
ele cria a pasta components com o botao da shadcn lah dentro

Em app.tsx insira a tag Button e importe ela de /components/ui

dentro da tag voce pode definir variant={""} com valores predefinidos vindos da shadcn



#### Auth Setup (00:11:33)



### Implementation Sections
- Backend Setup (00:16:50)
- Database Setup & Signup Logic (00:29:19)
- Protect Route Middleware (00:54:26)
- Admin Routes & Controllers (01:04:26)
- Album Routes & Controllers (01:34:28)
- Song Routes & Controllers (01:40:29)
- User Routes & Controllers (01:50:04)
- Auth Provider & Callback Page (02:02:40)
- Main Layout and Left Sidebar (02:38:24)
- Album Page (03:25:52)
- Friends Activity (03:47:45)
- Home Page (04:04:47)
- Play Song Functionality & Queue (04:36:31)
- Play Button Component (05:12:48)
- Playback Controls Component (05:19:43)
- Admin Page (Add Song) (05:39:42)
- Admin Page (Add Albums) (06:43:08)
- Socket.io Implementation (06:53:32)
- Chat Page UI (07:49:51)
- Custom 404 Page (08:17:24)
- Deployment Guide (08:19:56)
- Final Tests & Outro (08:39:28)
