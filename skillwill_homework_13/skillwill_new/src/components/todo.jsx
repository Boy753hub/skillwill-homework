import React, { PureComponent } from 'react'

class todo extends PureComponent {
  render(){
    const {id,desc,action} = this.props
    return (
      <div className='todo'>
          <div>
          <p><b>todo:</b> {desc}</p>
          </div>
          <div>
          <button onClick={() => action(id)}>Done</button>
          </div>
      </div>
    )
  }
}

export default todo