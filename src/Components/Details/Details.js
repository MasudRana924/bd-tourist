import React from 'react';
import './Details.css'

const Details = (props) => {
    const { details } = props;
    let revenue = 0
    for (const detail of details) {
        revenue = revenue + detail.revenue
    }
    const names = [];
    for (let detail of details) {
        names.push(<h5 className="mt-3 name border rounded-3 p-3"> {detail.name}</h5>)
    }
    return (
        <div className="details">
            <h4 className="text">Total added : {details.length}</h4>
            <p className="text"> Total revenue : $ <span className="text-danger">{revenue} </span></p>

            {names}

        </div>
    );
};

export default Details;