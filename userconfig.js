let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Dubai, United Arab Emirates',
    scale: "C",
  },
  clock: {
    format: "hh:mm a",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "General",
      background_url: "",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "Youtube",
            url: "https://youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#a9b665",
          },
          {
            name: "Instagram",
            url: "https://instagram.com",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },
          {
            name: "Whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#e78a4e",
          },
          {
            name: "Reddit",
            url: "https://www.reddit.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
          {
            name: "tetris",
            url: "https://tetris.com/",
            icon: "brand-apple-arcade",
            icon_color: "#ea6962",
          },
        ],
      }, {
        name: "Important Linux Stuff",
        links: [
          {
            name: "Arch Wiki",
            url: "https://wiki.archlinux.org",
            icon: "brand-disney",
            icon_color: "#7daea3",
          },
          {
            name: "Arch Packages",
            url: "https://archlinux.org/packages/?sort=&q=&maintainer=&flagged=",
            icon: "brand-amazon",
            icon_color: "#7daea3",
          },
        ],
      }],
    },
    {
      name: "School",
      background_url: "",
      categories: [
        {
          name: "General",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "OneNote",
              url: "https://www.onenote.com/hrd?wdorigin=ondcauth2&wdorigin=poc",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "dribble",
              url: "https://dribbble.com/following",
              icon: "brand-dribbble-filled",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "Resources",
          links: [
            {
              name: "Think IB",
              url: "https://www.thinkib.net",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "Exam Mate",
              url: "exam-mate.com",
              icon: "components",
              icon_color: "#a9b665",
            },
            {
              name: "Oxford Secondary Bookshelf",
              url: "https://bookshelf.oxfordsecondary.co.uk/sign-in",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
            {
              name: "Revision Village",
              url: "revisionvillage.com",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
            {
              name: "Revision Dojo",
              url: "https://www.revisiondojo.com",
              icon: "prompt",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "Management Stuff",
          links: [
            {
              name: "Go4Schools",
              url: "https://www.go4schools.com/sso/account/login?site=Student&returnUrl=https%3A%2F%2Fwww.go4schools.com%2Fstudents%2Fdefault.aspx",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
            {
              name: "ManageBac",
              url: "https://deira.managebac.com/student/home",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "Github",
              url: "https://github.com/nail-e",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "flutter",
              url: "https://docs.flutter.dev/ui",
              icon: "brand-flutter",
              icon_color: "#7daea3",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "CodeWars",
              url: "https://www.codewars.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "CryptoRank",
              url: "https://cryptohack.org/challenges/",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "Personal",
      background_url: "",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "Tuta",
              url: "https://app.tuta.com/login",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "Gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "Other Stuff",
          links: [
            {
              name: "Website",
              url: "nail-e.github.io",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
