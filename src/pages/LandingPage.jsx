import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; // Adjust the import path if necessary
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import the new ContactSectionNoHeader component
import ContactSectionNoHeader from './ContactSectionNoHeader'; // Ensure this path is correct

// Import the styles object
import { styles } from '../assets/styles/LandingPage'; // Ensure this path is correct

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Fetch a limited number of products, e.g., 10
        const response = await fetch('https://dummyjson.com/products?limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-8">Loading products...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className="container mx-auto px-4">
          <h1 className={styles.heroTitle}>Welcome to ShopEase</h1>
          <p className={styles.heroSubtitle}>Find the best products for your needs</p>
          {/* Add a call-to-action button or other content here if desired */}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className={styles.swiperContainer}> {/* Apply swiper container styles */}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper" // Keep this class, Swiper uses it internally
          >
            {products.map(product => (
              <SwiperSlide key={product.id} className={styles.swiperSlide}> {/* Apply swiper slide styles */}
                {/* Pass cart_items if ProductCard requires it */}
                <ProductCard product={product} cart_items={[]} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className={styles.contactSection}> {/* Apply contact section styles */}
         <ContactSectionNoHeader /> {/* Use the new component here */}
      </div>
    </div>
  );
};

export default LandingPage;