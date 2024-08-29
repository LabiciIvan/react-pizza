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
             <h1 >Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {
    return (
        <main className='menu'>
            <h2>Our menu</h2>
            <ul className='pizzas'>
                <Pizza data={pizzaData}/>
            </ul>
        </main>
    )
}

function Footer() {

    const hour = new Date().getHours();

    const openHour = 12;
    const closeHour = 22;

    const isOpen = hour >= openHour && hour <= closeHour;

    return <footer className='footer'>{new Date().toLocaleTimeString()} We're currently {isOpen ? 'open' : 'close'}</footer>
}

function Pizza({data}) {
    return data.map(pizza => {
        return (
            <li className='pizza' key={pizza.name}>
                <div className={pizza.soldOut === true ? 'sold-out' : ''}>
                    <img src={pizza.photoName} alt={pizza.name} />
                </div>
                <div>
                    <h3>{pizza.name}</h3>
                    <p>{pizza.ingredients}</p>
                    <span>{pizza.price + 3}</span>
                </div>
            </li>
        )
    })
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);