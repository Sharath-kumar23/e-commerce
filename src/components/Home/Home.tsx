
import Caterogry from "../Category/category";
import ProductList from "../Productlist/productlist";
import SwipeableTextMobileStepper from "../Slider/Slider";
import styles from "./home.module.scss";

const Home=()=>{
    return <div className={styles.mainWrapper}>
    <SwipeableTextMobileStepper />
     <Caterogry />
     <ProductList/>
  </div>
}

export default Home;