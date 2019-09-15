import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__title">Legion of Hell</h1>
                <p className="header__title-date"> El ataque fue : {this.props.date}</p>
            </header>
        )
    }
}

Header.propTypes = {
    date:PropTypes.string,
   
};
export default Header;