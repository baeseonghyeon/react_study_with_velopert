# Props

- Props값은 부모가 자식에게 주는 값
  - 읽기 전용

```react
<Child value="value">
```



- Props를 받아와서 랜더링 한다.

App.js

```react
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    return <MyName />;
   // return <MyName name="배성현"/>;
  }
}

export default App;

```

MyName.js

```react
import React, { Component } from 'react';

class MyName extends Component {
  // defalutProps 최신 문법
  static defaultProps = {
    name: 'Default Name'
  };

  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
      </div>
    );
  }
}

// MyName.defaultProps = {
//   name: 'Seonghyeon'
// };
export default MyName;
```

### - 함수형 컴포넌트

- 기능 없이 단순히 보여주는 경우(표출 용)
- 마운트 속도가 빠르고, 메모리 자원이 효율적

```react
import React from 'react';
// 컴포넌트는 제거하지만 리액트는 유지(내부적으로 jsx를 사용하기 때문에)

// ({name}) 비구조화 할당 문법
const MyName = ({ name }) => {
  return <div>안녕하세요! 제 이름은 {name} 입니다.</div>;
};

MyName.defaultProps = {
  name: 'DefaultName'
};

export default MyName;

```

