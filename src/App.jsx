import { useState, useEffect } from 'react'
import './App.css'

// rsuite and React Icons imports for Icons, Components, and Component Styles
import PageTopIcon from '@rsuite/icons/PageTop';
import PageEndIcon from '@rsuite/icons/PageEnd';
import { FaLinkedin } from "react-icons/fa";

const thirdsInformation = [

  {
    "bg-color" : "#1e1e34",
    "title" : "Projects & Skills",
    "description" : "See my technichal skils from 4 years of Computer Science education and passion projects."
  },

  {
    "bg-color" : "#313349",
    "title" : "About Me",
    "description" : "See what I love to do outside of the realm of Computer Science. I'm a hard worker and an adventurer and I'd love to show you where it's taken me."
  },

  {
    "bg-color" : "#4a4e69",
    "title" : "Experience",
    "description" : "See where I've honed my soft and technichal skills through my diverse professional career, something I'm eager to grow and gain experience from various sources."
  }

];

export const App = () => {
  const [thirds, setThirds] = useState([null, null, null]);

  useEffect(() => {
    handleThirds();
  }, []);

  const handleThirds = () => {
    let informedThirds = [<HomePageThird />, <HomePageThird />, <HomePageThird />];
    for (let third = 0; third < informedThirds.length; third++) {
      const currentInformation = thirdsInformation[third];
      informedThirds[third] = <HomePageThird background={currentInformation['bg-color']} categoryName={currentInformation['title']} shortDescription={currentInformation['description']} />;
    }
    setThirds(informedThirds);
  }

  return <>
    <h1 className='homepage-heading' >Hello, I'm Kyle Teopiz</h1>
    <div className='thirds-container'>
      {thirds[0]}
      {thirds[1]}
      {thirds[2]}
    </div>
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
    const headerHeight = 120;

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
        <a href=''><img className='header-icon' src='src/assets/KTicon.png'></img></a>
        <HeaderButton linkToPage={""} pageName={"Projects"} />
        <HeaderButton linkToPage={""} pageName={"Experience"} />
        <HeaderButton linkToPage={""} pageName={"Skills and Tools"} />
        <HeaderButton linkToPage={""} pageName={"Contact Me"} />
      </ul>
      <ul className='header-bar-right'>
        <div className='incomplete '>
        </div>
      </ul>
    </div>
  </>
}

const HeaderButton = ({ linkToPage, pageName }) => {
    return <>
      <li className='header-button'><a className='header-link bolder-text' href={linkToPage}>{pageName}</a></li>
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
        <div className='main-text-container'>
        <PageTopIcon style={{fontSize: '3em'}}></PageTopIcon>
          <h1 className='main-header' >Hi, I'm Kyle Teopiz</h1>
          <PageEndIcon style={{fontSize: '3em'}}></PageEndIcon>
        </div>
        <ul className='short-description'>
          <li>Second Year Computer Science Student at Toronto Metropolitan University</li>
          <li>Incoming Web Developer Associate Intern at Civiconnect</li>
          <li>Aspiring Full Stack SWE in Web and Mobile Applications</li>
        </ul>
        <p>Welcome to my site that I feel embodies who I am and what I can do.</p>
      </div>
    </section>
  </>
}

const HomePageThird = ( { background, categoryName, shortDescription} ) => {
  return <>
    <section className='third-info-container' style={{backgroundColor: background}}>
      <div className='third-inner-text-container'>
        <h3>{categoryName}</h3>
        <p>{shortDescription}</p>
      </div>
    </section>
  </>
}

const ToolBarElement = () => {
  return <>
  <li><a><Icon></Icon></a></li>
  </>
}

const ToolBar = () => {

  return <>
  <ul className='contact-bar'>
    <ToolBarElement />
    <ToolBarElement />
    <ToolBarElement />
  </ul>
  </>
}

export default App
