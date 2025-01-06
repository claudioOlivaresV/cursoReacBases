import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function CounterApp({value}) {
    const [couter, setCounter ] = useState(value);
  const handleAdd = (event) => {
    console.log(event)
    setCounter(couter + 1)

  }
  const handleRes = (event) => {
    console.log(event)
    setCounter(couter - 1)

  }
  const handleReset = (event) => {
    console.log(event)
    setCounter(value)

  }


  return (
    <>
    <h1>CounterApp</h1>
    <h2>{couter}</h2>
    <button onClick={handleRes}>
        -1
    </button>
    <button onClick={handleReset}>
        reset
    </button>
    <button onClick={handleAdd}>
        +1
    </button>

    </>
  )
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}