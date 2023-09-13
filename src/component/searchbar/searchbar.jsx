import React, { useEffect, useState } from "react";
import { url } from "../../utils/constants.js";
import { useVideo } from "../../contexts/context";
import { debounce } from "lodash";
import "./searchbar.css";

let debouncedSearch;

function Searchbar() {
   const [query, setQuery] = useState("");
   const { setVideos, setIsLoading } = useVideo();
   const numResults = 8;

   const fetchVideos = async (query) => {
      try {
         setIsLoading(true);
         const response = await fetch(
            `${url}?q=${query}&numResults=${numResults}`
         );
         const result = await response.json();
         setIsLoading(false);
         setVideos(result.results);
         if (result?.error) {
            alert(result?.error);
         }
      } catch (error) {
         console.error(error);
         alert(error);
      } finally {
         setIsLoading(false);
      }
   };

   if (debouncedSearch == null) {
      debouncedSearch = debounce((query) => fetchVideos(query), 500);
   }

   useEffect(() => {
      if (!query) {
         setVideos([]);
      }
      if (query) {
         debouncedSearch(query);
      }
      return () => {
         debouncedSearch.cancel();
      };
      /* eslint-disable-next-line */
   }, [query]);

   const handleSearch = (val) => {
      setQuery(val);
   };

   return (
      <div>
         <input
            className="text-input"
            type="text"
            placeholder="search"
            onChange={(e) => handleSearch(e.target.value)}
            value={query}
         />
      </div>
   );
}

export default Searchbar;
