# Props(함수형)

```react
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// default Props
MyComponent.defaultProps = {
	name: 'DefaultName',
	age: 'DefaultAge'
}

// Props Type
MyComponent.propTypes = {
  // props의 타입 지정, 타입이 틀릴 때 콘솔에 경고 문구 표시함
	name: PropTypes.string,
  // props의 타입 지정,+ 필수 요구 설정 내용이 비거나 타입이 틀릴 때 콘솔에 경고 문구 표시함
	age: PropTypes.number.isRequired 
}

function MyComponent(props) {
	return (
		<div>
			<p>안녕하세요, 제 이름은 {props.name} 입니다.</p>
			<p>저는 {props.age}살 입니다.</p>
		</div>
	);
}

export default MyComponent;
```

### PropTypes 종류

- array : 배열
- bool : 참, 거짓
- func : 함수
- number : 숫자
- object : 객체
- string : 문자열
- symbol : ES6 문법의 심벌 개체
- node : 렌더링할 수 있는 모든 것 (숫자, 문자열, element 또는 이들로 구성된 배열)
- element : 리액트 요소
- instanceOf(MyClass) : 특정 클래스의 인스턴스
- oneOf(['Male', 'Femail']) : 주어진 배열 요소 중 값 하나
- oneOfType([React.PropTypes.string, React.PropTypes.number]) : 주어진 배열 안의 종류 중 하나
- arrayOf(React.PropTypes.number) : 주어진 종류로 구성된 배열
- objectOf(React.PropTypes.number) : 주어진 종류의 값을 가진 객체
- shape({name: React.PropTypes.string, age: React.PropTypes.number}) : 주어진 스키마를 가진 객체
- any : 아무 종류