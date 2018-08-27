import React from 'react';
import FilmsList from '../components/FilmsList.js';


class ShowtimesBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      films: [
        {title: 'Lady Bird', director: 'Greta Gerwig', link: 'https://www.imdb.com/title/tt4925292/?ref_=nv_sr_1', id: 123},
        {title: 'La La Land', director: 'Damien Chazelle', link: 'https://www.imdb.com/title/tt3783958/?ref_=fn_al_tt_1', id: 124},
        {title: 'Get Out', director: 'Jordan Peele', link: 'https://www.imdb.com/title/tt5052448/?ref_=fn_al_tt_1', id: 125},
        {title: 'Baby Driver', director: 'Edgar Wright', link: 'https://www.imdb.com/title/tt3890160/?ref_=nv_sr_1', id: 126}
      ]
    }
  }
    render() {
      return (
      <div className="showtimes-box">
        UK Opening This Weekend
        <div>
          <FilmsList films={this.state.films}/>
        </div>
        <div>
        <a className="more-times" href = 'https://www.imdb.com/showtimes/'> <button>See more show times</button> </a>
        </div>
      </div>
    );
  };

}

export default ShowtimesBox;
