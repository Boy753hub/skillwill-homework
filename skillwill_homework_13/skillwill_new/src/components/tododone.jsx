import React, { PureComponent } from 'react'

class tododone extends PureComponent {
  render(){
    
    const {id,desc,action, action2} = this.props

    return (    
          <div className='todo'>
              <div>
              <p><b>Done:</b> {desc}</p>
              </div>
              <div className='buttons'>
              <button onClick={() => action2(id)}>back</button>
              <button onClick={() => action(id)}>Delete</button>
              </div>
          </div>
      )
    }
}



export default tododone