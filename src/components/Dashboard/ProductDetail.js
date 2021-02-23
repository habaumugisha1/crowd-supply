import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions,CardContent} from '@material-ui/core';
import {Link} from "react-router-dom";
import { productData } from './ProductDammyData'
import Viebeglogo from './../../images/viebeg-logo.jpg'; 
import productTestimonial from './../../images/producttestimonial.jpg'; 



const useStyles = makeStyles({
    container:{
        display:'flex',
        marginTop:'50px',
        justifyContent:'space-between',
        marginBottom:"30px",
        '@media(max-width: 414px)' : {
       display: 'flex',
       flexDirection:'column'

    },
    },
    logo:{
        width: "94px",
        height: "30px",
        marginBottom:'10px',
        '@media(max-width: 414px)' : {
       display: 'none',
    },
    },
  root: {
    border:'none',
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  product__testimonial:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    maxWidth:'800px'
  },
  pos: {
    marginBottom: 12,
  },
  image:{
      width:'100%',
      height:'250px',
      marginBottom:'20px'
  },
  prod__testm:{
    width:'30vw',
    height:'30vh'
  },
   prod__testm__text:{
    width:'32vw',
    height:'30vh',
    overflowY:'scroll',
    // marginTop:'20px'
  },
  testim__image:{
     width:'30vw',
    height:'30vh',
  }
});

function ProductDetail(props) {
  const arrayId = props.history.location.pathname.split('/').reverse()
  const productId = parseInt(arrayId[0])
    let singleProduct = productData.find(product =>product.id=productId)
  console.log( singleProduct)
    const classes = useStyles();
  

    return (
        <div>
        {/* <NavBar />
        <Divider /> */}
        <Container maxWidth="md" className={classes.container}>
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            <h4>{singleProduct.title}</h4>
         
        </Typography>
        <img src={singleProduct.image} alt="product images" className={classes.image} />
         
        <Typography variant="body2" component="p">
          {singleProduct.description}
          <br />
        </Typography>
      </CardContent>
    </Card>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <img src={Viebeglogo} alt="Viebeg" className={classes.logo}/>
        
               <ul className="list-group list-group-flush bg-gray">
                    <li className="list-group-item bg-gray">
                        <div className="row">
                        <span className="col">Funding level</span><span className="col-auto crowd-text-bolder">{singleProduct.fundinglevel}</span>
                        </div>
                    </li>
                    <li className="list-group-item bg-gray py-2">
                        <div className="row">
                        <span className="col text-info">Interest rate</span><span className="col-auto crowd-text-bold text-info">{singleProduct.interest}</span>
                        </div>
                        <div className="row">
                        <span className="col">Duration</span><span className="col-auto crowd-title font-weight-bold">{singleProduct.duration}</span>
                        </div>
                    </li>
                    <li className="list-group-item bg-gray py-2">
                        <div className="row">
                        <span className="col">Investors</span><span className="col-auto crowd-title font-weight-bold">{singleProduct.investors}</span>
                        </div>
                        <div className="row">
                        <span className="col">Funding limit</span><span className="col-auto crowd-title font-weight-bold">{singleProduct.fundinglimit}</span>
                        </div>
                    </li>
                    <li className="list-group-item bg-gray py-2 border-bottom-0">
                        <div className="row mx-2">
                        <span className="col crowd-text-bolder">{singleProduct.alreadyinvested}</span><span className="col-auto line-heihgt-crowd mt-1">Already invested</span>
                        </div>
                    </li>
               </ul>
                <Link to="/lendnow" className="btn-crowd btn-primary btn-block">Invest now</Link>
            
      </CardContent>
      <CardActions>
       <div className="card-body border-gray py-2" style={{border:"2px gray solid", width:"100px"}}>
                        <div className="row">
                        <span className="col"><b>Disclaimer</b></span><span className="col-auto">Thanks for enlightening me on “fr.” I’m currently reading Rachel Andrew’s book</span>
                        </div>
                     </div>
      </CardActions>
    </Card>
  </Container>
  <i><h3 style={{textAlign:'center', fontFamily:"monospace"}}>Product's testimonials</h3></i>
  <Container maxWidth="md" className={classes.container}>
  <div className={classes.prod__testm}> 
    <img src={productTestimonial} alt="testimonial" className={classes.testim__image} /> 
  </div>
  <div className={classes.prod__testm__text}>with children who experience dental pain missing school and performing poorly academically.1 Similarly, untreated oral diseases can cause severe pain and infection, leading to poor productivity and absenteeism among adults in the workplace. One defining characteristic of happy people is they tend to hang out with other happy people. Misery loves company, and unhappy people gravitate toward others who share their negative sentiments.

If you’re struggling with a bout of sadness, depression, worry, or anger, spend more time with your happiest friends or family members. Chances are, you’ll find that their positive attitude rubs off on you.</div>
  </Container>
        
  </div>
    )
}

export default ProductDetail
