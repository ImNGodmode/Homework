const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render() {
        const {users} = this.props
        console.log(users)
        return(
            
            <DefaultLayout title={"Dashboard"}>
               <div className="index">
                <nav>
                    <a href={'/user/new'}>Add New user</a><br/>

                    {/* <a href={'/pc/new'}>Add New Pc game</a> */}
                </nav>
                <ul>
                {users.map((user, i) => {
                    return (
                        <li key={i}>
                        {/* each title */}
                        <a href={`/user/${user.id}`}>{user.firstName}{' '}{user.lastName}</a>  
                       

                
                    </li>

                    )
                })}


                </ul>
               </div>





            </DefaultLayout>

        )
    }
}

module.exports= Index