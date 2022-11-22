
function Hello (props){
    console.log(props)
    return(<h2>Hello, how are you {props.name || "friend"}?</h2>)
}

// ES import / exports

export default Hello
// export will take the value provided by the reference variable (Hello)