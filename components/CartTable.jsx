import { useDispatch } from 'react-redux';
import { remove } from '../redux/cartSlice';

export default function CartTable({ products }) {
  const dispatch = useDispatch();
  const handleRemove = (cartItem) => {
    dispatch(remove(cartItem));}
  return (
    <div>hi</div>
  );
}
