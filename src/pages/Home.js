import Carrousel from '../components/Carrousel';
import ProductosNuevos from '../components/ProductosNuevos';
import SociosClaves from '../components/SociosClaves';
import Explora from '../components/Explora';
import Promocion from '../components/Promocion';

const Home = () => {
    return (
        <>
           <Carrousel/>
           <ProductosNuevos/>
           <Explora/>
           <SociosClaves/>
           <Promocion/>
        </>
    );
}
 
export default Home;