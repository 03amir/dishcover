import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter  , Routes , Route } from "react-router-dom"
import CategoryPage from "./pages/CategoryPage"
import SpecificMealPage from "./pages/SpecificMealPage"

function App() {

  return (
    <>
       <Header/>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/meal/:id" element={<SpecificMealPage />} />

    </Routes>
   
 
    </BrowserRouter>
    <Footer/>
    </>


  )
}

export default App
