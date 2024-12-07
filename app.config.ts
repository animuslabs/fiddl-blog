export default defineAppConfig({
  logo: "/images/logo.svg",
  url: "https://fiddl.art/blog",
  theme: "fiddl-blog",
  // The name of the blog itself
  name: "Fiddl.art Blog",
  avatar: "/images/avatar.jpg",
  // The description of the blog if any
  description: "Fiddl.Art blog is about AI art",
  socials: {
    twitter: "https://x.com/fiddlart",
    youtube: "https://www.youtube.com/@fiddlart",
    linkedin: "https://www.linkedin.com/company/fiddl-art",
    facebook: "https://facebook.com/fiddlart",
    instagram: "https://instagram.com/fiddl.art",

    // possible values : 'facebook', 'twitter', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram', 'skype'
    // see https://github.com/stefanobartoletti/nuxt-social-share
    // sharing_networks: ["facebook", "twitter", "linkedin", "email", "pinterest", "reddit", "pocket", "whatsapp", "telegram", "skype"],
    sharing_networks: [],
  },

  newsletter: {
    enabled: false,
    form_action: "rssfeedpulse",
    provider: "https://rssfeedpulse.com/api/campaign/996539cf-73e4-47b5-8d7c-2d7450174467/subscribe",
  },

  comments: {
    enabled: false,
    hyvor_talk: {
      website_id: "10519", // Replace with your Hyvor Talk website ID (it won't work with this one)
    },
  },

  table_of_contents: true,
  authors: [
    // {
    //   username: "hugo",
    //   default: true,
    //   name: "Hugo Lassiège",
    //   description: "Main maintainer of Bloggrify",
    //   avatar: "/images/avatar.jpeg",
    //   socials: {
    //     twitter: "https://twitter.com/hugolassiege",
    //     twitter_username: "hugolassiege",
    //     mastodon: "https://piaille.fr/@hugolassiege",
    //     youtube: "https://youtube.com/@eventuallycoding",
    //     linkedin: "https://www.linkedin.com/in/hugolassiege/",
    //     // facebook: 'https://facebook.com',
    //     // instagram: 'https://instagram.com',
    //     github: "https://github.com/hlassiege",
    //   },
    // },
  ],

  menu: () => [
    { name: "Fiddl.Art Home", path: "https://fiddl.art" },
    // { name: "All Posts", path: "/archives" },
  ],

  robots: [
    {
      UserAgent: "*",
      Allow: ["/"],
    },
  ],
})
