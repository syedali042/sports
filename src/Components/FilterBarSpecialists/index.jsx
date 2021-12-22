import { FilterBarStyled, Text, ClearFilterText, CategoryItemQtyText, CategoryItemText, CategoryItemTextActive, CategoryTitle, LightTextCat } from "./styles";
import FunnelIcon from '@assets/icons/FunnelMuutos.svg'
import ArrowDown from '@assets/icons/ArrowDownMuutos.svg'
import ArrowUp from '@assets/icons/Arrow/Arrow 2/Up.svg'
import { Container } from "react-bootstrap";
import DoubleRangeSlider from "../RangeSlider/RangeSlider";
import StarLight from "../StarLight";
import Star from "../Star";
import ReactRanger from "../RangeSlider/RangeSlider";
const FilterBarTrends = () => {

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
                            <CategoryTitle>Gender</CategoryTitle>
                        </div>
                        <div className="p-3 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Male
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
                                Female
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
                <div className="row pb-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryTitle>Speciality</CategoryTitle>
                        </div>
                        <div className="p-3 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>



                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Weightloss
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
                                Yoga
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
                                Fitness
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
                                Swimming
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
                                Powerlifting
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
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
                <div className="row pt-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryTitle>Geography</CategoryTitle>
                        </div>
                        <div className="p-3 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Asia
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
                                Europe
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
                                USA
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="p-3 pt-0 pb-0">
                            <CategoryItemQtyText>123</CategoryItemQtyText>
                        </div>
                    </div>

                </div>
            </FilterBarStyled>
        </>

    )

}
export default FilterBarTrends;


const checkBox = {
    background: '#353C44',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxSizing: 'border-box',
    borderRadius: '4px',
}