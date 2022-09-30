const React = require("react");
const DefaultLayout = require("./layouts/default");
class NewPush extends React.Component {
  render() {
    const {user} = this.props
    return (
      <DefaultLayout title={"New Push Page"}>
        <div>
          <form action="/user/:id/push/new" method="POST">
            Owner: <input type="text" name="owner" defaultValue={user._id}required/>
            <br />
            Bench: <input type="text" name="bench" required/>
            <br />
            Incline Bench: <input type="text" name="inclineBench" required/>
            <br />
            Pecdec: <input type="text" name="pecdec" required/>
            <br />
            Revpecdec: <input type="text" name="revpecdec" required/>
            <br />
            Pushdowns: <input type="text" name="pushdowns" required/>
            <br />
            Latraise: <input type="text" name="latraise" required/>
            <br />
            Decline Situps: <input type="text" name="declinesitups" required/>
            <br />
            <input type="submit" name="" value="Create New Macros" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = NewPush;