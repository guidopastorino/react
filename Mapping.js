import React, { useState } from 'react'


const Mapping = () => {

  const [array, setArray] = useState([])

  const [number, setNumber] = useState(0)


  const addElements = () => {
    setNumber(number + 1)
    setArray([
      ...array,
      number
    ])
  }


  return (
    <>
      <h2>Mapping Arrays</h2>
      <button style={{display: 'block', margin: '20px 0'}} onClick={addElements}>
        Add elements to array
      </button>
      <p>Array length: {array.length}</p>
      <p>Elements:</p>
      <ul>
        {
          array.map((item, i) => <li key={i}>{item}</li> )
        }
      </ul>
    </>
  )
}

export default Mapping