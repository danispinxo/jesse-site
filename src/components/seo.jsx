import React from 'react';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export const SEO = (props) => {
  SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    pathname: PropTypes.string,
  };

  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: props.title || defaultTitle,
    description: props.description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${props.pathname || ''}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
    </>
  );
};
