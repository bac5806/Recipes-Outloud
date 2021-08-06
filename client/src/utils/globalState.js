import React, { useState } from 'react';
const GlobalState = () => {
  const [valueDrop, setValueDrop] = useState('')
  return {valueDrop, setValueDrop};  
}
export default GlobalState;