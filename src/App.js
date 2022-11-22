import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'

// console.log(Hello)
// Functional Component -> return JSX -> component is the building block of our UI
function HelloWorld(props) {
    // console.log(props)
    // props is an object that is provided to each component rendered by react
    // props is an interface for getting data to a component from a parent component
    // data flow from parent to child 
    // { key value pairs defined when we render the component }
    // any time you want to create a new component
    // you will create a function 
    // functions name must start with a Capital letter 
    return (
    <div className="hello-card">
        <h1>Hello World! I am { props.firstName || " a friend "} </h1>
        <button>Click me!</button>
        </div>
    )
}

function App() {

    // JSX - HTML like syntax (JS + XML)
    return (
        // react is interpreting the return JSX (as "string") - in order for it to be parsed correctly it need to know where the JSX begins and ends
        <div class="App parent yellow">
            {/* if we want to use class (browser) - we use className > class {} */}
            <HelloWorld firstName ="Joshua" lastName="Smith"/>
            <HelloWorld firstName="Bob"/>
            <HelloWorld />
            <HelloWorld />
            <HelloWorld />
            <HelloWorld />
            <HelloWorld />
            <Hello name = "Zakariah" isAwesome={true} favoriteColors={["blue","lightBlue"]}/>
            <HelloWorld>This is a broken text node</HelloWorld>
            <h1>You can put anything you want</h1>
            <div>This is not going to break!</div>
        </div>
    );
    // all JSX is contained inside of our return (value) -> grabbed by REACT and interpretted > translated from JSX in a React 
    // object 
}

export default App;
