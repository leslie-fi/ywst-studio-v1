import React from "react";
import InstagramEmbed from "react-instagram-embed";

const InstagramPreview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return <p>Missing URL for Instagram post</p>;
  }
const token = process.env.FB_CLIENT_ACCESS_TOKEN
  return (
    <div>
      <InstagramEmbed
        clientAccessToken={token}
        url={url}
        maxWidth={360}
        containerTagName='div'
        injectScript
      />
    </div>
  );
};

export default InstagramPreview;
