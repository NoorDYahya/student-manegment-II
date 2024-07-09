import logo from './logo.svg';
import './App.css';
import Form from './Form';
import student from './assest/students.jpg';

function App() {
return(
  <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-md-6 image-side half-page">
            <img src={student} alt='students-homepage' className="img-fluid full-height"/>
        </div>
        <div className="col-md-6 form-side half-page">
            <Form/>
        </div>
        </div>
    </div>

);
}

export default App;
