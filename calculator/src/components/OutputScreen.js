import React from 'react';
import OutputScreenRow from './OutputScreenRow'

const OutputScreen =({ans}) => {
    return (
        <div className="screen">
            <OutputScreenRow  value={ans}/>
        </div>)
}
export default OutputScreen ;