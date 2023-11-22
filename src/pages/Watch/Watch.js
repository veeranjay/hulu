import { useParams } from "react-router-dom";
import { Heading1 } from "../../components/Data_Display";

import VideoPlayer from "../../components/Video_Player";
const Watch = () => {
  const { id } = useParams();
  return (
    <div className="watch bg-black flex flex-col w-full h-full">
      <VideoPlayer />

      {/* <div className="show-card w-full h-[500px] bg-white">
        <Heading1 className="text-black">{id}</Heading1>
      </div>
 */}
      
      {/* <div className="episodes-list w-full h-[500px]">
        
      </div> */}
    </div>
  );
};

export default Watch;
