import React from 'react'

 const OutputScreenRow = ({ans}) => {
    console.log({ans})
  return (
    <div>
   
        <input type="text" readOnly value={ans}/>
    </div>
  )
}
export default OutputScreenRow;