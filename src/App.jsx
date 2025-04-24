import { ToastContainer } from "react-toastify"
import ModalContainer from "./components/ModalContainer"
import TopNav from "./layout/TopNav"
import Pages from '@/pages'
import FullscreenLoadingContainer from './components/FullscreenLoadingContainer'
import ProductCard from "./components/ProductCard"
import LoadingContainer from "./components/LoadingContainer"
import Footer from "./layout/Footer"
function App() {

  return (
    <>
      <TopNav/>

      <ModalContainer/>
      
      <LoadingContainer/>
      <FullscreenLoadingContainer />

      <Pages/>
      <Footer/>

      <ToastContainer/>
    </>

  )
}

export default App
