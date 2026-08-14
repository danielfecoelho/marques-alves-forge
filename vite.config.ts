// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// No ambiente Lovable (sandbox) o preset é forçado para cloudflare-module,
// pelo que o preview não é afetado. Em ambientes externos (ex.: Netlify) este
// preset "netlify" faz com que o SSR corra como uma Netlify Serverless Function,
// permitindo deploy na Netlify com SSR funcional.
export default defineConfig({
  nitro: { preset: "netlify" },
});
