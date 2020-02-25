import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>OK</h1>
                
                <Post title="1"/>
                
                <Post title="2"/>
                
                <Post title="3"/>
            </div>
        );
    }
}