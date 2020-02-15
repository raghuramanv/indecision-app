class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggle () {
    this.setState((prevState) => {
      return{
        visibility: !prevState.visibility
      };
    });
  }
  render () {
     return(
       <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        { this.state.visibility && <p>Whusssh...Tada...Toggle Genie here!</p> }
       </div>
     );
  }
}
const root = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, root);
// let visibility = false;
//
// const appRoot = document.getElementById('app');
//
// const toggle = () => {
//     visibility = !visibility;
//     render();
// };
//
// const render = () => {
//     const jsx = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggle}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//         {visibility && <p>Hey! Here are the details you were looking for.</p>}
//         </div>
//     );
//
//     ReactDOM.render(jsx, appRoot);
// };
//
// render();
//
