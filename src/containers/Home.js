import React from 'react';
import Helmet from 'react-helmet';

const Home = () => {
  const imgUrl =
    'https://user-images.githubusercontent.com/71915489/159204626-e6d7a74a-0ffd-43f6-ba16-a195c506b84a.png';
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
