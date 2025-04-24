export const styles = {
  // Main container
  body: "relative flex flex-wrap items-center justify-between px-4 py-3 bg-gray-900 shadow-md sticky top-0 z-50 md:px-6 md:py-3",

  // Logo section
  logoContainer: "flex items-center gap-3 w-full md:w-auto",
  logo: "w-10 h-10 object-contain md:w-12 md:h-12",
  brandName: "text-lg font-bold text-white md:text-xl",
  mobileMenuButton: "text-gray-300 mr-2 text-xl md:hidden focus:outline-none",

  // Navigation links (desktop)
  navLinks: "hidden md:flex items-center gap-4 p-2",
  link: "px-3 py-2 rounded-md text-gray-300 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium",

  // Mobile menu
  mobileMenu: `
    hidden 
    w-full 
    bg-white 
    py-2 
    px-4 
    shadow-lg 
    absolute 
    left-0 
    top-full 
    flex-col 
    gap-2 
    border-t 
    border-gray-100
    transform
    transition-all
    duration-300
    ease-in-out
    opacity-0
    -translate-y-2
  `,
  showMobileMenu: `
    !flex
    opacity-100
    translate-y-0
  `,
  mobileLink: "block py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-md",

  // Right section
  rightSection: "flex items-center gap-8 ml-auto md:ml-0",

  // Cart
  cartLink: "ml-2",
  cartContainer:"relative p-2 text-gray-300 hover:bg-blue-50 hover:text-black rounded-full transition-colors duration-200 text-xl",
  qty: "absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center",

  // User section
  userSection: "flex items-center gap-2 md:gap-4",
  userInfo: "flex items-center gap-2",
  guestInfo: "flex items-center",
  greeting: "hidden sm:block text-gray-600 text-sm",
  userName: "text-blue-600 font-semibold",
  authButtons: "flex gap-2",

  // Avatars
  userAvatar:
    "w-8 h-8 rounded-full object-cover border-2 border-blue-200 md:w-10 md:h-10",
  guestAvatar: "w-8 h-8 rounded-full object-cover opacity-80 md:w-10 md:h-10",

  // Buttons
  btn: "px-3 py-1.5 rounded-md font-medium text-sm transition-colors duration-200 md:px-4 md:py-2 hover:text-black hover: cursor-pointer",
  loginBtn: " text-white hover:bg-gray-300",
  registerBtn: "bg-green-600 text-white hover:bg-green-700",
  logoutBtn: "bg-red-600 text-white hover:bg-red-700",
};
