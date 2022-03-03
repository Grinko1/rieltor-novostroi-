import React, { useState } from 'react';
import './Nav.scss'
import {SiHomebridge} from 'react-icons/si'
import { Link, Outlet } from 'react-router-dom';
import {BiMap} from 'react-icons/bi'
import {BsInstagram, BsWhatsapp, BsTelephone} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import preview from '../../img/preview.jpeg'
import Menu from './Menu/Menu';
import {FaRegUser, FaBalanceScaleRight} from 'react-icons/fa'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import { useSelector } from 'react-redux';

const Layout = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    const flats = useSelector(state=> state.flats.flats)

    const cities = flats.map(flat => {
        return flat.city
       })
    
        
       const uniqCity = cities.filter((e,i,a)=>a.indexOf(e)===i)
    
    console.log(uniqCity);

    return (
        <>
        <header >
           <div className='nav'>
           <div className="nav-logo">
               <Link to='/'>
            <SiHomebridge/>
               Новострой
               <p> Недвижимость здесь</p>
               </Link>
            </div>
            <div className='nav-end'>
            <div className="nav-info">
                {/* <select value={uniqCity[0]}>
                    {
                        uniqCity.map(city=>{
                             <option key={city} value={city}>{city}</option>
                        })
                    }
                   
                </select> */}
               
                <span className='nav-info_btn'>
                <BiMap/>Благовещенск    
                </span>
                <div className='nav-info_icons'>
                    <div className='phone'> <Link to='/consultation'> <BsTelephone /> </Link>
                  
                    </div>
                  
                   
                    <div className='insta'><a href='https://www.instagram.com/colorista_bel/' target="_blank"> <BsInstagram/></a>
                  
                    </div>
                    
                    <div className='whatsA'> <a href=" https://api.whatsapp.com/send?phone=9140464566" target="_blank"><BsWhatsapp /></a>  
                  
                     </div>
                  
                  <div className='fav-icon fav'><Link to="/favorited"><MdOutlineFavoriteBorder/></Link> </div>
                  <div className='fav-icon com'> <Link to="/compare-page"><FaBalanceScaleRight/></Link> </div>
          
           
                 
                </div>
             
            
            </div>
            <div className='burger'>
               <p><GiHamburgerMenu onClick={() => setActiveMenu(!activeMenu)}/></p> 
               <span/>
            </div>
            </div>
            
           </div>
           <Menu active={activeMenu} setActiveMenu={setActiveMenu} />
           <div className='img-preview'>
               <img src={preview} alt=""/>
           </div>
        </header>
        <main className='main'>
        <Outlet/>
        </main>
           
        </>
    );
};

export default Layout;