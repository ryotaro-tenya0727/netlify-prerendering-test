import React from 'react';
import Helmet from 'react-helmet';

const Home = () => {
  const imgUrl =
    'https://user-images.githubusercontent.com/71915489/161695870-e6677601-ec8e-4e15-8db8-cd1534057cbb.jpeg';
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
