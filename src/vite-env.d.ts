/// <reference types="vite/client" />
declare module "*.jsx" {
  const component: React.ComponentType<any>;
  export default component;
}

declare module "*.cjs" {
  const value: any;
  export default value;
}
