const React = require("react");
const DefaultLayout = require("./layouts/default");

class EditPush extends React.Component {
  render() {
     const push = this.props
    return (
      <DefaultLayout title="Edit Push">
         <form className="push"
          action={`/user/push/${this.props.push._id}?_method=PUT`}
          method="POST"
        >
          Bench:{" "}
          <input
            type="text"
            name="bench"
            defaultValue={this.props.push.bench}
          />
          <br />
          Incline Bench:{" "}
          <input
            type="text"
            name="inclineBench"
            defaultValue={this.props.push.inclineBench}
          />
          <br />
          Pecdec:{" "}
          <input
            type="text"
            name="pecdec"
            defaultValue={this.props.push.pecdec}
          /><br />
           Revpecdec:{" "}
          <input
            type="text"
            name="revpecdec"
            defaultValue={this.props.push.revpecdec}
          /><br />
           Pushdowns:{" "}
          <input
            type="text"
            name="pushdowns"
            defaultValue={this.props.push.pushdowns}
          /><br />
           Latraise:{" "}
          <input
            type="text"
            name="latraise"
            defaultValue={this.props.push.latraise}
          /><br />
            Decline Situps:{" "}
          <input
            type="text"
            name="declinesitups"
            defaultValue={this.props.push.declinesitups}
          /><br />

          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = EditPush;