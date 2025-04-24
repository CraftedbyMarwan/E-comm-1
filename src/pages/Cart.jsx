import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { rdx_add_to_cart, rdx_remove_from_cart } from '../Redux/cartSlice';
import { styles } from "../assets/styles/cartPage";
import { Link } from 'react-router';

const CartPage = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(store => store.cartSlice);

    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (items.length === 0) {
        return (
            <div className={styles.emptyCartContainer}>
                <div className={styles.emptyCartContent}>
                    <h1 className={styles.emptyCartTitle}>Your cart is empty</h1>
                    <p className={styles.emptyCartText}>Looks like you haven't added anything to your cart yet</p>
                    <a
                        href="/products"
                        className={styles.emptyCartButton}
                    >
                        Browse Products
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.innerContainer}>
                <h1 className={styles.title}>Shopping Cart</h1>

                <div className={styles.cartContainer}>
                    {/* Cart Items List */}
                    <div className="divide-y divide-gray-200">
                        {items.map(item => (
                            <div key={item.id} className={styles.itemContainer}>
                                {/* Product Image */}
                                <div className={styles.itemImageContainer}>
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className={styles.itemImage}
                                    />
                                </div>

                                {/* Product Info */}
                                <div className={styles.itemContent}>
                                    <div className="flex justify-between">
                                        <h2 className={styles.itemTitle}>{item.title}</h2>
                                        <p className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>

                                    <p className={styles.itemPriceEach}>${item.price.toFixed(2)} each</p>

                                    {/* Grouped Quantity Controls */}
                                    <div className={styles.quantityContainer}>
                                        <div className={styles.quantityGroup}>
                                            {/* Minus Button */}
                                            <button
                                                className={`${styles.quantityButton} ${styles.minusButton}`}
                                                onClick={() => dispatch(rdx_remove_from_cart(item.id))}
                                            >
                                                <FontAwesomeIcon icon={faMinus} size="md" />
                                            </button>

                                            {/* Quantity Display */}
                                            <span className={styles.quantityDisplay}>
                                                {item.quantity}
                                            </span>

                                            {/* Plus Button */}
                                            <button
                                                className={`${styles.quantityButton} ${styles.plusButton}`}
                                                onClick={() => dispatch(rdx_add_to_cart(item))}
                                            >
                                                <FontAwesomeIcon icon={faPlus} size="md" />
                                            </button>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            className={styles.removeButton}
                                            onClick={() => {
                                                for (let i = 0; i < item.quantity; i++) {
                                                    dispatch(rdx_remove_from_cart(item.id));
                                                }
                                            }}
                                            title="Remove all"
                                        >
                                            <FontAwesomeIcon icon={faTrash} size="md" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className={styles.summaryContainer}>
                        <h2 className={styles.summaryTitle}>Order summary</h2>

                        <div className="space-y-4">
                            <div className={styles.summaryRow}>
                                <span className={styles.summaryLabel}>Subtotal</span>
                                <span className={styles.summaryValue}>${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className={styles.summaryRow}>
                                <span className={styles.summaryLabel}>Shipping</span>
                                <span className={`${styles.summaryValue} ${styles.freeShipping}`}>Free</span>
                            </div>

                            <div className={styles.totalRow}>
                                <span className={styles.totalLabel}>Total</span>
                                <span className={styles.totalValue}>${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            className={styles.checkoutButton}
                            onClick={() => alert('Proceeding to checkout!')}
                        >
                            Checkout
                        </button>

                        <div className={styles.continueShopping}>
                            <Link className={styles.continueLink} to="/products"> ← Continue shopping </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;