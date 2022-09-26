const React = require("react");
const DefaultLayout = require("./layouts/default");
class ShowPc extends React.Component {
  render() {
    const {pcGame}= this.props;
      return (
      <DefaultLayout title={"pc game"}>
        <div>
            <nav>
                <a href="/"> Back to games index</a>
            </nav>
          <h1> {pcGame.title} </h1>
          cost: {pcGame.cost}
          <br /> Was it good though{" "}
          {pcGame.wasItGood
            ? "OHHHH HELL YEAH!!!"
            : "NAAAHHHHH"}
            {/* delete */}
            <form action= {`/xbox/${pcGame._id}?_method=DELETE`} method="POST">
                            <input type='submit' value='DELETE'></input>

                        </form>
            {/* edit*/}
            <a href={`xbox/${pcGame._id}/edit`}>Edit game</a> 

        </div>
      </DefaultLayout>
    );
  }
}
module.exports = ShowPc;