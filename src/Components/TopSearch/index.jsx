import { Container } from "react-bootstrap";
import { Search__SearchBar } from "./styles";
import { useState, useEffect } from "react";
const TopSearch = (props) => {
    const [selectActive, setSelectActive] = useState(true)
    useEffect(() => {
        if(props.select==false){
            // document.getElementsByClassName('search-select')[0].classList.add('d-none');
            setSelectActive(false)
        }
    }, []);
    return (
        <Search__SearchBar>
            <div className="row">
                <div className="first col-md-10">
                    <div className="row ">
                        {selectActive?
                        <div className="col-md-2 search-select">
                            {props.options?
                                <div className="form-group d-inline-block">
                                    <select className="form-control">
                                        <option value="">{props.options?props.options:props.options[0]}</option>
                                        <option value="">Category</option>
                                        <option value="">Category</option>
                                    </select>
                                </div>
                            :
                                <div className="form-group d-inline-block">
                                    <select className="form-control">
                                        <option value="">Services</option>
                                        <option value="">Services</option>
                                        <option value="">Services</option>
                                    </select>
                                </div>
                            }
                            <div className="d-inline-block float-right border-right">
                                d
                            </div>
                        </div>
                        :''}
                        <div className="col-md-10">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={props.placeholder?props.placeholder:"Search sport centers, spa, products..."} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second col-md-2">
                    <button style={button}>
                        Search
                    </button>
                </div>
            </div>
        </Search__SearchBar>
    );
}
export default TopSearch;
const button = {
    padding: '20px',
    width:'100%',
    background: 'linear-gradient(328.11deg,#05d0c2 12.59%,#2ecb84 53%, #8ce01d 87.41%)',
    outline: '1px solid rgba(255, 255, 255, 0.3)',
    boxSizing: 'border-box',
    borderRadius: '10px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#01301b',
    float: 'right'
    // margin : '4px'
}