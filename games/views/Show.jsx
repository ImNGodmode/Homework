const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
  render() {
    const {xboxGame}= this.props;
      return (
      <DefaultLayout title={"xbox game"}>
        <div>
            <nav>
                <a href="/"> Back to games index</a>
            </nav>
          <h1> {xboxGame.title} </h1>
          cost: {xboxGame.cost}
          <br /> Was it good though{" "}
          {xboxGame.wasItGood
            ? "OHHHH HELL YEAH!!!"
            : "NAAAHHHHH"}
            {/* delete */}
            {/* <form action= {`/logs/${log._id}?_method=DELETE`} method="POST">
                            <input type='submit' value='DELETE'></input>

                        </form> */}
            {/* edit*/}
            {/* <a href={`logs/${log._id}/edit`}>Edit Log</a>  */}

        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;