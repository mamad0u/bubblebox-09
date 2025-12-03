import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BubbleBox - Douches Mobiles et Accès Digne à l\'Hygiène',
    short_name: 'BubbleBox',
    description: 'Modules de douches mobiles autonomes pour offrir un accès gratuit et décent à l\'hygiène',
    start_url: '/',
    display: 'standalone',
    background_color: '#0E1A2B',
    theme_color: '#1E6DE3',
    icons: [
      {
        src: '/BBX.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}

