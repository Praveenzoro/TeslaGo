import { useEffect } from 'react';
import React, { useState }from "react";
import '../style/styles.css';
import Contents from './Contents';




function Header(){
 
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScroll, setLastScroll] = useState(0);
  const [active, setActive] = useState(null);
  const [fadingOut, setFadingOut] = useState(false);
const[data,setData] = useState('');
const [menuOpen, setMenuOpen] = useState(false); 
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
const [close, setClose] = useState(false);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;

     
      if (currentScroll === 0) {
        setScrollDirection('neutral');
        
      } else if (currentScroll > lastScroll) {
      
        setScrollDirection('down');
      } else {
     
        setScrollDirection('up');
      }

      setLastScroll(currentScroll <= 0 ? 0 : currentScroll);
      
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScroll]);

  const handleMouseEnter = (item) => {
    if(item){
      setData(item);
    setActive(true);
    setFadingOut(false);
    }else{
      setActive(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setFadingOut(true); 
      setTimeout(() => {
        setData(null);
        setActive(false);
        setFadingOut(false); 
      }, 1000);
    }
  };
  const handleClick = (item) => {
    if (isMobile) {
      if (active === item) {
       
        setData(null);
        setActive(null);
      } else {
        
        setData(item);
        setActive(item);
      }
    }
  };
  const toggleMenu = () => setMenuOpen(!menuOpen);
console.log(data)
function setbgcolor() {
  if (lastScroll === 0 && active === true) {
    return 'white'; 
  } else if (lastScroll === 0) {
    return 'transparent';
  } else if (scrollDirection === 'up') {
    return 'white'; 
  } else {
    return 'transparent';
  }
}

  function getSvgFillColor(navBgColor) {
    return navBgColor === 'transparent' ? 'white' : 'black';
  }
  
  const navBgColor = setbgcolor();
  const svgFillColor = getSvgFillColor(navBgColor);
  

 console.log(close);
   return <div> <header className={`Nav ${scrollDirection === 'down' ? 'hide' : 'show'}`}
   style={{
     backgroundColor: setbgcolor(),
         transition: lastScroll === 0 ? 'background-color 0.3s ease-out' : '',
   }}  >


   <div className="left">
   <svg className="Mainlogo"width="256px" height="256px" viewBox="0 -121.2 278.7 278.7" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill={svgFillColor }><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="TESLA"> <path className="st0" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3"></path> <g> <path className="st0" d="M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"></path> </g> </g> </g></svg>

   </div>

   <button className="hamburger" onClick={toggleMenu}>
          <h3>Menu</h3>
          </button>

  
   <div className={`center ${menuOpen ? 'open' : 'closed'}`}>
    <div className='centernew'> 
        {["Vehicles", "Energy", "Charging", "Discover", "Shop","WeRobot"].map((item) => (
          <div
            key={item}
            className="btn"
            id={item}
            onMouseEnter={() => handleMouseEnter(item)}
            onClick={() => handleClick(item)}
            style = {isMobile ? {color: 'black'} : {color :svgFillColor}}
          >
            {item}
          </div>
        ))} 
     </div>
<div className="right">
<svg className='Ruh' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
  <path fillRule="evenodd" clipRule="evenodd" d="M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z" fill={isMobile? 'black' : svgFillColor}/>
</svg>
   <svg className='Ruh' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C12 21 16 18 16 12C16 6 12 3 12 3M12 21C12 21 8 18 8 12C8 6 12 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke={isMobile? 'black' : svgFillColor}strokeWidth="1.5"/>
</svg>
   <svg className='Ruh'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  <circle cx="12" cy="9" r="3" stroke={isMobile? 'black' : svgFillColor}     strokeWidth="1.5"/>
  <circle cx="12" cy="12" r="10" stroke={isMobile? 'black' : svgFillColor}    strokeWidth="1.5"/>
  <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke={isMobile? 'black' : svgFillColor}strokeWidth="1.5" strokeLinecap="round"/>
</svg>
</div>
</div>
<div
  onMouseLeave={handleMouseLeave}
  className={`dropdown ${
    active
      ? fadingOut
        ? "dropdown-fade-out"
        : "dropdown-visible"
      : ""
  }`}
>
  <div className="dropdown-visible">
    {isMobile ? (
      <div onClick={() => setClose((prev) => !prev)}>Toggle</div>
    ) : (
      ""
    )}
    {data ? (
      <div className="dropcon">
        <h3>{Contents[data].title}</h3>
        <p>{Contents[data].description}</p>
      </div>
    ) : (
      <div className="dropcon-hide"></div>
    )}
  </div>
</div>

</header>
<div className={`Downheader ${lastScroll >= 219 ? 'show' : 'hide'}`}>
<svg fill="#000000" viewBox="0 0 24 24" id="steering-wheel" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,2a8,8,0,0,1,7.38,4.92A29.93,29.93,0,0,0,12,8a29.63,29.63,0,0,0-7.4.94A8,8,0,0,1,12,4ZM4,12.67l1.11-.13A4.38,4.38,0,0,1,10,16.89v2.85A8,8,0,0,1,4,12.67Zm10,7.07V16.89a4.38,4.38,0,0,1,4.86-4.35l1.11.13A8,8,0,0,1,14,19.74Z" fill = "#f5d400"></path></g></svg>
   <h3>Schedule a Drive Today</h3>
</div>
</div>
      }


export default Header;

