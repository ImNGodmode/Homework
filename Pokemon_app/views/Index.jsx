const React = require('react')

const myStyle = {
    color: 'black',
    backgroundColor: 'red',
  };

  class Index extends React.Component {
    render() {
      const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>Pokemon</h1>
         <ul>
                      {pokemon.map((poke, i) => {
                          return (
                              <li key={i}>
                                 
                                  <a href={`./pokemon/${i}`}>
                                      {poke.name}
                                  </a>
                                
                              </li>
                          );
                      })}
                  </ul>
      </div>
    )
    }
  }

  module.exports = Index;