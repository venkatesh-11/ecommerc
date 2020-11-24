import React from 'react'
import {Link} from 'react-router-dom';
import queryString from 'query-string'

class Singleproduct extends React.Component{
    state={
        singleproduct: {}
    }
    async componentWillMount(){
        let {id}=queryString.parse(this.props.location.search)
        let singleproduct = await fetch(`https://fakestoreapi.com/products/${id}`)
        singleproduct = await singleproduct.json()
        this.setState({
            singleproduct : singleproduct
        })
    }
    render(){
        let singleproduct =(
            
                <div className=" card col-sm-5">
                    <h4 className="text">{this.state.singleproduct.title}</h4>
                    <img className="product-box" src={this.state.singleproduct.image}/>
                    <h5 className="text">{this.state.singleproduct.category}</h5>
                    <p className="text">{this.state.singleproduct.description}</p>
                    <h4 className="text">Rs:{this.state.singleproduct.price}/-</h4>
                    <Link to="/cart"><button className="button">Add to cart</button></Link>
                </div>
            
        )
    return(
        <div>
            <div className="row productbox">
            {singleproduct}
            </div>
        </div>
    )
}
}
export default Singleproduct;