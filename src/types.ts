export type cookieString=string;

export type cookieProps={
    [key:string]:string};


    interface Request {
        headers: {
          cookie?: string;
        };
        cookie?:cookieProps;
      }
      
      interface Response {}
      
      interface NextFunction {
        (): void;
      }
      

export type cookieParserprops={
    req:Request,res:Response,next:NextFunction};