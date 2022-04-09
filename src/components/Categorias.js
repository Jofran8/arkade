import componentes from '../assets/grid-section/componentes.png'
import conectividad from '../assets/grid-section/conectividad.png'
import equipos from '../assets/grid-section/equipos.png'
import perifericos from '../assets/grid-section/perifericos.png'
import monitores from '../assets/grid-section/monitores.png'
import '../styles/css/Categorias.css';
const Categorias = () => {
    return ( 
<section className="container-img">
<div className="box-img">
    <a href="#">
        <figure>
            <img src={componentes} alt="img-galeria"/>
        </figure>
    </a>
</div>
<div className="box-img">
    <a href="#">
        <figure>
            <img src={equipos} alt="img-galeria"/>
        </figure>
    </a>
</div>
<div className="box-img">
    <a href="#">
        <figure>
            <img src={perifericos}alt="img-galeria"/>
        </figure>
    </a>
</div>
<div className="box-img">
    <a href="#">
        <figure>
            <img src={monitores} alt="img-galeria"/>
        </figure>
    </a>
</div>
<div className="box-img">
    <a href="#">
        <figure>
            <img src={conectividad} alt="img-galeria"/>
        </figure>
    </a>
</div>
</section>
);
}
 
export default Categorias;