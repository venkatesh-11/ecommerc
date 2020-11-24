import React from 'react'
import {Link} from 'react-router-dom';


class Home extends React.Component{
    state={
        products:[]
    }
    async componentWillMount(){
        let products = await fetch("https://fakestoreapi.com/products");
        products = await products.json()
        this.setState({
            products : [products[0],products[1],products[2]]
        })
    }
    render(){
     let products = this.state.products.map((product,index)=>{
         return(
             <div className=" card col-sm-3 ">
                 <h4 className="text">{product.title}</h4>
                 <Link to="/products"><img className="image-box" src={product.image}/></Link>
             </div>
         )
     })  
        
    return(
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_G3M/GW/Flash_Sale/Sale_Today/V239463881_IN_WLME_Redmi_G3M_LandingPage_DesktopTallHero_1500x600_2._CB406394555_.jpg" height="600px" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_G3M/GW/Flash_Sale/Sale_Today/V239463881_IN_WLME_Redmi_G3M_LandingPage_DesktopTallHero_3000x1200_2._CB406394554_.jpg" class="d-block w-100 home-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" height="600px" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg" class="d-block w-100 home-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/OP43/V239389280_IN_HETV_OnePlus_LatestNMLandingpage_43y1_GW_PC_1500x600_1._CB404409311_.jpg" height="600px" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/OP43/V239389280_IN_HETV_OnePlus_LatestNMLandingpage_43y1_GW_PC_3000x1200_1._CB404409311_.jpg" class="d-block w-100 home-image" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            <div className="row box">  
        {products}
        </div>
        </div>
    )
}
}
export default Home;