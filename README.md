
# cookie-string-parser
This NPM package provides a simple cookie parser middleware and function to parse cookie strings for Express.js applications.It can also used in tokenized value using JWT and extract the value from that token.

## Installation

Install package with npm

```bash
  npm install cookie-string-parser
```
## Usage/Examples
`javascript`
#### cookieParser-middleware
```javascript
const express=require("express");
const {cookieParser}=require("cookie-string-parser");

const PORT=process.env.PORT;

const app=express();

app.use(cookieParser);

app.get("/",(req,res)=>{
  console.log(req.cookies); // it will give key-value pair of cookies
  return res.status(200).send(req.cookies);
})

app.listen(PORT,()=>{
  console.log("staring...");
})
```
### OR
#### parseCookieString-parse cookie string

```javascript
const express=require("express");
const {parseCookieString}=require("cookie-string-parser");

const PORT=process.env.PORT;

const app=express();

app.get("/",(req,res)=>{
  let cookieObj=parseCookieString(req.headers.cookies);
  console.log(cookieObj); // it will give key-value pair of cookies
  return res.status(200).send(cookieObj);
})

app.listen(PORT,()=>{
  console.log("staring...");
})
```
#### setToken_getValue JWT
```javascript
const express=require("express");
const {create_JWTtoken,verify_JWTtoken}=require("cookie-string-parser");

const PORT=process.env.PORT;

const app=express();

app.use(express.json());

app.post('/setCookie',(req,res)=>{
  const {username,email}=req.body;
  const token= create_JWTtoken([username,email],process.env.secret,{algorithm:'HS256'}); // note algorithm is optional. Default it is HS256.

  res.cookie('jwt',token);
  return res.status(200).send('cookie set');
})

app.get('/getCookie_value',(req,res)=>{

  const token=req.cookies.jwt;
  const value=verify_JWTtoken(token,process.env.secret,{algorithm:'HS256'}); // note algorithm is optional. Default it is HS256.);

  const username=value[0];
  const username_email=value[1];

  return res.status(200).send({username,username_email});
})

app.listen(PORT,()=>{
  console.log("staring...");
})
```
`typescript`
#### cookieParser-middleware
```typescript
import express, { Application, Request, Response, NextFunction } from 'express';
import { cookieParser } from 'cookie-string-parser';

const app: Application = express();

app.use(cookieParser);

app.get('/', (req: Request, res: Response)=> {
  console.log(req.cookies); // it will give key-value pair of cookies
  return res.status(200).send(req.cookies);
});

app.listen(PORT,()=>{
  console.log("staring...");
});
```
### OR
#### parseCookieString-parse cookie string
```typescript
import express, { Application, Request, Response, NextFunction } from 'express';
import { parseCookieString } from 'cookie-string-parser';

const app: Application = express();

app.get("/", (req: Request, res: Response) =>{
  let cookieObj=parseCookieString(req.headers.cookie);
  console.log(cookieObj); // it will give key-value pair of cookies
  return res.status(200).send(cookieObj);
});

app.listen(PORT,()=>{
  console.log("staring...");
});
```

#### setToken_getValue JWT

```typescript
import express, { Request, Response } from "express";
import { create_JWTtoken, verify_JWTtoken } from "cookie-string-parser";

PORT=process.env.PORT;

const app = express();

app.use(express.json());

app.post('/setCookie', (req: Request, res: Response) => {
  const { username, email } = req.body;
  const token = create_JWTtoken([username, email], process.env.secret as string, { algorithm: 'HS256' });

  res.cookie('jwt', token);
  return res.status(200).send('cookie set');
});

app.get('/getCookie_value', (req: Request, res: Response) => {
  const token = req.cookies.jwt;
  const value = verify_JWTtoken(token, process.env.secret as string, { algorithm: 'HS256' });

  const username = value[0];
  const email = value[1];

  return res.status(200).send({ username, email });
});

app.listen(PORT, () => {
  console.log("starting...");
});

```

## Build
`npm run build`
## License

[MIT](https://choosealicense.com/licenses/mit/)

