import React from "react";
import Card from "../component/card/card";
import Header from "../component/header/header";
import { useVideo } from "../contexts/context";
import "./home.css";

function HomePage() {
   const { videos, isLoading } = useVideo();

   return (
      <div>
         <Header />
         <div className="home">
            {isLoading ? (
               <h3>Loading...</h3>
            ) : (
               videos?.length > 0 &&
               videos.map((video) => <Card data={video} />)
            )}
         </div>
      </div>
   );
}

export default HomePage;
