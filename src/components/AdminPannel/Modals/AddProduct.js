import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal, TextField, Button} from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    borderRadius:'10px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:'60%'
  },
  root: {
    '& > *': {
      margin: theme.spacing(2),
    //   width: '25ch',

    },
  },
  inputModal:{
      display:'flex',
      justifyContent:'space-around',
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
    opacity:'0.3'
  }
}));

export default function AddProduct({data, open, close}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
    <div className={classes.headers}>
      <h2 id="simple-modal-title" style={{marginLeft:'17px'}}>Add product</h2>
      <h1 className={classes.close} onClick={close}>+</h1>
    </div>
      
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.inputModal}>
            <TextField id="outlined-basic" label="Available Qty ..." variant="outlined" />
            <TextField id="outlined-basic" label="Min Qty ..." variant="outlined" />
            <TextField id="outlined-basic" label="Auto supply Qty ..." variant="outlined" />
        </div>
    </form>
    <div className={classes.modalButton}>
      <Button variant="outlined">Cancel</Button>
      <Button variant="outlined" color="primary">
        add
      </Button>
    </div>
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