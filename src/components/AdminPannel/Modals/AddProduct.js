import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, TextField, Button, TextareaAutosize, Typography} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

  

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    borderRadius:'5px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:'40%',
    height:'fit-content',
    overflow:'scrol'
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    //   width: '25ch',

    },
  },
  inputModal:{
      display:'flex',
      justifyContent:'space-around',
      flexDirection:'column',
      marginLet:'0px'
  },
  modalButton :{
    '& > *': {
      margin: theme.spacing(1),
    },
    marginLeft:'12px'
  },
  headers:{
    display:'flex',
    justifyContent:'space-between',
  },
  close:{
    marginTop:'-15px',
    marginRight:'-15px',
    transform:'rotate(45deg)',
    '&&:hover':{
      cursor:'pointer'
    },
    opacity:'0.4'
  },
  files:{
    outline:'none',
    border:'none'
  },
  testm:{
    marginBottom:'-13px'
  }
}));

export default function AddProduct({data, open, close}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [disease, setDisease] = useState({name:'', image:'', header:'', description:'', testmoimage:'', testmonial:''})
  const [error, setError] = useState("")
 

 const uploadDisImage = async e =>{
    const file = e.target.files
    const data = new FormData()
    data.append('file', file[0])
    data.append('upload_preset', 'viebegimages')

    const res = await fetch("	https://api.cloudinary.com/v1_1/dux9ysevq/image/upload", {
      method:'POST',
      body:data
    })
    const imageUrl = await res.json()
    setDisease({...disease, image:imageUrl.secure_url})
  }

  const uploadTestmoImage = async e =>{
    const file = e.target.files
    const data = new FormData()
    data.append('file', file[0])
    data.append('upload_preset', 'viebegimages')

    const res = await fetch("	https://api.cloudinary.com/v1_1/dux9ysevq/image/upload", {
      method:'POST',
      body:data
    })
    const imageUrl = await res.json()
    setDisease({...disease, testmoimage:imageUrl.secure_url})
  }

  const chooseImage = (event) =>{
        // setDiseaseImage(event.target.files)
        console.log(event.target.files)
  }
  const handleCancel = e => {
    e.preventDefault();
    setDisease({
        name :"",
        image :"",
        header:"",
        description:"",
        testmoimage:'',
        testmonial:""
      })
  }
  const submitHandler = e =>{
    e.preventDefault()
    if(disease.name !== "" && disease.image !=="" && disease.description !== "" &&  disease.testmoimage!=="" && disease.testmonial !== ""){
      setDisease({
        name:disease.name,
        image:disease.image,
        description:disease.description,
        testmoimage:disease.testmoimage,
        testmonial:disease.testmonial
      })
      close()
      console.log(disease)

      } else{
      setError("All field must be filled")
      setTimeout(() => {
      setError("");
      }, 5000)
      }
    } 
  const body = (
    <div style={modalStyle} className={classes.paper}>
    <div className={classes.headers}>
      <h2 id="simple-modal-title" style={{marginLeft:'17px'}}>New Disease</h2>
      <h1 className={classes.close} onClick={close}>+</h1>
    </div>
      {error? (<h4 className="text-center text-danger">{error}</h4>): ("")}
      <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
      <TextField  
      label="Name of disease" 
      variant="outlined" 
      fullWidth onChange={e=> setDisease({...disease, name:e.target.value})} value={disease.name}
      inputProps={{
          style: {
          padding: 12,
          }
        }}
      />
      <TextField 
      className={classes.files}
        type='file'
        fullWidth 
        onChange={uploadDisImage} 
        // value={disease.image}
        />
      <TextField 
      label="Header line" 
      variant="outlined" 
      fullWidth onChange={e=> setDisease({...disease, header:e.target.value})} value={disease.header}
      inputProps={{
          style: {
          padding: 12,
          }
        }}
      />
      <TextField 
        label="Disease's descriptions"
        variant="outlined"
        multiline
        fullWidth
        rows={4}
        rowsMax={5}
        onChange={e=> setDisease({...disease, description:e.target.value})} 
        value={disease.description}
      />
      <Typography className={classes.testm} component="h4">Testmonial</Typography>
      <TextField 
      className={classes.files}
        type='file'
        fullWidth 
        onChange={uploadTestmoImage}
      />
      <TextField 
        label="Disease's testmonial"
        variant="outlined"
        multiline
        fullWidth
        rows={4}
        rowsMax={5}
        onChange={e=> setDisease({...disease, testmonial:e.target.value})} 
        value={disease.testmonial}
      />
      
    <div className={classes.modalButton}>
      <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
      <Button variant="contained" type='submit' color="primary">
        add
      </Button>
    </div>
    </form>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}