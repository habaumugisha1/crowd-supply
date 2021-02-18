import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer,TableHead, TablePagination, TableRow, MenuItem, TextField, Tooltip, Typography } from '@material-ui/core';

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
    width: '90%',
    justifyContent:'center',
    marginLeft:'50px',
    padding:'30px'
  },
  container: {
    maxHeight: 440,
    justifyContent:'center',
    
  },
   margin: {
    margin: theme.spacing(1),
  },
  button:{
    backgroundColor:'green'
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
       } else{
         (<h3>not result found</h3>)
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
  const currencies = [
  {
    value: 'category',
    label: 'Category',
  },
  {
    value: 'subcategory',
    label: 'Subcategory',
  },
  {
    value: 'products',
    label: 'Products',
  }
];

  return (
      <>
      <h4 style={{marginLeft:'49px', marginTop:'-20px'}}>Products and categories</h4>
        <Paper className={classes.root}>
    
        <form className={classes.forms} noValidate autoComplete="off">
        <TextField
            select
            value={currency}
            onChange={handleChange}
            variant="outlined"
            >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        <TextField
            className={classes.margin}
            label="Search ..."
            variant="outlined"
            />
            </form>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
                <TableCell component="h2">NAME</TableCell>
                <TableCell align="right" component="h2">CODE</TableCell>
                <TableCell align="right" component="h2">REQUEST</TableCell>
                <TableCell align="right" component="h2">ACTION</TableCell>
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
                                    <Typography >{row.description}</Typography>
                                </React.Fragment>
                                }
                            >
                            
                            <TableCell className={classes.cat} component="th" scope="row"  key={row.id} onClick={() => handleSubCategory(row.id)}>{row.name}</TableCell> 
                            </HtmlTooltip>
                            <TableCell align="right">{row.code}</TableCell>
                            <TableCell align="right">-</TableCell>
                            <TableCell align="right">-</TableCell>
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
    </>
  );
}