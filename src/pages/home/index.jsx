import axios from 'axios'
import {useState, useEffect} from 'react'
import Router, { useRouter } from 'next/router'
import Hero from "@components/Pages/Home/Hero"
import ProductCard from "src/Components/Cards/Product"
import Carosuel from "./Carosuel"
import Counters from "./Counters"
import ServiceCard from "src/Components/Cards/Service"
import { CardsContainer } from "src/Components/Cards/Product/styles"
import Container from "src/Components/Container"
import VerticalBanner from "src/Components/Banners/Vertical"
import CategorySection from "src/Components/CategoryBlock"
import { HomeTabs } from 'src/Components/Styles/HomeStyles'
import ScissorIcon from '@assets/icons/Scissors.svg'
import { Stylesheet } from "src/Components/Styles/HomeStyles"
import HorizontalBanner from "src/Components/Banners/Horizontal"
import ArticleCard from "src/Components/Cards/Article"
import Footer from "src/Components/Footer"
import Slider from "react-slick"
import Rectangle1 from '@assets/images/vertical-banner.png'
import Rectangle2 from '@assets/images/Rectangle-2.png'
import Rectangle3 from '@assets/images/Rectangle-3.png'
import Rectangle4 from '@assets/images/Rectangle-4.png'
import Rectangle5 from '@assets/images/Rectangle-5.png'
import Rectangle6 from '@assets/images/Rectangle-6.png'
import Specialist from "src/Components/Specialist";
import WorkCaro from './WorkCaro'
import Testimonail from './Testimonail'
import Host from 'src/host'
import First from './First'
import Second from './Second'
import AboutPageBelieving from './AboutPageBelieving'
import Counter2 from './Counter2'
import Anything from './Anything'
import Contact from './Contact'

var settings = {
    // dots: true,
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerPadding:20,
    slidesToScroll: 1,
    centerMode:true,
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 922,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 520,
          settings: {
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true
          }
        }
      ]
  };

const Home = () => {

    const styles = Stylesheet;
    
    const tabController = ($tabName, $tabHeader, $item) => {
        const tabs = document.getElementsByClassName('tab-item');
        for (let index = 0; index < tabs.length; index++) {
            const element = tabs[index];
            element.classList.remove('active-tab-content');
        }
        const buttons = document.getElementsByClassName('tab-button');
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.classList.remove('active-tab');
        }
        document.getElementsByClassName($tabName)[0].classList.add('active-tab-content');
        document.getElementsByClassName($tabHeader)[0].classList.add('active-tab');
    }
    
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [featuredServices, setFeaturedServices] = useState([]);
    const [serviceCategories, setServiceCategories] = useState([]);
    const [specialist, setSpecialist] = useState([]);
    const [productCategories, setProductCategories] = useState([]);
    const [trends, setTrends] = useState([]);
    


    useEffect(()=>{

        async function getFeaturedProducts(){
            const res = await axios.get(`${Host}api/getFeaturedProducts`)
            setFeaturedProducts(res.data.data);
        }
        async function getFeaturedServices(){
            const res = await axios.get(`${Host}api/getFeaturedServices`)
            setFeaturedServices(res.data.data);
        }
        async function getFeaturedArticles(){
            const res = await axios.get(`${Host}api/getFeaturedArticles`)
            setTrends(res.data.data);
        }

        async function getProductCategories(){
            const res = await axios.get(`${Host}api/allProductsCategories`)
            setProductCategories(res.data.data);
        }

        async function getServiceCategories(){
            const res = await axios.get(`${Host}api/allServicesCategories`)
            setServiceCategories(res.data.data);
        }

        async function getStaff(){
            const res = await axios.get(`${Host}api/allStaff`)
            setSpecialist(res.data.data);
        }

        getFeaturedProducts();
        getFeaturedServices();
        getFeaturedArticles();
        getProductCategories();
        getServiceCategories();
        getStaff();
    },[]);


    return (
        <>
            <Hero />
            <Carosuel />
            <Counters 
                mainHeading = "TRUSTED ACROSS THE SPORTS WORLD"
                firstCountHeading = "1,124,122"
                firstCountPara = "Total Games Broadcast"
                secondCountHeading = "101,913"
                secondCountPara = "Games Produced Last Month"
                thirdCountHeading = "17,814"
                thirdCountPara = "Fields and Courts"
                fourCountHeading = "57"
                fourCountPara = "Countries"
                bottomPara = "Our pioneering 'set-and-forget' technology is powering sports globally, live and on-demand!"
            />
            <WorkCaro />
            <Testimonail />
            <First heading="DECISIVE TOOLS FOR COACHING"
                para = "VidSwap analytics serves sports organizations, coaches, leagues and teams — auto-editing games and pre-tagging the action to help coaches improve performance more effectively."
            />
            <Second />
            <First heading="COACHING SOLUTIONS FOR PROS AND AMATEURS"
                para = "Two solutions are available, each for a designated market. Professional clubs and coaches can take advantage of all the high-end capabilities of the professional system while amateur and high-school teams can get great benefit from the wide functionality of the Pixellot coaching app and VidSwap analytics platform."
                imgsrc= "https://www.pixellot.tv/wp-content/uploads/2020/07/BARCA-Innovation-hub-H-RGB-01-e1595953414406.png"
            />
            <Second />
            <First heading="MAKING MILLIONS OF SMALL GAMES  BIG" 
                para = "Every day, all around the world, millions of sporting events unfold. But because of the costs involved, these games are never broadcast. That’s why Pixellot pioneered the concept of Automated sports production – to enable fans, family, and friends to watch the sporting events that matter to them the most, live and on-demand. Founded in 2014, Pixellot revolutionized the sports world by devising automated production that enables high-quality video coverage at a fraction of the cost. Using AI, (Artificial intelligence), machine learning, camera arrays, software and cloud computing, Pixellot solutions deliver dynamic coverage of the game flow by focusing on the relevant action happening on the field or court."
            />
            <Counters 
                mainHeading = "BROADCASTING TO MILLIONS OF FANS"
                firstCountHeading = "17,814"
                firstCountPara = "Courts and Fields"
                secondCountHeading = "100,000"
                secondCountPara = "Live Games per Month"
                thirdCountHeading = "1,080,044"
                thirdCountPara = "Games Produced"
                fourCountHeading = "230"
                fourCountPara = "Employees"
                bottomPara = ""
            />
            <AboutPageBelieving 
                order={true}
                mainHeading = "SEEING IS BELIEVING"
                subHeading = "PIXELLOT’S END TO END SOLUTION"
                paragraph = "Pixellot is one of the few vendors who offer a complete A to Z solution that includes filming, producing, broadcasting and data analytics. Our solution also includes a fully-featured integrated OTT platform, Rich monetization abilities and a full suite of applications for viewing and sharing content. Our proprietary cameras capture the action. AI software and machine learning specifically tuned to over 17 different types of sports deliver a real-life production feel. Technical optimizations make it easy to capture high quality HD video in all lighting conditions. Our proprietary video compression provides stable, low-latency streaming, even with low bandwidth. The 17…"
            />
            <AboutPageBelieving 
                order={false}
                subHeading = "GLOBAL LEADER IN AUTOMATED SPORTS PRODUCTION"
                paragraph = "Pixellot has thousands of systems dotted across the globe. Our systems capture and analyze more sports than any other provider. This is why production houses, sports federations, amateur teams, and elite coaches use Pixellot technology for all their sports production needs. And why you can watch broadcast-quality coverage from the United States, China, Germany, Spain, The Netherlands, France, the UK, Japan, Singapore, Mexico, Argentina, and more — both live and on-demand."
            />
            <AboutPageBelieving 
                order={true}
                subHeading = "GLOBAL LEADER IN AUTOMATED SPORTS PRODUCTION"
                paragraph = "Pixellot has thousands of systems dotted across the globe. Our systems capture and analyze more sports than any other provider. This is why production houses, sports federations, amateur teams, and elite coaches use Pixellot technology for all their sports production needs. And why you can watch broadcast-quality coverage from the United States, China, Germany, Spain, The Netherlands, France, the UK, Japan, Singapore, Mexico, Argentina, and more — both live and on-demand."
            />
            <Counter2 />
            <Anything />
            <Contact />            
            <div style={{backgroundColor:'#1A1F24', paddingTop:'80px'}}>
            <Footer />
            </div>
        </>
    )
}
export default Home

