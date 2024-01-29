import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BBL Node.js",
  description: "Présentation du Spawn, Cluster, Workers et Loaders en Node.js",
  themeConfig: {
    logo: "/nodejs.png",
    search: {
      provider: "local"
    },
    editLink: {
      pattern: 'https://github.com/romakita/bbl-nodejs-2024/edit/main/docs/:path'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Introduction', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: "Introduction",
        link: "/introduction"
      },
      {
        text: "Child process (spawn)",
        items: [
          {
            text: "Introduction",
            link: "/spawn/index.md"
          },
          {
            text: "Les étapes de la démo",
            link: "/spawn/steps.md"
          },
          {
            text: "Avantages & inconvénients",
            link: "/spawn/conclusion.md"
          },
          {
            text: "Bonus",
            link: "/spawn/bonus.md"
          }
        ]
      },
      {
        text: "Cluster",
        items: [
          {
            text: "Introduction",
            link: "/cluster/index.md"
          },
          {
            text: "Les étapes de la démo",
            link: "/cluster/steps.md"
          },
          {
            text: "Avantages & inconvénients",
            link: "/cluster/conclusion.md"
          }
        ]
      },
      {
        text: "Worker threads",
        items: [
          {
            text: "Introduction",
            link: "/workers/index.md"
          },
          {
            text: "Les étapes de la démo",
            link: "/workers/steps.md"
          },
          {
            text: "Avantages & inconvénients",
            link: "/workers/conclusion.md"
          }
        ]
      },
      {
        text: "Les loaders",
        items: [
          {
            text: "Introduction",
            link: "/loaders/index.md"
          },
          {
            text: "Les étapes de la démo",
            link: "/loaders/steps.md"
          },
          {
            text: "Avantages & inconvénients",
            link: "/loaders/conclusion.md"
          },
          {
            text: "Bonus",
            link: "/loaders/bonus.md"
          }
        ]
      },
      {
        text: "Conclusion",
        link: "/merci.md"
      },
      {
        text: "Sources",
        link: "/sources.md"
      }
    ],

    socialLinks: [
      {icon: "github", link: "https://github.com/vuejs/vitepress"}
    ]
  }
});
