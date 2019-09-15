import React from 'react';
import PropTypes from 'prop-types';


class DataCard extends React.Component  {
    render() {
        const dato= this.props.dato;
        return (
            <div>
                <h2 className="carlist__item-name">{dato.name}</h2>
                <p className="carlist__item-email">{dato.email}</p>
                <p className="carlist__item-password-title">Passwords:</p>
                <ul className="password-list">
                    {dato.passwords.map((password, index) => {
                        return (
                            <li key={index + "p"}>{password}</li>
                        )
                    })}
                </ul>
                <p className="carlist__item-data-bank__title">Datos Bancarios :</p>
                <ul className="carlist__item-data-bank__list">
                    <li className="bank__list-item">Iban: {dato.bank.iban} </li>
                    <li className="bank__list-item">Pin:{dato.bank.pin}  </li>
                </ul>
            </div>
        );
    }
}

DataCard.propTypes = {
    dato: PropTypes.object,
};

export default DataCard;