
import Caterogry from "../Category/category";
import SwipeableTextMobileStepper from "../Slider/Slider";
import styles from "./home.module.scss";

const Home=()=>{
    return <div className={styles.mainWrapper}>
    <SwipeableTextMobileStepper />
     <Caterogry />
  </div>
}

export default Home;