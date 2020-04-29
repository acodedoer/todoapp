class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: ['Buy milk', 'Take out trash', 'Renew Netflix subscription']
        }
        this.createItem = this.createItem.bind(this)
    }

    createItem(text){
        let temp = this.state.items
        temp.push(text)
        this.setState({items: temp})   
    }

    render(){
        return (
            <div className="Todo">
                <Header create = {this.createItem}/>
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
    let textInput = React.createRef();

    return(
        <div className = "Header">
            <h1>Todo App</h1>
            <div>
                <input type ="text" ref={textInput}></input>
                <button onClick={function(){if(textInput.current.value!="") props.create(textInput.current.value); textInput.current.value=""}}>+Item</button>
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