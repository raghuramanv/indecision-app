//Indecision app

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  //Lifecycle Methods

  componentDidMount() {
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  //For one line arrow function returns for objects enclose them in paranthesis like ({Object})

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    alert(option);
  }
  handleAddOption(option) {
    if(!option) {
      return 'Enter a valid option';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ 
      options: prevState.options.concat(option) 
    }));

  }

  render () {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
      <Header subtitle={subtitle}/>
      <Action
      hasOptions={this.state.options.length > 0}
      handlePick={this.handlePick}
      />
      <Options
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
      />
      <AddOption
      handleAddOption={this.handleAddOption}
      />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

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

const Action = (props) => {
  return (
    <div>
    <button 
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
    What should I do?
    </button>
    </div>
  );
};

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

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {
      props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />

      ))
    }
    </div>
  );
};

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

const Option = (props) => {
  return (
    <div>
    <p>{props.optionText} 
      <button onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
        >
        Remove
      </button>
    </p>
    </div>
  );
};

// class Option extends React.Component {
//   render () {
//     return (
//       <div>
//       <p>{this.props.optionText}</p>
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    if(!error){
      e.target.elements.option.value = '';
    }

    this.setState(() => ({ error }));
  }

  render() {
    return(
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
      <input name="option" type="text"/>
      <button>Add Option</button>
      </form>
      </div>
    );
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);
