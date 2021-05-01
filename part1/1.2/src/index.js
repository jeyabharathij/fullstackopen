import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react'


const Head = (props) => {
  return (
    <div>
      <p>
        Head {props.course}
      </p>
    </div>
  )
}
const part =(props) => {
return (
    <div>
      <p>
        {props.p} {props.e}
      </p>
    </div>
  )
}
 
const Content = (props) => {
  return (
    <div>
     <part p={props.p1} e={props.e1}/>
<part p={props.p2} e={props.e2}/>
<part p={props.p3} e={props.e3}/>
        
    
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
        Total {props.e1+props.e2+props.e3}
      </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const p1 = 'Fundamentals of React'
  const e1 = 10
  const p2 = 'Using props to pass data'
  const e2 = 7
  const p3 = 'State of a component'
  const e3 = 14

   return (
    <div>
      <Head course={course} />
      <Content p1={p1} e1={e1} p2={p2} e2={e2} p3={p3} e3={e3} />
<Total e1={e1} e2={e2} e3={e3} />
          </div>
  )
}

export default App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
