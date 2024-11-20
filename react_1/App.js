import "./styles.css";
import Card from "./Components/Card";
import { useState } from "react";

{
    name = "Camila";
}

export default funtion App() {
    let[upvote, setUpvote] = useState(0);

     function like() {
        return setUpvote((upvote += 1));
     } 
    
      return(
        <div className="App">
        {upvote}
        <button onClick={like}>👍</button>
        <Card Name={name} Work="SWE" />
        <Card Name="Kay" Work="Chef" pics="/>
        <Card Name="Sam" Work="President" />
        <Card Name="Kyley" Work="Hunter"/>
        </div>
    );
}