// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  componentDidMount() {
    fetch("/api")
      .then(res => res.json())
      .then(res => { console.log(res) });

  },

  newItem() {
    var item = this.body; 
    console.log("I clicked something");
    console.log(item);
    fetch("/api", {method: "post", body: item })
      .then(res => res.json())
      .then(res => { console.log(res) });  
  
  },

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>To Do App</strong></h2>
          <hr />
          <input type="text" name="item" placeholder="Enter A New To Do"></input>
          <button onClick={this.newItem}>Add To Do</button>
        </div>



      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
