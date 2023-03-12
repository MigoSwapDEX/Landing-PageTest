import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        label: t("Contact"),
        href: "https://migoswap.gitbook.io/migodoc/contact-us",
        isHighlighted: true,
      },
      {
        label: t("Blog"),
        href: "https://medium.com/@migoswap",
      },
      {
        label: t("Community"),
        href: "https://discord.gg/Yfbgv2MWv6",
      },
      {
        label: t("Litepaper"),
        href: "#",
      },
    ],
  },
  {
    label: t("Help"),
    items: [
      {
        label: t("Customer Support"),
        href: "https://migoswap.gitbook.io/migodoc/customer-support",
      },
      {
        label: t("Guides"),
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: t("Developers"),
    items: [
      {
        label: "Github",
        href: "https://github.com/MigoSwapDEX",
      },
      {
        label: t("Documentation"),
        href: "https://migoswap.gitbook.io/migodoc/",
      },
    ],
  },
];
