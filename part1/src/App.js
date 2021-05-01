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
const Content = (props) => {
  return (
    <div>
      <p>
        Content{props.p1},{props.e1}
      </p>
<p>
        Content{props.p2},{props.e2}
      </p>
    <p>
        Content{props.p3},{props.e3}
      </p>
    
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
        Total {props.e1}+{props.e2}+{props.e3}
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
      <Content p1={p1} e1{e1} p2={p2} e2 ={e2} p3={p3} e3={e3} />
          </div>
  )
}

export default App