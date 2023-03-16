declare global {
  // window上挂载
  interface Window {
    example: any;
  }
  namespace NodeJS {
    interface Global {
      OPENAI_BASE_ORIGIN: string;
     }
  }
}
export {}