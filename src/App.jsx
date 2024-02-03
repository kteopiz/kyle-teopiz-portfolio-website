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
        <HeaderButton linkToPage={""} pageName={"Home"} /> 
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
  return <>
    <section className='hpb-container'>
      <div className='hpb-text-section'>
        <h3>Hey there, thanks for coming</h3>
        <h1>I'm Kyle</h1>
        <p>Welcome to my site that I feel embodies who I am and what I can do.</p>
        <uL>
          <li>I am a coffee enthusiast</li>
          <li>Passionate software development nerd</li>
          <li>A CS student getting better day by day</li>
        </uL>
      </div>
      <div className='hpb-image-section'>
        <h1>filler</h1>
      </div>
    </section>
  </>
}

export default App
