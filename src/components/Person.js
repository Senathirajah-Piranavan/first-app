import React from 'react'

function Person({persons}) { 
  return (
    <div>
        <h1>I'm {persons.name}. I'm {persons.age} years old. My skill is {persons.skill}.</h1>
    </div>
  )
}

export default Person