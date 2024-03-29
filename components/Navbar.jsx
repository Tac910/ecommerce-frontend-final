import Link from "next/link";
import { BsBag, BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";
import { useSession } from "next-auth/react";
export default function Navbar() {
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemove = (cartItem) => {
    dispatch(remove(cartItem));
  };
  const session = useSession()
  return (
    <div className="navbar  z-50 fixed uppercase   mix-blend-difference  font-ibm">

      <div className="navbar-start">
        <Link
          href={"/"}
          className=" uppercase text-whyte font-normal "
        >
          Gengar Store
        </Link>
      </div>
      <div className="flex navbar-center gap-2">
        <Link href={'/category/men'}>Men</Link>
        <Link href={'/category/women'}>women</Link>
        <Link href={'/category/shoes'}>Shoes</Link>
      </div>
      <div className="navbar-end mx-4 lg:mr-5">

        {
          session.status === 'authenticated' ?
            <Link className="bg-white flex gap-2 items-center rounded-full  text-black" href={"/login"}>
              <img src={session.data.user.image} className="rounded-full w-10 h-10 p-2" />
              <div className="pr-3">
                {session.data.user.name.split(' ')[0]}
              </div>
            </Link>
            :
            <Link href={"/login"}>
              Login
            </Link>
        }


        <Link href={"/cart"}>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BsBag className="h-5 w-5" />
              <span className="badge badge-xs badge-primary py-2 indicator-item">
                {products.length}
              </span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
