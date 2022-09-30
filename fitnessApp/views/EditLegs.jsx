const React = require("react");
const DefaultLayout = require("./layouts/default");

class EditLegs extends React.Component {
  render() {
     const legs = this.props
    return (
      <DefaultLayout title="Edit Legs">
         <form
          action={`/user/legs/${this.props.legs._id}?_method=PUT`}
          method="POST"
        >
          Squats:{" "}
          <input
            type="text"
            name="squats"
            defaultValue={this.props.legs.squats}
          />
          <br />
          Leg Press:{" "}
          <input
            type="text"
            name="legPress"
            defaultValue={this.props.legs.legPress}
          />
          <br />
          Calf Raise:{" "}
          <input
            type="text"
            name="calfRaise"
            defaultValue={this.props.legs.calfRaise}
          /><br />
           Hip Thrust:{" "}
          <input
            type="text"
            name="hipThrust"
            defaultValue={this.props.legs.hipThrust}
          /><br />
           Ab Coaster:{" "}
          <input
            type="text"
            name="abCoaster"
            defaultValue={this.props.legs.abCoaster}
          /><br />
          

          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = EditLegs;