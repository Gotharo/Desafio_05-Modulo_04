import NavBar from "./Views/NavBar"
import Footer from "./Views/Footer"
import Home from "./Components/Home"
import Pizza from "./Components/Pizza"
// import Cart from "./Components/Cart"
import RegisterPage from "./Components/auth/RegisterPage"
import LoginPage from "./Components/auth/LoginPage"

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <Home />
            <RegisterPage />
            <LoginPage />
            {/* <Cart /> */}
            {/* <Pizza /> */}
            <Footer />
        </div>
    )
}

export default App

