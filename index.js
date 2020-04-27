class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: ['Buy milk', 'Take out trash', 'Renew Netflix subscription']
        }        
    }

    render(){
        return (
            <div className="Todo">
                <Header/>
                {
                    this.state.items.map(function(data,index){
                        return <Item text={data} key={index}/>
                    })
                }
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
             <p>{props.text}</p>
             <button>Delete</button>
         </div>     
    )
}


ReactDOM.render(<Todo/>,document.getElementById("root"))