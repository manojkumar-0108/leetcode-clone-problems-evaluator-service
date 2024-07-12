## How to setup a new Typescript Express project

1. Setup npm project

```
npm init -y
```

2. Install dependencies

```
npm install -D typescript
npm install concurrently
npm install nodemon
npm install express
npm install @types/express
```

3. Intialize typescript config file

```
tsc --init
```

4. Add the following scripts in package.json

```
{
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "npx nodemon dist/index.js",
    "dev": "npx concurrently --kill-others \"npm run watch\" \"npm start\""
}
```

> Note: Make relevant config changes in tsconfig.json

5. Start the project

```
npm run dev
```
