// @flow

import React from 'react';
import {Helmet} from 'react-helmet';

export default function StoryCreateMeta() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Write Article" />

      <title>Write Article</title>

      <link rel="canonical" href={`http://mini-kumparan.com/dummy`} />
    </Helmet>
  );
}
