import React from 'react';
// import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo-box">
                <img src="./img/logo2.png" alt="Logo" className="header__logo" />
            </div>
            
            <div className="header__text-box">
                <h1 className="heading-primary" >
                    <span className="heading-primary--main" style={{paddingLeft: '35px'}}>Vesper</span>
                    <span className="heading-primary--sub" style={{paddingLeft: '20px'}}>speak out loud</span>
                </h1>
                <a href="#" className="btn btn--white btn--animated">Try it!</a>
            </div>
            
        </div>
    );
}

export default Header;

