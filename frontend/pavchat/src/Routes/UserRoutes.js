
import LoginViewModel from '../Component/UserLogin/LoginViewModel'
import { Route, Routes } from 'react-router-dom'
import SignupViewModel from '../Component/UserSignup/SignupViewModel'
import MessagesViewModel from '../Component/Message/MessagesViewModel';

export default function UserRoutes() {

  return (

    <div>
      <Routes>
        <Route path='/' element={<LoginViewModel></LoginViewModel>}></Route>
        <Route path='/auth/signup' element={<SignupViewModel></SignupViewModel>}></Route>
        <Route path='/dashboard' element={<MessagesViewModel></MessagesViewModel>}></Route>
      </Routes>
    </div>
  )
}