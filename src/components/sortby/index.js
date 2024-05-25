import './index.css';
import Label from '../Label';
export default function SortBy(){
    return(
        <div className="sort-by">
            <div className='sortby-heading-line'>
                <h3 className='sortby-heading'>Sort By</h3>
                <h3 className='sortby-heading'>-</h3>
            </div>
            <div className='sortby-options'>
                <Label name="Featured"/>
                <Label name="Best Seller" />
                <Label name="Price : Low To High"/>
                <Label name="Price : High To Low"/>
            </div>
        </div>
    )
}