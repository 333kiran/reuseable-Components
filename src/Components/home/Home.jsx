import React from 'react';
import Button from './Button';


const Home = () => {

    const handleGetStarted = () => {}
    const handleLearnMore = () => {}
    const handleContactUs = () => {}

  return (
    <>
      <Button text="Get Started" onClick={handleGetStarted}/>
      <Button text="Learn More" onClick={handleLearnMore} />
      <Button text="Contact Us" onClick={handleContactUs} />
    </>
  )
}

export default Home;