import Container from "src/Components/Container";
import ThumbnailSlider from "src/Components/ThumbnailSlider";
import ArrowRight from '@assets/icons/Arrow/Arrow 2/Right.svg'
import { CardBadge } from "src/Components/Cards/Product/styles";
import StarLight from "src/Components/StarLight";
import Star from "src/Components/Star";
import PlusIcon from '@assets/icons/Plus/Plus.svg'
import MinusIcon from '@assets/icons/Minus/Minus.svg'
import ShareIcon from '@assets/icons/Share.svg'
import HeartIcon from "@assets/icons/Heart.svg"
import Reviews from '@components/Reviews'
import Footer from "src/Components/Footer";
import ProductCard from "src/Components/Cards/Product";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import CheckSvg from '@assets/icons/CheckSvg.svg'
import Host from "src/host";
const ProductDetails = ({product, comments, fprod}) => {

    console.log(product)
    console.log(comments)
    console.log(fprod)

    const [cartProductCount, setCartProductCount] = useState(1);

    const productIncreament = () => {
        const pCount = cartProductCount+1;
        setCartProductCount(pCount);
    }
    
    const productDecreament = () => {
        const pCount = cartProductCount-1;
        setCartProductCount(pCount);
    }

    const getSiblings = (elem) => {

        // Setup siblings array and get the first sibling
        var siblings = [];
        var sibling = elem.parentNode.firstChild;
    
        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling
        }
    
        return siblings;
    
    };

    const selectColor = (event) => {
        // event.target.firstChild.style.opacity = '1';
        console.log(event.target.parentNode);
        const siblings = getSiblings(event.target);
        siblings.forEach(e=>{
            // e.style.firstChild.opacity = '0'
        })
    }

    const selectSize = (event) => {
        event.target.style.background = '#2ECB84';
        event.target.style.color = '#01301B';
        const siblings = getSiblings(event.target);
        siblings.forEach(e=>{
            e.style.background = '#2A3037'
            e.style.color = '#A6ADB5'
        })
    } 
    return (

        <>
            <br /><br /><br />
            <Container>
                <div className="d-flex breadcrump">
                    <span>Home</span> <ArrowRight /> <span>Products</span> <ArrowRight />  <span className="active-bread">{product.name}</span>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <ThumbnailSlider images={product.images}/>
                    </div>
                    <div className="col-md-5">
                        <div className="d-inline-block">
                            <CardBadge>
                                20% OFF
                            </CardBadge>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="d-inline-block">
                            <Star/>&nbsp;
                            <Star/>&nbsp;
                            <Star/>&nbsp;
                            <Star/>&nbsp;
                            <StarLight/> &nbsp;
                            {/* <div className="d-inline-block">
                                <span className="text-grey" style={{marginTop: '5px !important'}}>123</span>

                            </div> */}
                        </div>

                        <div className="d-product-heading pt-2">
                            {product.name}
                        </div>
                        <div className="pricing pt-3">
                            <span style={{fontWeight:'500'}} className='current text-success-2'>QR. {product.price}</span>
                                &nbsp;
                                &nbsp;
                            <span className='old text-grey' style={{textDecoration:'line-through'}}>QR. {parseInt(product.price)+100}</span>
                        </div>
                        <hr className="bg-secondary"/>
                        
                        <div className="d-product-color">
                            <div>
                                <span className="text-grey fst-italic text-uppercase" style={{fontSize:'13px',fontWeight:'500'}}>Color: &nbsp;</span><span className="text-success-2 fst-italic text-uppercase"></span>
                            </div>
                        </div>
                        <div className="color-images d-flex pt-1">
                            {product.colors?product.colors.map((availableColor, i)=>(
                                <div key={i}> 
                                    <div className="color-image" style={{backgroundColor:availableColor}}>
                                        <div className="color-selected">
                                            <CheckSvg onClick={selectColor} />
                                        </div>
                                    </div>
                                </div>
                            )):'No Color Available'}
                        </div>
                        
                        <div className="d-product-color pt-1">
                            <div>
                                <span className="text-grey fst-italic text-uppercase" style={{fontSize:'13px',fontWeight:'500'}}>Select Size</span>
                            </div>
                        </div>

                        <div className="d-product-sizes pt-3">
                            {product.sizes?product.sizes.map((size)=>(
                                <>
                                <span className="d-product-size1" style={{position:'relative'}} onClick={selectSize}>
                                    {size}
                                </span>
                                </>
                            )):'Sizes Are Not Available'}
                        </div>

                        <div className="d-product-amount pt-3">
                            <div className="d-product-color">
                                <div>
                                    <span className="text-grey fst-italic text-uppercase">Amount </span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex">
                                    <div className="d-flex align-items-center justify-content-center d-product-amount-counter" onClick={()=>productIncreament()}>
                                        <PlusIcon/>
                                    </div>
                                        <span className="counter-amount text-success-2">{cartProductCount}</span>
                                    <div className="d-flex align-items-center justify-content-center d-product-amount-counter" onClick={()=>productDecreament()}>

                                        <MinusIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="bg-secondary"/>

                        <div className="d-product-action d-flex align-items-center">
                            <button
                             style={button}>
                                + ADD TO CART
                            </button>
                            <button style={button2}>
                                Buy Now
                            </button>
                            <div className="border action-rounded">
                                <ShareIcon />
                            </div>
                            <div className="border action-rounded">
                                <HeartIcon />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-2">
                    <div className="col-md-9">
                        <p className="product-details-heading pt-5">
                            Product Details
                        </p>
                        <p className="product-details-description pb-3">
                        {product.description}
                        </p>
                        <hr className="bg-secondary"/>
                        <div className="product-charactristics pt-3">
                            <span className="product-details-heading">
                                Characteristics
                            </span>
                            <div className="row pt-3">
                                <div className="col-md-6">
                                    <div className="characteristics-card">
                                        <div className="d-flex align-items-center justify-content-between p-2">
                                            <div className="characteristic-title">
                                                Age Group
                                            </div>
                                            <div className="characteristic-value">
                                                Adults
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="characteristics-card">
                                        <div className="d-flex align-items-center justify-content-between p-2">
                                            <div className="characteristic-title">
                                                Article Number
                                            </div>
                                            <div className="characteristic-value">
                                                CP022
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="characteristics-card">
                                        <div className="d-flex align-items-center justify-content-between p-2">
                                            <div className="characteristic-title">
                                                Barcode
                                            </div>
                                            <div className="characteristic-value">
                                            54232262574245723
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="characteristics-card">
                                        <div className="d-flex align-items-center justify-content-between p-2">
                                            <div className="characteristic-title">
                                                Footwear Color
                                            </div>
                                            <div className="characteristic-value">
                                                Green, Black, White
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="characteristics-card">
                                        <div className="d-flex align-items-center justify-content-between p-2">
                                            <div className="characteristic-title">
                                                Gender
                                            </div>
                                            <div className="characteristic-value">
                                                Unisex
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="characteristics-card">
                                        <div className="d-flex align-items-center justify-content-between p-2">
                                            <div className="characteristic-title">
                                                Item Type
                                            </div>
                                            <div className="characteristic-value">
                                                Shoe Insoles
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="reviews pt-4">
                            <Reviews comments={comments}/>
                        </div>
                    </div>

                    <div className="col-md-3 pt-5">
                        <div className="row">
                            {/* <div className="m-2 col-md-12">
                                <ProductCard />
                            </div>
                            <div className="m-2 col-md-12">
                                <ProductCard />
                            </div>
                            <div className="m-2 col-md-12">
                                <ProductCard />
                            </div>
                            <div className="m-2 col-md-12">
                                <ProductCard />
                            </div>
                            <div className="m-2 col-md-12">
                                <ProductCard />
                            </div> */}
                        </div>
                    </div>
                </div>
                
            </Container>
            <Footer />
        </>

    );
}

export default ProductDetails;


        const button = {
            padding: '8px 17px',
            width:'35%',
            background: 'linear-gradient(328.11deg,#05d0c2 12.59%,#2ecb84 53%, #8ce01d 87.41%)',
            outline: '1px solid rgba(255, 255, 255, 0.3)',
            boxSizing: 'border-box',
            borderRadius: '7px',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '20px',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: '#01301b',
            // margin : '4px'
        }

const button2 = {
    marginLeft:10,
    padding: '8px 17px',
    width:'35%',
    background: '#2A3037',
    outline: '1px solid rgba(255, 255, 255, 0.1)',
    boxSizing: 'border-box',
    borderRadius: '7px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#A6ADB5',
    // margin : '4px'
}

export async function getServerSideProps({request, params,}) {
    const {productId} = params;
    console.log(productId);
    const prod = await axios.post(`${Host}api/productById`,{id: productId})
    const comment = await axios.post(`${Host}api/getItemCommentsById`, {commentFor:'product', itemId:productId});
    const fproduct = await axios.get(`${Host}api/getFeaturedProducts`);
    console.log(comment);
    return {
        props: {
            product: prod.data.data,
            comments:comment.data.data,
            fprod:fproduct.data.data
        }
    }
}