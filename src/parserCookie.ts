import { cookieParserprops, cookieProps, cookieString } from "./types";

export function parseCookieString(cookieString:cookieString) {
    const cookies:cookieProps = {};
    cookieString.split(';').forEach(cookie => {
      const [name, value] = cookie.split('=').map(c => c.trim());
      cookies[name] = decodeURIComponent(value);
    });
    return cookies;
  }

export function cookieParser({req,res,next}:cookieParserprops){
    const cookies=parseCookieString(req.headers.cookie);
    if (cookies) req.cookie=cookies;
    else req.cookie={};
    return next();
  }