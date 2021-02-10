import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
    // width: 500,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function UserModal({data, open, close}) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{textAlign:'center'}}>User details</h2>
      <p id="simple-modal-description">
        <h4>Full name: {data.lastname} {data.firstname}</h4>
        <h4>User role: {data.userrole}</h4>
        <h4>Email: {data.email}</h4>
        <h4>Phone: {data.phone}</h4>
        <h4>Address: {data.address}</h4>
        <h4>Product category: {data.productcategory}</h4>
      </p>
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