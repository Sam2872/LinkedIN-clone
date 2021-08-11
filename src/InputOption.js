import React from 'react'
import './InputOption.css'

function InputOption({title, Icon, color}) {
    return (
        <div className='inputOptions'>
            <Icon style={{color:color}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption
