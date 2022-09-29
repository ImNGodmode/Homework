const React = require("react");
const DefaultLayout = require("./layouts/default");
class ShowUser extends React.Component {
  render() {
    const {user}= this.props;
      return (
      <DefaultLayout title={"Client"}>
        <div>
            <nav>
                <a href="/"> Back to Dashboard</a>
                 {/* delete */}
                <form action= {`/user/${user._id}?_method=DELETE`} method="POST">
                    <input type='submit' value='DELETE'></input>

                </form>
                {/* edit*/}
                <a href={`/user/${user._id}/edit`}>Edit User</a> 
            </nav>
          <h1> {user.firstName}{' '}{user.lastName} </h1>
          age: {user.age}<br /> 
          Are you a Male:{" "}
          {user.ismale 
            ? "No I am a Female"
            : "Yes I am a Male"} <br/>
             Do you take any hormones?:{" "}
          {user.useHormones 
            ? "Yes I use gear, we should consult a Doctor"
            : "No I am Natty"} <br/>
           <a href= {`/user/${user._id}/Macros/new`} ><h3>Macros</h3></a>

            {user.macros.map((macro, i) => {
                    return (
                        <li key={i}>
                        {/* each macro set */}
                        calories: {macro.calories}<br/>
                        protein: {macro.protein}<br/>
                        carbs: {macro.carbs}<br/>
                        fats: {macro.fats} <br/>
                        <a href={`/user/Macros/${macro._id}`}>Edit Macro Entry</a>
                        <form action= {`/user/Macros/${macro._id}?_method=DELETE`} method="POST">
                            <input type='submit' value='DELETE'></input>
                        </form>
                    </li>

                    )
                })}

        </div>
      </DefaultLayout>
    );
  }
}
module.exports = ShowUser;