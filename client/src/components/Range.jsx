import React from 'react'
import { useState } from 'react'

const Range = ({ min, max }) => {
  const [value, setValue] = useState(25)

  return (
    <div className="w-1/2 md:w-1/4 h-60 ml-3 flex flex-col justify-center">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="range range-secondary"
        step="25"
      />
      <div className="flex justify-between">
        <p>{min}</p> <p>{value}</p>
      </div>

      <div className="flex justify-end">
        <button className="btn mt-4">Search</button>
      </div>
    </div>
  )
}

export default Range
