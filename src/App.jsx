import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter  , Routes , Route } from "react-router-dom"
import CategoryPage from "./pages/CategoryPage"
import SpecificMealPage from "./pages/SpecificMealPage"
import { Provider } from 'react-redux';
import store from "./stores/store";
import SavedPage from "./pages/SavedPage"

function App() {

  return (
    <Provider store={store}>
    
    <BrowserRouter>
        <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/meal/:id" element={<SpecificMealPage />} />
          <Route path="/saved-meals" element={<SavedPage />} />


    </Routes>
   
        <Footer />

    </BrowserRouter>
    </Provider>


  )
}

export default App
