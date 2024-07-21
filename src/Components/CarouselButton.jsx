import { BackArrow } from "../assets/BackArrow";
import { ForwardArrow } from "../assets/ForwardArrow";



export const CarouselButton = () => {
    const leftClick = () => {
        if (current > 0) {
          setCurrent(current - 1);
        }
      };
    
      const rightClick = () => {
        if (current < images.length - 1) {
          setCurrent(current + 1);
        }
        else if(current == images.length - 1){
          setCurrent(0)
        }
        console.log(current)
      };
    


    return (
        <div className="">
        <button
          className="w-10 h-10 rounded-md inline-flex justify-center items-center border-2 border-black"
          onClick={leftClick}
        >
          <ForwardArrow />
        </button>
        <button
          className="w-10 h-10 rounded-md inline-flex justify-center items-center border-2 border-black"
          onClick={rightClick}
        >
          <BackArrow />
        </button>
        </div>
    )
}