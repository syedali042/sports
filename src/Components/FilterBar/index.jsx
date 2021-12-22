import { FilterBarStyled, Text, ClearFilterText, CategoryItemQtyText, CategoryItemText, CategoryItemTextActive, CategoryTitle, LightTextCat } from "./styles";
import FunnelIcon from '@assets/icons/FunnelMuutos.svg'
import ArrowDown from '@assets/icons/ArrowDownMuutos.svg'
import ArrowUp from '@assets/icons/Arrow/Arrow 2/Up.svg'
import { Container } from "react-bootstrap";
import DoubleRangeSlider from "../RangeSlider/RangeSlider";
import StarLight from "../StarLight";
import Star from "../Star";
import ReactRanger from "../RangeSlider/RangeSlider";
const FilterBar = () => {

    return (

        <>
            <FilterBarStyled>
                <div className="d-flex align-items-center justify-content-between pt-2">
                    <div className="d-flex align-items-center p-2 pt-1 pb-1">
                        <FunnelIcon />
                        <Text> &nbsp;Filters</Text>
                    </div>
                    <div className="p-3 pt-0 pb-0">
                        <ClearFilterText>
                            Clear Filters
                        </ClearFilterText>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText><font style={{fontSize:'15px !important'}}>All Categories</font></CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText><font style={{fontSize:'15px !important'}}>123 </font></CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>Men</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>Women</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>Kids</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemTextActive>Fitness Gym</CategoryItemTextActive>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>In The Water</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>Outdoor Exercise</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>On The Turf</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>All Rounder</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>Equipments</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>Accessories</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>On Planks</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemText>Recreation</CategoryItemText>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                        <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryTitle>Services</CategoryTitle>
                        </div>
                        <div className="p-3 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Cardio Machines
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Free Weights
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Personal Training
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Swimming Pool
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Tennis
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Gymnasium
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Aerobics
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Zumba
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Spa
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                </div>
                <hr/>
                <div className="row">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryTitle>Amenities</CategoryTitle>
                        </div>
                        <div className="p-3 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>



                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Changing Room
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Cable TV
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Shower
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Lockers
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Parking
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Wifi
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Suitable TV
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Disabled Access
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Bar
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="p-3 pt-0 pb-0">
                            
                            <CategoryTitle>Distance Range</CategoryTitle>
                        </div>
                        <div className="p-3 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>
                    <div className="col-md-12 p-4">
                        <ReactRanger />
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryTitle>Price Range</CategoryTitle>
                        </div>
                        <div className="p-3 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>
                    <div className="col-md-12 p-4">
                        <ReactRanger />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryTitle>Ratings</CategoryTitle>
                        </div>
                        <div className="p-3 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                <Star></Star>&nbsp;
                                <StarLight></StarLight>&nbsp;
                                <StarLight></StarLight>&nbsp;
                                <StarLight></StarLight>&nbsp;
                                <StarLight></StarLight>&nbsp;
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>


                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                        <label className="filter-bar-check-container">
                            <Star></Star>&nbsp;
                            <Star></Star>&nbsp;
                            <StarLight></StarLight>&nbsp;
                            <StarLight></StarLight>&nbsp;
                            <StarLight></StarLight>&nbsp;
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                        <label className="filter-bar-check-container">
                            <Star></Star>&nbsp;
                            <Star></Star>&nbsp;
                            <Star></Star>&nbsp;
                            <StarLight></StarLight>&nbsp;
                            <StarLight></StarLight>&nbsp;
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                <Star></Star>&nbsp;
                                <Star></Star>&nbsp;
                                <Star></Star>&nbsp;
                                <Star></Star>&nbsp;
                                <StarLight></StarLight>&nbsp;
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                <Star></Star>&nbsp;
                                <Star></Star>&nbsp;
                                <Star></Star>&nbsp;
                                <Star></Star>&nbsp;
                                <Star></Star>&nbsp;
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>
                </div>
                <hr/>
            </FilterBarStyled>
        </>

    )

}
export default FilterBar;


const checkBox = {
    background: '#353C44',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxSizing: 'border-box',
    borderRadius: '4px',
}