import React from 'react';
import Helmet from 'react-helmet';

const Home = () => {
  const imgUrl = 'https://source.unsplash.com/random';
  <div>
    <Helmet
      title='Home'
      meta={[
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Home' },
        { name: 'twitter:description', content: 'description of Home' },
        {
          name: 'twitter:image',
          content: imgUrl,
        },
        { property: 'og:title', content: 'Home' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: 'https://lucent-brioche-b463dc.netlify.app/',
        },
        {
          property: 'og:image',
          content: imgUrl,
        },
        { property: 'og:description', content: 'description of Home' },
      ]}
    />
    <h2>Home</h2>
  </div>;
};

export default Home;
