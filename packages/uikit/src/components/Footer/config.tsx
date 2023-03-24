import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import {
  TwitterIcon,
  TelegramIcon,
  // RedditIcon,
  // InstagramIcon,
  GithubIcon,
  DiscordIcon,
  MediumIcon,
  // YoutubeIcon,
} from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://migoswap.gitbook.io/migodoc/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/@migoswap",
      },
      {
        label: "Community",
        href: "https://discord.gg/Yfbgv2MWv6",
      },
      {
        label: "MIGO",
        href: "https://migoswap.gitbook.io/migodoc/tokenomics",
      },
      {
        label: "—",
      },
      // {
      //   label: "Online Store",
      //   href: "https://pancakeswap.creator-spring.com/",
      //   isHighlighted: true,
      // },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://discord.gg/Yfbgv2MWv6",
      },
      {
        label: "Guides",
        href: "https://migoswap.gitbook.io/migodoc/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/MigoSwapDEX",
      },
      {
        label: "Documentation",
        href: "https://migoswap.gitbook.io/migodoc/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/Migoswap",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/migoswap",
  },
  // {
  //   label: "Telegram",
  //   icon: TelegramIcon,
  //   items: [
  //     {
  //       label: "English",
  //       href: "https://t.me/migoswap",
  //     },
  //     {
  //       label: "Bahasa Indonesia",
  //       href: "https://t.me/PancakeSwapIndonesia",
  //     },
  //     {
  //       label: "中文",
  //       href: "https://t.me/PancakeSwap_CN",
  //     },
  //     {
  //       label: "Tiếng Việt",
  //       href: "https://t.me/PancakeSwapVN",
  //     },
  //     {
  //       label: "Italiano",
  //       href: "https://t.me/pancakeswap_ita",
  //     },
  //     {
  //       label: "русский",
  //       href: "https://t.me/pancakeswap_ru",
  //     },
  //     {
  //       label: "Türkiye",
  //       href: "https://t.me/pancakeswapturkiye",
  //     },
  //     {
  //       label: "Português",
  //       href: "https://t.me/PancakeSwapPortuguese",
  //     },
  //     {
  //       label: "Español",
  //       href: "https://t.me/PancakeswapEs",
  //     },
  //     {
  //       label: "日本語",
  //       href: "https://t.me/pancakeswapjp",
  //     },
  //     {
  //       label: "Français",
  //       href: "https://t.me/pancakeswapfr",
  //     },
  //     {
  //       label: "Deutsch",
  //       href: "https://t.me/PancakeSwap_DE",
  //     },
  //     {
  //       label: "Filipino",
  //       href: "https://t.me/Pancakeswap_Ph",
  //     },
  //     {
  //       label: "ქართული ენა",
  //       href: "https://t.me/PancakeSwapGeorgia",
  //     },
  //     {
  //       label: "हिन्दी",
  //       href: "https://t.me/PancakeSwapINDIA",
  //     },
  //     {
  //       label: "Announcements",
  //       href: "https://t.me/PancakeSwapAnn",
  //     },
  //   ],
  // },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  // {
  //   label: "Instagram",
  //   icon: InstagramIcon,
  //   href: "https://instagram.com/pancakeswap_official",
  // },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/MigoSwapDEX",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/Yfbgv2MWv6",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/@migoswap",
  },
  // {
  //   label: "Youtube",
  //   icon: YoutubeIcon,
  //   href: "https://www.youtube.com/@pancakeswap_official",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
