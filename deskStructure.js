import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import { WebPreview, MobilePreview } from "./src/schemas/components/Previews";
import SocialPreview from "part:social-preview/component";
import { toPlainText } from "part:social-preview/utils";

import {
  MdMenu,
  MdEdit,
  MdVisibility,
  MdThumbUp,
  MdCode,
  MdPhoneIphone,
} from "react-icons/md";
import { Blog, LandingPages } from "./src/structure";
import { Emoji } from "./src/utils/emojiIcons";

const ConfigIcon = () => <Emoji style={{ fontSize: "3.5rem" }} symbol='⚙️' />;
const NewsIcon = () => <Emoji style={{ fontSize: "3.5rem" }} symbol='🗞' />;

const JsonPreview = ({ document }) => (
  <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
);

export const getDefaultDocumentNode = (props) => {
  let { schemaType } = props;
  if (
    schemaType == "post" ||
    schemaType == "page" ||
    schemaType == "route" ||
    schemaType == "siteSettings"
  ) {
    return S.document().views([
      S.view.form().icon(MdEdit),
      S.view.component(WebPreview).icon(MdVisibility).title("Web Preview"),
      S.view.component(MobilePreview).icon(MdPhoneIphone).title("Mobile Preview"),
      S.view
        .component(
          SocialPreview({
            // Overwrite prepareFunction to pick the right fields
            prepareFunction: (
              {
                title,
                excerpt,
                figure,coverImage,
                slug,
              } /* this object is the currently active document */
            ) => ({
              title,
              description: toPlainText(excerpt || []),
              ogImage: figure || coverImage,
              siteUrl: "https://www.quattrostudio.eu",
              slug: slug.current,
            }),
          })
        )
        .title("SEO & Social")
        .icon(MdThumbUp),

      S.view.component(JsonPreview).title("JSON").icon(MdCode),
    ]);
  }
  return S.document().views([
    S.view.form().icon(MdEdit),
    S.view.component(JsonPreview).title("JSON").icon(MdCode),
  ]);
};

export default () =>
  S.list()
    .title("🧘🏻‍♀️ YWST Content 🧘🏻‍♀️")
    .id("ywstContent")
    .items([
      S.listItem()
        .title("Settings")
        .icon(ConfigIcon)
        .child(
          S.document()
            .title("Default SEO/Share")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      Blog,
      S.divider(),
      LandingPages,
      S.divider(),
      Newsletter,
    ]);
const BookmarkIcon = () => <Emoji style={{ fontSize: "3.5rem" }} symbol='🔖' />;
const NewspaperIcon = () => <Emoji style={{ fontSize: "3.5rem" }} symbol='📰' />;
const Newsletter = S.listItem()
  .title("Newsletters")
  .icon(NewspaperIcon)
  .child(
    S.list()
      .id("Newsletters")
      .title("Crafting")
      .items([
        S.documentTypeListItem("newsletter")
          .title("Newsletters")
          .icon(NewsIcon),
        S.divider(),
        S.documentTypeListItem("bookmark")
          .title("Bookmarks")
          .icon(BookmarkIcon),
      ])
  );
