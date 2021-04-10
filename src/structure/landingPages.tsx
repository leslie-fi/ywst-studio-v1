import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import { Emoji } from '../utils/emojiIcons';

const PagesIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="📄" />;
const RoutesIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="🚏" />;
const LandingIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol="🏠" />;


const LandingPages = S.listItem()
  .title('Landing Pages')
  .icon(LandingIcon)
  .child(
    S.list()
      .id('rootPages')
      .title('/')
      .items([
        S.documentTypeListItem('page').title('Pages').icon(PagesIcon),
        S.divider(),
        S.documentTypeListItem('route').title('Routes').icon(RoutesIcon),
      ])
  );

  export default LandingPages