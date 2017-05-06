import React from 'react';

const styles = {
  border: '5px solid #5B2C6F',
  margin: '15px auto',
  padding: '15px',
  width: '40%',
  color: '#5B2C6F',
};

export default billboard => (
  <div style={{...styles}}>
    <h4>Billboard Face Number(s): {billboard.faceNumber}</h4>
    <p>Rate Level: {billboard.rateLevel}</p>
    <p>Billboard ID: {billboard._id}</p>
  </div>
)