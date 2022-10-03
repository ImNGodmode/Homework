const React = require("react");
const DefaultLayout = require("./layouts/default");
class NewUser extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New User Page"}>
        <div className="user">
          <form action="/" method="POST">
            First Name: <input type="text" name="firstName" required/>
            <br />
            Last Name: <input type="text" name="lastName" required/>
            <br />
            Age: <input type="text" name="age" required/>
            <br />
            Are you a male?: <input type="checkbox" name="isMale" />
            <br />
            Are you taking any hormones?: <input type="checkbox" name="useHormones" />
            <br />
            <input type="submit" name="" value="Create New User" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = NewUser;