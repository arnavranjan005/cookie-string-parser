import { NextFunction, Request, Response } from "./interface";
import {cookieProps, cookieString } from "./types";

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