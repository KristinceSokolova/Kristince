import Student from "./components/Student"

const App = () => {

const name = "Mia Koluci"
const age = 34
const toShow = true
const fruits = [`apple`, `android`, `banana`]

const student = {
  name,
  age,
  fruits,
}

  return (
    <div>
    <div>Hello World</div>
    <Student name={name} age={age} shouldTheComponentsShow={toShow}/>
    </div>
  );


  
}

// function App() {
//  return (
//    <div>Hello World</div>
//  );
// }

export default App;
