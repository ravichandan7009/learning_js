import RestaurentCard from "../RestaurentCard/RestaurentCard"
import Search from "../SearchComponent/Search"
import Filter from "../FiltersComponent/Filter";
import './RestaurentsContainer.css';



const RestaurentsContainer = ({restData,topRest, showAll})=>{
    return(
        <div className="restaurent-container">
            <Search/>
            <Filter restData={restData} filterRest ={topRest} showAllRest={showAll}/>
          { restData.map ((resto)=> <RestaurentCard key={resto.info.id} props={resto}/>)}
        </div>
       
    )
}
export default RestaurentsContainer