#			RECOMEÇO

####	youtube

https://www.youtube.com/watch?v=4sbklcQ0EXc

####    package.json

/frontend

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


/backend

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


####	github

<><><> token


$ git config --global credential.helper store

cria um arquivo para armazenar suas credencias no ~/.git-credentials
voce pode editar-lo manualmente ou fazer alguma operacao que peça autenticação
e entao suas infos de login serao salvas

<><><> user config

$ git config --global user.name ""
$ git config --global user.email ""

<><><> repo config

crie o repo remoto no site
va na pasta do repo local para init e add remote

$git init
$git remote add origin ""

<><><> best pratices

ver stage
selecionar todos os arquivos pro stage
criar commit
push

$ git status
$ git add .
$ git commit -m "commit"
$ git push -u origin main


#					NOTAS


#### 00:00:00 - Demo

backend

node js
express js
mongodb
saicd io
javascript js

frontend

react js
tailwind css
shadcn ui
typescript ts
zustand



#### 00:02:54 - Frontend Setup

criar pastas backend e frontend na pasta do projeto

na pasta frontend:

$ npm create vite@latest .

para a versao do vite que ele usa no projeto

$ npm i vite@5.4.10



escolher React e TypeScript

$ npm install
$ npm run dev

abrindo localhost na porta 5173 teremos a interface do framework

http://localhost:5173/


deletar em /src

assets
app.css

em app.tsx 

deixar só isso

function App() {

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App

em index.css deletar tudo dentro

vamos usar buscar no google e tailwind vite

https://tailwindcss.com/docs/installation/using-vite

https://v3.tailwindcss.com/docs/guides/vite#react
tem q	procurar a versao q ele usa no video e fazer igual
3.4.13 no video
3.4.17 eh o que tem pra seguir igual

$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p

o certo seria
$ npx tailwindcss@3.4.17 init --full


nada disso funciona pq vc tava usando a versao 4 o tempo todo...


dai no teste vamo ver se rola ir com ela

$ npm install tailwindcss @tailwindcss/vite

no vite.conmfig.ts

% import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
% export default defineConfig({
  % plugins: [
    tailwindcss(),
  % ],
% })

no css (index.css)

@import "tailwindcss";


dai npm run dev e zas zas zas


iniciar o shadcn ui

https://ui.shadcn.com/docs/installation/vite

vai direto pro passo 3
dai no 



#### 00:11:33 - Auth Setup















#### 00:16:50 - Backend Setup















#### 00:29:19 - Database Setup & Signup Logic















#### 00:54:26 - Protect Route Middleware















#### 01:04:26 - Admin Routes & Controllers















#### 01:34:28 - Album Routes & Controllers















#### 01:40:29 - Song Routes & Controllers















#### 01:50:04 - User Routes & Controllers















#### 02:02:40 - Creating Auth Provider & Callback Page















#### 02:38:24 - Main Layout and Left Sidebar















#### 03:25:52 - Creating Album Page















#### 03:47:45 - Create Friends Activity















#### 04:04:47 - Create Home Page















#### 04:36:31 - Play Song Functionality & Queue















#### 05:12:48 - Play Button Component















#### 05:19:43 - Playback Controls Component















#### 05:39:42 - Admin Page (Add Song)















#### 06:43:08 - Admin Page (Add Albums)















#### 06:53:32 - Implementing Socket.io for Realtime Features















#### 07:49:51 - Building Chat Page UI















#### 08:17:24 - Building a Custom 404 Page















#### 08:19:56 - Detailed Deployment















#### 08:39:28 - Final Tests & Outro
