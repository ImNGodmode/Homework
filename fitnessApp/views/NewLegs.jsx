const React = require("react");
const DefaultLayout = require("./layouts/default");
class NewLegs extends React.Component {
  render() {
    const {user} = this.props
    return (
      <DefaultLayout title={"New Legs Page"}>
        <div>
          <form action="/user/:id/legs/new" method="POST">
            Owner: <input type="text" name="owner" defaultValue={user._id}required/>
            <br />
            Squats: <input type="text" name="squats" required/>
            <br />
            Leg Press: <input type="text" name="legPress" required/>
            <br />
            Calf Raise: <input type="text" name="calfRaise" required/>
            <br />
            Hip Thrust: <input type="text" name="hipThrust" required/>
            <br />
            Ab Coaster: <input type="text" name="abCoaster" required/>
            <br />
            
            <input type="submit" name="" value="Create New Legs" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = NewLegs;