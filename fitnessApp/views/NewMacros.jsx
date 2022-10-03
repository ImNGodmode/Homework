const React = require("react");
const DefaultLayout = require("./layouts/default");
class NewMacros extends React.Component {
  render() {
    const {user} = this.props
    return (
      <DefaultLayout title={"New Macros Page"}>
        <div className="macro">
          <form action="/user/:id/Macros/new" method="POST">
            Owner (Do not change!): <input type="text" name="owner" defaultValue={user._id}required/>
            <br />
            Calories: <input type="text" name="calories" required/>
            <br />
            Protein: <input type="text" name="protein" required/>
            <br />
            Carbs: <input type="text" name="carbs" required/>
            <br />
            Fats: <input type="text" name="fats" required/>
            <br />
            <input type="submit" name="" value="Create New Macros" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = NewMacros;