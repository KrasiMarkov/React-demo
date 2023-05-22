var rootElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement('h1', {}, 'Hello from React!');

// const reactElement = React.createElement(
//     'header',
//     {className: 'site-header'},
//     React.createElement('h1', {}, 'Hello from React!'),
//     React.createElement('h1', {}, 'Slogan React!')
// );

var reactElement = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Helooooooooo"
    ),
    React.createElement(
        "h2",
        null,
        "React slogannnnnnnn!!!!!!!!!"
    )
);

root.render(reactElement);