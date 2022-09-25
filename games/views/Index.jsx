const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render() {
        const {xboxGames} = this.props
        console.log(xboxGames)
        return(
            
            <DefaultLayout title={"Games Dashboard"}>
                <nav>
                    <a href={'/#'}>Add New Xbox game</a><br/>
                    
                    <a href={'/#'}>Add New Pc game</a>
                </nav>
                <ul>
                {xboxGames.map((xboxGame, i) => {
                    return (
                        <li key={i}>
                        {/* each log title */}
                        <a href={`/Xbox/${xboxGame.id}`}>{xboxGame.title}</a>  
                       

                        {/* edit*/}
                         <a href={`Xbox/${xboxGame._id}/edit`}>Edit Xbox Game</a> 

                        {/* delete */}
                        <form action= {`/Xbox/${xboxGame._id}?_method=DELETE`} method="POST">
                            <input type='submit' value='DELETE'></input>

                        </form>
                    </li>

                    )
                })}


                </ul>
               





            </DefaultLayout>

        )
    }
}

module.exports= Index