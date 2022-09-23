const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
  render() {
    const {log}= this.props;
      return (
      <DefaultLayout title={"log entry"}>
        <div>
            <nav>
                <a href="/logs"> Back to log index</a>
            </nav>
          <h1> {log.title} </h1>
          {log.entry}
          <br /> Is the ship damaged{" "}
          {log.shipIsBroken
            ? "Get someone to the poop deck we are taking on water"
            : "The Ship is ship shape"}
            {/* delete */}
            <form action= {`/logs/${log._id}?_method=DELETE`} method="POST">
                            <input type='submit' value='DELETE'></input>

                        </form>
            {/* edit*/}
            <a href={`logs/${log._id}/edit`}>Edit Log</a> 

        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;