const React = require("react");
const DefaultLayout = require("./layouts/default");

class EditUser extends React.Component {
  render() {
     const user = this.props
    return (
      <DefaultLayout title="Edit User">
         <form
          action={`/user/${this.props.user._id}?_method=PUT`}
          method="POST"
        >
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            defaultValue={this.props.user.firstName}
          />
          <br />
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            defaultValue={this.props.user.lastName}
          /><br />
          Age:{" "}
          <input
            type="text"
            name="age"
            defaultValue={this.props.user.age}
          /><br />
          Are you a Male:
          {this.props.user.isMale ? (
            <input type="checkbox" name="isMale" defaultChecked />
          ) : (
            <input type="checkbox" name="isMale" />
          )}
          <br />
          Do you use Hormones:
          {this.props.user.useHormones ? (
            <input type="checkbox" name="useHormones" defaultChecked />
          ) : (
            <input type="checkbox" name="useHormones" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = EditUser;