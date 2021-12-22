import { Address, FooterBottom, FooterContainer, FooterMenuHeading, MobileFooter,MobileFooter2 } from "./styles";
import { LogoContainer } from "./styles";
import FacebookIcon from '@assets/icons/bi_facebook.svg'
import InstagramIcon from '@assets/icons/bi_instagram.svg'
import TwitterIcon from '@assets/icons/Social/Twitter.svg'
import LinkedinIcon from '@assets/icons/bi_linkedin.svg'
import YoutubeIcon from '@assets/icons/bi_youtube.svg'
import { CardDate } from "./styles";
import Container from "../Container"
import Logo from '@assets/images/Vector.png';
import MUUTOS from '@assets/images/muutos.svg'
import { SvgWrapper } from "../SvgWrapper";
import { SvgWrapper2 } from "../SvgWrapper";
import Link from 'next/link'
const Footer = () => {

    return (
        <>
        <div style={{backgroundColor:'#1A1F24'}}>
        <Container style={{paddingTop:'20px'}}>
            <FooterContainer>
                <div className="mobile-footer">
                    <MobileFooter>
                        <Address>
                        <LogoContainer>
                            <img src={Logo?Logo.src:"https://thumbs.dreamstime.com/b/initial-ep-logo-design-geometric-circle-style-business-branding-215703777.jpg"} alt="Logo" /> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MUUTOS style={{transform:'scale(1.3)'}}/>
                        </LogoContainer>
                            <p className="address-line">
                                2972 Westheimer Rd. Santa Ana Illinois 85486 
                                <p style={{paddingTop:10}}>
                                    (480) 555-0103
                                </p>
                                <p style={{paddingTop:10}}>
                                    tim.jennings@example.com
                                </p>
                            </p>
                            <FooterContainer>
                            <SvgWrapper2 svgColor={'#fff'}>
                                <FacebookIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <InstagramIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <TwitterIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <YoutubeIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <LinkedinIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </SvgWrapper2>
                            </FooterContainer>
                        </Address>                        
                    </MobileFooter>
                    <MobileFooter2>
                    <div style={{marginTop:'5px', padding:'20px 30px'}}>
                        <FooterMenuHeading >
                            Menu<br /><br />
                            <ul className="" style={{paddingLeft:'0px'}}>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/services/search"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Services</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/products/search"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Products</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/trends"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Trends</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/specialists"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Specialists</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/community"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Community</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="static/faqs"><a style={{textDecoration:'none', color:'#A6ADB5'}}>FAQ</a></Link>&nbsp;
                                </li>
                            </ul>
                        </FooterMenuHeading>
                    </div>
                    <div style={{marginTop:'5px', padding:'20px 30px'}}>
                        <FooterMenuHeading >
                            Company<br /><br />
                            <ul className="" style={{paddingLeft:'0px'}}>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/about"><a style={{textDecoration:'none', color:'#A6ADB5'}}>About</a></Link>&nbsp;
                                 Us</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/contact"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Contact</a></Link>&nbsp;
                                 Us</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/world"><a style={{textDecoration:'none', color:'#A6ADB5'}}>To</a></Link>&nbsp;
                                 The World</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/careers"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Career</a></Link>&nbsp;
                                </li>
                            </ul>
                        </FooterMenuHeading>
                    </div>
                    </MobileFooter2>
                    <MobileFooter2>
                    <div style={{marginTop:'5px', padding:'20px 30px'}}>
                        <FooterMenuHeading >
                            Legal<br /><br />
                            <ul className="" style={{paddingLeft:'0px'}}>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/terms-and-conditions"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Terms</a></Link>&nbsp;
                                 of Use</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/privacy-policy"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Privacy</a></Link>&nbsp;
                                 Policy</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/data-protection"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Data</a></Link>&nbsp;
                                 Protection</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/cookie-policy"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Cookie</a></Link>&nbsp;
                                 Policy</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>Report</a></Link>&nbsp;
                                 Incident</li>
                            </ul>
                        </FooterMenuHeading>
                    </div>
                    <div style={{marginTop:'5px', padding:'20px 30px'}}>
                        <FooterMenuHeading >
                            Vendors<br /><br />
                            <ul className="" style={{paddingLeft:'0px'}}>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>Vendor</a></Link>&nbsp;
                                 <br />Registration</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>Vendor</a></Link>&nbsp;
                                 Login</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>Support</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>Vendor</a></Link>&nbsp;
                                 FAQ</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>About</a></Link>&nbsp;
                                 The App</li>
                            </ul>
                        </FooterMenuHeading>
                    </div>
                    </MobileFooter2>
                </div>
                <div className="media-footer">
                    <Address>
                        <LogoContainer>
                            <Link href="/"><a><img src={Logo?Logo.src:"https://thumbs.dreamstime.com/b/initial-ep-logo-design-geometric-circle-style-business-branding-215703777.jpg"} alt="Logo" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MUUTOS style={{transform:'scale(1.3)'}}/></a></Link>
                        </LogoContainer>
                        <p className="address-line">
                            2972 Westheimer Rd. Santa Ana,<br /> Illinois 85486 
                            <p style={{paddingTop:10}}>
                                (480) 555-0103
                            </p>
                            <p style={{paddingTop:10}}>
                                tim.jennings@example.com
                            </p>
                        </p>
                        <FooterContainer>
                            <SvgWrapper2 svgColor={'#fff'}>
                                <FacebookIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <InstagramIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <TwitterIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <YoutubeIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <LinkedinIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </SvgWrapper2>
                        </FooterContainer>
                    </Address>

                    <div style={{marginTop:'5px'}}>
                        <FooterMenuHeading >
                            Menu<br /><br />
                            <ul className="" style={{paddingLeft:'0px'}}>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/services/search"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Services</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/products/search"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Products</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/trends"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Trends</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/specialists"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Specialists</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/community"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Community</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/faqs"><a style={{textDecoration:'none', color:'#A6ADB5'}}>FAQ</a></Link>&nbsp;
                                </li>
                            </ul>
                        </FooterMenuHeading>
                    </div>
                    <div style={{marginTop:'5px'}}>
                        <FooterMenuHeading >
                            Company<br /><br />
                            <ul className="" style={{paddingLeft:'0px'}}>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/about"><a style={{textDecoration:'none', color:'#A6ADB5'}}>About</a></Link>&nbsp;
                                 Us</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/contact"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Contact</a></Link>&nbsp;
                                 Us</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/world"><a style={{textDecoration:'none', color:'#A6ADB5'}}>To The World</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/careers"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Career</a></Link>&nbsp;
                                </li>
                            </ul>
                        </FooterMenuHeading>
                    </div>
                    <div style={{marginTop:'5px'}}>
                        <FooterMenuHeading >
                            Legal<br /><br />
                            <ul className="" style={{paddingLeft:'0px'}}>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/terms-and-conditions"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Terms</a></Link>&nbsp;
                                 of Use</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/privacy-policy"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Privacy</a></Link>&nbsp;
                                 Policy</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/data-protection"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Data Protection</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/cookie-policy"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Cookie Policy</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href="/static/terms-and-conditions"><a style={{textDecoration:'none', color:'#A6ADB5'}}>Report</a></Link>&nbsp;
                                 Incident</li>
                            </ul>
                        </FooterMenuHeading>
                    </div>
                    <div style={{marginTop:'5px'}}>
                        <FooterMenuHeading >
                            Vendors<br /><br />
                            <ul className="" style={{paddingLeft:'0px'}}>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>Vendor</a></Link>&nbsp;
                                 Registration</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>Vendor</a></Link>&nbsp;
                                 Login</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>Support</a></Link>&nbsp;
                                </li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>Vendor</a></Link>&nbsp;
                                 FAQ</li>
                                <li style={{lineHeight:'33px', textTransform:'capitalize', cursor:'pointer'}}>
                                    <Link href=""><a style={{textDecoration:'none', color:'#A6ADB5'}}>About</a></Link>&nbsp;
                                 The App</li>
                            </ul>
                        </FooterMenuHeading>
                    </div>

                    <div style={{marginTop:'5px'}}>
                        <FooterMenuHeading>
                            <div className="trend-container">
                            New Trends<br /><br />
                            <div className="trend">
                                <div className="trend-image">
                                    <img style={{verticalAlign:'bottom'}} src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                </div>
                                <p>Find Your Zen. 7 Reasons to  add<br /> yoga to your lifestyle
                                    <br />
                                    <CardDate>
                                        02.03.2021
                                    </CardDate> 
                                </p>
                            </div>
                            <br />
                            <div className="trend">
                                <div className="trend-image">
                                    <img style={{verticalAlign:'bottom'}} src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                </div>
                                <p>Find Your Zen. 7 Reasons to  add<br /> yoga to your lifestyle
                                    <br />
                                    <CardDate>
                                        02.03.2021
                                    </CardDate> 
                                </p>
                            </div>
                            <br />
                            <div className="trend">
                                <div className="trend-image">
                                    <img style={{verticalAlign:'bottom'}} src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                </div>
                                <p>Find Your Zen. 7 Reasons to  add<br /> yoga to your lifestyle
                                    <br />
                                    <CardDate>
                                        02.03.2021
                                    </CardDate> 
                                </p>
                            </div>
                            <br />
                            </div>
                        </FooterMenuHeading>
                    </div>
                </div>
            </FooterContainer>
        </Container>
        <FooterBottom>
            Copyright by Muutos © 2021
        </FooterBottom>
        </div>
        </>
    )
}

export default Footer;