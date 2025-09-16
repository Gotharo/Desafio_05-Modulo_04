import pizzas from '../data/pizzas';

function CardPizza({ name, price, ingredients, img, desc }) {
    return (
        <div className = "flex">
            <div className="flex flex-col m-4 h-170 rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full h-48 object-cover" src={img} alt="Pizza Napolitana" />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-black">{name}</h2>
                    <p className="mb-4">{desc}</p>
                    <p className="text-gray-700 text-base mb-2 font-semibold">🍕 Ingredientes:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        {ingredients.map((ing, index) => (
                            <li key={index}> {ing}</li>
                        ))}
                    </ul>
                    <p className="text-lg font-bold text-green-700">Precio: {price}</p>
                </div>
                <div className="px-6 pt-4 pb-6 flex justify-center">
                    <button className="bg-white text-black hover:bg-blue-600 font-bold py-2 px-4 rounded m-2 border-[2px]">
                        Ver Más 👀
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-2">
                        Añadir 🛒
                    </button>
                </div>
            </div>

        </div>

    )
}

export default CardPizza