import React from 'react'

export default function Post() {
    const[formdata,setformdata]=React.useState({
        name:'',
        age:"",
        email:"",
        // id:""
    })
const{name,age,email}=formdata
const changehandler=e=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
}
// const reqobj={
//     method:"POST",
//     header:{"Content-Type":"application/json"},
//     body:JSON.stringify(formdata)
    
// }
const orgobj={
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formdata),
  }
const adddata=e=>{
    e.preventDefault()
    console.log(formdata)
 fetch("http://localhost:3000/student",orgobj)
    .then((response)=>response.json())
    .then(result =>setformdata(result))
}
  return (
    <div>
        <form onSubmit={adddata}>
        <input type="text" name="name"  value={name} onChange={changehandler}/>
        <input type="text" name="age"  value={age} onChange={changehandler}/>
        <input type="text" name="email"   value={email}onChange={changehandler}/>
        <input type="submit" name='submit'/>
        </form>
    </div>
  )
}
