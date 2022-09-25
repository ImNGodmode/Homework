const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Xbox Game Page"}>
        <div>
          <form action="/" method="POST">
            title: <input type="text" name="title" required/>
            <br />
            cost: <input type="text" name="cost" required/>
            <br />
            Was it good though: <input type="checkbox" name="wasItGood" />
            <br />
            <input type="submit" name="" value="Create Xbox Game" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;