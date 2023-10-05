import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Meal from "./pages/meal/Meal"
import ByName from "./pages/by-name/By-name"
import ByLetter from "./pages/by-letter/By-letter"
import ByIngredient from "./pages/by-ingredient/By-ingredient"
import MealByIngredient from "./pages/meal-by-ingredient/Meal-by-ingredient"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:mealId" element={<Meal />} />
        <Route path="/by-name" element={<ByName />} />
        <Route path="/by-ingredient" element={<ByIngredient />} />
        <Route path="/by-ingredient/:ingredient" element={<MealByIngredient />} />
        <Route path="/by-letter" element={<ByLetter />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
