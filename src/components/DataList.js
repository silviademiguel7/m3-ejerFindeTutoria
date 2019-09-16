import React from 'react';
import PropTypes from 'prop-types';
import DataCard from './DataCard';

class DataList extends React.Component {
    render() {
        const datos = this.props.datos
        return (
            <ul className="main__cardlist">
               {datos.map((dato, index) => {
                    return (
                        <li key={index} className="cardlist__item">
                            <DataCard dato={dato}></DataCard>
                        </li>
                    )
                }
                )
                
                }
            </ul>
        );
    }
}

DataList.propTypes = {
    datos: PropTypes.arrayOf(PropTypes.object),
    inputText: PropTypes.string,
};

export default DataList;