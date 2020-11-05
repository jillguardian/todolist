import React, {Component} from 'react';

export default class Menu extends Component {

    render() {
        return (
            <div className="ui container">
                <div className="ui large secondary inverted pointing menu">
                    <a className="toc item">
                        <i className="sidebar icon"/>
                    </a>
                    <a className="active item">Home</a>
                    <a className="item">Work</a>
                    <a className="item">Company</a>
                    <a className="item">Careers</a>
                </div>
            </div>
        )
    }

}