// @flow

import React from 'react';
import {Helmet} from 'react-helmet';

type Props = {
  title: ?string,
  pathname: string,
};

export default function StoryDetailMeta(props: Props) {
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
