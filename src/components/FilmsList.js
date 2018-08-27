import React from 'react';
import Film from './components/Film.js';

class FilmsList extends React.Component {
  render() {
    const filmComponents = this.props.films.map((film) => {
      return  <Film title={film.title} director={film.director} key={film.id}/>
        });
        return (
          <ul>
         {filmComponents}
          </ul>
        );
  }
}
export default FilmsList;
