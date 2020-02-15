
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const remove = () => {
    app.options = [];
    render();
};

const onDecision = () => {
    const randomIndex = Math.floor(Math.random() * app.options.length);
    console.log(app.options[randomIndex]);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0}  onClick={onDecision}>What should I do?</button>
        <button onClick={remove}>Remove All</button>
        <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)   
            }         
        </ol>   
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
        </form> 
        </div>    
    );

    ReactDOM.render(template, appRoot);    

};

render();