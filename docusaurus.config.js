const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FavorX',
  tagline: 'The ONLY Decentralized cloud platform in commercial quality',
  url: 'https://www.favorlabs.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: [ require.resolve('docusaurus-lunr-search')],
  //i18n: {
  //    defaultLocale: 'en',
  //    locales: ['en','zh-cn'],
  //},
  themeConfig: {
  //    en: {
  //      label: 'English',
  //      direction: 'ltr',
  //    },
  //    zh: {
  //      label: '中文（中国）',
  //      direction: 'ltr',
  //    },
    
    navbar: {
      hideOnScroll: true,
      title: 'FavorX',
      logo: {
        alt: 'FavorX',
        src: 'img/favorlabs_logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
	  //to: '/docs/intro',
          position: 'left',
          label: 'Docs',
        },
	//{to: 'blog', label: 'API', position: 'left'},
//	{
//          type: 'localeDropdown',
//          position: 'right',
//        },
	      //{to: 'download', activeBasePath: 'download', position: 'right', label: 'DownLoad' },
        {
          href: 'https://github.com/FavorLabs/favorX',
	  position: 'right',
	  //label: 'GitHub',
	  className: 'navbar-item-github',
         // 'aria-label': 'GitHub repository',
        },

        {
          href: 'https://t.me/+kjm6X3Gcp9ZjNmRh',
          className: 'navbar-item-telegram',
          position: 'right', 
        },
        {
          href: 'https://twitter.com/favorlabs',
          className: 'navbar-item-twitter',
          position: 'right',
        },

      ],
    },
    footer: {
      //style: 'light',
      links: [
//	{
//	  title: 'DownLoad',
//	  items: [
//	    {
//		  label: 'Download',
//		  to: '/download/intro',
//	    },
//	  ],
//	},
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            /*{
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },*/
            {
              label: 'Discord',
              href: 'https://discord.gg/7kRMHqx6yA',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/favorlabs',
            },
	    {
	      label: 'Telegram',
	      href: 'https://t.me/+kjm6X3Gcp9ZjNmRh',
	    },
          ],
        },
        {
          title: 'More',
          items: [
            /*{
              label: 'API',
              to: '/api/intro',
            },*/
            {
              label: 'GitHub',
              href: 'https://github.com/FavorLabs/favorX',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Favor Laboratory.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
	  //routeBasePath: "/",
	  //path: "./docs",
	  //homePageId: 'intro',
          //sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:
           // 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        //blog: {
         // showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
            //'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
