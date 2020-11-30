class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            'total amount': 1000
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
                    <input placeHolder= 'amount'/>
                    <input placeHolder= 'email'/>
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