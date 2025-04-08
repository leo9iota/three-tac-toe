// vite-env.d.ts
/// <reference types="vite/client" />

declare module '*.hdr' {
    const src: string;
    export default src;
}
