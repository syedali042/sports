import {LogoContainer, Wrapper, Left, Right, Menu, MobileMenu, MmWrapper} from './styles'
import { useState, useEffect } from 'react'
import GlobeIcon from '@assets/icons/GlobeMuutos.svg'
import PersonIcon from '@assets/icons/Person/Person.svg'
import CartIcon from '@assets/icons/Shopping/Cart.svg'
import CalenderIcon from '@assets/icons/CalendarGreen.svg'
import HeartIcon from '@assets/icons/Heart.svg'
import BarsIcon from '@assets/icons/Menu/Menu 2.svg'
import Logo from '@assets/images/Vector.png'
import MUUTOS from '@assets/images/muutos.svg'
import { SvgWrapper } from '../SvgWrapper'
import Router, { useRouter } from 'next/router'
import Link from 'next/link';

const Header = () => {

    const [Background, setBackground] = useState();
    const [Border, setBorder] = useState();
    const [isMenuActive, setMenuActive] = useState(false);
    
    useEffect(()=>{
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 70 ? "transparent" : "#1A1F24";
            const border = window.scrollY < 70 ? "none" : "1px solid rgb(166, 173, 181)";
            setBackground(backgroundcolor);

        });
    },[])


    const handleClick = () => {
        setMenuActive(true);
    }
    const handleMenuWrapperClick = e => {
        if (e.target.id === "mobile-menu__wrapper") setMenuActive(false)
    }
    
    const headerTransparent = {
        background:'transparent'
    }
    const headerSolid = {
        background:'#1A1F24 !important',
        borderBottom:'1px solid #222225 !important'
    }
    
    return (
        <div className="header-wrapper">
        <Wrapper id="header-wrapper" style={{background:Background, borderBottom:Border}}> 
        <MmWrapper id="mobile-menu__wrapper" onClick={handleMenuWrapperClick} isActive={isMenuActive}>
            <MobileMenu >
                <LogoContainer>

                <Link href="/"><a style={{textDecoration:'none', color:'#fff'}}><img src={Logo?Logo.src:"https://thumbs.dreamstime.com/b/initial-ep-logo-design-geometric-circle-style-business-branding-215703777.jpg"} alt="Logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MUUTOS style={{transform:'scale(1.3)'}}/></a></Link>
                </LogoContainer>
                <div className="menu-container">
                    <button>
                        <Link href="/products/search"><a style={{textDecoration:'none', color:'#fff'}}>Products</a></Link>
                    </button>
                    <button>
                        <Link href="/services/search"><a style={{textDecoration:'none', color:'#fff'}}>Services</a></Link>
                    </button>
                    <button>
                        <Link href="/trends"><a style={{textDecoration:'none', color:'#fff'}}>Trends</a></Link>
                    </button>
                    <button>
                        <Link href="/community"><a style={{textDecoration:'none', color:'#fff'}}>Community</a></Link>
                    </button>
                    <button>
                        <Link href="/user/favourites"><a style={{textDecoration:'none', color:'#fff'}}>Favourites</a></Link>
                    </button>
                    <button>
                        <Link href="/user"><a style={{textDecoration:'none', color:'#fff'}}>My Booking</a></Link>
                    </button>
                    <button>
                        <a style={{textDecoration:'none', color:'#fff'}}>Shopping</a> Cart
                    </button>
                    <button>
                        <Link href="/user"><a style={{textDecoration:'none', color:'#fff'}}>My Profile</a></Link>
                    </button>
                </div>
            </MobileMenu>
        </MmWrapper>
        <Left>
            <LogoContainer>
                {/* <Link href="/"><a style={{textDecoration:'none', color:'#fff'}}><img onClick={()=>Router.push({path:'home'})} src={Logo?Logo.src:"https://thumbs.dreamstime.com/b/initial-ep-logo-design-geometric-circle-style-business-branding-215703777.jpg"} alt="Logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MUUTOS onClick={()=>Router.push({path:'home'})} style={{transform:'scale(1.3)'}}/></a></Link> */}
                <Menu style={{transform:'translateY(20%)'}}>
                    <ul>
                        <li>
                            <k href="/coaching"><a style={{textDecoration:'none', color:'#fff'}}>Coaching</a></k>
                        </li>
                        <li>
                            <k href="/analytics"><a style={{textDecoration:'none', color:'#fff'}}>Analytics</a></k>
                        </li>
                        <li>
                            <k href="/ai"><a style={{textDecoration:'none', color:'#fff'}}>AI in Sports</a></k>
                        </li>
                        <li>
                            <k href="/about"><a style={{textDecoration:'none', color:'#fff'}}>About Us</a></k>
                        </li>
                        <li>
                            <k href="/contact "><a style={{textDecoration:'none', color:'#fff'}}>Contact Us</a></k>
                        </li>
                    </ul>
                </Menu>
            </LogoContainer>
        </Left>
        <Right style={{transform:'translateY(10%)'}}>
            <div className="header-utils">
                <div className="section-one">
                    <span><GlobeIcon style={{transform:'scale(1.3)'}} /> &nbsp;Qatar &nbsp;| </span>
                    <span> &nbsp;&nbsp;English (US) &nbsp;|</span>
                    <span> &nbsp;&nbsp;$ (USD)</span>
                </div>
                <div className="header-icons">
                    <HeartIcon style={{transform:'scale(0.9)'}}/>&nbsp;&nbsp;&nbsp;
                    <SvgWrapper svgColor={'#A6ADB5'}>
                        <CalenderIcon />
                    </SvgWrapper>
                    <CartIcon />
                    <PersonIcon style={{transform:'scale(0.9)'}}/>
                </div>
            </div>
            <button className="menu-bar" onClick={()=>handleClick()} style={{background:'none'}}><BarsIcon /></button>
        </Right>
    </Wrapper>
    </div>
    )
}

export default Header;