import React from 'react';
import qs from 'qs';


function About({ location }) {

    const qurey = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const detail = qurey.detail === 'true'

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터의 기초를 실습하는 예제 프로젝트 입니다.</p>
            {detail && <p>추가적인 정보입니다.</p>}
        </div>
    );
}

export default About;