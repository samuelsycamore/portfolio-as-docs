// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sycamore Garden Portfolio',
  tagline: 'The professional portfolio of Sam Sycamore, a writer and web developer.',
  url: 'https://sycamore.garden',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sycamore Garden',
        logo: {
          alt: 'Sycamore Garden logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Portfolio',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
              {
                label: 'Technical writing',
                to: '/category/technical-writing',
              },
              {
                label: 'Copywriting',
                to: '/category/copywriting',
              },
              {
                label: 'Content writing',
                to: '/category/content-writing',
              },
              {
                label: 'Public speaking',
                to: '/category/public-speaking',
              },
              {
                label: 'Books',
                to: '/category/books',
              },
            ],
          },
          {
            title: 'Get in touch',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/samuelsycamore',
              },
              {
                label: 'Twitter',
                href: 'https://www.twitter.com/tanoaksam',
              },
              {
                label: 'GitHub',
                href: 'https://www.github.com/samuelsycamore',
              },
            ],
          },
          {
            title: 'Sycamore Garden',
            items: [
              {
                href: 'https://tech.sycamore.garden',
                label: 'Tech',
              },
              {
                href: 'https://foraging.sycamore.garden',
                label: 'Plants',
              },
              {
                href: 'https://soundcloud.com/samsycamore',
                label: 'Music',
              },
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sycamore Garden. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
