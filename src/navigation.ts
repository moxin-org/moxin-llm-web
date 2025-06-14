import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {

  links: [
    {
      text: 'Models',
      href: getPermalink('/models'),
    },
    {
      text: 'Technology',
      href: getPermalink('/technology'),
    },
    {
      text: 'Usage & Docs',
      href: getPermalink('/usage'),
    },

    {
      text: 'Use Case',
      href: getPermalink('/use_case'),
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
  links: [
    {
      title: 'Navigate',
      links: [
        { text: 'Models', href: getPermalink('/models') },
        { text: 'Technology & Research', href: getPermalink('/technology') },
        { text: 'Usage & Docs', href: getPermalink('/usage') },
        { text: 'Use Case', href: getPermalink('/use_case') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getPermalink('/blog') },

      ],
    },

    {
      title: 'Code', // A group for Moxin specific external links
      links: [
        { text: 'GitHub', href: 'https://github.com/moxin-org/Moxin-LLM' },
        { text: 'Hugging Face', href: 'https://huggingface.co/moxin-org' },
      ],
    },
  ],

  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/moxin_org' }, 
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/moxin-org.bsky.social' }, 
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://mastodon.social/@moxin' }, 
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/moxin-org/Moxin-LLM' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/dawBjMrsSD' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};
