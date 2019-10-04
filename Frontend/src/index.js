import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navigation from './Navigation';
import Header from './Header';
import About from './About';

// import App from './App';

const App = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <About />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
