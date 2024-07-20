import { cookieProps } from "cookie-string-parser";

export interface Request {
    headers: {
      cookie?: string;
    };
    cookies?:cookieProps;
  }
  
  export interface Response {
    status: (code: number) => Response;
    send: (body: any) => Response;
  }
  
export interface NextFunction {
    (): void;
  }