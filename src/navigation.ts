// src/navigation.ts (for English)
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  homeLink: getPermalink('/en'),
  links: [
    {
      text: 'Models',
      href: getPermalink('/en/models'),
    },
    {
      text: 'Technology',
      href: getPermalink('/en/technology'),
    },
    {
      text: 'Usage & Docs',
      href: getPermalink('/en/usage'),
    },
    {
      text: 'Use Case',
      href: getPermalink('/en/use_case'),
    },
    {
      text: 'About',
      href: getPermalink('/en/about'),
    },
    {
      text: 'Blog',
      href: getPermalink('/en/blog'), // <--- CHANGE THIS LINE
    },
  ],
  actions: [{ text: 'Download', href: 'https://huggingface.co/moxin-org', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Navigate',
      links: [
        { text: 'Models', href: getPermalink('/en/models') },
        { text: 'Technology & Research', href: getPermalink('/en/technology') },
        { text: 'Usage & Docs', href: getPermalink('/en/usage') },
        { text: 'Use Case', href: getPermalink('/en/use_case') },
        { text: 'About', href: getPermalink('/en/about') },
        { text: 'Blog', href: getPermalink('/en/blog') }, // <--- CHANGE THIS LINE
      ],
    },
    {
      title: 'Code',
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
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};