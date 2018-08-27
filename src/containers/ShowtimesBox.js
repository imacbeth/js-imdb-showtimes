import React from 'react';
import FilmsList from '../components/FilmsList.js';


class ShowtimesBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      films: [
        {title: 'Lady Bird', director: 'Greta Gerwig', id: 123},
        {title: 'La La Land', director: 'Damien Chazelle', id: 124},
        {title: 'Get Out', director: 'Jordan Peele', id: 125},
        {title: 'Baby Driver', director: 'Edgar Wright', id: 126}
      ]
    }

    render() {
      return (
    <div className="showtimes-box">
      UK Opening This Weekend
      <div>
        <FilmsList films={this.state.films}/>
      </div>
      <div>
        <button onClick={this.link}>See showtimes</button>
      </div>

    </div>
    )
  };

}
}
export default ShowtimesBox;
