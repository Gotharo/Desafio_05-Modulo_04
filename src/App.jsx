import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Pizza from "./Components/Pizza"
// import RegisterPage from "./Components/auth/RegisterPage"
// import LoginPage from "./Components/auth/LoginPage"
// import Cart from "./Components/Cart"

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <Home />
            {/* <RegisterPage /> */}
            {/* <LoginPage /> */}
            {/* <Cart /> */}
            <Pizza />
            <Footer />
        </div>
    )
}

export default App

