import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function CreateUser(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/CreateUser", {name, email, age})
    .then(result => {
        console.log(result);
        navigate('/');
    })
    .catch(err => console.log(err));
    }
    return (
        <div className="bg-primary vh-100 d-flex justify-content-center align-items-center">
            <div className="container mt-5 p-4 bg-white rounded">
                <h1 className="text-center mb-4">Add User</h1>
                <form onSubmit={Submit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" required
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" required
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age:</label>
                        <input type="number" className="form-control" id="age" name="age" required
                        onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        
    );
}
export default CreateUser;