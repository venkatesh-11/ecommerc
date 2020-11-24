import React from 'react'
import {Link} from 'react-router-dom'

class Products extends React.Component {
    state={
        productlist: []
    }
    async componentWillMount(){
        let productlist = await fetch("https://fakestoreapi.com/products");
        productlist = await productlist.json()
        this.setState({
            productlist : productlist
        })
    }
    render(){
       let productlist = this.state.productlist.map((item,index)=>{
           return(
               <div className="col-sm-3 card">
                   <h4 className="text">{item.title}</h4>
           <Link to={`/singleproduct/?id=${item.id}`}><img className="product-box" src={item.image}/></Link>
                  <h4 className="text">Rs:{item.price}/-</h4>
               </div>
           )
       })
    return(
        <div>
            <div className="row productbox">
            {productlist}
        </div>
        </div>
    )
}
}
export default Products;