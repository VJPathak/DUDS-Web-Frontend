import './index.css';
import MiddleThree from '../MiddleThree';
import FilterIntro from '../filterIntro';
import SortBy from '../sortby';
import Size from '../size';
import Color from '../color';
import Collection from '../collection';
import Fabric from '../fabric';
export default function FilterProduct() {
    return (
        <div className="filter-products">
            <div className="filter">
                <h1 className='filter-heading'>Filters</h1>
                <FilterIntro/>
                <div className='filter-buttons'>
                    <button className='clear-filters'>Clear All Filters</button>
                    <button className='apply-filters'>Applied Filters</button>
                </div>
                <SortBy/>
                <Size/>
                <Color/>
                <Collection/>
                <Fabric/>
            </div>
            <div className="products">
                <MiddleThree url={"https://backendinit.onrender.com/getcategory?cat=Jeans"} />
            </div>
        </div>
    )
}