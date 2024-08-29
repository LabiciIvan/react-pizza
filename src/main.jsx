import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.scss';
import { pizzaData } from '../public/data';

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className='header'>
             <h1 >React Pizza Co.</h1>
        </header>
    )
}

function Menu() {

    let numPizza = pizzaData.length;

    return (
        <main className='menu'>
            <h2>Our menu</h2>

            {numPizza > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine.
                        6 creative dishes to choose from.
                        All from our stone oven, all organic, all delicious.
                    </p>
                    <ul className='pizzas'>
                        {pizzaData.map((pizza) => (
                            <Pizza key={pizza.name} pizza={pizza}/>
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later</p>
            )}

        </main>
    )
}

function Footer() {

    const hour = new Date().getHours();

    const openHour = 7;
    const closeHour = 22;

    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className='footer'>
            {isOpen ? ( <Order closeHour={closeHour}/>) : (<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>)}
        </footer>
    )
}

function Order({closeHour}) {

    return (
        <div className='order'>
        <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        <button className='btn'>Order</button>
    </div>
    )
}

function Pizza({pizza}) {
    return (
        <li className={`pizza ${pizza.soldOut === true ? 'sold-out' : ''}`} key={pizza.name}>
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut === true ? 'SOLD OUT' : pizza.price}</span>
            </div>
        </li>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);