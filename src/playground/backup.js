console.log("app.js is running");

//JSX - javascript XML

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["One", "Two"]
};
const template = (
    <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
    </div>
);
let user = {
    name: "Raghuraman Varadharajan",
    age: 28,
    location: "New York"
};
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
const templateTwo = (
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p> Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');


// class Header extends React.Component {
//   render () {
//     return (
//       <div>
//       <h1>{this.props.title}</h1>
//       <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// class Action extends React.Component {
//   render(){
//     return (
//       <div>
//       <button onClick={this.props.handlePick}
//       disabled={!this.props.hasOptions}
//       >What should I do?</button>
//       </div>
//     );
//   }
// }

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//       <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//       {
//         this.props.options.map((option) => <Option key={option} optionText={option}/>)
//       }
//       </div>
//     );
//   }
// }


// class Option extends React.Component {
//   render () {
//     return (
//       <div>
//       <p>{this.props.optionText}</p>
//       </div>
//     );
//   }
// }

