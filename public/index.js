class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            'total amount': 1000,
            'amount': 100,
            'email': ''
        }
    }

    async componentDidamount(){
        const result= await axios.get('/get_total_amount');
        this.setState({total_amount:result.data["0"],total_amount })
    }

    onSubmit= async(event)=>{
        event.PreventDefault();
        const response= await axios.post('/post_info',{
            amount: this.state.amount,
            email: this.state.email
        })
    }
    render(){
        return(
            <div>
                <h1>Lottery Appication </h1>
                <div>
                    <p>Total lottery amount is {this.state.total_amount} </p>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input placeHolder= 'amount' value= {this.state.total_amount}
                    onChange= {event=> this.setState({amount: event.target.value})}/>
                    <input placeHolder= 'email'value= {this.state.email}
                    onChange= {event=> this.setState({email: event.target.value})}/>
                    <button type='submit'> Participate </button>
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