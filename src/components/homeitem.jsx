import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  "bootstrap/dist/css/bootstrap.min.css";
import { bagItemActions } from "../store/storage";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const HomeItem = ({ item }) => {

const removeItem = (item) => {
dispatch(bagItemActions.removeFromCart(item.id));
}

  const dispatch = useDispatch();

  const AddToBag = (item) => {
    dispatch(bagItemActions.addToCart(item));
  };

  const bagItems = useSelector((store)=> store.bagItems)
  const bagItemId = bagItems.map((item) => item.id);
const isInBag = bagItemId.includes(item.id);



  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
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
        {   isInBag ? <button type="button" className="btn btn-add-bag btn-danger"onClick={()=> {removeItem(item)}}><IoIosRemoveCircleOutline /> Remove</button> 
        : <button type="button" className="btn  btn-add-bag btn-success" onClick={() => AddToBag(item)}><MdAddShoppingCart /> Add to Bag</button> 
        }
        

      </div>
    </>
  );
};

export default HomeItem;
