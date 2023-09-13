import React from "react";
import "./card.css";

function Card({ data }) {
   console.log(data);
   const { heading, video, tags } = data;

   return (
      <div className="card">
         <video className="video" src={video} controls></video>
         <h3>{heading}</h3>
         <div className="tag-wrapper">
            {tags?.map((tag) => {
               return <div className="tag">{tag}</div>;
            })}
         </div>
      </div>
   );
}

export default Card;
