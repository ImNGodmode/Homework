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
                        {/* each student */}
                        <a href={`/students/${student.id}`}>{student.name}</a> has a GPA of {student.gpa} <br/>
                       {/* student name is ___ and is/not eligible to graduate */}
                        {student.isPassing ? "And is Eligible to Graduate": "And is Not Eligible to Graduate"}

                        {/* edit */}
                        <a href={`students/${student._id}/edit`}>Edit Student</a>

                        {/* delete */}
                        <form action= {`/students/${student._id}?_method=DELETE`} method="POST">
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