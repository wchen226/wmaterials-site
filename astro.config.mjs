// Import Astro's configuration helper and built-in font providers
import { defineConfig, fontProviders } from 'astro/config';

// Export Astro website settings
export default defineConfig({
  // Final website URL
  site: 'https://www.wmaterials.net',

  // Astro 7 uses top-level "fonts", not "experimental.fonts"
  fonts: [
    {
      // Use Google Fonts provider
      provider: fontProviders.google(),

      // Font used by the Astro blog template
      name: 'Atkinson Hyperlegible',

      // This must match the CSS variable used by the template
      cssVariable: '--font-atkinson',
    },
  ],
});