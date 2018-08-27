import React from 'react';


const Film = function (props) {
  return(
  <div className="row">
    <div className="icon">
      <img src="/add.png" alt=" " height="20" width="20" />
    </div>
    <div className="film-title">

    <p>{props.title}</p>
    </div>
    <p className="show-times">
      <a  href={props.link}>Show times</a>
    </p>
</div>

  )
}

export default Film;
