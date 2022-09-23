const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
  render() {
     const log = this.props
    return (
      <DefaultLayout title="Edit Page">
         <form
          action={`/logs/${this.props.log._id}?_method=PUT`}
          method="POST"
        >
          Title:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.log.title}
          />
          <br />
          entry:{" "}
          <textarea rows='5' columns='100' name="entry" defaultValue={this.props.log.entry} />
          <br />
          Is Ship Broken:
          {this.props.log.shipIsBroken ? (
            <input type="checkbox" name="Is Ship Broken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;