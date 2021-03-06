// @flow

import React from 'react';
import {Helmet} from 'react-helmet';

export default function ProfileMeta(props: any) {
  const {title, pathname} = props;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={title} />

      <title>{title}</title>

      <link rel="canonical" href={`http://mini-kumparan.com/${pathname}`} />
    </Helmet>
  );
}
