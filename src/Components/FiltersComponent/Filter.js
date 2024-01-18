import './Filter.css'
import React from 'react'
const Filter = (props)=>{

  
  
    return(
        <React.Fragment>
              <div id="top-filter-container" className="filter-container">
            <button className='filter-btn' onClick={props.filterRest}>Top Rated Restuarents</button>
        </div>
          <div id="all-filter-container" className="filter-container">
          <button className='filter-btn' onClick={props.showAllRest}>Show All Restuarents</button>
      </div>
        </React.Fragment>
      

        
    )
}
export default Filter