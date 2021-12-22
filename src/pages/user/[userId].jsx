import TopSearch from '@components/TopSearch'
import {useState, useEffect} from 'react'
import Container from '@components/Container'
import PhoneIcon from '@assets/icons/phone-call.svg'
import MailIcon from '@assets/icons/mail.svg'
import SearchUser from '@assets/icons/SearchUser.svg'
import CheckIcon from '@assets/icons/Check.svg'
import GridIcon from '@assets/icons/Grid.svg'
import ArrowDownMuutos from '@assets/icons/ArrowDownMuutos.svg'
import Shoes from '@assets/images/Shoes.png'
import HeartIcon from '@assets/icons/Heart.svg'
import { SvgWrapper } from 'src/Components/SvgWrapper'
import { SvgWrapper2 } from 'src/Components/SvgWrapper'
import axios from 'axios'
import HorizontalServiceCard from 'src/Components/Cards/Service/horizontalCard'
import HorizontalProductCard from 'src/Components/Cards/Product/horizontalProductCard'
import ProductCard from 'src/Components/Cards/Product'
import ServiceCard from 'src/Components/Cards/Service'
import Footer from 'src/Components/Footer'
import Reviews from 'src/Components/Reviews'
import LogoVisa from '@assets/icons/logos_visa.svg'
import LogoMasterCard from '@assets/icons/logos_mastercard.svg'


const Profile = () =>{

    // const [user, setUser] = useState(localStorage.getItem('loggedInUser'));
    // const [user, setUser] = useState(
    //     typeof window !== "undefined" ? localStorage.loggedInUser : "light"
    // );
    // const abc = '{"name": "Peter", "age": 22, "country": "United States"}';
    // const u = JSON.parse(abc);
    // console.log(u);
    // setUser();
    const [products, setProducts] = useState([]);
    const [productsComments, setProductsComments] = useState([]);
    const [servicesComments, setServicesComments] = useState([]);
    useEffect(() => {
        async function getAllProducts(){
            const prod = await axios.get(`${Host}api/products`);
            setProducts(prod.data.data);
        }
        getAllProducts();
        async function getProductComments(){
            const comment = await axios.post(`${Host}api/getItemCommentsById`, {commentFor:'product', itemId:'C4VqXhZi0eieeOGAnbBO'});
            setProductsComments(comment.data.data)
        }
        getProductComments();
    }, [])

    const [services, setServices] = useState([]);

    useEffect(() => {
        async function getAllServices(){
            const service = await axios.get(`${Host}api/allServices`);
            setServices(service.data.data);
        }
        getAllServices();
        async function getServiceComments(){
            const comment = await axios.post(`${Host}api/getItemCommentsById`, {commentFor:'service', itemId:'FLTXdCyxRTTDX3Ee77cH'});
            setServicesComments(comment.data.data)
        }
        getServiceComments();
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

    const activeProductTiles = () => {
        var tiles = document.getElementsByClassName('product-tiles')[0];
        var cards = document.getElementsByClassName('product-cards')[0];
        var cardSvg = document.getElementsByClassName('cards-svg')[1];
        var tileSvg = document.getElementsByClassName('tiles-svg')[1];
        tiles.classList.remove('d-none');
        cards.classList.add('d-none');
        tileSvg.classList.add('active-svg');
        tileSvg.classList.remove('inactive-svg');
        cardSvg.classList.add('inactive-svg');
        cardSvg.classList.remove('active-svg');
    }

    const activeProductCards = () => {
        var tiles = document.getElementsByClassName('product-tiles')[0];
        var cards = document.getElementsByClassName('product-cards')[0];
        var cardSvg = document.getElementsByClassName('cards-svg')[1];
        var tileSvg = document.getElementsByClassName('tiles-svg')[1];
        tiles.classList.add('d-none');
        cards.classList.remove('d-none');
        cardSvg.classList.add('active-svg');
        cardSvg.classList.remove('inactive-svg');
        tileSvg.classList.add('inactive-svg');
        tileSvg.classList.remove('active-svg');
    }

    const activeFavouriteProducts = () => (event) => {
        event.target.classList.add('active-indicator');
        const indicator = document.getElementsByClassName('service-indicator');
        for (let i = 0; i < indicator.length; i++) {
            const element = indicator[i];
            element.classList.remove('active-indicator');
        }
        document.getElementsByClassName('favourite-products')[0].classList.remove('d-none');
        document.getElementsByClassName('favourite-services')[0].classList.add('d-none');
    }
    const activeFavouriteServices = () => (event) => {
        console.log(event.target)
        event.target.classList.add('active-indicator');
        const indicator = document.getElementsByClassName('product-indicator');
        for (let i = 0; i < indicator.length; i++) {
            const element = indicator[i];
            element.classList.remove('active-indicator');
        }
        document.getElementsByClassName('favourite-products')[0].classList.add('d-none');
        document.getElementsByClassName('favourite-services')[0].classList.remove('d-none');
    }

    const activeRatingProducts = () => (event) => {
        event.target.classList.add('active-indicator');
        const indicator = document.getElementsByClassName('service-rating-indicator');
        for (let i = 0; i < indicator.length; i++) {
            const element = indicator[i];
            element.classList.remove('active-indicator');
        }
        document.getElementsByClassName('rating-products')[0].classList.remove('d-none');
        document.getElementsByClassName('rating-services')[0].classList.add('d-none');
    }
    const activeRatingServices = () => (event) => {
        console.log(event.target)
        event.target.classList.add('active-indicator');
        const indicator = document.getElementsByClassName('product-rating-indicator');
        for (let i = 0; i < indicator.length; i++) {
            const element = indicator[i];
            element.classList.remove('active-indicator');
        }
        document.getElementsByClassName('rating-products')[0].classList.add('d-none');
        document.getElementsByClassName('rating-services')[0].classList.remove('d-none');
    }


    const toggleMethod = (event) =>{
        console.log(event.target)
    } 

    useEffect(()=>{

        async function userOrders(){

        }

        userOrders();

        async function userBookings(){

        }

        userBookings();

        // async function userWhishList(){
            
        // }

        // userWhishList();

    }, [])

    return (
        <Container >
            <div className="row" style={{paddingTop:100}}>
                <div className="col-md-3">
                    <div className="profile-card">
                        <div className="d-flex align-items-center justify-content-center user-image pt-4">
                            <img src="https://scontent.flhe7-1.fna.fbcdn.net/v/t1.6435-9/149332210_2873736062894981_8008775800153197079_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHE-_gYagvPyE91AtZj2KUhGEmM-Ti5M9kYSYz5OLkz2VmZmLIFb8iO-e4mhGraK1dkHL8R6b6Xm-IWWR4Y0keu&_nc_ohc=j8CW7WPBi-wAX-5q4lI&_nc_ht=scontent.flhe7-1.fna&oh=f2545dbe41acfe4206511fd712ba88a7&oe=619C4F66" alt="" style={{width:100, height:100, borderRadius:'50%'}} />
                        </div>
                        <p className="user-name pt-2">
                            Guy Hawkins
                        </p>
                        <p className="user-phone" style={{padding:'5px 15px !important'}}>
                            <span className="p-1"><PhoneIcon /> &nbsp;&nbsp;(406) 555-0120</span>
                            <br />
                            <span style={{textTransform:"lowercase"}} className="p-1"><MailIcon /> &nbsp;&nbsp;deanna.curtis@example.com</span>
                        </p>
                        <div className="pt-0 p-3">
                            <div className="d-flex align-items-center justify-content-center profile-tab mb-1">
                                My Orders
                            </div>
                            <div className="d-flex align-items-center justify-content-center profile-tab mb-1 text-white opacity-75 border-secondary">
                                Favourites
                            </div>
                            <div className="d-flex align-items-center justify-content-center profile-tab mb-1 text-white opacity-75 border-secondary">
                                Ratings & Reviews
                            </div>
                            <div className="d-flex align-items-center justify-content-center profile-tab mb-1 text-white opacity-75 border-secondary">
                                Account Settings
                            </div>
                            <div className="d-flex align-items-center justify-content-center profile-tab mb-1 text-white opacity-75 border-secondary">
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 tab tab-orders d-none">
                    {/* <div className="form-group">
                        <SearchUser />
                        <input type="text" placeholder="Search Your Orders" className="form-control search-profile"/>
                    </div> */}
                    <TopSearch select={false} placeholder={`Search Your Orders...`}/>
                    <div className="top___bar_service_search row pt-2" style={{marginRight:0}}>
                        <div style={{paddingTop:'8px'}} className="col-md-3 col-lg-3 col-sm-3 col-3">
                            <p>Total Ventures: 123</p>
                        </div>
                        <div className="d-flex col-md-9 col-lg-9 col-sm-9 col-9" style={{alignItems:'center', justifyContent:'right'}}>
                            <p>Sort By : &nbsp; </p>
                            <div className="d-inline-block category-select-wrapper">
                                <select name="" className="category-select" id="category-select" style={{color:'#2ECB84', fontSize:'14px'}}>
                                    <option value="all-orders">All Orders</option>
                                    <option value="newest">Newest</option>
                                </select>
                                <label htmlFor="category-select">
                                    <ArrowDownMuutos />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="order-card">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex" style={{width:'80%'}}>
                                <div>
                                    <img src={Shoes.src} alt="" width="150px" height="150px" style={{borderRadius:'5px'}}/>
                                </div>
                                <div style={{marginLeft:'30px'}}>
                                    <p className="order-heading">
                                        Polyester Leader Navy womans Hanbag
                                    </p>
                                    <p className="order-category">
                                        Men’s shoes
                                    </p>
                                    <p className="order-category pt-1">
                                        <span>Color: </span> <span className="text-success-2">Black</span>
                                    </p>
                                    <p className="order-category pt-1">
                                        <span>Size: </span> <span className="text-success-2">7.5</span> &nbsp;<span>Quantity: </span> <span className="text-success-2">1</span>
                                    </p>
                                    <div className="actions">
                                        <button className="order-button text-capitalized p-2">
                                            <SvgWrapper2 style={{transform:'scale(0.9)'}} svgColor="#A6ADB5"><HeartIcon style={{transform:'translateY(-10%)'}} /></SvgWrapper2>
                                            &nbsp;&nbsp;
                                            Add To Favourites
                                        </button>
                                        &nbsp;&nbsp;
                                        <button className="order-button text-capitalized p-2">
                                            <SvgWrapper2 svgColor="#A6ADB5"><GridIcon style={{transform:'translateY(-10%)'}} /></SvgWrapper2>
                                            &nbsp;&nbsp;
                                            Show More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right" style={{textAlign:'right'}}>
                                <p className="order-price font-weight-bold text-success-2">
                                    QAR. 45
                                </p>
                                <p className="order-category">
                                    <span className="text-warning">Ordered: 16.05.2021</span>
                                </p>
                                <br />
                                <div className="pt-3">
                                    <button className="order-button text-capitalized p-2" style={{marginTop:4, float:'right'}}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-secondary"/>
                    <div className="order-card">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex" style={{width:'80%'}}>
                                <div>
                                    <img src={Shoes.src} alt="" width="150px" height="150px" style={{borderRadius:'5px'}}/>
                                </div>
                                <div style={{marginLeft:'30px'}}>
                                    <p className="order-heading">
                                        Polyester Leader Navy womans Hanbag
                                    </p>
                                    <p className="order-category">
                                        Men’s shoes
                                    </p>
                                    <p className="order-category pt-1">
                                        <span>Color: </span> <span className="text-success-2">Black</span>
                                    </p>
                                    <p className="order-category pt-1">
                                        <span>Size: </span> <span className="text-success-2">7.5</span> &nbsp;<span>Quantity: </span> <span className="text-success-2">1</span>
                                    </p>
                                    <div className="actions">
                                        <button className="order-button text-capitalized p-2">
                                            <SvgWrapper2 style={{transform:'scale(0.9)'}} svgColor="#A6ADB5"><HeartIcon style={{transform:'translateY(-10%)'}} /></SvgWrapper2>
                                            &nbsp;&nbsp;
                                            Add To Favourites
                                        </button>
                                        &nbsp;&nbsp;
                                        <button className="order-button text-capitalized p-2">
                                            <SvgWrapper2 svgColor="#A6ADB5"><GridIcon style={{transform:'translateY(-10%)'}} /></SvgWrapper2>
                                            &nbsp;&nbsp;
                                            Show More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right" style={{textAlign:'right'}}>
                                <p className="order-price font-weight-bold text-success-2">
                                    QAR. 45
                                </p>
                                <p className="order-category">
                                    <span className="text-danger">Order Cancelled</span>
                                </p>
                                <br />
                                <div className="pt-3">
                                    <button className="order-button text-capitalized p-2" style={{marginTop:4, float:'right'}}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-secondary"/>
                    <div className="order-card">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex" style={{width:'80%'}}>
                                <div>
                                    <img src={Shoes.src} alt="" width="150px" height="150px" style={{borderRadius:'5px'}}/>
                                </div>
                                <div style={{marginLeft:'30px'}}>
                                    <p className="order-heading">
                                        Polyester Leader Navy womans Hanbag
                                    </p>
                                    <p className="order-category">
                                        Men’s shoes
                                    </p>
                                    <p className="order-category pt-1">
                                        <span>Color: </span> <span className="text-success-2">Black</span>
                                    </p>
                                    <p className="order-category pt-1">
                                        <span>Size: </span> <span className="text-success-2">7.5</span> &nbsp;<span>Quantity: </span> <span className="text-success-2">1</span>
                                    </p>
                                    <div className="actions">
                                        <button className="order-button text-capitalized p-2">
                                            <SvgWrapper2 style={{transform:'scale(0.9)'}} svgColor="#A6ADB5"><HeartIcon style={{transform:'translateY(-10%)'}} /></SvgWrapper2>
                                            &nbsp;&nbsp;
                                            Add To Favourites
                                        </button>
                                        &nbsp;&nbsp;
                                        <button className="order-button text-capitalized p-2">
                                            <SvgWrapper2 svgColor="#A6ADB5"><GridIcon style={{transform:'translateY(-10%)'}} /></SvgWrapper2>
                                            &nbsp;&nbsp;
                                            Show More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right" style={{textAlign:'right'}}>
                                <p className="order-price font-weight-bold text-success-2">
                                    QAR. 45
                                </p>
                                <p className="order-category">
                                    <span className="text-success-2">Order Delivered</span>
                                </p>
                                <br />
                                <div className="pt-3">
                                    <button className="order-button text-capitalized p-2" style={{marginTop:4, float:'right'}}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-secondary"/>
                </div>
                <div className="col-md-9 tab tab-favourites d-none">
                    <div className="favourite-services">
                        <div className="top___bar_service_search row">
                            <div style={{paddingTop:'8px'}} className="col-md-5 col-lg-5 col-sm-5 col-5">
                                <p>
                                    Total Ventures: {services.length} &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="favourites-indicator service-indicator active-indicator" onClick={activeFavouriteServices()}>
                                        SERVICES
                                    </span>
                                    &nbsp;&nbsp;
                                    <span className="favourites-indicator product-indicator" onClick={activeFavouriteProducts()}>
                                        PRODUCTS
                                    </span>
                                </p>
                            </div>
                            <div className="d-flex col-md-7 col-lg-7 col-sm-7 col-7" style={{alignItems:'center', justifyContent:'right'}}>
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
                                        <ServiceCard data={service} />
                                    </div> 
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="favourite-products d-none">
                        <div className="top___bar_service_search row">
                            <div className="col-md-5 col-lg-5 col-sm-5 col-5">
                                <p>Total: {products.length} Products&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="favourites-indicator service-indicator" onClick={activeFavouriteServices()}>
                                        SERVICES
                                    </span>
                                    &nbsp;&nbsp;
                                    <span className="favourites-indicator product-indicator active-indicator" onClick={activeFavouriteProducts()}>
                                        PRODUCTS
                                    </span>
                                </p>
                            </div>
                            <div className="d-flex col-md-7 col-lg-7 col-sm-7 col-7" style={{alignItems:'center', justifyContent:'right'}}>
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
                                        <CheckIcon onClick={()=>activeProductTiles()}/>
                                    </span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span className="cards-svg active-svg">
                                        <GridIcon onClick={()=>activeProductCards()} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="product-tiles d-none">
                            {products.map(e=>(   
                                <HorizontalProductCard data={e} key={e.id}/>
                            ))}
                        </div>
                        <div className="product-cards">
                            <div className="row">
                                {products.map(e=>(
                                    <div className="col-md-4 pb-4 pt-0 p-3 pl-0 " key={e.id}>   
                                        <ProductCard data={e} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 tab tab-rating d-none">
                    <div className="rating-services">
                        <div className="top___bar_service_search row">
                            <div style={{paddingTop:'8px'}} className="col-md-5 col-lg-5 col-sm-5 col-5">
                                <p>
                                    Total Ventures: {services.length} &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="rating-indicator service-rating-indicator active-indicator" onClick={activeRatingServices()}>
                                        SERVICES
                                    </span>
                                    &nbsp;&nbsp;
                                    <span className="rating-indicator product-rating-indicator" onClick={activeRatingProducts()}>
                                        PRODUCTS
                                    </span>
                                </p>
                            </div>
                            <div className="d-flex col-md-7 col-lg-7 col-sm-7 col-7" style={{alignItems:'center', justifyContent:'right'}}>
                                <p>Sort By : &nbsp; </p>
                                <div className="d-inline-block category-select-wrapper">
                                    <select name="" className="category-select" id="category-select" style={{color:'#2ECB84', fontSize:'14px'}}>
                                        <option value="date">Date</option>
                                        <option value="popular">Popular</option>
                                    </select>
                                    <label htmlFor="category-select">
                                        <ArrowDownMuutos />
                                    </label>
                                    &nbsp;
                                    &nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="service-tiles">
                            <Reviews comments={servicesComments} title={false} bar={false} borderRadius={'5px'}/>
                        </div>
                    </div>
                    <div className="rating-products d-none">
                        <div className="top___bar_service_search row">
                            <div className="col-md-5 col-lg-5 col-sm-5 col-5">
                                <p>Total: {products.length} Products&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="rating-indicator service-rating-indicator" onClick={activeRatingServices()}>
                                        SERVICES
                                    </span>
                                    &nbsp;&nbsp;
                                    <span className="rating-indicator product-rating-indicator active-indicator" onClick={activeRatingProducts()}>
                                        PRODUCTS
                                    </span>
                                </p>
                            </div>
                            <div className="d-flex col-md-7 col-lg-7 col-sm-7 col-7" style={{alignItems:'center', justifyContent:'right'}}>
                                <p>Sort By : &nbsp; </p>
                                <div className="d-inline-block category-select-wrapper">
                                    <select name="" className="category-select" id="category-select" style={{color:'#2ECB84', fontSize:'14px'}}>
                                        <option value="date">Date</option>
                                        <option value="popular">Popular</option>
                                    </select>
                                    <label htmlFor="category-select">
                                        <ArrowDownMuutos />
                                    </label>
                                    &nbsp;
                                    &nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                        
                        <div className="product-tiles">
                            <Reviews comments={productsComments} title={false} bar={false} borderRadius={'5px'}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 tab tab-account">
                    <div className="upload-picture">
                        <div className="d-inline-block">
                            <img src="https://scontent.flhe7-1.fna.fbcdn.net/v/t1.6435-9/149332210_2873736062894981_8008775800153197079_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHE-_gYagvPyE91AtZj2KUhGEmM-Ti5M9kYSYz5OLkz2VmZmLIFb8iO-e4mhGraK1dkHL8R6b6Xm-IWWR4Y0keu&_nc_ohc=j8CW7WPBi-wAX-5q4lI&_nc_ht=scontent.flhe7-1.fna&oh=f2545dbe41acfe4206511fd712ba88a7&oe=619C4F66" alt="" style={{width:70, height:70, borderRadius:'50%'}} />
                        </div>&nbsp;&nbsp;&nbsp;
                        <div className="d-inline-block">
                            <button className="order-button p-2">Upload New Photo</button>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="p-1 settings-input-label">Full Name</label>
                                <input type="text" className="settings-input pt-2" defaultValue="Guy Howkins" />
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="p-1 settings-input-label">Phone Number</label>
                                <input type="text" className="settings-input pt-2" defaultValue="(406) 555-0120" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="" className="p-1 settings-input-label">Email</label>
                                <input type="text" className="settings-input pt-2" defaultValue="deanna.curtis@example.com" />
                            </div>
                        </div>
                    </div>
                    <hr className="bg-secondary" />

                    <div className="billing">
                        <div className="account-heading pb-2">
                            Billing Info
                        </div>
                        <div className="billing-card p-2 mt-1">
                            <div className="row">
                                <div className="col-md-6">
                                    <LogoVisa />&nbsp;&nbsp;
                                    <span className="card-number">
                                    1234 **** **** ****
                                    </span>&nbsp;&nbsp;
                                    <span className="card-expiry">
                                    02/2021
                                    </span>
                                </div>
                                <div className="col-md-6">
                                    <a href="javascript://" className="edit-method" onClick={toggleMethod}  style={{float:'right', textDecoration:'none'}}>
                                        Edit Method
                                    </a>
                                </div>
                            </div>
                            <div className="row editmethod d-none">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="p-1 settings-input-label">Card Number</label>
                                        <input type="text" className="settings-input pt-2" defaultValue="1234 **** **** ****" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="" className="p-1 settings-input-label">Expiry Date</label>
                                        <input type="text" className="settings-input pt-2" defaultValue="02/2021" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="" className="p-1 settings-input-label">CVV</label>
                                        <input type="password" className="settings-input pt-2" defaultValue="123" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="billing-card p-2 mt-1">
                            <div className="row">
                                <div className="col-md-6">
                                    <LogoMasterCard />&nbsp;&nbsp;
                                    <span className="card-number">
                                    1234 **** **** ****
                                    </span>&nbsp;&nbsp;
                                    <span className="card-expiry">
                                    02/2021
                                    </span>
                                </div>
                                <div className="col-md-6">
                                    <a href="javascript://" className="edit-method" onClick={toggleMethod}  style={{float:'right', textDecoration:'none'}}>
                                        Edit Method
                                    </a>
                                </div>
                            </div>
                            <div className="row editmethod ">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="" className="p-1 settings-input-label">Card Number</label>
                                        <input type="text" className="settings-input pt-2" defaultValue="1234 **** **** ****" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="" className="p-1 settings-input-label">Expiry Date</label>
                                        <input type="text" className="settings-input pt-2" defaultValue="02/2021" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label htmlFor="" className="p-1 settings-input-label">CVV</label>
                                        <input type="password" className="settings-input pt-2" defaultValue="123" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )

}

export default Profile;