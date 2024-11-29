import { useRef } from "react";
import useGestureRecognition from "./components/hands-capture/hooks";

function App() {
  const videoElement = useRef<any>()
  const canvasEl = useRef<any>()
  const { maxVideoWidth, maxVideoHeight } = useGestureRecognition({
    videoElement,
    canvasEl
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <video
        style={{ display: 'none' }}
        className='video'
        playsInline
        ref={videoElement}
      />
      <canvas 
        ref={canvasEl} 
        width={maxVideoWidth} 
        height={maxVideoHeight} 
        />
    </div>
  );
}

export default App