import React from 'react';
import './Like.css';

const Like = () => {
  return (
    <div className="love">
      <input id="switch" type="checkbox" />
      <label className="love-heart" for="switch">
        <i className="left"></i>
        <i className="right"></i>
        <i className="bottom"></i>
        <div className="round"></div>
      </label>
    </div>
  )
}

export default Like