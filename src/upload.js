import React, {useRef, useState} from 'react';
import {handleChange, handleClick} from './services/services';
const Upload = () => {

  const inputRef = useRef();
  const imageRef = useRef();
  const [imageArr, setImageArr] = useState([]);


  console.log(imageArr);

  return (
    <div className='container'>
      <div className="card">
        <h1>Upload Image 🙂</h1>
        <div className='buttons'>
          <input
            onChange={(e) => handleChange(e, imageArr, setImageArr)}
            ref={inputRef}
            type='file'
            accept='image/jpeg,image/png,image/gif'
            multiple
            hidden
          />
          <button
            className='buttons__button'
            onClick={() => handleClick(inputRef)}>
              Open
          </button>
          <button
            className='buttons__button'
            onClick={() => setImageArr([])}>
            Clear
          </button>
        </div>
        <div className="collection">
          {imageArr.map(item => {
            return (
              <div key={item.id} className='collection__item'>
                <img ref={imageRef} key={item.id} alt={item.name} src={item.src}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Upload;
