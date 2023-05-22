const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement('h1', {}, 'Hello from React!');

// const reactElement = React.createElement(
//     'header',
//     {className: 'site-header'},
//     React.createElement('h1', {}, 'Hello from React!'),
//     React.createElement('h1', {}, 'Slogan React!')
// );

const reactElement = (
    <header className="site-header">
        <h1>Helooooooooo</h1>
        <h2>React slogannnnnnnn!!!!!!!!!</h2>
    </header>
);



root.render(reactElement);