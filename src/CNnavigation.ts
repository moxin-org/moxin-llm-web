// src/CNnavigation.ts (for Chinese)
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  homeLink: getPermalink('/cn'),
  links: [
    {
      text: '模型',
      href: getPermalink('/cn/models'),
    },
    {
      text: '技术',
      href: getPermalink('/cn/technology'),
    },
    {
      text: '使用与文档',
      href: getPermalink('/cn/usage'),
    },
    {
      text: '应用案例',
      href: getPermalink('/cn/use_case'),
    },
    {
      text: '关于我们',
      href: getPermalink('/cn/about'),
    },
    {
      text: '博客', // Translated 'Blog'
      href: getPermalink('/cn/blog'), // <--- CHANGE THIS LINE
    },
  ],
  actions: [{ text: '下载', href: 'https://huggingface.co/moxin-org', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '导航',
      links: [
        { text: '模型', href: getPermalink('/cn/models') },
        { text: '技术与研究', href: getPermalink('/cn/technology') },
        { text: '使用与文档', href: getPermalink('/cn/usage') },
        { text: '应用案例', href: getPermalink('/cn/use_case') },
        { text: '关于我们', href: getPermalink('/cn/about') },
        { text: '博客', href: getPermalink('/cn/blog') }, // <--- CHANGE THIS LINE
      ],
    },
    {
      title: '代码',
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