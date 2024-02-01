import { useState } from 'react'
import './App.css'

export const App = () => {
  return <>
    <Header />
  </>
  }

// Header Component to be re-used on multiple webpages in the future
  // NOTES on HEADER: Change "Home" Button tab to an ICON
const Header = () => {
  return <>
    <div className='header-bar-container'>
      <ul className='header-bar-left'>
        <HeaderButton linkToPage={""} pageName={"Home"} /> 
        <HeaderButton linkToPage={""} pageName={"Projects"} />
        <HeaderButton linkToPage={""} pageName={"Experience"} />
        <HeaderButton linkToPage={""} pageName={"Skills and Tools"} />
      </ul>
      <ul className='header-bar-right'>
        <div>time and date filler</div>
      </ul>
    </div>
  </>
}

const HeaderButton = ({ linkToPage, pageName }) => {
    return <>
      <li className='header-button'><a className='header-link' href={linkToPage}>{pageName}</a></li>
    </>
}

export default App
