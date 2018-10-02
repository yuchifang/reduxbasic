import React,{Component} from 'react'
class Bpp extends Component{
  render() {
    return (
    <div className="Bpp">
      <div className="title">Reminder Pro</div>
      <div className="form-inline">
        <div className="form-group mr-2">
          <input 
                type="text" 
                className="from-control" 
                placeholder="I have to..."/>
        </div>
        <button type="button" className="btn btn-success">Add Reminder</button>
      </div>
    </div> 
    );
  }
}
export default Bpp;