import React,{ useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
function UpdateUser(){
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:3000/getUser/'+id)
        .then(result => {console.log(result)
          setName(result.data.name)
          setEmail(result.data.email)
          setAge(result.data.age)

    })
        .catch(err => console.log(err))
   },[])

   const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/updateUser/"+id, {name, email,age})
        .then(result => {

         console.log(result)
          navigate('/')
        })
        .catch(err => console.log(err))
   }
    return(
        <div className="bg-primary vh-100 d-flex justify-content-center align-items-center">
            <div className="container mt-5 p-4 bg-white rounded">
                <h1 className="text-center mb-4">Update User</h1>
                <form onSubmit={Update}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" required 
                        value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" required 
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age:</label>
                        <input type="number" className="form-control" id="age" name="age" required 
                        value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
}
export default UpdateUser;