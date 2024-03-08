import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actors'
import Cricketer from './Cricketer'
import BookStore from './BookStore'
import Book from './Book'

function App() {
  const [count, setCount] = useState(0)
  const actors = [ 'Shakib khan', 'Manna', 'jasim','soriful islam'];

const books = [
  {id : 1 , name : 'physics', price: 130},
  {id : 2 , name : 'biology', price: 100},
  {id : 3 , name : 'chemistry', price: 140},
  {id : 1 , name : 'Math', price: 130},
]


  const cricketers= [
    { name: 'tamim iqbal', age: 30},
    {name: 'Shakib al hasan', age: 31},
    {name: 'Mamhadullah riad vai', age: 30},
    {name: 'Taskin ahamed', age: 30},
  ]

  return (
    <>

      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>
      {
        cricketers.map(cricketer => <Cricketer cricketer={cricketer}></Cricketer>)
      }
    <Actor name={"abul kalam"}></Actor>
    {
      actors.map(actor=><Actor name={actor}></Actor>)
    }

      {/* <Todo task ="learn react" isDone= {true} ></Todo>
      <Todo  task="explore core concept" 
      isDone= {false}></Todo>
      <Todo  task="Tey jsx"
       isDone= {true}></Todo> */}


      {/* <Device name="Laptop" price='15'></Device>
      <Device name="mobile" price='17'></Device>
      <Device name='watch' price= '3'></Device>
      
      <Person></Person>
      <Student  gread='7' score= '234'></Student>
      <Student gread="10" score='99'></Student>
      <Student></Student>
      <Student></Student>
      
      <Developer></Developer> */}
        
      
      
    </>
  )
}
function Device (props){
  // console.log(props);
  return <h2>this device : {props.name} price : {props.price}</h2>
}

function Person(){

  const age = 35;
  const money =20;
  const person ={name : 'shakib', age : 45}
  return <h3>I am a Person with age : {age+money} name is : {person.name}</h3>
  
}


const {gread, score }={gread: '7',score:'234' } 
function Student ({gread =1, score=0}){
  console.log(gread,score)
  return (
   <div className='student'>
    <h3>this is a Student</h3>
    <h5>class :{gread}</h5>
    <h6>score:{score} </h6>
  </div>
  )
}

function Developer(){
  const DeveloperStyle= {
    margin: '20px',
    padding : '20px',
    border : '2px solid purple',
    borderRadius : '10px'
  }
  return (
    <div style={DeveloperStyle}>
      <h4>Devo devo</h4>
      <p>Codding :</p>
    </div>
  )
}

export default App
