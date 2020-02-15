class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount () {
    try{
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);

      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {

    }
  }    

  componentDidUpdate (prevProps, prevState) {
    if(prevState.count !== this.state.count){
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }

  handleIncrement () {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };

    });
  }
  handleDecrement () {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset () {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
      <h1>Counter: {this.state.count} </h1>
      <button onClick={this.handleIncrement}>+1</button>
      <button onClick={this.handleDecrement}>-1</button>
      <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}


const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);

// //Counter for video 16 Events & Attributes , 17 Manual Data Binding
// const appRoot = document.getElementById('app');
//
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
//
//
// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <h1> Counter: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//
//     );
//
//     ReactDOM.render(templateThree, appRoot);
//
// };
//
// renderCounterApp();
