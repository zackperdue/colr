var ColorPicker = React.createClass({
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
      <div className="color_picker">
        <input className="color_box" type="text" value={this.state.hex} style={style} />
        <div className="slider_container">
          <label>R</label>
          <input type="range" min="0" max="255" ref="red" value={this.state.red} onChange={this.handleColorChange} />
          <span className="value">{this.state.red}</span>
        </div>
        <div className="slider_container">
          <label>G</label>
          <input type="range" min="0" max="255" ref="green" value={this.state.green} onChange={this.handleColorChange} />
          <span className="value">{this.state.green}</span>
        </div>
        <div className="slider_container">
          <label>B</label>
          <input type="range" min="0" max="255" ref="blue" value={this.state.blue} onChange={this.handleColorChange} />
          <span className="value">{this.state.blue}</span>
        </div>
      </div>
    );
  }
});

React.render(<ColorPicker />, document.getElementById('colr'));
