import React from 'react'

const ApprovableCard = (props) => {
    return (
        <div className="ui card">
            {props.children}
            <div className="ui bottom green attached button">
                {props.label}
            </div>
        </div>
    );
}

export default ApprovableCard;