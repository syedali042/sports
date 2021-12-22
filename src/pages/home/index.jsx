import axios from 'axios'
import {useState, useEffect} from 'react'
import Router, { useRouter } from 'next/router'
import Hero from "@components/Pages/Home/Hero"
import ProductCard from "src/Components/Cards/Product"
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
import Host from 'src/host'
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
            <div className="row">
                
            </div>
            <div style={{backgroundColor:'#1A1F24', paddingTop:'80px'}}>
            <Footer />
            </div>
        </>
    )
}
export default Home

