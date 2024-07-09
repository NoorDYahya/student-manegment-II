
import {useState,useEffect} from 'react';
function Form() {

    const [inputs, setInputs] = useState({});
    const [response, setResponse] = useState({});
    const [data, setData] = useState(null);
    useEffect( () =>{
        fetch("http://localhost:3000/students/enterdata")
        .then((res) => res.json())
        .then((data) => setData(data));

    },[]);

    const handleChange = (event) =>{
       const name = event.target.name;
       const value = event.target.value;
       setInputs((values) => ({...values,[name]:value}))
     };
    const handleSubmit = async(event) =>{
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/students/enterdata', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(inputs),
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const result = await response.json();
            setResponse(result);
          } catch (error) {
            console.error('Error:', error);
          }
        alert('the student were added succesfully')  ;
    };
    return ( 
                
        <form onSubmit={handleSubmit} className="w-75" >
            <div class="form-group">
                <label for="inputName">Name</label>
                <input
                 type="text" 
                 name="name" 
                 class="form-control"  
                 placeholder="Your name" 
                 value={inputs.name || ""} 
                 onChange={handleChange}/>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" name="mail"class="form-control"  placeholder="Email" value={inputs.mail || ""} 
                 onChange={handleChange}/>
                </div>
            </div>
        
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputAge">Age</label>
                <input type="number" name="age"class="form-control" value={inputs.age || ""} 
                 onChange={handleChange}/>
                </div>

                <div class="form-group col-md-2">
                <label for="inputAvg">Average</label>
                <input type="number" name="avg"class="form-control" value={inputs.avg || ""} 
                 onChange={handleChange}/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Add student</button>
        </form>
     );
}

export default Form;