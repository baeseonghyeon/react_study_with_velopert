import React from 'react';

import './App.scss';
import Button from './Components/Button';

function App() {
    return (
        <div className="App">
            {/* blue */}
            <div className="buttons">
                <Button size="large" onClick={() => console.log('클릭됐다!')}>
                    BUTTON
                </Button>
                <Button>BUTTON</Button>
                <Button size="small">BUTTON</Button>
            </div>

            {/* gray */}
            <div className="buttons">
                <Button size="large" color="gray">
                    BUTTON
                </Button>
                <Button color="gray">BUTTON</Button>
                <Button size="small" color="gray">
                    BUTTON
                </Button>
            </div>

            {/* pink */}
            <div className="buttons">
                <Button size="large" color="pink">
                    BUTTON
                </Button>
                <Button color="pink">BUTTON</Button>
                <Button size="small" color="pink">
                    BUTTON
                </Button>
            </div>

            {/* outline */}
            <div className="buttons">
                <Button size="large" outline>
                    BUTTON
                </Button>
                <Button color="gray" outline>
                    BUTTON
                </Button>
                <Button size="small" color="pink" outline>
                    BUTTON
                </Button>
            </div>

            {/* fullWidth */}
            <div className="buttons">
                <Button size="large" fullWidth>
                    BUTTON
                </Button>
                <Button size="large" fullWidth color="gray">
                    BUTTON
                </Button>
                <Button size="large" fullWidth color="pink">
                    BUTTON
                </Button>
                <Button size="large" fullWidth outline>
                    BUTTON
                </Button>
                <Button size="large" fullWidth outline color="gray">
                    BUTTON
                </Button>
                <Button size="large" fullWidth outline color="pink">
                    BUTTON
                </Button>
            </div>
        </div>
    );
}

export default App;
