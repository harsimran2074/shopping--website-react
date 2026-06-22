import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

  import { bagItemActions } from '../store/storage'


const HomeItem = ({item}) => {

const dispatch = useDispatch()

const AddToBag = (item) => {
  dispatch(bagItemActions.addToCart(item));
console.log("clicked");


}

    
return (<>
     <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={()=> AddToBag(item)}>Add to Bag</button>
    </div>
  </>)
}

export default HomeItem