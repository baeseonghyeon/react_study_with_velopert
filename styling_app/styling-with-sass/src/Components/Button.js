import React, { Children } from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest }) {
    return (
        // {} 내부의 객체는 true 일때 작동합니다.
        <button
            className={classNames('Button', size, color, {
                outline,
                fullWidth,
            })}
            {...rest}
            //  spread, rest : 이 문법은 주로 배열과 객체, 함수의 파라미터, 인자를 다룰 때 사용하는데, 컴포넌트에서도 사용 할 수 있습니다.
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};
export default Button;
