import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, TextField, Button, TextareaAutosize, Typography} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import InputAdornment from '@material-ui/core/InputAdornment';

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

export default function Category({data, open, close}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [disease, setDisease] = useState({name:'',investment:'', image:'', header:'', description:'', testmoimage:'', testmonial:''})
  const [error, setError] = useState("")
  const [section, setSection] = useState('select section');
 


  const sections = [
  {
    value: 'span1',
    label: 'span1',
  },
  {
    value: 'span2',
    label: 'span2',
  },
  {
    value: 'span3',
    label: 'span3',
  },
  {
    value: 'span4',
    label: 'span4',
  },
  {
    value: 'img1',
    label: 'img1',
  },
  {
    value: 'img2',
    label: 'img2',
  },
  {
    value: 'img3',
    label: 'img3',
  },
  {
    value: 'img4',
    label: 'img4',
  },
  {
    value: 'img5',
    label: 'img5',
  },
  {
    value: 'img6',
    label: 'img6',
  },
];
const handleSection = (event) => {
  setSection(event.target.value)
}
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
        investment:'',
        section:"",
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
        investment:disease.investment,
        image:disease.image,
        section:disease.section,
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
      <h2 id="simple-modal-title" style={{marginLeft:'17px'}}>New Category</h2>
      <h1 className={classes.close} onClick={close}>+</h1>
    </div>
      {error? (<h4 className="text-center text-danger">{error}</h4>): ("")}
      <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
      <TextField  
      label="Product Name" 
      variant="outlined" 
      fullWidth onChange={e=> setDisease({...disease, name:e.target.value})} value={disease.name}
      inputProps={{
          style: {
          padding: 12,
          }
        }}
      />
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <TextField
      id="standard-start-adornment"  
      label="Interest rate" 
      type='number'
      variant="outlined" 
      style={{width:'47%'}}
    //   fullWidth 
      onChange={e=> setDisease({...disease, investment:e.target.value})} value={disease.investment}
      inputProps={{
          style: {
          padding: 12,
          },
        startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
      <TextField 
      label="Duration" 
      type='number'
      variant="outlined"
      style={{width:'47%', marginRight:'0px'}} 
    //   fullWidth 
      onChange={e=> setDisease({...disease, investment:e.target.value})} value={disease.investment}
      inputProps={{
          style: {
          padding: 12,
          },
        startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
      
      </div>
      <TextField 
      className={classes.files}
        type='file'
        fullWidth 
        onChange={uploadDisImage} 
        // value={disease.image}
        />
        <div style={{display:'flex',justifyContent:'space-between'}}>
      <TextField 
      label="Header line" 
      variant="outlined"
      style={{width:'47%'}}  
    //   fullWidth 
      onChange={e=> setDisease({...disease, header:e.target.value})} value={disease.header}
      inputProps={{
          style: {
          padding: 12,
          }
        }}
      />
      <TextField 
      label="Section" 
      variant="outlined"
      style={{width:'47%', marginRight:'0px'}}  
      select 
      onChange={e=> setDisease({...disease, section:e.target.value})}
      value={disease.section}
      inputProps={{
          style: {
          padding: 12,
          }
        }}
      >
      {sections.map(option => (
        <option key={option.value} value={option.value}>{option.value}</option>
      ))}
      </TextField>
        </div>
      <TextField 
        label="Product's descriptions"
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
        label="Product's testmonial"
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