import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer,TableHead, TablePagination, TableRow, Tooltip, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { categoriesData } from "./CategoryData";
import { subCategoriesData } from "./SubCategoryData";
import { subCategoriesProductData } from "./product";
import SubCatProductSupplyModal from "../Modals/SubCatProductSupplyModal";
import AddProduct from "../Modals/AddProduct";


// display data on category
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);



const useStyles = makeStyles((theme)=>({
    forms: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      padding:'10px'
    },
  },
  cat:{
      color:'blue',
      '&&:hover':{
          cursor:'pointer'
      }
  },
  texts:{
    color:'green',
    '&&:hover':{
          cursor:'pointer'
      },
      fontSize:'0.7rem'
  },
  root: {
    width: '70vw',
    justifyContent:'center',
    // marginLeft:'50px',
    padding:'30px'
  },
  container: {
    width:'100%',
    maxHeight: 440,
    display:'flex',
    justifyContent:'center',
    
  },
   margin: {
    margin: theme.spacing(1),
  },
  button:{
    backgroundColor:'green'
  },
  newDesease:{
    float:'right',
    marginBottom:'10px'
  },
  top:{
    display:'flex',
    justifyContent:'space-between'
  }
}));

export default function Categories(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currency, setCurrency] = useState('Category');
  const [category, setCategory] = useState(false)
  const [subCategory, setSubCategory] = useState(false)
  const [subCategoryProduct, setSubCategoryProduct] = useState(false)
  const [open, setOpen] = useState(false);
  const [openAddProduct, setOpenAddProduct] = useState(false);

const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenAddPro = () => {
    setOpenAddProduct(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAddProduct = () => {
    setOpenAddProduct(false);
  };
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

useEffect(() => {
    setCategory(categoriesData)
}, [])

const handleSubCategoryProduct =() => {
    setSubCategory(false)
    setSubCategoryProduct(true)
}

const handleSubCategory = (id) => {
    subCategoriesData.filter(data => {
       const subCat = data.categoryId===id
       if(subCat) {
           setCategory(false)
           setSubCategory([data])
        console.log([data])
       }
    })
}

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

  return (
      // <>
        <Paper className={classes.root}>
        <div className={classes.top}>
          <h4>Disease </h4>
        
            <Button variant="contained" color="primary" className={classes.newDesease} onClick={handleOpenAddPro}> <AddIcon /> Add new disease</Button>
          </div>
        <TableContainer className={classes.container}>
            <Table style={{width:"100%", borderRight: "1px solid lightgrey", borderLeft: "1px solid lightgrey", borderTop: "1px solid lightgrey"}} stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
                <TableCell component="h2">NAME</TableCell>
                <TableCell align="left" component="h2">ACTION</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                { category? category.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        
                            <HtmlTooltip
                                arrow
                                title={
                                <React.Fragment>
                                    <img src={row.image} alt="category images"/>
                                    <Typography >{row.description.substring(1, 100)}</Typography>
                                </React.Fragment>
                                }
                            >
                            
                            <TableCell className={classes.cat} component="th" scope="row"  key={row.id} >{row.name}</TableCell> 
                            </HtmlTooltip>
                            <TableCell align="left"><Button><EditIcon color="primary"/></Button><Button><DeleteIcon color="secondary"/></Button></TableCell>
                    </TableRow>
                );
                }
                ):""}
                {subCategory? subCategory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                            {/* <Link href="#" > */}
                            <HtmlTooltip
                                arrow
                                title={
                                <React.Fragment>
                                    <img src={row.image} alt="category images"/>
                                    <Typography >{row.description}</Typography>
                                </React.Fragment>
                                }
                            >
                            
                            <TableCell className={classes.cat} component="th" scope="row"  key={row.id} onClick={handleSubCategoryProduct}>{row.name}</TableCell> 
                            </HtmlTooltip>
                            {/* </Link> */}
                            <TableCell align="right">{row.code}</TableCell>
                            <TableCell align="right">-</TableCell>
                            <TableCell align="right">-</TableCell>
                            {/* </TableRow>
                    ))} */}
                    </TableRow>
                );
                }
                ):""}
                {subCategoryProduct? subCategoriesProductData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                            {/* <Link href="#" > */}
                            <HtmlTooltip
                                arrow
                                title={
                                <React.Fragment>
                                    <img src={row.image} alt="category images"/>
                                    <Typography >{row.description}</Typography>
                                </React.Fragment>
                                }
                            >
                            
                            <TableCell className={classes.cat} component="th" scope="row"  key={row.id} onClick={handleSubCategoryProduct}>{row.name}</TableCell> 
                            </HtmlTooltip>
                            {/* </Link> */}
                            <TableCell align="right">{row.code}</TableCell>
                            <TableCell align="right" className={classes.texts} onClick={handleOpen}>REQUEST SUPPLY</TableCell>
                            <TableCell align="right" className={classes.texts} onClick={handleOpenAddPro}>ADD TO STOCK</TableCell>
                            {/* </TableRow>
                    ))} */}
                    </TableRow>
                );
                }
                ):""}
                <SubCatProductSupplyModal open={open} close={handleClose}/>
                <AddProduct open={openAddProduct} close={handleCloseAddProduct} />
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={categoriesData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
    // </>
  );
}