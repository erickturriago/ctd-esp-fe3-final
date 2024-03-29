import{useState} from "react";

const Form = ({form,setForm}) => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [errors,setErrors]=useState({})


  const handleSubmit = (e)=>{
    console.log("Submit")
    setErrors({})
    e.preventDefault();
    if(!/^\D*$/.test(name)){
      setErrors((prevState) => ({
        ...prevState,
        name:"El nombre solo debe tener letras",
      }));
    }
    if(name.length==0){
      setErrors((prevState) => ({
        ...prevState,
        name:"El nombre no puede estar vacío",
      }));
    }

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regexEmail.test(email)){
      setErrors((prevState) => ({
        ...prevState,
        email:"El email tiene un formato invalido",
      }));
    }
    if(email.length==0){
      setErrors((prevState) => ({
        ...prevState,
        email:"El email no puede estar vacío",
      }));
    }

    if(!errors.name){
      setForm((prevState) => ({
        ...prevState,
        name
      }));
    }
    if(errors.email){
      setForm((prevState) => ({
        ...prevState,
        email
      }));
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <div className="form-group">
          <label className="exampleInputPassword1">Nombre</label>
          <input type="text" value={name} className="form-control" placeholder="nombre" onChange={(e)=>setName(e.target.value)}/>
        </div>
        {errors.name ? <div className="alert alert-danger" role="alert">{errors.name}</div>:''}
        <div className="form-group">
          <label className="exampleInputPassword1">Email</label>
          <input type="text" value={email} className="form-control" placeholder="example@example.com" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        {errors.email ? <div className="alert alert-danger" role="alert">{errors.email}</div>:''}
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Form;
