import React from 'react';
import AddOption from './AppOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.state = {
  //     options: []
  //   };
  // }

  state = {
    options: [],
    selectedOption: undefined
  };

  // handlers

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    this.setState(() => ({ 
      selectedOption: option 
    }));
  };
    
  handleAddOption = (option) => {
    if(!option) {
      return 'Enter a valid option';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ 
      options: prevState.options.concat(option) 
    }));
  };  

  //Modal closed when selectedOption is unset or set to undefined

  handleModalClose = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

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


  render () {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />         
          </div>     
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleModalClose={this.handleModalClose}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
