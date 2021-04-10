import React from 'react';

import resolvePreviewUrl from '../../../../../resolvePreview';
import styles from './Preview.module.css';

const ErrorDisplay = ({
  message = 'Fill all the required fields before accessing the preview',
}) => {
  return (
    <div className={styles.errorContainer}>
      <p>{message}</p>
    </div>
  );
};

export const Preview = ({ document }) => {
  const displayed = document?.displayed || {};
  const url = resolvePreviewUrl(displayed);

  if (!url && displayed._type === 'contribution.schema') {
    return (
      <ErrorDisplay
        message={`In order to preview your schema, you'll need to publish it first. You can use the "👀 Hide this Schema?" field while you're working on it.`}
      />
    );
  }
  if (!url) {
    return <ErrorDisplay />;
  }

  return (
    <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={'0'} />
    </div>
  );
};
