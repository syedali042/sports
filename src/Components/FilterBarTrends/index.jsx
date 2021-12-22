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
                        <div className="p-2 pt-0 pb-0">
                            <CategoryTitle>Year</CategoryTitle>
                        </div>
                        <div className="p-2 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>
                    <div className="pt-1" style={{paddingLeft:20, paddingRight:20}}>
                        <select
                            name='promoCode'
                            id=''
                            className='form-control promo-code-select text-grey font-size-14 p-2'>
                            <option value=''>2021</option>
                        </select>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="p-3 pt-0 pb-0">
                            <CategoryTitle>Month</CategoryTitle>
                        </div>
                        <div className="p-3 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                January
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
                                Febuaury
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
                                March
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
                                April
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
                                May
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
                                June
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
                                July
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
                                August
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
                                September
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
                                October
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
                                November
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
                                December
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
                            <CategoryTitle>Categories</CategoryTitle>
                        </div>
                        <div className="p-3 pt-0 pb-0 filter-arrow-down-icon">
                            <ArrowDown />
                        </div>
                    </div>



                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <div className="d-flex align-items-center p-3 pt-0 pb-0">
                            <label className="filter-bar-check-container">
                                Category Title 1
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
                                Category Title 2
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
                                Category Title 3
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
                                Category Title 4
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
                                Category Title 5
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
                                Category Title 6
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
                                Category Title 7
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
                                Category Title 8
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
                                Category Title 9
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