import { defineConfig } from 'vite';
import fs from 'fs';

console.log("Checking certificate paths...");
console.log("Key Path:", 'C:/projekski/be/cert.key');
console.log("Cert Path:", 'C:/projekski/be/cert.crt');
console.log("File Exists?", fs.existsSync('C:/projekski/be/cert.key'), fs.existsSync('C:/projekski/be/cert.crt'));

export default defineConfig({
  server: {
    https: {
      key: 'C:/projekski/be/cert.key',
      cert: 'C:/projekski/be/cert.crt',
    },
    host: 'localhost',
    port: 3000,
  },
});
