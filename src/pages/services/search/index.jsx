import { useState, useEffect } from "react"
import axios from "axios"
import Hero from "@components/Pages/Home/Hero"
import ProductCard from "src/Components/Cards/Product"
import ServiceCard from "src/Components/Cards/Service"
import { CardsContainer } from "src/Components/Cards/Product/styles"
import Container from "src/Components/Container"
import VerticalBanner from "src/Components/Banners/Vertical"
import CategorySection from "src/Components/CategoryBlock"
import ScissorIcon from '@assets/icons/Scissors.svg'
import HorizontalBanner from "src/Components/Banners/Horizontal"
import ArticleCard from "src/Components/Cards/Article"
import Footer from "src/Components/Footer"
import Header from "src/Components/Header"
import TopSearch from "src/Components/TopSearch"
import FilterBar from "src/Components/FilterBar"
import ArrowDown from '@assets/icons/Arrow/Arrow 2/Down.svg'
import iconTiles from '@assets/images/iconTiles.png'
import iconBox from '@assets/images/iconBox.png'
import HorizontalServiceCard from "src/Components/Cards/Service/horizontalCard"
import CheckIcon from '@assets/icons/Check.svg'
import GridIcon from '@assets/icons/Grid.svg'
import ArrowDownMuutos from '@assets/icons/ArrowDownMuutos.svg'
import BoxBanner from "src/Components/Banners/Box"
import Host from "src/host"
const Search = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        async function getAllServices(){
            const service = await axios.get(`${Host}api/allServices`);
            const data = service.data.data;
            data.forEach((e)=>{
                delete e.workingHours;
            })
            setServices(data);
        }
        getAllServices();
    }, [])

    const activeTiles = () => {
        var tiles = document.getElementsByClassName('service-tiles')[0];
        var cards = document.getElementsByClassName('service-cards')[0];
        var cardSvg = document.getElementsByClassName('cards-svg')[0];
        var tileSvg = document.getElementsByClassName('tiles-svg')[0];
        tiles.classList.remove('d-none');
        cards.classList.add('d-none');
        tileSvg.classList.add('active-svg');
        tileSvg.classList.remove('inactive-svg');
        cardSvg.classList.add('inactive-svg');
        cardSvg.classList.remove('active-svg');
    }

    const activeCards = () => {
        var tiles = document.getElementsByClassName('service-tiles')[0];
        var cards = document.getElementsByClassName('service-cards')[0];
        var cardSvg = document.getElementsByClassName('cards-svg')[0];
        var tileSvg = document.getElementsByClassName('tiles-svg')[0];
        tiles.classList.add('d-none');
        cards.classList.remove('d-none');
        cardSvg.classList.add('active-svg');
        cardSvg.classList.remove('inactive-svg');
        tileSvg.classList.add('inactive-svg');
        tileSvg.classList.remove('active-svg');
    }

    return (
        <>
            <br /><br /><br /><br />
            <Container>
                <TopSearch />
                <div className="pt-3"></div>
                    <div className="row">
                        <div className="col-md-3">
                            <FilterBar />
                            <div className="p-2 pt-4">
                                <BoxBanner />
                            </div>
                        </div>
                        <div className="col-md-9 pt-3">
                            <div className="top___bar_service_search row">
                                <div style={{paddingTop:'8px'}} className="col-md-3 col-lg-3 col-sm-3 col-3">
                                    <p>Total Ventures: {services.length}</p>
                                </div>
                                <div className="d-flex col-md-9 col-lg-9 col-sm-9 col-9" style={{alignItems:'center', justifyContent:'right'}}>
                                    <p>Sort By : &nbsp; </p>
                                    <div className="d-inline-block category-select-wrapper">
                                        <select name="" className="category-select" id="category-select" style={{color:'#2ECB84', fontSize:'14px'}}>
                                            <option value="popular">Popular</option>
                                            <option value="newest">Newest</option>
                                        </select>
                                        <label htmlFor="category-select">
                                            <ArrowDownMuutos />
                                        </label>
                                        &nbsp;
                                        &nbsp;&nbsp;
                                    </div>
                                    <div style={{marginLeft: 0, transform: 'translateY(-30%)'}}>
                                        {/* <img src={iconTiles.src} alt="" width="20px" style={{marginTop:'-18px'}}/> */}
                                        <span className="tiles-svg inactive-svg">
                                            <CheckIcon onClick={()=>activeTiles()}/>
                                        </span>
                                        &nbsp;&nbsp;&nbsp;
                                        <span className="cards-svg active-svg">
                                            <GridIcon onClick={()=>activeCards()} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="service-tiles d-none">
                                {services.map((service)=>{
                                    return <HorizontalServiceCard data={service} key={service.id}/>
                                })}
                            </div>
                            <div className="service-cards">
                                <div className="row">
                                    {services.map((service)=>(  
                                        <div className="col-md-4 pb-4 pt-0 p-3 pl-0 " key={service.id}>
                                            <ServiceCard data={service}/>
                                        </div> 
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            <div style={{backgroundColor:'#1A1F24', paddingTop:'80px'}}>
            <Footer />
            </div>
        </>
    )
}
export default Search

