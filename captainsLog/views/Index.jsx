const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render() {
        const {logs} = this.props
        console.log(logs)
        return(
            
            <DefaultLayout title={"LogsDashboard"}>
                <nav>
                    <a href={'/logs/new'}>Add New Log</a>
                </nav>
                <ul>
                {logs.map((log, i) => {
                    return (
                        <li key={i}>
                        {/* each log title */}
                        <a href={`/logs/${log.id}`}>{log.title}</a>  
                       

                        {/* edit*/}
                         <a href={`logs/${log._id}/edit`}>Edit Log</a> 

                        {/* delete */}
                        <form action= {`/logs/${log._id}?_method=DELETE`} method="POST">
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