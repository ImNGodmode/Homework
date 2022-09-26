const React = require("react");
const DefaultLayout = require("./layouts/default");

class EditXbox extends React.Component {
  render() {
     const xboxGame = this.props
    return (
      <DefaultLayout title="Edit Page">
         <form
          action={`/xbox/${this.props.xboxGame._id}?_method=PUT`}
          method="POST"
        >
          Title:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.xboxGame.title}
          />
          <br />
          cost:{" "}
          <input
            type="text"
            name="cost"
            defaultValue={this.props.xboxGame.cost}
          /><br />
          Was it good?:
          {this.props.xboxGame.wasItGood ? (
            <input type="checkbox" name="wasitgood" defaultChecked />
          ) : (
            <input type="checkbox" name="wasItGood" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = EditXbox;