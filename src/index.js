import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Detect if browser is any version of IE
function browserIsInternetExplorer() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE '); // IE 10 or older
  var trident = ua.indexOf('Trident/'); //IE 11
  return (msie > 0 || trident > 0);
}

if (browserIsInternetExplorer()) {
  // Show error message if browser is IE
  var node = document.getElementById('root');
  node.innerHTML = '<p class="error">Internet Explorer is not supported by this site. Try with <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>.</p>';
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
}
