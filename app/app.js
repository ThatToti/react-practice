import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';

import NewsList from './NewsList.js';
import '../css/app.css';

class HelloWorld extends React.Component{
    render(){
        return(
            <div>Hello toti</div>
        );
    }
}

render(
    <NewsList />,
    $('#content')[0]
);