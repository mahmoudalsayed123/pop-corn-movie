import React, { useState } from 'react'

const Box = ({children}) => {

  const [isOpen, setIsOpen] = useState(true);

  function toggleElement() {
    setIsOpen((e) => !e)
  }

  return (
    <div className="box">
        <button className="btn-toggle" onClick={toggleElement}>-</button>
            {isOpen ? children : ""}
    </div>
  )
}

export default Box
