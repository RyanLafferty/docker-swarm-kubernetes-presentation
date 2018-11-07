import React from 'react';
import ReactDOM from 'react-dom';
import DockerPresentation from './screens/DockerPresentation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DockerPresentation />, document.getElementById('root'));
registerServiceWorker();
