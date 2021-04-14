import React from 'react';
import SanityMobilePreview from "sanity-mobile-preview";
import "sanity-mobile-preview/dist/index.css?raw";

import resolvePreviewUrl from '../../../../../resolvePreview';
import styles from './Preview.module.css';

export const ErrorDisplay = ({
  message = 'Fill all the required fields before accessing the preview',
}) => {
  return (
    <div className={styles.errorContainer}>
      <p>{message}</p>
    </div>
  );
};

const Preview = ({ document, isMobile }) => {
  const displayed = document?.displayed || {};
  const url = resolvePreviewUrl(displayed);

  if (!displayed) {
    return (
      <ErrorDisplay
        message={`There is nothing to display here. In order to preview your document, you'll need to publish it first!`}
      />
    );
  }
  if (!url) {
    return <ErrorDisplay />;
  }

  return (
    <div className={styles.iframeContainer}>
      {isMobile ? (
        <SanityMobilePreview>
          <div className={styles.iframeContainer}>
            <iframe src={url} frameBorder={"0"} />
          </div>
        </SanityMobilePreview>
      ) : (
        <iframe src={url} frameBorder={"0"} />
      )}
    </div>
  );
};

export const WebPreview = ({ document }) => {
  return <Preview document={document} isMobile={false} />;
};

export const MobilePreview = ({ document }) => {
  return <Preview document={document} isMobile={true} />;
};