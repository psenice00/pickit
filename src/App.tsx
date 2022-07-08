import { FirstSection } from './components/firstSection';
import { FifthSection } from './components/fifthSection/fifthSection';
import { FourthSection } from './components/fourthSection/fourthSection';
import { Header } from './components/header';
import { Intro } from './components/intro';
import { SecondSection } from './components/secondSection/secondSection';
import { ThirdSection } from './components/thirdSection/thirdSection';
import React, { useEffect } from 'react'
import { Footer } from './components/footer';
import Aos from 'aos';
import "aos/dist/aos.css"
import { Cookie } from './components/utils/cookie';


function App() {
  useEffect(() => {
    Aos.init(
      { duration: 1000 }
    );
  }, []);
  return (
    <div className="App">
      <Header />
      <Intro />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />

      <Cookie />
    </div>
  );
}

export default App;
