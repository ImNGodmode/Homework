const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render() {
        const {users} = this.props
        console.log(users)
        return(
            
            <DefaultLayout title={"Dashboard"}>
                <nav>
                    <a href={'#'}>Add New user</a><br/>

                    {/* <a href={'/pc/new'}>Add New Pc game</a> */}
                </nav>
                <ul>
                {users.map((user, i) => {
                    return (
                        <li key={i}>
                        {/* each title */}
                        <a href={`/user/${user.id}`}>{user.firstName}{' '}{user.lastName}</a>  
                       

                        {/* edit*/}
                         {/* <a href={`Xbox/${xboxGame._id}/edit`}>Edit Game</a>  */}

                        {/* delete */}
                        {/* <form action= {`/Xbox/${xboxGame._id}?_method=DELETE`} method="POST">
                            <input type='submit' value='DELETE'></input>

                        </form> */}
                    </li>

                    )
                })}


                </ul>
               





            </DefaultLayout>

        )
    }
}

module.exports= Index