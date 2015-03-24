var ColorPicker = React.createClass({displayName: "ColorPicker",
  componentDidMount: function(){
    this.handleColorChange()
  },
  getInitialState: function(){
    return {
      red: 0,
      green: 0,
      blue: 0,
      rgb: null,
      hex: null
    };
  },
  handleColorChange: function(e){
    var rgb = [
      this.refs.red.getDOMNode().value,
      this.refs.green.getDOMNode().value,
      this.refs.blue.getDOMNode().value
    ]

    var hex = rgb.map(function(val){
      return (0x100 | val).toString(16).slice(-2)
    }).join("")

    this.setState({
      red: rgb[0],
      green: rgb[1],
      blue: rgb[2],
      rgb: rgb.join(","),
      hex: "#" + hex
    });
  },
  render: function(){
    var style = {
      backgroundColor: 'rgba('+this.state.rgb+', 1)'
    }
    return (
      React.createElement("div", {className: "color_picker"}, 
        React.createElement("div", {className: "color_box", style: style}), 
          React.createElement("div", {className: "slider_container"}, 
            React.createElement("label", null, "R"), 
            React.createElement("input", {type: "range", min: "0", max: "255", ref: "red", value: this.state.red, onChange: this.handleColorChange}), 
            React.createElement("span", {className: "value"}, this.state.red)
          ), 
        React.createElement("div", {className: "slider_container"}, 
          React.createElement("label", null, "G"), 
          React.createElement("input", {type: "range", min: "0", max: "255", ref: "green", value: this.state.green, onChange: this.handleColorChange}), 
          React.createElement("span", {className: "value"}, this.state.green)
        ), 
        React.createElement("div", {className: "slider_container"}, 
          React.createElement("label", null, "B"), 
          React.createElement("input", {type: "range", min: "0", max: "255", ref: "blue", value: this.state.blue, onChange: this.handleColorChange}), 
          React.createElement("span", {className: "value"}, this.state.blue)
        ), 
        React.createElement("label", null, 
          React.createElement("input", {className: "hex", type: "text", value: this.state.hex})
        )
      )
    );
  }
});

React.render(React.createElement(ColorPicker, null), document.getElementById('colr'));
var ColorPicker = React.createClass({displayName: "ColorPicker",
  componentDidMount: function(){
    this.handleColorChange()
  },
  getInitialState: function(){
    return {
      red: 0,
      green: 0,
      blue: 0,
      rgb: null,
      hex: null
    };
  },
  handleColorChange: function(e){
    var rgb = [
      this.refs.red.getDOMNode().value,
      this.refs.green.getDOMNode().value,
      this.refs.blue.getDOMNode().value
    ]

    var hex = rgb.map(function(val){
      return (0x100 | val).toString(16).slice(-2)
    }).join("")

    this.setState({
      red: rgb[0],
      green: rgb[1],
      blue: rgb[2],
      rgb: rgb.join(","),
      hex: "#" + hex
    });
  },
  render: function(){
    var style = {
      backgroundColor: 'rgba('+this.state.rgb+', 1)'
    }
    return (
      React.createElement("div", {className: "color_picker"}, 
        React.createElement("div", {className: "color_box", style: style}), 
          React.createElement("div", {className: "slider_container"}, 
            React.createElement("label", null, "R"), 
            React.createElement("input", {type: "range", min: "0", max: "255", ref: "red", value: this.state.red, onChange: this.handleColorChange}), 
            React.createElement("span", {className: "value"}, this.state.red)
          ), 
        React.createElement("div", {className: "slider_container"}, 
          React.createElement("label", null, "G"), 
          React.createElement("input", {type: "range", min: "0", max: "255", ref: "green", value: this.state.green, onChange: this.handleColorChange}), 
          React.createElement("span", {className: "value"}, this.state.green)
        ), 
        React.createElement("div", {className: "slider_container"}, 
          React.createElement("label", null, "B"), 
          React.createElement("input", {type: "range", min: "0", max: "255", ref: "blue", value: this.state.blue, onChange: this.handleColorChange}), 
          React.createElement("span", {className: "value"}, this.state.blue)
        ), 
        React.createElement("label", null, 
          React.createElement("input", {className: "hex", type: "text", value: this.state.hex})
        )
      )
    );
  }
});

React.render(React.createElement(ColorPicker, null), document.getElementById('colr'));
