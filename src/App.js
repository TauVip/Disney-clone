import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
