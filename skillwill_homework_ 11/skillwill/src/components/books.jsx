import React from 'react'

const Books = ({image, title , desc, names, action}) => {
  return (
    <div className='book'>
        <img className='img' src={image} alt={title} />
        <div className='desc'>
        <h1>{title}</h1>
        <p className='title'>description:</p>
        <p>{desc}</p>
        <p className='title'>characters:</p>
        {[names.map((o,i)=> <p key={i}>{o}</p>)]}
        <button onClick={()=>action(title, names)}>Click</button>
        </div>
    </div>
  )
}

export default Books