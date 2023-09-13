import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
   const [videos, setVideos] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   return (
      <VideoContext.Provider
         value={{
            videos,
            setVideos,
            isLoading,
            setIsLoading,
         }}
      >
         {children}
      </VideoContext.Provider>
   );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
