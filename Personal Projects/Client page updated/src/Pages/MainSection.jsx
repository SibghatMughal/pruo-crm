import React from 'react';
import Layout from '../Components/Layout/Layout.jsx';
import Hero from '../Components/Hero/Hero.jsx';

function MainSection() {
  return (
    <>
    <Layout>
      {/* Your page-specific content */}
      <Hero/>
    </Layout>
    </>
  );
}

export default MainSection;