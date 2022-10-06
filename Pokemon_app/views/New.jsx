const React = require("react");

class New extends React.Component {
  render() {
    return (
      
        <div>
          <form action="/pokemon" method="POST">
            Name: <input type="text" name="name" />
            <br />
            url: <input type="text" name="url" />
            <br />
            <input type="submit" name="" value="Create Pokemon" />
          </form>
        </div>
    
    );
  }
}

module.exports = New;