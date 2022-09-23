//form for users to create a new instance of a new log and save to database
const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New logs Page"}>
        <div>
          <form action="/logs" method="POST">
            title: <input type="text" name="title" required/>
            <br />
            entry: <textarea rows='5' columns='100' name="entry" required />
            <br />
            Is Ship Broken: <input type="checkbox" name="isShipBroken" />
            <br />
            <input type="submit" name="" value="Create Log" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;