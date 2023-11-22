// Custom React Video Player component
// Similar to hulu's VideoPlayer component

import { useRef, useState, useEffect } from "react";
import { MediaOutlet, MediaPlayer } from '@vidstack/react';


export default function VideoPlayer () {
    const [src, setSrc] = useState("");
    const player = useRef(null);

    useEffect(() => {
      async function getVideoStream() {
        // some stuff
        setSrc("https://media-files.vidstack.io/720p.mp4");
      }
  
      getVideoStream();
    }, []);
    return (
        <MediaPlayer controls src={src} ref={player}>
            <MediaOutlet />
        </MediaPlayer>
    );
}