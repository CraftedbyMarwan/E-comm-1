// import { styles } from '../../assets/styles/ProductsPage';

// const Category = ({ categories = [], activeCategory, onSelectCategory }) => {
//   const safeCategories = Array.isArray(categories) ? categories : [];
//   const formatCategoryName = (category) => {
//     if (typeof category !== 'string') return ''; // Handle non-string input gracefully
//     return category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
//   };

//   return (
//     <div className={`${styles.sidebar} border-2 min-h-[200px] max-h-fit`}>
//       <h3 className="text-lg font-semibold mb-4">Categories</h3>
//       {safeCategories.length === 0 ? (
//         <p>No categories available</p>
//       ) : (
//         <ul className="space-y-2">
//           <li>
//             <button
//               onClick={() => onSelectCategory('all')}
//               className={`${styles.categoryButton} ${
//                 activeCategory === 'all'
//                   ? styles.categoryButtonActive
//                   : styles.categoryButtonInactive
//               }`}
//             >
//               All Products
//             </button>
//           </li>
//           {safeCategories.map((category) => (
//             <li key={category.slug}>
//               <button
//                 onClick={() => onSelectCategory(category.slug)}
//                 className={`${styles.categoryButton} ${
//                   activeCategory === category.slug
//                     ? styles.categoryButtonActive
//                     : styles.categoryButtonInactive
//                 }`}
//               >
//                 {formatCategoryName(category.slug)}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Category;

import { styles } from '../../assets/styles/ProductsPage';
import { useState } from 'react';

const Category = ({ categories = [], activeCategory, onSelectCategory }) => {
  const safeCategories = Array.isArray(categories) ? categories : [];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const formatCategoryName = (category) => {
    if (typeof category !== 'string') return ''; // Handle non-string input gracefully
    return category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    onSelectCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`${styles.sidebar} border-2 min-h-[200px] max-h-fit`}>
      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <button
          onClick={toggleDropdown}
          className={`${styles.categoryButton} ${
            activeCategory === 'all'
              ? styles.categoryButtonActive
              : styles.categoryButtonInactive
          } flex items-center justify-between w-full`}
        >
          {activeCategory === 'all' ? 'All Products' : formatCategoryName(activeCategory)}
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isDropdownOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="mt-2 bg-white rounded-md shadow-lg border border-gray-200">
            <ul className="py-1">
              <li>
                <button
                  onClick={() => handleCategorySelect('all')}
                  className={`${styles.categoryButton} ${
                    activeCategory === 'all'
                      ? styles.categoryButtonActive
                      : styles.categoryButtonInactive
                  } w-full text-left`}
                >
                  All Products
                </button>
              </li>
              {safeCategories.map((category) => (
                <li key={category.slug}>
                  <button
                    onClick={() => handleCategorySelect(category.slug)}
                    className={`${styles.categoryButton} ${
                      activeCategory === category.slug
                        ? styles.categoryButtonActive
                        : styles.categoryButtonInactive
                    } w-full text-left`}
                  >
                    {formatCategoryName(category.slug)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        {safeCategories.length === 0 ? (
          <p>No categories available</p>
        ) : (
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onSelectCategory('all')}
                className={`${styles.categoryButton} ${
                  activeCategory === 'all'
                    ? styles.categoryButtonActive
                    : styles.categoryButtonInactive
                }`}
              >
                All Products
              </button>
            </li>
            {safeCategories.map((category) => (
              <li key={category.slug}>
                <button
                  onClick={() => onSelectCategory(category.slug)}
                  className={`${styles.categoryButton} ${
                    activeCategory === category.slug
                      ? styles.categoryButtonActive
                      : styles.categoryButtonInactive
                  }`}
                >
                  {formatCategoryName(category.slug)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Category;