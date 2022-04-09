
import Intel from '../assets/Categorias/Intel.jpg';
import accesorios from '../assets/Categorias/accesorios.jpg';
import sum from '../assets/Categorias/sum.jpg';
const Explora = () => {
    return (
        <div class="container__cards">
        <div class="cards">
            <div class="cover__card">
                <img src={Intel} alt="Imagen" />
            </div>
            <h2>Componentes de PC</h2>
            <p>Placas Base · Procesadores · Tarjetas Gráficas · Memoria RAM · Grabadoras DVD/Blu Ray · Multilectores · Tarjetas de Sonido · Torres / Cajas.</p>
            
        </div>
        <div class="cards">
            <div class="cover__card">
                <img src={accesorios} alt="Imagen" />
            </div>
            <h2>Accesorios</h2>
            <p>Teclado mecánico. Mouse óptico con botones adicionales. Mousepad.Silla ergonómica. Audífonos con micrófono.Joystick.VR.</p>
            
        </div>
        <div class="cards">
            <div class="cover__card">
                <img src={sum} alt="Imagen" />
            </div>
            <h2>Suministros</h2>
            <p>Suministros, Impresoras, Tintas, Cintas, Toner, Antivirus, Disco duros, Memorias, Monitores, Routers. HP, Lexmark, Canon, Epson. Servicio Técnico.</p>
            
        </div>
    </div>
    );
}
 
export default Explora;