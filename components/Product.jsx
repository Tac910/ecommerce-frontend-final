import Link from 'next/link';
import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
export default function Product({ e }) {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div key={e.id} className="flex flex-col pb-2  hover:scale-[95%]  ease-linear  h border-primary font-light   mx-auto font-ibm  duration-200">
      <Link href={`/${e._id}`}>
          <div className=" absolute  flex flex-auto  place-content-end text-black p-2 place-self-end ">
            <BiHeart/></div>
        <img width={300} height={300} src={e.image} alt='' className="pb-2 "/>
        <div className=" text-sm lg:text-xl flex px-1  mt-2   line-clamp-1  w-11/12 capitalize ">{e.title}</div>
        <div className=" px-1  my-2 text-sm font-light text-secondary ">₹{e.price}</div>
      </Link>
    </div>
  );
}
