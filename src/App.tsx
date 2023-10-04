import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Meal from "./pages/meal/Meal"
import ByName from "./pages/by-name/By-name"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:mealId" element={<Meal />} />
        <Route path="/by-name" element={<ByName />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
