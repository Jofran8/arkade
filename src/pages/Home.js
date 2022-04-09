import Carrousel from '../components/Carrousel';
import ProductosNuevos from '../components/ProductosNuevos';
import SociosClaves from '../components/SociosClaves';
import Promocion from '../components/Promocion';
import Categorias from '../components/Categorias';

const Home = () => {
    return (
        <>
           <Carrousel/>
           <Categorias/>
           <ProductosNuevos/>
           <SociosClaves/>
           <Promocion/>
        </>
    );
}
 
export default Home;