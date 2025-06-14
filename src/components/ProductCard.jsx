import { styles } from "../assets/styles/productCard";
import { AddtoCart } from "./CartButtons";
import { Link } from "react-router";

export default function ProductCard({ product, cart_items }) {
  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <Link to={`/products/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title} // Improved alt text
            className="rounded-t-2xl w-full h-48 object-cover" // Fixed height, object-cover
          />
        </Link>
        <div className={styles.infoBox}>
          <small className="font-bold text-lg truncate">{product.title}</small> {/* Larger, truncated title */}
          <div className="grid gap-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${index < Math.ceil(product.rating) ? "text-yellow-400" : "text-gray-200"}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <small className="ml-2 text-gray-600">{product.rating}/5</small> {/* Corrected scale */}
            </div>
            <span className="font-semibold text-gray-800">${product.price}</span>
          </div>
          <div className={styles.btns}>
            <AddtoCart cart_items={cart_items} product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}