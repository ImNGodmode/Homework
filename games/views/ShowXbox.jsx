const React = require("react");
const DefaultLayout = require("./layouts/default");
class ShowXbox extends React.Component {
  render() {
    const {xboxGame}= this.props;
      return (
      <DefaultLayout title={"xbox game"}>
        <div>
            <nav>
                <a href="/"> Back to games index</a>
            </nav>
          <h1> {xboxGame.title} </h1>
          cost: {xboxGame.cost}
          <br /> Was it good though{" "}
          {xboxGame.wasItGood
            ? "OHHHH HELL YEAH!!!"
            : "NAAAHHHHH"}
            {/* delete */}
            <form action= {`/xbox/${xboxGame._id}?_method=DELETE`} method="POST">
                            <input type='submit' value='DELETE'></input>

                        </form>
            {/* edit*/}
            <a href={`xbox/${xboxGame._id}/edit`}>Edit game</a> 

        </div>
      </DefaultLayout>
    );
  }
}
module.exports = ShowXbox;