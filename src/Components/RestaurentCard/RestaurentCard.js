import './RestaurentCard.css';
import {restaurentImgURL} from '../../Constants/urls';
const RestaurentCard = (props)=>{
  const {name,avgRating,costForTwo,cloudinaryImageId,cuisines} = props?.props?.info;
  let cuisinesList = cuisines.toString()

   
    return(
        <div className="resturent-card">
           <img className='restaurent-logo' src={restaurentImgURL + cloudinaryImageId}/>
           <h3 className='restaurent-name'>{name}</h3>
           <h4 className='cousines-list'>{cuisinesList}</h4> 
           <h4 className='restaurent-rating'>{avgRating}</h4>
           <h4 className='delivery-time'></h4>
           <h4 className='cost-for-two'>{costForTwo}</h4> 
        </div>
    )
}
export default RestaurentCard