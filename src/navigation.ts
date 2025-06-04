import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  // links: [
  //   {
  //     text: 'Homes',
  //     links: [
  //       {
  //         text: 'SaaS',
  //         href: getPermalink('/homes/saas'),
  //       },
  //       {
  //         text: 'Startup',
  //         href: getPermalink('/homes/startup'),
  //       },
  //       {
  //         text: 'Mobile App',
  //         href: getPermalink('/homes/mobile-app'),
  //       },
  //       {
  //         text: 'Personal',
  //         href: getPermalink('/homes/personal'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Pages',
  //     links: [
  //       {
  //         text: 'Features (Anchor Link)',
  //         href: getPermalink('/#features'),
  //       },
  //       {
  //         text: 'Services',
  //         href: getPermalink('/services'),
  //       },
  //       {
  //         text: 'Pricing',
  //         href: getPermalink('/pricing'),
  //       },
  //       {
  //         text: 'About us',
  //         href: getPermalink('/about'),
  //       },
  //       {
  //         text: 'Contact',
  //         href: getPermalink('/contact'),
  //       },
  //       {
  //         text: 'Terms',
  //         href: getPermalink('/terms'),
  //       },
  //       {
  //         text: 'Privacy policy',
  //         href: getPermalink('/privacy'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Landing',
  //     links: [
  //       {
  //         text: 'Lead Generation',
  //         href: getPermalink('/landing/lead-generation'),
  //       },
  //       {
  //         text: 'Long-form Sales',
  //         href: getPermalink('/landing/sales'),
  //       },
  //       {
  //         text: 'Click-Through',
  //         href: getPermalink('/landing/click-through'),
  //       },
  //       {
  //         text: 'Product Details (or Services)',
  //         href: getPermalink('/landing/product'),
  //       },
  //       {
  //         text: 'Coming Soon or Pre-Launch',
  //         href: getPermalink('/landing/pre-launch'),
  //       },
  //       {
  //         text: 'Subscription',
  //         href: getPermalink('/landing/subscription'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Blog',
  //     links: [
  //       {
  //         text: 'Blog List',
  //         href: getBlogPermalink(),
  //       },
  //       {
  //         text: 'Article',
  //         href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
  //       },
  //       {
  //         text: 'Article (with MDX)',
  //         href: getPermalink('markdown-elements-demo-post', 'post'),
  //       },
  //       {
  //         text: 'Category Page',
  //         href: getPermalink('tutorials', 'category'),
  //       },
  //       {
  //         text: 'Tag Page',
  //         href: getPermalink('astro', 'tag'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Widgets',
  //     href: '#',
  //   },
  // ],
  links: [
    {
      text: 'LLM',
      href: getPermalink('/products/llm'),
    },
    {
      text: 'Products',
      links: [
        {
          text: 'VLM',
          href: getPermalink('/products/vlm'),
        },
        {
          text: 'VLA',
          href: getPermalink('/products/vla'),
        },
        {
          text: 'TTS',
          href: getPermalink('/products/tts'),
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [{ text: 'Download', href: 'https://huggingface.co/moxin-org', target: '_blank' }],
};

export const footerData = {
  links: [ // This array will contain groups of links.
    {
      title: 'Navigate', // You can name this group as you like.
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Contact', href: getPermalink('/contact') },
        // You can add more general navigation links here if needed
      ],
    },
    // You can uncomment and populate these other sections if you need them:
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     // ... other product links
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: getPermalink('/docs') }, // Example link to docs
    //     { text: 'Community', href: 'https://github.com/moxin-org/Moxin-LLM/discussions' }, // Example Moxin community link
    //     // ... other support links
    //   ],
    // },
    {
      title: 'Connect', // A group for Moxin specific external links
      links: [
        { text: 'GitHub', href: 'https://github.com/moxin-org/Moxin-LLM' },
        { text: 'Hugging Face', href: 'https://huggingface.co/moxin-org' },
        // Add Discord link here when available
        // { text: 'Discord', href: '#' },
      ],
    },
  ],

  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/moxin_org' }, 
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/moxin-org.bsky.social' }, 
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://mastodon.social/@moxin' }, 
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/moxin-org/Moxin-LLM' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/dawBjMrsSD' },
  ],
  // footNote: `
  //   <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
  //   Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `, // You can customize or remove the footNote
};
