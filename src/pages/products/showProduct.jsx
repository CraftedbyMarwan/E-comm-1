import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { AddtoCart } from "../../components/CartButtons";
import { useSelector } from 'react-redux';
import { styles } from '../../assets/styles/SingleProductPage';

export default function ShowProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const { items } = useSelector(store => store.cartSlice);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.thumbnail);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-8">Product not found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.imageSection}>
          <img 
            src={selectedImage} 
            alt={product.title} 
            className={styles.mainImage}
          />
          <div className={styles.thumbnailContainer}>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                className={styles.thumbnail}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.title}</h1>
          <div className={styles.rating}>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${
                  index < Math.ceil(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <small className="ml-5">{product.rating}/4</small>
          </div>
          <div className={styles.price}>${product.price}</div>
          
          <p className={styles.description}>{product.description}</p>
          
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <strong>Brand:</strong> {product.brand}
            </div>
            <div className={styles.detailItem}>
              <strong>Category:</strong> {product.category}
            </div>
            <div className={styles.detailItem}>
              <strong>Stock:</strong> {product.stock} available
            </div>
          </div>

          <div className="flex items-center justify-around gap-4 text-md">
            <AddtoCart cart_items={items} product={product} />
            <Link className={styles.backButton} to='/products'> Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}