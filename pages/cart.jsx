import Link from "next/link";
import React from "react";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";
import { useSession } from "next-auth/react";
export default function cart() {
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemove = (cartItem) => {
    dispatch(remove(cartItem));
  };
  const session = useSession()
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  return (
    <div className="w-11/12 mx-auto ">
      <div className="font-ibm  uppercase text-2xl  py-2  my-6 flex ">Cart</div>

      {products.length > 0 ? (
        products.map((e) => (
          <div
            key={e.id}
            className="flex my-3 flex-row gap-3 justify-between pb-4 border-b-[1px] border-accent"
          >
            <div className="flex gap-4 w-full">
              <img width={80} height={80} src={e.image} alt={e.title} />
              <div className="text-xl  my-auto">{e.title}</div>
            </div>
            <div className="flex  w-fit gap-3 ">
              <div className="text-xl text-primary my-auto">₹{e.price}</div>
              <div className="text-xl my-auto">X{e.cartQuantity}</div>
            </div>
            <button
              onClick={() => handleRemove(e)}
              className="btn btn-circle p-2 text-black bg-rose-500 my-auto btn-sm w-fit "
            >
              <MdClear />
            </button>
          </div>
        ))
      ) : (
        <div className="font-ibm  text-2xl mx-auto  py-2 align-center ">
          No items in cart
        </div>
      )}
      {products.length > 0 && (
        <>
          <div className="font-ibm text-2xl     mt-6 mb-3 flex ">
            {" "}
            Subtotal : ₹
            {products.reduce((sum, i) => (sum += i.cartQuantity * i.price), 0)}
            .00
          </div>
          {isButtonLoading ? (
            <button className="btn loading rounded-none bg-primary text-base-100 font-normal uppercase">
              loading
            </button>
          ) : (

              session.status === 'authenticated' ?
                <Link
                  className="   bg-primary text-base-100 hover:bg-base-100 hover:text-primary  uppercase  w-fit py-2  px-10 rounded-none  border-[1px]  border-primary ease-in-out font-normal duration-100"
                  href={'/checkout'}
                >
                  checkout
                </Link> : <Link
                  className="   bg-primary text-base-100 hover:bg-base-100 hover:text-primary  uppercase  w-fit py-2  px-10 rounded-none  border-[1px]  border-primary ease-in-out font-normal duration-100"
                  href={'/login'}
                >
                  Login to checkout
                </Link>



          )}
        </>
      )}
    </div>
  );
}
