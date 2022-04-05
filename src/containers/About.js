import React from 'react';
import Helmet from 'react-helmet';

const About = () => {
  const imgUrl = 'https://source.unsplash.com/random';
  <div>
    <Helmet
      title='About'
      meta={[
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'About' },
        { name: 'twitter:description', content: 'description of About' },
        {
          name: 'twitter:image',
          content: imgUrl,
        },
        { property: 'og:title', content: 'About' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: 'https://lucent-brioche-b463dc.netlify.app/about',
        },
        {
          property: 'og:image',
          content: imgUrl,
        },
        { property: 'og:description', content: 'description of About' },
      ]}
    />
    <h2>About</h2>
  </div>;
};

export default About;
