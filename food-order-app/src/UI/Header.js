import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <section >
            <h1 className="header">Welcome to DineHub!</h1>
            <HeaderCartButton onClick={props.onShowCart} />
            </section>
        </React.Fragment>
    );
};


export default Header;