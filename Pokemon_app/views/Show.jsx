const React = require('react')
class Show extends React.Component {
   render () {
    const poke = this.props.poke
 
    return (
        <div>
            <h1> Gotta Catch 'Em all </h1>
            {/* <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2> */}
            <img src={poke.img + '.jpg'} alt="" width={300} height={300}/>
            

            <a href='http://localhost:3000/pokemon'>Back</a>
        </div>
     );
    }
 }
 module.exports  = Show;