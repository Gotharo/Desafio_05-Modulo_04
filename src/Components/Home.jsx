import CardPizza from "./CardPizza"
import Header from "./Header"
// import data from "../data/data"
import pizzas from "../data/pizzas"


function Home() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-3 gap-6 justify-items-center">

                {pizzas.map((pizza) => {
                    return (
                        
                        <CardPizza
                            key={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img}
                            desc={pizza.desc}
                        />
                        
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
