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
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  modalButton :{
    '& > *': {
      margin: theme.spacing(1),
    },
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

export default function SubCatProductSupplyModal({data, open, close}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  

  const body = (
    <div style={modalStyle} className={classes.paper}>
    <div className={classes.headers}>
      <h2 id="simple-modal-title" style={{textAlign:'center'}}>Request supply</h2>
      <h1 className={classes.close} onClick={close}>+</h1>
    </div>
      <p id="simple-modal-description">
           You are about to send a request for supply of .
        </p>
        <p id="simple-modal-description">
          Enter the quantity of the required product to proceed.
      </p>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Quantity ..." variant="outlined" />
    </form>
    <div className={classes.modalButton}>
      <Button variant="outlined">Cancel</Button>
      <Button variant="outlined" color="primary">
        REQUEST
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