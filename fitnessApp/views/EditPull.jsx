const React = require("react");
const DefaultLayout = require("./layouts/default");

class EditPull extends React.Component {
  render() {
     const pull = this.props
    return (
      <DefaultLayout title="Edit Pull">
         <form
          action={`/user/pull/${this.props.pull._id}?_method=PUT`}
          method="POST"
        >
          Pulldowns:{" "}
          <input
            type="text"
            name="pulldowns"
            defaultValue={this.props.pull.pulldowns}
          />
          <br />
          Cable Rows:{" "}
          <input
            type="text"
            name="cableRows"
            defaultValue={this.props.pull.cableRows}
          />
          <br />
          Latprayers:{" "}
          <input
            type="text"
            name="latprayers"
            defaultValue={this.props.pull.latprayers}
          /><br />
           Rows:{" "}
          <input
            type="text"
            name="rows"
            defaultValue={this.props.pull.rows}
          /><br />
           Preacher Curls:{" "}
          <input
            type="text"
            name="preacherCurls"
            defaultValue={this.props.pull.preacherCurls}
          /><br />
           Spider Curls:{" "}
          <input
            type="text"
            name="spiderCurls"
            defaultValue={this.props.pull.spiderCurls}
          /><br />
            Woodchoppers:{" "}
          <input
            type="text"
            name="woodchoppers"
            defaultValue={this.props.pull.woodchoppers}
          /><br />

          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = EditPull;