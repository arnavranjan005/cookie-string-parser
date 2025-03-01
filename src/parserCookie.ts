import {  NextFunction, Request, Response } from "./interface";
import {cookieProps, cookieString } from "./types";
import jwt from "jsonwebtoken";

export function parseCookieString(cookieString:cookieString) {
  if(!cookieString) return {};
  const cookies:cookieProps = {};
    cookieString.split(';').forEach(cookie => {
      const [name, value] = cookie.split('=').map(c => c.trim());
      cookies[name] = decodeURIComponent(value);
    });
    return cookies;
  }

export function cookieParser(req:Request,res:Response,next:NextFunction):void {
   req.cookies = parseCookieString(req.headers.cookie||'');
  return next();
  }

export function create_JWTtoken(payload: string[],secretKey:string,expiresIn: string):string|null {
    if(!payload) return null;
    if(!secretKey) return null;

    try{
    const signOptions: jwt.SignOptions = {
      expiresIn,
    };

    return jwt.sign({ data: payload }, secretKey,signOptions);
  }
  catch(err:any){
    throw new Error(err.message);
  }
}

export function verify_JWTtoken(token:string,secretKey:string):any {
    if(!token) return null;
    if(!secretKey) return null;
    try{
    return jwt.verify(token, secretKey);
    }
    catch(err:any){
      throw new Error(err.message);
    }
}