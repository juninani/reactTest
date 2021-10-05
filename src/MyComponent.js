import React from 'react';

const MyComponent = props => {
    const {name ,children} = props;

    return (
        <div>
            컴포넌트 새로운{name}입니다.
            children 값은 {children} 입니다.
        </div>
    );
};


export default MyComponent;