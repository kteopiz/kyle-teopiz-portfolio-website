import { useState, useEffect } from 'react'
import './App.css'

export const App = () => {
  return <>
    <Header />
    <HomePageBody />
  </>
  }

// Header Component to be re-used on multiple webpages in the future
  // NOTES on HEADER: Change "Home" Button tab to an ICON
export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Checks if the Document has scrolled past the Header NavBar, if so make it sticky and stay at the top of the page
  const handleScroll = () => {
    /* 
      Keep Track of:
      1) The header by ID
      2) How far down the window has been scrolled
      3) The px height of the header
    */
    const header = document.getElementById('change-sticky');
    const scrollOffset = window.scrollY;
    const headerHeight = header.offsetTop;

    // If we have scrolled past the Header Height, add the sticky class to the header to fix its position to the top of the webpage
    scrollOffset > headerHeight ? setScrolled(true) : setScrolled(false);
    scrolled ? header.classList.add("sticky"): header.classList.remove("sticky");
  }
  
  // Whenever a Header Item is loaded, create an event handler to check for scrolling, and run handleScroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  });

  return <>
    <div id='change-sticky' className='header-bar-container'>
      <ul className='header-bar-left'>
        <a href=''><img className='header-icon' src='src/assets/kyleteopizicon.png'></img></a>
        <HeaderButton linkToPage={""} pageName={"Projects"} />
        <HeaderButton linkToPage={""} pageName={"Experience"} />
        <HeaderButton linkToPage={""} pageName={"Skills and Tools"} />
        <HeaderButton linkToPage={""} pageName={"Contact Me"} />
      </ul>
      <ul className='header-bar-right'>
        <div className='incomplete '>time and date filler</div>
      </ul>
    </div>
  </>
}

const HeaderButton = ({ linkToPage, pageName }) => {
    return <>
      <li className='header-button'><a className='header-link' href={linkToPage}>{pageName}</a></li>
    </>
}

const HomePageBody = () => {
  const [traitDisplay, setTraitDisplay] = useState([null, null])

  // On Mount of the website we want to select a random state for our Trait Display, useEffect will auto fill the initial Null State of the traitDisplay
  useEffect(() => {
    handleTraitDisplay();
  }, []);


  const handleTraitDisplay = () => {

    // pre-made list of objects of traits -> DEF ADD MORE, AT LEAST 10
    // Or make like 5 and a simple animation for each of them
    let traits = [
      {
        "text" : "Lover of Coffee for the taste and slightly for the caffeine",
        "imageURL" : "src/assets/coffee.png"
      },

      {
        "text" : "Programming nerd curious about the Intersection of Environmental Impact and SDE",
        "imageURL" : "src/assets/enviro.png"
      },

      {
        "text" : "Active investor aspiring for future financial freedom",
        "imageURL" : "src/assets/investor.png"
      },

      {
        "text" : "Occasional rock climber specifically bouldering",
        "imageURL" : "src/assets/rockclimb.png"
      },
    ];
    // Pick One object at random
    const randomTrait = traits[Math.floor(Math.random() * traits.length)];
    const newTraitDisplayText = randomTrait.text;
    const newTraitDisplayImageURL = randomTrait.imageURL;

    setTraitDisplay([newTraitDisplayText, newTraitDisplayImageURL]);
  }

  return <>
    <section className='hpb-container'>
      <div className='hpb-text-section'>
        <h3>Hey there, thanks for coming</h3>
        <h1>I'm Kyle</h1>
        <p>Welcome to my site that I feel embodies who I am and what I can do.</p>
        <uL>
          <DynamicListItem text={traitDisplay[0]} />
        </uL>
        <button onClick={handleTraitDisplay}>shuffle</button>
      </div>
      <div className='hpb-image-section'>
        <DynamicImage imageURL={traitDisplay[1]}/>
      </div>
    </section>
  </>
}

const DynamicListItem = ({ text }) => {
  return <>
    <li>{text}</li>
  </>
}

const DynamicImage = ({ imageURL }) => {
  return <>
      <img className='trait-picture' src={imageURL}></img>
  </>

}

export default App
