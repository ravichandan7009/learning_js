import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import RestaurentsContainer from './Components/RestaurentsContainer/RestuarentsContainer';
import Footer from './Components/Footer';
import restaurants from './Constants/restaurentsMockData';


const App=()=> {
  const [restData, setRestData] = useState(restaurants)
  const handleTopRatedRestuarents = ()=>{
    console.log("resturents filtered.....")
    
    const topRatedRestuarents = restData.filter(rest=>rest.info.avgRating > 4.5)
    console.log('topRatedRestuarents',topRatedRestuarents)
    setRestData(topRatedRestuarents)
}

const showAllRestuarents = ()=>{
  console.log('show all....')
  setRestData(restaurants)
  console.log('restData',restData)
}
  console.log('restData',restData)
  return (
    <div className="App">
    <Header/>
   <RestaurentsContainer restData={restData} topRest ={handleTopRatedRestuarents} showAll={showAllRestuarents}/>
   <Footer/>
   </div>
  );
}

export default App;
