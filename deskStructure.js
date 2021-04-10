import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import { Preview, SEOPreviews } from './src/schemas/components/Previews';

import {Blog, LandingPages} from "./src/structure";
import EyeIcon from "part:@sanity/base/eye-icon";
// import EditIcon from "part:@sanity/base/edit-icon";
import { Emoji } from './src/utils/emojiIcons';
 
const ConfigIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="⚙️" />;
const NewsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="🗞" />;


const JsonPreview = ({ document }) => (
  <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
);

export const getDefaultDocumentNode = (props) => {

  let { schemaType } = props;
  if (schemaType == 'post' || schemaType == 'page' || schemaType == 'route') {
    return S.document().views([
      S.view.form(),
      S.view.component(Preview).icon(EyeIcon).title("Web Preview"),
      // S.view.component(SEOPreviews).icon(EyeIcon).title("SEO Preview"),
      S.view.component(JsonPreview).title("JSON"),
    ]);
  }
  return S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title("JSON"),
  ]);
};

export default () =>
  S.list()
    .title('🧘🏻‍♀️ YWST Content 🧘🏻‍♀️')
    .id('ywstContent')
    .items([
      S.listItem()
        .title('Settings')
        .icon(ConfigIcon)
        .child(
          S.document()
            .title('Default SEO/Share')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      Blog,
      S.divider(),
      LandingPages,
      S.divider(),
      Newsletter
    ]);
const BookmarkIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="🔖" />;
const NewspaperIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="📰" />;
    const Newsletter = S.listItem()
      .title('Newsletters').icon(NewspaperIcon)
      .child(
        S.list()
          .id('Newsletters')
          .title('Crafting')
          .items([
            S.documentTypeListItem('newsletter').title('Newsletters').icon(NewsIcon),
            S.divider(),
            S.documentTypeListItem('bookmark').title('Bookmarks').icon(BookmarkIcon),
          ])
      );