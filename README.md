claude api key do bokwa
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
key "   "

# RECOMEÇO

## YouTube Reference
### [Project Tutorial Video](https://www.youtube.com/watch?v=4sbklcQ0EXc)
https://www.youtube.com/watch?v=4sbklcQ0EXc

## Original Package Configurations

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

## Extensões do vscode

1. Codeium: AI Coding Autocomplete and Chat for Python, Javascript, Typescript, Java, Go, and more
2. Prettier - Code formatter
3. Tailwind CSS IntelliSense
4. 
5. 
6. 
7. 



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
npm install #desnecessario caso tenha rodado comando acima
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
- por causa do Shadcn UI ele precisa do tailwindcss@3.4.17
- a versao atual eh 4.0 e mais facil de implementar, porem nao eh reconhecida pelo Shadcn UI durante a instalação

```bash
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss@3.4.17 init -p
```
- Isso cria os arquivos tailwind.config.js e postcss.config.js
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

- No `/src/index.css` deixe assim:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Instale no vscode a extensão Tailwind CSS IntelliSense
teste em app.tsx alterando a tag h1 adicionando uma className como text-red-500 text-5x1 para testar se funciona

5. Shadcn UI Setup
### [Shadcn UI](https://ui.shadcn.com/docs/installation/vite):
https://ui.shadcn.com/docs/installation/vite

- va para o 3°passo e instale tudo ateh o passo 7, que criara /lib/utils.ts

- entao execute o passo 8 no terminal para intalar o component button
```bash
npx shadcn@latest add button
```
- ele cria a pasta components com o botao da shadcn lah dentro

- Em app.tsx insira a tag Button e importe ela de /components/ui
  dentro da tag voce pode definir variant={""} com valores predefinidos vindos da shadcn



#### Auth Setup (00:11:33)

vamos usar o clerk para logar no aplicativo
### [Clerk.com](https://clerk.com/?utm_source=as-a-programmer&utm_medium=youtuber&utm_campaign=spotify-clone):
https://clerk.com/?utm_source=as-a-programmer&utm_medium=youtuber&utm_campaign=spotify-clone

- logue com sua conta nesse serviço e vá para dashboard
- crie uma nova aplicação
- nomeie para 'MusiGrau'
- selecione apenas Google para seguir os mesmos passos do video

Após criar a aplicação
- selecione React e execute a partir do passo2
em /frontend:
```bash
npm install @clerk/clerk-react
```
# seu b.o. no musigraufail era algo assim
crie em frontend `.env.local`
e insira a linha
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_ZGVhci1kdWNrLTgwLmNsZXJrLmFjY291bnRzLmRldiQ
```

- depois em main.tsx insira logo abaixo dos imports

```
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
```

**sem a publishable key nossa aplicação vai travar.... como travou antes..... e por isso vc tava tendo que recomecar.....**


- entao em main.tsx envolva <App /> com as tags
```
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
```
e importe do clerk/clerk-react, assim voce poderá usar os components do clerk

em app.tsx substituia o conteudo de <></> com
```
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
```
importe tudo de clerk/clerk-react

agora voce pode logar com sua conta google e dar loggout

vamos arrumar o botao de login com shadcn button

a questao é que apesar de logar, nada acontece no DB da nossa aplicação
apenas no dashboard do clerk é que podemos ver as atividades dos usuarios logados
lah podemos gerenciar tudo sobre isso, deletar, banir, ver o perfil, etc

agora precisamos criar nosso DB com MongoDB

entao vamos para /backend



#### Backend Setup (00:16:50)

1. Crie o package.json
No terminal va para /backend com o comando:
```bash
npm init -y
```
ele registrará suas dependencias necessarias para a aplicaçao conforme elas forem instaladas

2. instale dependencias

- Express
- Mongoose
- Dotenv
- Cloudinary  for upload images/audio files
- Cors  get rid of cors errors in development
- @clerk/express
- Socket.io for real-time communication like send msgs or listen to user activities

```bash
npm i express mongoose dotenv cloudinary cors @clerk/express socket.io
```

- Nodemon		for real-time changes syncs

```bash
npm i -D nodemon
```

3. criar files e folders
- Crie pasta /src dentro de backend
- Crie index.js dentro de /src que será o entry point da nossa aplicação
	pode ser index, app, server nas boas praticas

4. iniciar express server, arrumar sintaxe, alterar scripts, .env
Em `index.js` inicie o servidor express
- mas primeiro altere em package.json type para module 
	para usar a sintaxe import em vez de const require
```javascript
import express from "express";
```

depois disso voce altera o scripts do package.json e muda o test para dev e coloca nodemon src/index.js
```javascript
"dev": "nodemon src/index.js"
```
isso faz com que npm run dev execute o script dev com valor que colocamos do nodemon
e ele altera em tempo real as mudanças que fizermos

no index.js ainda importamos dotenv para lidar com variaveis do .env criado em /backend
lah temos a variavel PORTcom valor 5000

dotenv.config(); inicia a funcao para lidar com .env files

const app = express(); roda o server
const PORT = process.env.PORT; trabalha os dados do .env e joga na variavel criada

app.listen(PORT, () => {
	console.log("tarararara " + PORT);		trabalha mensagem no console com a variavel do .env
});

instale e logue na extensao codeium do vscode pra usar o autocomplete
- se as opcoes no emmet nao aparecerem
	TAB completa a sombra
	CTRL + -> aceita proxima palavra da sombra
- caso contrario ESC pra fechá-la
- se sombras nao aparecerem, backspace apagando caracteres força sugestoes na sombra

5. Agora criaremos rotas e implementaremos middlewares

criamos a pasta routes em /src e o arquivo user.route.js (.js eh a extensao, .route eh uma convenção)

```
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("User route with GET method");
});

export default router;
```

no index.js importamos userRoutes do .route.js
e acima de app.listen colocue

app.use("/api/users", userRoutes);

faça isso pra todas as categorias q ele usa

isso faz que a porta 5000 que eh o / seja navegada pelas rotas determinadas por /api/tananana
dependendo de qual delas é chamada

cada uma delas responde no html uma str fornecida
voce testou um console.log pra ver se aparecia no terminal rodando o nodemon
deu certo.... mas nao apareceu no console do F12 do navegador


bora pra database



#### Database Setup & Signup Logic (00:29:19)

bora de MongoDB

logue no site, crie um novo projeto adicione um cluster free sem mudar opcoes
escolha pra instalar com node
nao precisa rodar o comando npm pq usaremos o mongoose que ja foi instalado no nosso projeto
espere o link clique pra mostrar o password coloque esse valor em .env MONGODB_URI e antes da ? coloque o nome do seu db

crie em src a pasta lib com db.js dentro
```
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB:`, error);
    process.exit(1); // 1 is failure, 0 is success
  }
}
```

no index.js coloque 

import {connectDB} from "./lib/db.js";

e connectDB(); dentro de app.listen

no site do atlas vah em network access e adicione um novo ip e selecione acessar de qualquer lugar, entao crie

depois vah em clusters e browse collection

entao vamos criar alguns arquivos em src

criar pasta models e user.model.js
```
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  clerkId: {
    type: String,
    required: true,
    unique: true
  }, 
}, { timestamps: true });
// createdAt, updatedAt

export const User = mongoose.model("User", userSchema);
```


- mongodb e clerk sao servicos diferentes, entao devemos pegar o id do clerk e salvar no mongodb para manusear o usuario e suas atividades na aplicação


parou nos 39min


voltou

- agora crie song.model.js
```
import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  albumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
    required: false
  }  
}, { timestamps: true });

export const Song = mongoose.model("Song", songSchema);
```
album id vai puxar do arquivos que criaremos album.model.js
```
import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
}, { timestamps: true });

export const Album = mongoose.model("Album", albumSchema);
```

- por ultimo criar o message.model.js para salvar mensagens no db e ver o historico de msgs
```
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: String,
    required: true,
  },  // clerk user ID
  receiverId: {
    type: String,
    required: true,
  }, // clerk user ID
  content: {
    type: String,
    required: true,
  }, 
}, {timestamps: true});

export const Message = mongoose.model("Message", messageSchema);

```
- em src crie a pasta controller para armazenar as rotas de nossos .route.js e manter um codigo limpo
- crie um admin.controller.js e coloque as rotas de admin.route.js, o qual deve importar o seu respectivo controller
- admin.controller.js
```
export const getAdmin = (req, res) => {
  res.send("Admin route with GET method");
  console.log("Rota de adminisrtador com método GET");
}
```
- admin.route.js
```
import { Router } from "express";
import { getAdmin } from "../controller/admin.controller.js";

const router = Router();

router.get("/", getAdmin);

export default router;
```


- agora vamos criar as rotas e controllers para logica de auth
  quando um user sign up com o clerk, precisamos criar e salvar um user no db
  se for um login, precisamos ver se o user ja existe no db e se sim, fazer o login (nao precisa criar um user no db)
  se for 1° login = sign up
  se nao for 1° login = login

- vamos criar uma rota de callback

em auth.route.js mudar get para POST com endpoint /callback async assim:
```
import { Router } from "express";
import User from "../models/user.model.js";

const router = Router();

router.post("/callback", async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    //check if user exists
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      // signup
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }

    res.status(200).json({ success: true });

  } catch (error) {
    console.log("Error in auth callback", error);
    res.status(500).json({message: "Internal server error", error});
  }
});

export default router;
```
assim os campos utilizados conforme a nomenclatura criada pro clerk serao manipulados
porem pro req.body funcionar no index, precisamos de um json parser

- no index.js adicione o json parser

app.use(express.json());  // to parse req.body


basicamente nos criamos uma verificação de user existente ou nao e se nao existir, criamos um novo user no db


dai vamos tirar a funcao e o import user de .route.js e vamos colocar no controller.js como authCallback que vai pro route no lugar da funcao movida


com isso vamos sincronizar o serviço do clerk com nosso db finalizando nossa sessao sobre isso

1. criamos o backend application
2. instalamos o tailwind
3. instalamos o shadcn ui
4. instalamos o clerk authentication
5. e fizemos a beirada do nosso backend com alguns endpoints implantados
6. tbm fizemos um controllers que verifica usuario clerk no db para saber se eh signup ou login



#### Protect Route Middleware (00:54:26)

- nesse capitulo vamos criar um middleware para proteger rotas que nao devem ser acessadas por normal users
- vamos utilizar @clerk/expressjs para proteger rotas
[clerk docs](https://clerk.com/docs):
https://clerk.com/docs

- procure clerk express SDK (nao use nodeSDK pois ele sera deprecated)

depois de inicializar nossa app com express(), vamos chamaro clerkMiddleware() do pacote @clerk/express
isso vai por o auth key na nossa request

em index.js importe o clerkMiddleware e andtes das rotas use a funcao no app
o auth obj tem detalhes na documentacao do clerk como ex: sessionId, userId, orgId, xRole, xSlug, etc
temos tbm funcoes pra importar como getAuth, clerkMiddleware, requireAuth, etc

- vamos criar uma pasta middleware pra conferir se um user é admin, ou se esta autenticado
em auth.middleware.js 
```
import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
  vai ter um codigo aqui  
}
```
a funcao protectRoute recebe req, res, next e ao utilizala depois dos endpoits das rotas, ela verifica se o user esta autenticado
pois nao queremos que ele 'curta' uma musica sem estar logado
entao se em router.get("/like", protectRoute, (req, res) => {}) ele executa o 'next' (q eh o que vem depois do protectRoute) somente se o user esta logado

em .env adicione ADMIN_EMAIL=email do seu usuario logado no clerk

e em auth.middleware.js depois de protectRoute export o requireAdmin que eh uma funcao que verifica se o user eh admin
```
import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    return res.status(401).json({ message: "Unauthorized - you must be logged in" });    
  }

  next(); // isso eh o que vier na sequencia de protectRoute
};

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

    if (!isAdmin) {
      return res.status(403).json({ message: "Unauthorized - you must be an admin" });
    }

    next();
  } catch (error) {
    
  }
}
```
assim em admin.routes.js router.get("/add-song", protectRoute, requireAdmin, createSong);
protectRoute -> se esta logado
requireAdmin -> se eh admin
entao ele pode createSong


agora vamos criar rotas controles de admin



#### Admin Routes & Controllers (01:04:26)

  ***por hora temos de importante:*** 
  - import { clerkMiddleware } from "@clerk/express";
  - authCallback para checar se user vai signup ou login
  - protectRoute para confirmar se esta logado
  - requireAdmin para confirmar se eh admin

  isso tudo foi criado com req.auth do clerk


**OBS** ele esqueceu do catch(error) no requireAdmin do auth.middleware.js
```
return res.status(500).json({ message: "Internal Server Error", error });
```

1. implementando o Cloudinary
  - um admin deve poder adicionar musicas e imagens
  - para isso usamos o Cloudinary

[Cloudinary](https://cloudinary.com/):
https://cloudinary.com/

  - faça login
  - clique em settings
  - clique em API keys
  - copie o API Key
  - cole no .env como CLOUDNARY_API_KEY=tarara

  - tambem precisa do api secret e o cloud name
```
CLOUDNARY_API_KEY=457177885678123
CLOUDNARY_API_SECRET=bBxDuCXfE8G0ZB_1EhsnoNZtGes
CLOUDNARY_CLOUD_NAME=dtcep3fje
```

em lib crie um cloudinary.js
```
import {v2 as cloudinary} from "cloudinary";

import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary   // com esse obj poderemos upload imagens e audio pro cloudinary na nossa conta
```
agora vamos importar mais uma ferramenta para ajudar a gente com o upload de imagens
em /backend
```bash
npm i express-fileupload
```
- para fazer uploads vamos usar um /tmp/ folder e impartar uma funcao path para lidar com diretorios

e entao no index.js vamos importar e app.use essa ferramenta
```js
import fileUpload from "express-fileupload";
import path from "path";
//
//
const __dirname = path.resolve();
//
//
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, "tmp"), //dirname eh o diretorio atual, e nele vamos criar um tmp que armazenara os files ateh serem uploaded pro cloudinary
    createParentPath: true, // se o diretorio nao existir ele cria
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB max file size
    },
}));    // deve ficar antes de routes para limitar o tamanho dos files antes de qualquer upload do usuario
```

va para admin.routes.js e altere o router
```js
import { Router } from "express";
import { createSong } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/songs", protectRoute, requireAdmin, createSong);

export default router;

```
no .env
```
NODE_ENV=development
```
no index.js
```js
// error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal Server Error" : err.message });
});
```

com esse error handler ele usa next(error) para enviar a mesma mensagem em tudo mas tem que por next junto de req, res
atualize os controllers que precisam disso


agora vamos começar a salvar as musicas pq a gente tinha soh criado as musicas
vamos mandar isso pro cloudinary


no admin.controller.js ele cria as funcoes para criar e deletar musicas e albums
no admin.routes.js ele cria as rotas para criar e deletar musicas e albums com metodos delete e post procura por id os dados a serem manipulados


uma ultima coisa pro admin eh checar se é admin pra monstrar um botao de admin dashboard no client
fazer um request prum endpoint /check que diz se eh admin ou nao pra mostrar o botao ou nao


num sei onde cê parou... nem lembro qual parada q ele tava fazendo....

sei q da pau faltando a publishable key.... se comentar no index o app.use clerkMiddleware volta normal...
mas tem um pau no user com req.auth.userId q vem do clerkClient...
mas vamos continuar... pq ele nao testa as paginas.... só ve se o servidor ta rodando...



#### Album Routes & Controllers (01:34:28)

faz duas funcoes e poe nas rotas
uma pra pegar todos albums e outra pra procurar um album pelo id

album.route.js
```js
import { Router } from "express";
import { getAllAlbums, getAlbumById } from "../controller/album.controller.js";

const router = Router();

router.get("/", getAllAlbums);
router.get("/:id", getAlbumById);

export default router;
```

album.controller.js
```js
import { Album } from "../model/album.model.js";

export const getAllAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    next(error);
  }
};

export const getAlbumById = async (req, res, next) => {
  try {
    const { albumId } = req.params;

    const album = await Album.findById(albumId).populate("songs");

    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }

    res.status(200).json(album);

  } catch (error) {
    next(error);
  }
};
```



#### Song Routes & Controllers (01:40:29)
fez varias funcoes pro songs e ta colocando nas rotas

song.route.js
```js
import { Router } from "express";
import { getAllSongs, getFeaturedSongs, getTrendingSongs, getMadeForYouSongs, } from "../controller/song.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";


const router = Router();

router.get("/", protectRoute, requireAdmin ,getAllSongs);
router.get("/featured", getFeaturedSongs);
router.get("/made-for-you", getMadeForYouSongs);
router.get("/trending", getTrendingSongs);


export default router;
```

song.controller.js
```js
import { Song } from "../model/song.model.js";

export const getAllSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 }); // ordenado de mais recente para mais antigo
    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};

export const getFeaturedSongs = async (req, res, next) => {
  try {
    // pega 6 musicas aleatorias com mongodb aggregate pipeline
    const songs = await Song.aggregate([
      { $sample: { size: 6 } },
      { $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 } }
    ])

    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};


export const getMadeForYouSongs = async (req, res, next) => {
  try {
    // pega 4 musicas aleatorias com mongodb aggregate pipeline
    const songs = await Song.aggregate([
      { $sample: { size: 4 } },
      { $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 } }
    ])

    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};


export const getTrendingSongs = async (req, res, next) => {
  try {
    // pega 6 musicas aleatorias com mongodb aggregate pipeline
    const songs = await Song.aggregate([
      { $sample: { size: 6 } },
      { $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 } }
    ])

    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};


```

com uma rota pra ver todas as musicas pro admin e outras pra ver 6 musicas aleatorias no featured e 4 musicas aleatorias no made for you e trending



#### User Routes & Controllers (01:50:04)





#### Auth Provider & Callback Page (02:02:40)





#### Main Layout and Left Sidebar (02:38:24)





#### Album Page (03:25:52)





#### Friends Activity (03:47:45)





#### Home Page (04:04:47)





#### Play Song Functionality & Queue (04:36:31)





#### Play Button Component (05:12:48)





#### Playback Controls Component (05:19:43)





#### Admin Page (Add Song) (05:39:42)





#### Admin Page (Add Albums) (06:43:08)





#### Socket.io Implementation (06:53:32)





#### Chat Page UI (07:49:51)





#### Custom 404 Page (08:17:24)





#### Deployment Guide (08:19:56)





#### Final Tests & Outro (08:39:28)
