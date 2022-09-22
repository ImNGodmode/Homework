const React = require('react')
class Show extends React.Component {
   render () {
    const poke = this.props.poke
    return (
        <div>
        <h1> Show Page </h1>
         {poke.name}
        </div>
     );
    }
 }
 module.exports  = Show;