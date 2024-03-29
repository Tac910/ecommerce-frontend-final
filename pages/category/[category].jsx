import React from 'react'
import CarousalProducts from '../../components/CarousalProducts';
import ProductRow from '../../components/ProductRow';

export default function Category({ products, _id }) {

  const categorizedProducts = (products.filter((product) => product.category[0].toLowerCase() === _id))
  return (
    <div>
      {
        _id === 'all' ?
          <ProductRow data={products} title={_id} /> :
          <ProductRow data={categorizedProducts} title={_id} />
      }

    </div>
  )
}

export async function getServerSideProps(context) {
  const _id = context.query.category;
  const products = await fetch(
    `https://productapi.vercel.app/api/product`
  ).then((res) => res.json());
  return {
    props: {
      products, _id
    },
  };
}
