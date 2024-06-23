import React from 'react'
import Person from './Person'

function NameList() {

   const persons =[
    {
      id : 1,
      name :'Leo',
      age : 18,
      skill : 'React'
     },
     {
        id : 2,
        name :'Das',
        age : 20,
        skill : 'Python'
       },
       {
        id : 3,
        name :'Roy',
        age : 22,
        skill : 'Angular'
       }
     ]
   const personList = persons.map(persons =><Person key={persons.id} persons={persons}/>)
  return (<div>{personList}</div>)
}

export default NameList