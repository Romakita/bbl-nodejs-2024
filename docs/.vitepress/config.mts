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
        text: "Workers threads",
        link: "/workers/index.md"
      }
    ],

    socialLinks: [
      {icon: "github", link: "https://github.com/vuejs/vitepress"}
    ]
  }
});
