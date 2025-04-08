// vite-env.d.ts
/* Add vite/client, react, and @react-three/fiber directives so TS  */
/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="@react-three/fiber" />

declare module '*.hdr' {
    const src: string;
    export default src;
}
