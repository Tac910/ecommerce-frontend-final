import Product from '../components/Product';
export default function ProductRow({ data, title }) {
  return (
    <>

      <div className="font-ibm  text-5xl uppercase py-2 w-11/12 mx-auto my-10  flex ">Shop  {title}</div>
      <div className="  mx-auto  grid  w-11/12 gap-[3px]  grid-cols-2 lg:grid-cols-4">
        {data.map((e) => (
          <Product e={e} key={e.id} />
        ))}
      </div>
    </>
  );
}
