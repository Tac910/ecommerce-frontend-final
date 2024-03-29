import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
export default function ProductDetails({ deets }) {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  return (
    <div className="flex flex-col lg:flex-row w-[96%] mx-auto  mt-2 font-ibm">
      <img
        src={deets.image}
        alt={deets.title}
        width={480}
        height={480}
        className="mx-auto"
      />
      <div className="mx-auto  gap-4 h-11/12 w-10/12 lg:w-7/12  my-auto py-4">
        <div className="text-4xl mx-auto uppercase">{deets.title}</div>
        <div>
          <div className="py-3 text-xs flex flex-wrap">
            {deets.category.map((e) => (
              <div className=" rounded-full text-black px-4 m-1 py-2 bg-secondary hover:bg-secondary-focus w-fit">
                {e}
              </div>
            ))}
          </div>
          <div className="flex gap-2  mx-auto my-3 text-secondary  ">
            <div className="border-2 border-secondary  w-fit px-3  hover:scale-105 duration-200 uppercase py-1">
              {deets.size}
            </div>
          </div>
          <div className="my-5 flex  gap-4 font-bold font-xl    mx-auto">
            <div className="   text-secondary hover:bg-primary   uppercase  w-fit py-2  px-3 rounded-none    border-primary ease-in-out font-normal duration-100">
              ₹{deets.price}
            </div>
            {isButtonLoading ? (
              <button className="btn loading rounded-none bg-primary text-base-100 font-normal uppercase">
                loading
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsButtonLoading(true);
                  setTimeout(() => {
                    handleAdd(deets);
                    setIsButtonLoading(false);
                  }, 500);
                }}
                className=" bg-primary text-base-100 hover:bg-primary-content hover:text-primary  uppercase  w-[200px] py-2   rounded-none  border-[1px]  border-primary ease-in-out font-normal duration-100"
              >
                Add to Cart
              </button>
            )}
          </div>
          <div className="mx-auto text-md lg:text-lg   my-2 ">
            <span className="underline text-secondary">
              Product Description
            </span>
            - {deets.description}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const _id = context.query.slug;
  const deets = await fetch(
    `https://productapi.vercel.app/api/product/find/${_id}`
  ).then((res) => res.json());

  return {
    props: {
      deets,
    },
  };
}
