import StarLight from "../StarLight";
import Star from "../Star";
import OpenBookIcon from '@assets/icons/Book/Open.svg'
import HeartIcon from "@assets/icons/HeartMuutos.svg"
import StarOutline from '@assets/icons/StarOutline.svg'
import {useState, useEffect} from 'react'
const Reviews = (props) => {


    if (typeof window === 'object') {
        if(props.title==false){
            const element = document.getElementsByClassName('reviews-heading');
            for (let i = 0; i < element.length; i++) {
                const element1 = element[i];
                element1.classList.add('d-none');
            }
        }
        if(props.bar==false){
            const element = document.getElementsByClassName('reviews-header');
            for (let i = 0; i < element.length; i++) {
                const element1 = element[i];
                element1.classList.add('d-none');
            }
        }
        if(props.borderRadius=='5px'){
            const element = document.getElementsByClassName('author-picture');
            for (let i = 0; i < element.length; i++) {
                const element1 = element[i];
                element1.style.borderRadius = '5px !important'
            }
        }
    }
    // setCount(count+1);
    // useEffect(() => {
        
    // }, [count])
    return (

        <>
            <p className="reviews-heading">
                Reviews
            </p>

            <div className="reviews-header">
                <div className="row d-flex align-items-center">
                    <div className="col-md-9 align-items-center">
                        <div className="d-inline-block p-3">
                            <span className="text-grey" style={{fontSize:'14px'}}>Rate Venture</span>
                        </div>
                        &nbsp;
                        &nbsp;
                        <div className="d-inline-block">
                            <span><StarOutline/>&nbsp;</span>
                            <span><StarOutline/>&nbsp;</span>
                            <span><StarOutline/>&nbsp;</span>
                            <span><StarOutline/>&nbsp;</span>
                            <span><StarOutline/>&nbsp;</span>
                        </div>
                        <div className="d-inline-block text-success-2 p-3 font-size-12">{props.comments?props.comments.length:'No Review Available'} Ratings</div>
                    </div>
                    {/* <div className="col-md-7">
                        
                    </div> */}
                    <div className="col-md-3">
                        <div>
                            <button className='svg-button'
                                style={button}>
                                <OpenBookIcon /> Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {props.comments?props.comments.map((comment)=>{
                console.log(comment.stars)
                var monthsAgo = Math.random(1,10) 
                var stars = comment.stars;
                const Stars = (stars) => {
                    let starActive = parseInt(stars);
                    let starInactive = 5-parseInt(stars);
                    let elements = [];
                    for (let index = 0; index < starActive; index++) {
                        elements.push(<Star />);
                    }                           
                    for (let index = 0; index < starInactive; index++) {
                        elements.push(<StarLight />);
                    }                                             
                    return elements;
                }
                
                const randomNumber = (min, max) => { // min and max included 
                    return Math.floor(Math.random() * (max - min + 1) + min)
                }

                const likeComment = (event) =>{
                    event.target.parentNode.classList.toggle('liked-comment')
                    event.target.parentNode.nextSibling.innerText = parseInt(event.target.parentNode.nextSibling.innerText)+1
                }
                return (
                    <>
                        <div className="row comments-container pt-2">
                            <div className="col-md-12 pb-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src="https://img.freepik.com/free-icon/important-person_318-10744.jpg?size=338&ext=jpg" alt="" className="author-picture"/>
                                        <span className="author-name p-2">Wade Warren</span>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="" style={{float:'right'}}>
                                            <div className="comment-stars d-inline-block">
                                                <div className="d-flex align-items-center">
                                                    {Stars(stars)}&nbsp;
                                                    <div className="pt-1 text-success-2 font-size-12"> {stars}</div>
                                                </div>
                                            </div>
                                            <p className="comment-time textt-grey d-inline-block" style={{marginLeft: 15}}>
                                                {randomNumber(1,10)}mth ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-body pt-3">
                                    <p className="comment-text">
                                        {comment.body}
                                    </p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="">
                                            <div className="d-flex like-comment text-success-2 ">
                                                <div>
                                                    <HeartIcon onClick={likeComment}/>
                                                </div>&nbsp;
                                                <div>
                                                    <p style={{paddingTop:1,}}>{comment.likes}</p>
                                                </div>
                                                <button style={button3}>
                                                    Reply
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <button style={button2}>
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-secondary"/>
                        </div>
                    </>
                )
            }):'No Reviews Available'}
        </>

    )

}

export default Reviews;

const button = {
    marginRight:'10px',
    padding: '8px 17px',
    width:'95%',
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
    marginRight:'10px',
    padding: '10px 17px',
    width:'95%',
    background: '#2A3037',
    outline: '1px solid rgba(255, 255, 255, 0.3)',
    boxSizing: 'border-box',
    borderRadius: '7px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#A6ADB5',
    float : 'right',
    transform:'translateY(-20%)'
}

const button3 = {
    marginLeft:'30px',
    padding: '6px 16px',
    // width:'95%',
    background: 'linear-gradient(328.11deg,#05d0c2 12.59%,#2ecb84 53%, #8ce01d 87.41%)',
    outline: '1px solid rgba(255, 255, 255, 0.3)',
    boxSizing: 'border-box',
    borderRadius: '7px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#01301b',
    transform:'translateY(-20%)'
    // margin : '4px'
}