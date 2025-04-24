import { useDispatch } from 'react-redux';
import { styles } from '../assets/styles/productCard';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { rdx_add_to_cart, rdx_remove_from_cart } from '../Redux/cartSlice';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export function AddtoCart({ product, cart_items }) {
    const existingItem = cart_items.find(item => item.id === product.id)
    const qty = existingItem?.quantity || 0;

    const dispatch = useDispatch();

    if (qty > 0) {
        return (
            <div className='flex gap-4 items-center'>
                <a className={styles.plus} onClick={() => dispatch(rdx_add_to_cart(product))}> <FontAwesomeIcon icon={faPlus} /> </a>
                <span>{qty}</span>
                <a className={styles.minus} onClick={() => dispatch(rdx_remove_from_cart(product.id))} > <FontAwesomeIcon icon={faMinus} /> </a>
            </div>
        )

    }

    return (
        <a className={styles.cart} onClick={() => dispatch(rdx_add_to_cart(product))} > <FontAwesomeIcon icon={faCartPlus} /> </a>
    )

}

export function RemoveFromCart({ id }) {
    const dispatch = useDispatch();

    return (
        <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => dispatch(rdx_remove_from_cart(id))}>Remove from the cart</button>
    )
}