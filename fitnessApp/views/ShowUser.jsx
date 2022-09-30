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
             <a href= {`/user/${user._id}/push/new`} ><h3>Push</h3></a>

            {user.push.map((push, i) => {
                    return (
                        <li key={i}>
                        {/* each push set */}
                        Bench: {push.bench}<br/>
                        Incline Bench: {push.inclineBench}<br/>
                        pecdec: {push.pecdec}<br/>
                        revpecdec: {push.revpecdec} <br/>
                        pushdowns: {push.pushdowns} <br/>
                        latraise: {push.latraise} <br/>
                        declinesitups: {push.declinesitups} <br/>
                        <a href={`/user/push/${push._id}`}>Edit Push Entry</a>
                        <form action= {`/user/push/${push._id}?_method=DELETE`} method="POST">
                            <input type='submit' value='DELETE'></input>
                        </form>
                    </li>

                    )
                })}

            <a href= {`/user/${user._id}/pull/new`} ><h3>Pull</h3></a>

            {user.pull.map((pull, i) => {
                    return (
                        <li key={i}>
                        {/* each pull set  */}
                        Pulldowns: {pull.pulldowns}<br/>
                        Cable Rows: {pull.cableRows}<br/>
                        Lat Prayers: {pull.latprayers}<br/>
                        Rows: {pull.rows} <br/>
                        Preacher Cruls: {pull.preacherCurls} <br/>
                        Spider Curls: {pull.spiderCurls} <br/>
                        woodchoppers: {pull.woodchoppers} <br/>
                        <a href={`/user/pull/${pull._id}`}>Edit Pull Entry</a>
                        <form action= {`/user/pull/${pull._id}?_method=DELETE`} method="POST">
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