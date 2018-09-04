
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './include/includes';
import 'round-slider';

import Page from './components/Page/Page';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
