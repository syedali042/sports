import ImgCard from "@assets/images/img-card.png"
import { CardBadge, StatusBage } from "../Service/styles"
import StarLight from "src/Components/StarLight"
import Star from "src/Components/Star"
import HeartIcon from "@assets/icons/Heart.svg"
import PinIcon from "@assets/icons/Pin.svg"
import ClockIcon from "@assets/icons/Clock.svg"
import ShareIcon from "@assets/icons/Share.svg"
const HorizontalProductCard = ({ data }) => {
  const addToCart = (cart, data) => event => {
    if (localStorage.getItem(cart) == null) {
      localStorage.setItem(cart, "[]")
      let addCart = JSON.parse(localStorage.getItem(cart))
      addCart.push(data)
      localStorage.setItem(cart, JSON.stringify(addCart))
      event.target.innerText = "Added To Cart"
    } else {
      let addCart = JSON.parse(localStorage.getItem(cart))
      addCart.push(data)
      localStorage.setItem(cart, JSON.stringify(addCart))
      event.target.innerText = "Added To Cart"
    }
  }

  return (
    <>
      <div className='row'>
        <div className='col-md-4'>
          <img
            src={data.images ? data.images[0]:'https://syedali.easystay.com.pk/muutos/s1.png'}
            alt=''
            className='img-responsive'
            style={{ maxHeight: "200px", maxWidth: "300px" }}
          />
        </div>
        <div className='col-md-8' style={{ paddingLeft: 25 }}>
          <div className='row'>
            <div className='col-md-12'>
              <CardBadge>20% OFF</CardBadge>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Star />
              &nbsp;
              <Star />
              &nbsp;
              <Star />
              &nbsp;
              <Star />
              &nbsp;
              <StarLight />
              &nbsp;
            </div>
          </div>
          <div className='row pt-3'>
            <p className='horizontal-product-card-title'>{data.name}</p>
          </div>

          <div className='service-horizontal-card-bottom pricing align-items-center justify-content-center'>
            <div className='pricing'>
              <span
                style={{ fontWeight: "600" }}
                className='current text-white'>
                QAR {data.price}
              </span>
              &nbsp; &nbsp;
              <span
                className='old text-grey'
                style={{ textDecoration: "line-through" }}>
                QAR {parseInt(data.price) + 150}
              </span>
            </div>
            <br />
            <br />
            <br />
            <div className='product-card-icon-wrapper border p-1'>
              <ShareIcon />
            </div>
            <div className='product-card-icon-wrapper border p-1'>
              <HeartIcon />
            </div>
            <div
              className=''
              style={{ float: "left", transform: "translateY(-50%)" }}>
              <button
                className='addToCart'
                style={button}
                onClick={addToCart("productCart", data)}>
                + ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: "#fff" }} />
    </>
  )
}
export default HorizontalProductCard

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
  float: "right",
  // margin : '4px'
}
