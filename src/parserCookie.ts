import { cookieProps, cookieString } from "./types";

export function parseCookieString(cookieString:cookieString) {
    const cookies:cookieProps = {};
    cookieString.split(';').forEach(cookie => {
      const [name, value] = cookie.split('=').map(c => c.trim());
      cookies[name] = decodeURIComponent(value);
    });
    return cookies;
  }