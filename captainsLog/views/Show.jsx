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
            ? "Ship is ship shape"
            : "Get someone to the poop deck we are taking on water"}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;