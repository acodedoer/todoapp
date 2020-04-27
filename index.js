class Todo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="Todo">
                <Header/>
                <Item/>
            </div>  
        )
    }
} 

function Header(props){
    return(
        <div className="Header">
            <h1>Todo App</h1>
            <div>
                <input type ="text"></input>
                <button>+Item</button>
            </div>
        </div>
    )
}

function Item(props){
    return(
	  <div className="Item">
             <p>This is what I need to do </p>
             <button>Delete</button>
         </div>     
    )
}


ReactDOM.render(<Todo/>,document.getElementById("root"))