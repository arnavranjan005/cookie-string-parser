
# cookie-string-parser
This NPM package provides a simple cookie parser middleware and function to parse cookie strings for Express.js applications.
## Installation

Install package with npm

```bash
  npm Install cookie-string-parser
```
## Usage/Examples
`javascript`
#### cookieParser-middleware
```javascript
const express=require("express");
const {cookieParser}=require("cookie-string-parser");

const app=express();

app.use(cookieParser);

app.get("/",(req,res)=>{
  console.log(req.cookie); // it will give key-value pair of cookies
  return status(200).send(req.cookie);
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

const app=express();

app.get("/",(req,res)=>{
  let cookieObj=parseCookieString(req.headers.cookie);
  console.log(cookieObj); // it will give key-value pair of cookies
  return status(200).send(cookieObj);
})

app.listen(PORT,()=>{
  console.log("staring...");
})
```
`typescript`
#### cookieParser-middleware
```typescript
import express from 'express';
import { cookieParser } from 'cookie-string-parser';

const app=express();

app.use(cookieParser);

app.get('/', (req: any, res: any) => {
  console.log(req.cookie); // it will give key-value pair of cookies
  return res.status(200).send(req.cookie);
});

app.listen(PORT,()=>{
  console.log("staring...");
});
```
### OR
#### parseCookieString-parse cookie string
```typescript
import express from 'express';
import { parseCookieString } from 'cookie-string-parser';

const app=express();

app.get("/",(req: any,res: any)=>{
  let cookieObj=parseCookieString(req.headers.cookie);
  console.log(cookieObj); // it will give key-value pair of cookies
  return status(200).send(cookieObj);
});

app.listen(PORT,()=>{
  console.log("staring...");
});
```
## Build
`npm run build`
## License

[MIT](https://choosealicense.com/licenses/mit/)

