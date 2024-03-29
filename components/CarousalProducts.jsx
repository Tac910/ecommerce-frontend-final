import Carousel from "nuka-carousel/lib/carousel";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
export default function CarousalProducts({ products }) {
  return (
    <>
      <>
        <div className="lg:w-11/12 w-full  mx-auto ">
          <Carousel
            wrapAround={true}
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: "none",
              },
            }}
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                onClick={() => previousSlide()}
                className="btn btn-circle btn-ghost  text-white   hover:bg-transparent hover:text-black duration-300  m-2"
              >
                {" "}
                <BiLeftArrow className="w-5 h-5 mx-auto" />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={() => nextSlide()}
                className="btn btn-circle  btn-ghost text-white     hover:bg-transparent hover:text-black duration-300 m-2"
              >
                <BiRightArrow className="w-5 h-5 mx-auto" />
              </button>
            )}
          >
            {products.map((e) => (
              <div
                key={e.id}
                className="carousel-item  aspect-video w-full flex lg:h-[400px] -z-100 bg-cover bg-center "
                style={{ backgroundImage: `url(${e.image})` }}
              >
                <div className="flex flex-col-reverse h-full w-full  bg-gradient-to-t from-black/60 to-black/20   bottom-0">
                  <div className=" top-0 flex pb-5 px-4  text-accent text-2xl font-ibm uppercase lg:text-3xl ">
                    {" "}
                    {e.title}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </>
    </>
  );
}
