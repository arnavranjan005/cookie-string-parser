import { cookieParserprops, cookieProps, cookieString } from "./types";

export function parseCookieString(cookieString:cookieString) {
    const cookies:cookieProps = {};
    cookieString.split(';').forEach(cookie => {
      const [name, value] = cookie.split('=').map(c => c.trim());
      cookies[name] = decodeURIComponent(value);
    });
    return cookies;
  }

export function cookieParser({req,res,next}:cookieParserprops):void {
  if (!req.headers || !req.headers.cookie) {
    req.cookie = {}; // Ensure req.cookie is defined
  } else {
    req.cookie = parseCookieString(req.headers.cookie);
  }
  next();
  }