import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zapnote',
    short_name: 'Zapnote',
    description: 'Electrify outbound with co-branded microsites in seconds.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090d16',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
