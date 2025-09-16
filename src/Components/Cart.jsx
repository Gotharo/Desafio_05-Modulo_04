import { useState } from 'react';

// Simulación de array inicial del carrito
const pizzaCart = [
    { ...pizzas[0], quantity: 1 },
    { ...pizzas[1], quantity: 1 },
    { ...pizzas[2], quantity: 1 },
];

function Cart() {
    const [cart, setCart] = useState(pizzaCart);

    const handleQuantity = (index, delta) => {
        setCart(cart => cart.map((item, i) =>           
                    i === index
                        ? { ...item, quantity: item.quantity + delta }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-md mx-auto bg-white rounded shadow p-6 mt-8">
            <h2 className="font-bold text-lg mb-4">Detalles del pedido:</h2>
            <div>
                {cart.map((item, idx) => (
                    <div key={item.id} className="flex items-center mb-4">
                        <img src={item.img} alt={item.name} className="w-12 h-12 rounded mr-3" />
                        <span className="flex-1 font-medium">{item.name}</span>
                        <span className="w-24 text-right font-semibold">${item.price.toLocaleString()}</span>
                        <button
                            className="border-2 border-red-400 text-red-500 px-2 mx-2 rounded"
                            onClick={() => handleQuantity(idx, -1)}
                        >-</button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button
                            className="border-2 border-blue-400 text-blue-500 px-2 mx-2 rounded"
                            onClick={() => handleQuantity(idx, 1)}
                        >+</button>
                    </div>
                ))}
            </div>
            <div className="font-bold text-xl mt-6 mb-4">
                Total: ${total.toLocaleString()}
            </div>
            <button className="bg-black text-white px-4 py-2 rounded">Pagar</button>
        </div>
    );
}

export default Cart;