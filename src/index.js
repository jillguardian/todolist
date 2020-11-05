import React from 'react'
import ReactDOM from 'react-dom'
import {todoComponentFrom} from './Todo';
import faker from 'faker';

const todos = [];
for (let i = 0; i < 5; i++) {
    todos[i] = {
        id: i,
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph()
    };
}


const App = () => {
    return (
        <div className="ui text container">
            <div className="ui container">
                <div className="ui three column stackable grid">
                    {todos.map(todo => todoComponentFrom(todo))}
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)