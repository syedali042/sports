import Container from "src/Components/Container"
import ArrowRight from "@assets/icons/Arrow/Arrow 2/Right.svg"
import HeartIcon from "@assets/icons/Heart.svg"
import ServiceCard from "src/Components/Cards/Service"
import ProductCard from "src/Components/Cards/Product"
import Footer from "src/Components/Footer"
import PlusIcon from "@assets/icons/Plus/Plus.svg"
import MinusIcon from "@assets/icons/Minus/Minus.svg"
import { useState, useEffect } from "react"
import LogoVisa from "@assets/icons/logos_visa.svg"
import LogoMasterCard from "@assets/icons/logos_mastercard.svg"
import ThankYouGroup from "@assets/icons/ThankYouGroup.svg"
import { GetColorName } from "hex-color-to-color-name"
import { Formik } from "formik"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import Slider from 'react-slick';
import Host from "src/host"
const stripePromise = loadStripe(
  "pk_test_51I2LWDFilxkNqfOOhPtBLHT6sgztYSUWCce9L2sN0Xrj2NihnpfY6cbryyQFCUnHvOKA4l4k8JNWYQXSApBkkwLu00CTmcAuS9"
)
const ServiceCart = () => {

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


  const [cartProductCount, setCartProductCount] = useState(1)

  const productIncreament = () => {
    const pCount = cartProductCount + 1
    setCartProductCount(pCount)
  }

  const productDecreament = () => {
    const pCount = cartProductCount - 1
    setCartProductCount(pCount)
  }

  const toggleMethod = event => {
    console.log(event.target)
  }

  const [cart, setCart] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(()=>{

    async function getFeaturedProducts(){
        const res = await axios.get(`${Host}api/getFeaturedProducts`)
        setFeaturedProducts(res.data.data);
        console.log(res.data.data)
    }

    getFeaturedProducts();

},[]);
  // const [cart2, setCart2] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [cart2, setCart2] = useState(false)
  const [cartAttr, setCartAttr] = useState([])
  useEffect(() => {
    async function getCart() {
      const cart = JSON.parse(localStorage.getItem("productCart"))
      setCart(cart)
      let sum = cart.reduce(
        (accumulator, current) => accumulator + parseInt(current.price),
        0
      )
      setTotal(sum)
      setSubTotal(sum)
      // console.log(cart)
    }
    getCart()
  }, [])

  const handleClick = async () => {
    // Get Stripe.js instance
    const stripe = await stripePromise
    // Call your backend to create the Checkout Session
    const response = await axios.post("${Host}api/payment", {
      method: "POST",
    })
    const session = await response.data.id
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session,
    })
    if (result.error) {
      console.log(result.error)
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Formik
          initialValues={{
            colors: "",
            sizes: "",
            quantity: 0,
            promoCode: "",
            products: "",
          }}
          enableReinitialize={true}
          validate={values => {
            const errors = {}
            if (!values.colors) {
              errors.colors = "Please Choose Color"
            } else if (!values.sizes) {
              errors.sizes = "Please Choose Size"
            } else if (!values.quantity) {
              errors.quantity = "Check Quantities"
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values)
              cart.forEach((e, i) => {
                e.selectedQuantity = values.quantity[i]
                e.selectedColor = values.colors[i]
                e.selectedSize = values.sizes[i]
              })
              setCart(cart)
              setCart2(true)
              console.log(cart)
              setCartAttr(values)
              document
                .getElementsByClassName("cart")[0]
                .classList.toggle("d-none")
              document
                .getElementsByClassName("checkout")[0]
                .classList.toggle("d-none")
              setSubmitting(false)
            }, 400)
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <>
              <form onSubmit={handleSubmit}>
                <div className='cart main'>
                  <div className='d-flex breadcrump'>
                    <span>Home</span> <ArrowRight />
                    <span className='active-bread'>Cart (3)</span>
                  </div>
                  <div className='row pt-2'>
                    <div className='col-md-9'>
                      <span
                        className='service-details-heading'
                        style={{ fontWeight: "500", fontSize: "18px" }}>
                        Shopping Cart
                      </span>
                      <span
                        style={{ fontWeight: "400", fontSize: "11px" }}
                        className='text-success-2'>
                        <br />
                        {errors.colors && touched.colors && errors.colors}
                        {errors.sizes && touched.sizes && errors.sizes}
                        {errors.quantity && touched.quantity && errors.quantity}
                      </span>
                      <div className='cart-item-container pt-3'>
                        {cart
                          ? cart.map((e, i) => (
                              <>
                                <div className='cart-item'>
                                  <div className='row'>
                                    <div className='col-md-2'>
                                      <img
                                        src={
                                          e.images
                                            ? e.images[0]
                                            : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                        }
                                        alt=''
                                        className='cart-item-img'
                                      />
                                    </div>
                                    <div className='col-md-7'>
                                      <div className='cart-item-title'>
                                        {e.name
                                          ? e.name
                                          : "Polyester Leader Navy womans Hanbag"}
                                      </div>
                                      <div className='cart-item-category pt-1'>
                                        {e.category
                                          ? e.category
                                          : "Men???s shoes"}
                                      </div>
                                      <div className='service-cart-item-color font-size-12 pt-1'>
                                        <span className='service-cart-item-color-title text-grey'>
                                          Color:&nbsp;
                                        </span>
                                        <span>
                                          <select
                                            onChange={handleChange}
                                            name={`colors[${i}]`}
                                            className='bg-grey d-inline-block text-success-2'
                                            style={{
                                              backgroundColor: "#20252B",
                                              outline: "none",
                                              border: "none",
                                            }}>
                                            <option value=''>
                                              Select Color
                                            </option>
                                            {e.colors
                                              ? e.colors.map(color => (
                                                  <>
                                                    <option value={color}>
                                                      {GetColorName(color)}
                                                    </option>
                                                  </>
                                                ))
                                              : "No Color Available"}
                                          </select>
                                        </span>
                                      </div>
                                      <div className='service-cart-item-color font-size-12 pt-1'>
                                        <span className='service-cart-item-color-title text-grey'>
                                          Size:&nbsp;
                                        </span>
                                        <span>
                                          <select
                                            onChange={handleChange}
                                            name={`sizes[${i}]`}
                                            className='bg-grey d-inline-block text-success-2'
                                            style={{
                                              backgroundColor: "#20252B",
                                              outline: "none",
                                              border: "none",
                                            }}>
                                            <option value=''>
                                              Select Size
                                            </option>
                                            {e.sizes
                                              ? e.sizes.map(size => (
                                                  <>
                                                    <option value={size}>
                                                      {size}
                                                    </option>
                                                  </>
                                                ))
                                              : "No Size Available"}
                                          </select>
                                        </span>
                                        &nbsp;&nbsp;
                                        <span className='service-cart-item-color-title text-grey'>
                                          Quantity:&nbsp;
                                        </span>
                                        <span>
                                          <select
                                            onChange={handleChange}
                                            name={`quantity[${i}]`}
                                            className='bg-grey d-inline-block text-success-2'
                                            style={{
                                              backgroundColor: "#20252B",
                                              outline: "none",
                                              border: "none",
                                            }}>
                                            <option value=''>
                                              Select Quantity
                                            </option>
                                            <option value='1'>1</option>
                                          </select>
                                        </span>
                                      </div>
                                      <div className='cart-util-actions pt-2'>
                                        <button style={button2}>
                                          Add To Favourites
                                        </button>
                                        &nbsp;&nbsp;&nbsp;
                                        <button style={button2}>Remove</button>
                                      </div>
                                    </div>
                                     <div className='col-md-3'>
                                      <div className='cart-item-price' style={{fontWeight:'400 !important', fontFamily:'Mulish !important'}}>
                                        QAR.
                                        {e.price
                                          ? e.price
                                          : "Price Not Available"}
                                      </div>
                                      <div className='cart-item-price-title' style={{fontWeight:'400 !important', fontFamily:'Mulish !important'}}>
                                        Item Price
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr className='bg-secondary' />
                              </>
                            ))
                          : "Cart Is Empty"}
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <span
                        className='service-details-heading'
                        style={{ fontWeight: "500", fontSize: "18px" }}>
                        Summary
                      </span>
                      <div className='row pt-3'>
                        <div className='col-md-12'>
                          <div className='summary-card p-3'>
                            <span className='cart-item-price-title2'>
                              Promo Code
                            </span>
                            <select
                              name='promoCode'
                              id=''
                              className='form-control promo-code-select text-grey font-size-14 mt-2'>
                              <option value=''>Select Promo Code</option>
                            </select>
                            <div className='d-flex align-items-center justify-content-between subtotal mt-3'>
                              <div className='cart-item-price-title2'>
                                Subtotal
                              </div>
                              <div className='text-success-2'>
                                QAR. {subTotal}
                              </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between shipping mt-2'>
                              <div className='cart-item-price-title2'>
                                Shipping
                              </div>
                              <div className='text-success-2'>Free</div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between tax mt-2'>
                              <div className='cart-item-price-title2'>
                                Estimated Tax
                              </div>
                              <div className='text-success-2'>-</div>
                            </div>
                            <hr className='bg-secondary' />
                            <div className='d-flex align-items-center justify-content-between total mt-2'>
                              <div
                                className='cart-item-price-title2'
                                style={{
                                  fontWeight: "bold !important",
                                  color: "#fff !important",
                                }}>
                                Total
                              </div>
                              <div className='text-success-2'>QAR. {total}</div>
                            </div>
                            <hr className='bg-secondary' />
                            <button
                              disabled={isSubmitting}
                              type='submit'
                              style={button}>
                              Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className='bg-secondary' />
                </div>
              </form>
            </>
          )}
        </Formik>

        <div className='cart checkout d-none'>
          <div className='d-flex breadcrump'>
            <span>Home</span> <ArrowRight />
            <span className='active-bread'>Cart (3)</span> <ArrowRight />
            <span className='active-bread'>Checkout</span>
          </div>

          <div className='row pt-2'>
            <div className='col-md-9'>
              <span
                className='service-details-heading'
                style={{ fontWeight: "500", fontSize: "18px" }}>
                Shipping Address
              </span>
              <div className='cart-item-container pt-3'>
                <div className='row billing-card d-flex align-items-center justify-content-between'>
                  <div className='col-md-8'>
                    <div className='d-flex pl-1 pt-3'>
                      <div>
                        <input type='radio' name='address' />
                      </div>
                      <div
                        className='card-number'
                        style={{ marginLeft: 10, fontSize: 16 }}>
                        <span>Jane Copper</span>
                      </div>
                      <div className='card-address'>
                        2972 Westheimer Rd. Santa Ana, Illinois 85486
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                        height: "100%",
                      }}>
                      <a
                        href='javascript://'
                        className='edit-method'
                        onClick={toggleMethod}
                        style={{ float: "right", textDecoration: "none" }}>
                        Edit Method
                      </a>
                    </div>
                  </div>
                  <div className='row pt-1'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          Full Name
                        </label>
                        <input
                          type='text'
                          className='settings-input pt-2'
                          defaultValue='Cameron Williamson'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          Address
                        </label>
                        <input
                          type='text'
                          className='settings-input pt-2'
                          defaultValue='2118 Thornridge Cir'
                        />
                      </div>
                    </div>
                    <div className='pt-2 col-md-4'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          APT / SUIT / FLOOR
                        </label>
                        <input
                          type='text'
                          className='settings-input pt-2'
                          defaultValue='1st Floor'
                        />
                      </div>
                    </div>
                    <div className='pt-2 col-md-4'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          ZIPCODE
                        </label>
                        <input
                          type='text'
                          className='settings-input pt-2'
                          defaultValue='35624'
                        />
                      </div>
                    </div>
                    <div className='pt-2 col-md-4'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          CONTACT NO.
                        </label>
                        <input
                          type='text'
                          className='settings-input pt-2'
                          defaultValue='(092) 304 16 9999 1'
                        />
                      </div>
                    </div>
                    <div className='pt-2 col-md-4'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          City
                        </label>
                        <input
                          type='text'
                          className='settings-input pt-2'
                          defaultValue='Syracuse'
                        />
                      </div>
                    </div>
                    <div className='pt-2 col-md-4'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          State
                        </label>
                        <input
                          type='text'
                          className='settings-input pt-2'
                          defaultValue='Connecticut'
                        />
                      </div>
                    </div>
                    <div className='pt-2 col-md-4'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          Email
                        </label>
                        <input
                          type='text'
                          className='settings-input pt-2'
                          defaultValue='michelle.rivera@example.com'
                        />
                      </div>
                    </div>
                    <div className='pt-3 col-md-12 pb-2'>
                      <button style={button2}> REMOVE</button>&nbsp;&nbsp;
                      <button style={button1}> USE THIS ADDRESS</button>
                    </div>
                  </div>
                </div>
                <br />
                <span
                  className='service-details-heading'
                  style={{ fontWeight: "500", fontSize: "18px" }}>
                  Shipping Address
                </span>
                <br />
                <br />
                <div className='row billing-card p-2 d-flex align-items-center justify-content-center'>
                  <input type='radio' name='card' />
                  <div className='row'>
                    <div className='col-md-6'>
                      <LogoMasterCard />
                      &nbsp;&nbsp;
                      <span className='card-number'>1234 **** **** ****</span>
                      &nbsp;&nbsp;
                      <span className='card-expiry'>02/2021</span>
                    </div>
                    <div className='col-md-6'>
                      <a
                        href='javascript://'
                        className='edit-method'
                        onClick={toggleMethod}
                        style={{ float: "right", textDecoration: "none" }}>
                        Edit Method
                      </a>
                    </div>
                  </div>
                  <div className='row editmethod '>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          Card Number
                        </label>
                        <input
                          type='text'
                          className='settings-input pt-2'
                          defaultValue='1234 **** **** ****'
                        />
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          Expiry Date
                        </label>
                        <input
                          type='text'
                          className='settings-input pt-2'
                          defaultValue='02/2021'
                        />
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div className='form-group'>
                        <label htmlFor='' className='p-1 settings-input-label'>
                          CVV
                        </label>
                        <input
                          type='password'
                          className='settings-input pt-2'
                          defaultValue='123'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <span
                className='service-details-heading'
                style={{ fontWeight: "500", fontSize: "18px" }}>
                Summary
              </span>
              <div className='row pt-3'>
                <div className='col-md-12'>
                  <div className='summary-card p-3'>
                    {cart2
                      ? cart.map(e => (
                          <>
                            <div className='cart-item'>
                              <div className='row'>
                                <div className='col-md-4'>
                                  <img
                                    src={
                                      e.images
                                        ? e.images[0]
                                        : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                    }
                                    alt=''
                                    style={{
                                      width: "100%",
                                      height: "95%",
                                      borderRadius: "5px",
                                    }}
                                  />
                                </div>
                                <div className='col-md-8'>
                                  <div
                                    className='cart-item-title'
                                    style={{
                                      fontSize: "12px !important",
                                      overflow: "hidden",
                                      whiteSpace: "nowrap",
                                      textOverflow: "ellipsis",
                                    }}>
                                    {e.name
                                      ? e.name
                                      : "Polyester Leader Navy womans Hanbag"}
                                  </div>
                                  <div className='service-cart-item-color font-size-12 pt-1'>
                                    <span className='service-cart-item-color-title text-grey'>
                                      Color: {e.selectedColor},&nbsp;
                                    </span>
                                    <span className='service-cart-item-color-title text-grey'>
                                      Size: {e.selectedSize}
                                    </span>
                                  </div>
                                  <div
                                    className='text-success-2'
                                    style={{ fontSize: "12px !important" }}>
                                    <div className='d-inline-block'>
                                      <div className='d-flex'>
                                        <div
                                          className='pb-2'
                                          style={{
                                            transform: "translateY(21%)",
                                          }}>
                                          QAR. {e.price}&nbsp;&nbsp;&nbsp;&nbsp;
                                        </div>
                                        {/* <div
                                          className='d-flex align-items-center justify-content-center d-product-amount-counter'
                                          style={{
                                            transform: "scale(0.6)",
                                            marginRight: "-10px",
                                          }}
                                          onClick={() => productIncreament()}>
                                          <PlusIcon />
                                        </div>
                                        <span
                                          className='counter-amount text-success-2'
                                          style={{ marginTop: 2 }}>
                                          {cartProductCount}
                                        </span>
                                        <div
                                          className='d-flex align-items-center justify-content-center d-product-amount-counter'
                                          style={{
                                            transform: "scale(0.6)",
                                            marginLeft: "-8px",
                                          }}
                                          onClick={() => productDecreament()}>
                                          <MinusIcon />
                                        </div> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ))
                      : "No Product In Cart"}
                    <span className='cart-item-price-title2'>Promo Code</span>
                    <select
                      name=''
                      id=''
                      className='form-control promo-code-select text-grey font-size-14 mt-2'>
                      <option value=''>Select Promo Code</option>
                    </select>
                    <div className='d-flex align-items-center justify-content-between subtotal mt-3'>
                      <div className='cart-item-price-title2'>Subtotal</div>
                      <div className='text-success-2'>QAR. {subTotal}</div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between shipping mt-2'>
                      <div className='cart-item-price-title2'>Shipping</div>
                      <div className='text-success-2'>Free</div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between tax mt-2'>
                      <div className='cart-item-price-title2'>
                        Estimated Tax
                      </div>
                      <div className='text-success-2'>-</div>
                    </div>
                    <hr className='bg-secondary' />
                    <div className='d-flex align-items-center justify-content-between total mt-2'>
                      <div
                        className='cart-item-price-title2'
                        style={{
                          fontWeight: "bold !important",
                          color: "#fff !important",
                        }}>
                        Total
                      </div>
                      <div className='text-success-2'>QAR. {total}</div>
                    </div>
                    <hr className='bg-secondary' />
                    <button style={button} onClick={handleClick}>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='bg-secondary' />
        </div>

        <div className='cart thank-you d-none'>
          <div className=''>
            <ThankYouGroup />
          </div>
        </div>
        <div className='row pt-4'>
          <span
            className='service-details-heading'
            style={{ fontWeight: "500", fontSize: "18px" }}>
            You May Also Like
          </span><br />
          <div className="row pt-2">
              <Slider {...settings}>
                  {featuredProducts?featuredProducts.map(e => (
                      <div className="col-md-3" key={e.id}>
                          <ProductCard data={e}/>
                      </div>
                  )):'No Service Available'}
              </Slider>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <Footer />
    </>
  )
}

export default ServiceCart

const button = {
  padding: "8px 17px",
  width: "100%",
  background:
    "linear-gradient(328.11deg,#05d0c2 12.59%,#2ecb84 53%, #8ce01d 87.41%)",
  outline: "1px solid rgba(255, 255, 255, 0.3)",
  boxSizing: "border-box",
  borderRadius: "7px",
  fontStyle: "italic",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "20px",
  letterSpacing: "0.02em",
  textTransform: "uppercase",
  color: "#01301b",
  // margin : '4px'
}

const button1 = {
  padding: "8px 17px",
  // width:'100%',
  background:
    "linear-gradient(328.11deg,#05d0c2 12.59%,#2ecb84 53%, #8ce01d 87.41%)",
  outline: "1px solid rgba(255, 255, 255, 0.3)",
  boxSizing: "border-box",
  borderRadius: "7px",
  fontStyle: "italic",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "20px",
  letterSpacing: "0.02em",
  textTransform: "uppercase",
  color: "#01301b",
  // margin : '4px'
}

const button2 = {
  // marginLeft:10,
  padding: "8px 17px",
  // width:'35%',
  background: "#2A3037",
  outline: "1px solid rgba(255, 255, 255, 0.1)",
  boxSizing: "border-box",
  borderRadius: "7px",
  fontStyle: "italic",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "20px",
  letterSpacing: "0.02em",
  textTransform: "uppercase",
  color: "#A6ADB5",
  // margin : '4px'
}
