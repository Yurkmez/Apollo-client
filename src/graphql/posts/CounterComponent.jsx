import React, { useRef } from 'react';

function CounterComponent() {
    const countRef = useRef(0);

    const increment = () => {
        countRef.current = countRef.current + 1;
        console.log('Count:', countRef.current);
    };

    return (
        <div>
            <p>Count: {countRef.current}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
export default CounterComponent;
