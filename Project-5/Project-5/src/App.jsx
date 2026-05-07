import {useState} from 'react';
import './App.css'
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
// import Navbar from './components/Navbar';

export default function App(){

    const [cart,setcart]=useState([]);
    const[totalAmt, settotalAmt] = useState(0);

    const product=[
        {
            id:1,
            name:"Laptop",
            price:50000,
            image:"https://g2u-wp-prod.s3-ap-southeast-2.amazonaws.com/wp-content/uploads/2025/01/shutterstock_2328203513-900x666.jpg"
        },
        {
            id:2,
            name:"Mobile",
            price:23000,
            image:"https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg"
        },
        {
            id:3,
            name:"Charger",
            price:600,
            image:"https://www.portronics.com/cdn/shop/files/Portronics_Adapto_100_Multiport_100w_Charger_1440x.png?v=1738651493"

        }
    ]


    function addToCart(product)
    {
        setcart([...cart,product]);
        settotalAmt(totalAmt => totalAmt + product.price)
    }

    function removeitem(item)
    {
        const updatecart= cart.filter((_,i)=>i!=index);
        setcart(updatecart);
    }

    // const totalAmount=cart.reduce((total,index)=>(total+index.price,0));

    return(
        <div> 
            <Header cartcou={cart.length}></Header>
            <ProductList product = {product} addToCart = {addToCart} ></ProductList> 
            <Cart totalAmt = {totalAmt}></Cart>
            
        </div>

    )
}