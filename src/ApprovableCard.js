import React from 'react'

const ApprovableCard = (props) => {
    return (
        <div className="ui card">
            {props.children}
            <div className="ui bottom green attached button">
                <i className="icon check"/> Mark as done
            </div>
        </div>
    );
}

export default ApprovableCard;