import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Header = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}
const Part= (props) => {
    return (
        <>
            <p>
                {props.part}  {props.exercises}
            </p>
        </>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part part={props.part[0].name} exercises={props.part[0].exercises} />
            <Part part={props.part[1].name} exercises={props.part[1].exercises} />
            <Part part={props.part[2].name} exercises={props.part[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.part[0].exercises+props.part[1].exercises+props.part[2].exercises}</p>
        </>
    )
}
const App = () => {
    // const course = 'Half Stack application development'
    const course = {
        name: 'Half Stack application development',
        part:[
            {
            name: 'Fundamentals of React',
            exercises: 10
            },
            {
            name: 'Using props to pass data',
            exercises: 7
            },
            {
            name: 'State of a component',
            exercises: 14
            }
       ]
    }
    return (
        <div>
           <Header title={course.name} />
           <Content part={course.part} />
           <Total part={course.part} />
        </div>
    )
}
export default App
ReactDOM.render(<App />, document.getElementById('root'));

