import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { Button } from '@material-ui/core';
import UserModal from './Modals/UserModal';


function createData(name, usertype,userrole, category, firstname, lastname, population,size, email, status) {
  return { name, usertype,userrole, category, firstname,lastname, population, size, email, status };
}
const user = {
    name:'agwero13', usertype:'Individual',userrole:'User', productcategory:'Laboratory',firstname:'Tom',lastname:'kamana', address:'Kibagabaga', phone:'+250722657890', email:'helico@waybmw.com'
}
const rows = [
  createData('agwero13', 'Individual','User','Laboratory','Tom','kamana', 'Kibagabaga', '+250722657890', 'helico@waybmw.com','pedding'),
  createData('tobias-1992', 'Individual', 'Admin','Laboratory','Claude','Mucyo','Kacyiru', '+250722657890', 'helico@waybmw.com', 'approved'),
  createData('jibson1@', 'Company', 'User','Dentistry','Tom','kamana', 'New Yourk', '+250722657890', 'helico@waybmw.com', 'pending'),
  createData('tom12', 'Individual', 'User','Hospital Equipment','Tom','kamana', 'Kampala', '+250722657890', 'helico@waybmw.com', 'pending'),
];

const useStyles = makeStyles({
  root: {
    width: '90%',
    justifyContent:'center',
    marginLeft:'50px'
  },
  username:{
      cursor:'pointer',
      color:'blue',
      fontSize:'1.1rem'
  },
  container: {
    maxHeight: 440,
    justifyContent:'center',
    
  },
  button:{
    backgroundColor:'green'
  }
});

export default function Users() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

   const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
            <TableCell component="h2">USERNAME</TableCell>
            <TableCell align="center" component="h2">USER TYPE</TableCell>
            <TableCell align="center" component="h2">PRODUCT CATEGORY</TableCell>
            <TableCell align="center" component="h2">ACTION</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index} >
                        <TableCell className={classes.username} component="th" scope="row" onClick={handleOpen}>{row.name}</TableCell>
                        <TableCell align="center">{row.usertype}</TableCell>
                        <TableCell align="center">{row.category}</TableCell>
                        <TableCell align="center"><Button variant="contained" size="small" color="primary" className={classes.button}>{row.status==='approved'? (<><DoneAllIcon /> Approved</>):'Approve'}</Button> <Button variant="contained" size="small" color="secondary" >Reject</Button></TableCell>

               </TableRow>
              );
            }
            )}
                <UserModal data={user} open={open} close={handleClose}/>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}