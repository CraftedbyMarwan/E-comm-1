import { useSelector } from 'react-redux'
import Register from './userinfo/Register'
import Login from './userinfo/Login'

export default function Modal() {
    const {show_modal} = useSelector(store => store.appSlice)
    const ActiveModal = () => {
      switch (show_modal) {
        case 'register':
          return <Register/>
        
        case 'login':
          return <Login/>

        default:
          return null
      }
    }

    return (
      <ActiveModal/>
    )
  
}
