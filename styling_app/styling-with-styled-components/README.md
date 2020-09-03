## styled-components

https://react.vlpt.us/styling/03-styled-components.html

이번에 배워볼 기술은 CSS in JS 라는 기술입니다. 이 문구가 뜻하는 그대로, 이 기술은 JS 안에 CSS 를 작성하는 것을 의미합니다.

### polished의 스타일 관련 유틸 함수 사용하기

Sass 를 사용 할 때에는 lighten() 또는 darken() 과 같은 유틸 함수를 사용하여 색상에 변화를 줄 수 있었는데요, CSS in JS 에서도 비슷한 유틸 함수를 사용하고 싶다면 polished 라는 라이브러리를 사용하면 됩니다.

```
$ yarn add polished
```

CSS in JS 의 경우 기존 css 파일을 분리하여 작성하는 방식과 개발 흐름이 조금 다르기 때문에 처음에 조금 적응 기간이 필요 할 수도 있습니다. 그 적응 기간을 거치고 나면 정말 편하게 사용 할 수 있습니다.

(연습이 많이 필요하겠다고 생각합니다.)