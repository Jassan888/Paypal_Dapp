class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            'total amount': 1000,
            'amount': 100,
            'email': ''
        }
    }
    render(){
        return(
            <div>
                <h1>Lottery Appication </h1>
                <div>
                    <p>Total lottery amount is {this.state.total_amount} </p>
                </div>
                <form>
                    <input placeHolder= 'amount' value= {this.state.total_amount}
                    onCghange= {event=> this.setState({amount: event.traget.value})}/>
                    <input placeHolder= 'email'value= {this.state.email}/>
                    <button>Participate </button>
                </form>
            </div>
        )
    }
};

ReactDOM.render(
    <div>
        <App />
    </div>
    , document.getElementsById('reactBinding')
);