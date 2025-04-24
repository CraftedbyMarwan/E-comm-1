import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import Category from '../../pages/products/Category';
import { styles } from '../../assets/styles/ProductsPage';
import { rdx_set_loading } from '../../Redux/settingsSlice';

const formatCategoryName = (category) => {
  if (typeof category !== 'string') return '';
  return category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const { items } = useSelector((store) => store.cartSlice);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoadingCategories(true);
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          setCategories([]);
        }
      } catch (error) {
        setCategories([]);
      } finally {
        setIsLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, activeCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [productsPerPage, activeCategory]);

  const fetchData = async () => {
    try {
      setIsLoadingProducts(true);
      dispatch(rdx_set_loading(true));
      const skip = productsPerPage === 'all' ? 0 : (currentPage - 1) * productsPerPage;
      const limit = productsPerPage === 'all' ? totalProducts || 100 : productsPerPage;

      const url = activeCategory === 'all'
        ? `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products/category/${activeCategory}?limit=${limit}&skip=${skip}`;

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products || data);
      setTotalProducts(data.total || (data.products ? data.products.length : 0));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoadingProducts(false);
      dispatch(rdx_set_loading(false));
    }
  };

  const debouncedFetchData = debounce(fetchData, 300);

  useEffect(() => {
    debouncedFetchData();
  }, [dispatch, currentPage, productsPerPage, activeCategory]);

  const totalPages = productsPerPage === 'all' ? 1 : Math.ceil(totalProducts / productsPerPage);

  const getPageNumbers = () => {
    if (productsPerPage === 'all') return [];
    const pageNumbers = [];
    const maxVisiblePages = 5;
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <Category
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <div className={styles.mainContent}>
          {isLoadingCategories && (
            <div className="mb-4">Loading categories...</div>
          )}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className={styles.resultsInfo}>
              Showing {productsPerPage === 'all' ? (
                <span>all <span className={styles.resultsHighlight}>{totalProducts}</span> products</span>
              ) : (
                <>
                  <span className={styles.resultsHighlight}>{(currentPage - 1) * productsPerPage + 1}</span> to{' '}
                  <span className={styles.resultsHighlight}>
                    {Math.min(currentPage * productsPerPage, totalProducts)}
                  </span>{' '}
                  of <span className={styles.resultsHighlight}>{totalProducts}</span> products
                </>
              )}
              {activeCategory !== 'all' && (
                <span> in <span className={styles.resultsHighlight}>
                  {formatCategoryName(activeCategory)}
                </span></span>
              )}
            </div>
            <div className={styles.perPageContainer}>
              <label htmlFor="perPage" className={styles.perPageLabel}>
                Show:
              </label>
              <div className="relative">
                <select
                  id="perPage"
                  value={productsPerPage}
                  onChange={(e) => setProductsPerPage(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className={styles.perPageSelect}
                >
                  <option value="5">5 per page</option>
                  <option value="10">10 per page</option>
                  <option value="20">20 per page</option>
                  <option value="30">30 per page</option>
                  <option value="50">50 per page</option>
                  <option value="all">All in one page</option>
                </select>
                <div className={styles.perPageIcon}>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productGrid}>
            {isLoadingProducts ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">Loading products...</p>
              </div>
            ) : products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} cart_items={items} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No products found in this category</p>
              </div>
            )}
          </div>
          {productsPerPage !== 'all' && totalPages > 1 && (
            <div className={styles.paginationContainer}>
              <nav className={styles.paginationNav}>
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`${styles.paginationButton} ${currentPage === 1 ? styles.paginationButtonDisabled : ''}`}
                  aria-label="Previous page"
                >
                  Previous
                </button>
                {getPageNumbers().map((number) => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`${styles.paginationButton} ${
                      currentPage === number ? styles.paginationButtonActive : ''
                    }`}
                    aria-current={currentPage === number ? 'page' : undefined}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`${styles.paginationButton} ${currentPage === totalPages ? styles.paginationButtonDisabled : ''}`}
                  aria-label="Next page"
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className={`${styles.scrollTopButton} ${
          showScrollTop ? 'opacity-100 translate-y-0 hover:cursor-pointer' : styles.scrollTopButtonHidden
        }`}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 01-1.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default Products;