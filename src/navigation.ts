import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Jurnal',
      href: getPermalink('/jurnal'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Hubungi Kami', href: 'https://wa.me/6287851150691', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Beranda',
      links: [
        { text: 'Layanan', href: getPermalink('/#layanan') },
        { text: 'Nilai Plus', href: getPermalink('/#nilaiplus') },
        { text: 'FAQ', href: getPermalink('/#faq') },
      ],
    },
    {
      title: 'Jurnal',
      links: [
        { text: 'Daftar Jurnal', href: getPermalink('/jurnal#daftarjurnal') },
        { text: 'Alur Publikasi', href: getPermalink('/jurnal#alurpublikasi') },
        { text: 'Fitur Utama', href: getPermalink('/jurnal#fiturutama') },
        { text: 'Biaya Publikasi', href: getPermalink('/jurnal#biayapublikasi') },
        { text: 'FAQ', href: getPermalink('/jurnal#faq') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/alditpra' },
  ],
  footNote: `
    AApedia.com · All rights reserved.
  `,
};