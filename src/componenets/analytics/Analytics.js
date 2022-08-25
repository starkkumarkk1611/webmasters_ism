import React, { useState, useEffect } from 'react';

export default function Analytics() {

    const [count, setCount] = useState("");

    function updateVisitCount() {
        console.log();
        const count = document.getElementById('count');
        fetch('https://www.npmjs.com/package/pageviews/?amount=1')
            .then(res => res.json())
            .then(res => {
                count.innerHTML = res.value;
            })
    }

    useEffect(() => {


        return () => {
            updateVisitCount();
        }
    }, [])


    return (
        <>
            <h1 id='count'>count </h1>
        </>
    )

}