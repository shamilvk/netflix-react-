import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {originals,trending,action,comedy,horror,romance,documentary} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App(){
  return(
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={trending} title='Trending' isSmall />
      <RowPost url={action} title='Action'  />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror'  />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentary} title='Documentary'  />
    </div>
  );
}
export default App;
