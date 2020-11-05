import ApprovableCard from './ApprovableCard'

const Todo = (props) => {

    return (
        <div className="ui content">
            <div className="ui header">{props.title}</div>
            <div className="ui description">{props.content}</div>
        </div>
    );

}

export function todoComponentFrom(todo) {
    return (
        <div key={todo.id} className="column">
            <ApprovableCard label="Mark as done">
                <Todo title={todo.title} content={todo.content} />
            </ApprovableCard>
        </div>
    )
}

