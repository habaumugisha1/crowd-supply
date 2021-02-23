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


const useStyles = makeStyles(theme =>({
  root: {
    position:'relative',
    width: '70%',
    justifyContent:'center',
    marginLeft:'50px',
    padding:'10px'
  },
  username:{
    //   cursor:'pointer',
      color:'blue',
      fontSize:'1.1rem'
  },
  table:{
      width:'100%'
  },
  container: {
    width: '100%',
    justifyContent:'center',
    position:'relative',
    
  },
  button:{
    backgroundColor:'green'
  },
  rows:{
      width:'100%'
  }
}));

const supplies = [
    {id:1, username:'tom', product:'product1', price:1375},
    {id:2, username:'kim', product:'product2', price:1375},
    {id:3, username:'summy', product:'product3', price:1375},
    {id:4, username:'json', product:'product4', price:1375},
    {id:5, username:'mucyo1', product:'product5', price:1375},
    {id:6, username:'aime23', product:'product6', price:1375}
]

function Supply() {
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
        <Paper className={classes.root}>
            <h4 className="">Manage supplies/lending request</h4>
        <TableContainer className={classes.table}>
        <Table style={{width:"100%", borderRight: "1px solid lightgrey", borderLeft: "1px solid lightgrey", borderTop: "1px solid lightgrey"}} stickyHeader aria-label="sticky table">
        <TableHead className={classes.container}>
          <TableRow className={classes.rows}> 
            <TableCell align="center" component="h2">REQUEST ID</TableCell>
            <TableCell align="center" component="h2">USERNAME</TableCell>
            <TableCell align="center" component="h2">PRODUCT CATEGORY</TableCell>
            <TableCell align="center" component="h2">PRICE</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
            {supplies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow hover role="checkbox" >
                    <TableCell  component="th" scope="row" >{row.id}</TableCell>
                        <TableCell align="center" component="th" className={classes.username}>{row.username}</TableCell>
                        <TableCell align="center">{row.product}</TableCell>
                        <TableCell align="center">${row.price}</TableCell>
                </TableRow>
            ))}
         </TableBody>
         </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={supplies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
        </Paper>
    )
}

export default Supply
