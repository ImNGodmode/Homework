const React = require("react");
const DefaultLayout = require("./layouts/default");
class NewPc extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Pc Game Page"}>
        <div>
          <form action="/" method="POST">
            title: <input type="text" name="title" required/>
            <br />
            cost: <input type="text" name="cost" required/>
            <br />
            Was it good though: <input type="checkbox" name="wasItGood" />
            <br />
            <input type="submit" name="" value="Create Pc Game" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = NewPc;