import React from 'react'

export default function Read() {
    const[data,setdata]=React.useState([])
    React.useEffect(()=>{
       fetch("http://localhost:3000/student").then((response)=>response.json())
                .then(result=>setdata(result))
    },[])

    
   // const deletedata =(id)=>{
    //   const orgobj={
    //     method:"DELETE",
    //     headers:{"Content-Type":"application/json"},
    //     // body:JSON.stringify(pdata)
    //   }
    //   fetch(`http://localhost:4000/empolye/${id}`,orgobj)
    // location.reload()}
  return (
    <div>
      <table border="1">
        <tr>
           <th>s.no</th>
           <th>name</th>
           <th>age</th>
           <th>email</th>
        </tr>
        {
           data.map((ele)=>{
                return(
                    <tr>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.email}</td>
                    
                    </tr>
                )
           }) 
        }
      </table>
    </div>
  )
}
