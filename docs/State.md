# State

- 내부에서 변경할수 있다.
- 부모의 값이 아닌 자기 자신의 값이며, 변경할 수 있다.
- 변화를 일으킬때는 setState()를 사용한다.

App.js

```react
import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return <Counter />;
  }
}

export default App;
```

Counter.js

```react
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  };

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;

```

Counter.js (화살표가 아닌 일반 함수형 표현)

```react
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  };

  constructor(props){
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  
  handleIncrease() {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrease() {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값 : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;

```

