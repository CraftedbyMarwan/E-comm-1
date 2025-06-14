import { useEffect, useState } from 'react';
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

// Import motion from framer-motion
import { motion } from 'framer-motion';

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

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const heroTitleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const heroSubtitleVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
  };

  const sectionTitleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className="container mx-auto px-4">
          <motion.h1
            className={styles.heroTitle}
            variants={heroTitleVariants}
          >
            Welcome to ShopEase
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            variants={heroSubtitleVariants}
          >
            Find the best products for your needs
          </motion.p>
          {/* Add a call-to-action button or other content here if desired */}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 py-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          variants={sectionTitleVariants}
        >
          Featured Products
        </motion.h2>
        <motion.div
          className={styles.swiperContainer} // Apply swiper container styles
          variants={containerVariants} // Apply variants for the whole section
        >
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
                <motion.div variants={itemVariants}> {/* Animate individual product cards */}
                  {/* Pass cart_items if ProductCard requires it */}
                  <ProductCard product={product} cart_items={[]} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Contact Us Section */}
      <div className={styles.contactSection}> {/* Apply contact section styles */}
         <ContactSectionNoHeader /> {/* Use the new component here */}
      </div>
    </motion.div>
  );
};

export default LandingPage;