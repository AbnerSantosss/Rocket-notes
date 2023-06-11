import { Routes, Route } from 'react-router-dom'
//O Routes vamos abraçar todas as rotas, e para chamar cada rota vamos usar o Route

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}
