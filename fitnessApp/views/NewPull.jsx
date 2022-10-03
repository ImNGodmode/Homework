const React = require("react");
const DefaultLayout = require("./layouts/default");
class NewPull extends React.Component {
  render() {
    const {user} = this.props
    return (
      <DefaultLayout title={"New Pull Page"}>
        <div className="pull">
          <form action="/user/:id/pull/new" method="POST">
            Owner (Do not change!): <input type="text" name="owner" defaultValue={user._id}required/>
            <br />
            Pulldowns: <input type="text" name="pulldowns" required/>
            <br />
            Cable Rows: <input type="text" name="cableRows" required/>
            <br />
            Latprayers: <input type="text" name="latprayers" required/>
            <br />
            Rows: <input type="text" name="rows" required/>
            <br />
            Preacher Curls: <input type="text" name="preacherCurls" required/>
            <br />
            Spider Curls: <input type="text" name="spiderCurls" required/>
            <br />
            Woodchoppers: <input type="text" name="woodchoppers" required/>
            <br />
            <input type="submit" name="" value="Create New Pull" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = NewPull;