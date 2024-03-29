import { useDispatch, useSelector } from "react-redux";
import CarousalProducts from "../components/CarousalProducts";
import ProductRow from "../components/ProductRow";
import { useSession } from "next-auth/react";
import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import Category from "../components/Category";
import Product from "../components/Product";
export default function Home({ data }) {
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const session = useSession()


  return (
    <>
      <div className="mx-auto w-11/12">
        {session.status === 'authenticated' &&
          <div className="text-3xl my-10"> Hello, {session.data.user.name.split(' ')[0]} !</div>
        }
      </div>
      <div className='gap-4 justify-center mx-auto h-full flex '>
        <Category text='men' image={'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'} />
        <Category text='women' image={"https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} />
        <Category text='shoes' image={"https://i.pinimg.com/564x/5d/ce/55/5dce55c43873d0e8aeea8fb9f14541a3.jpg"} />
        <Category text='accessories' image={"https://i.pinimg.com/564x/33/df/3f/33df3fb8912bd5147b51e0d7158cd54e.jpg"} />


      </div>

      {data &&
        <div className="w-11/12 mx-auto my-20">
          <div className="font-ibm  text-5xl uppercase py-2  my-4 flex ">Trending Products</div>
          <div className="  mx-auto  grid   gap-[3px]  grid-cols-2 lg:grid-cols-4">
            {data.slice(0, 8).map((e) => (
              <Product e={e} key={e.id} />
            ))}
          </div>
          <Link href={'/category/all'}>

            <button className="bg-white rounded-full uppercase px-6 py-2 text-2xl text-black my-4  w-fit ">View All Products</button>
          </Link>
        </div>
      }
      <HeroBanner />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://productapi.vercel.app/api/product`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
