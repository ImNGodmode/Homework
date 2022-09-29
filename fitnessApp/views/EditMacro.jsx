const React = require("react");
const DefaultLayout = require("./layouts/default");

class EditMacro extends React.Component {
  render() {
     const macro = this.props
    return (
      <DefaultLayout title="Edit Macro">
         <form
          action={`/user/Macros/${this.props.macro._id}?_method=PUT`}
          method="POST"
        >
          calories:{" "}
          <input
            type="text"
            name="calories"
            defaultValue={this.props.macro.calories}
          />
          <br />
          protein:{" "}
          <input
            type="text"
            name="protein"
            defaultValue={this.props.macro.protein}
          />
          <br />
          carbs:{" "}
          <input
            type="text"
            name="carbs"
            defaultValue={this.props.macro.carbs}
          /><br />
           fats:{" "}
          <input
            type="text"
            name="fats"
            defaultValue={this.props.macro.fats}
          /><br />
          
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = EditMacro;