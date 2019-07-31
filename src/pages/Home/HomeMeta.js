// @flow

import React from 'react';
import {Helmet} from 'react-helmet';

export default function HomeMeta() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Mini Kumparan" />

      <title>Mini Kumparan</title>
      <link rel="canonical" href={`http://mini-kumparan.com`} />
    </Helmet>
  );
}
