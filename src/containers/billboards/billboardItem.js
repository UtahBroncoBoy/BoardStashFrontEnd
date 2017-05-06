import React from 'react';

const styles = {
  border: '1px solid #545454',
  margin: '10px',
  padding: '15px'
};

export default billboard => (
  <div style={{...styles}}>
    <h4>Billboard Face Number: {billboard._faceNumber}</h4>
    <p>Rate Level: {billboard._rateLevel}</p>
  </div>
)