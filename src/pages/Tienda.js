import '../styles/css/Tienda.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link
} from 'react-router-dom';

const Tienda = () => {

    return (
        <>
            <section className="primera-necesidad__container">
                <h1 className="primera-necesidad__title">Productos Nuevos</h1>
                <div className="cards-conatiner" id="cardsContainer1">
                <div className="card text-center" style={{ width: '15rem' }}>
                    <img src="https://www.impacto.com.pe/storage/products/md/1649273966.jpg" className="card-img-top" alt="Foto"/>
                    <div className="card-body">
                        <h5 className="card-title">TARJ. VIDEO MSI GEFORCE GTX 1650 4GB GDDR5|128 BIT</h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 1519.98</p>
                            <p className="card-text">PEN 1447.60</p>
                        </div>
                        <Link className="btn btn-danger" to="/catalogo/formPago">Comprar</Link>
                    </div>
                </div>

                <div className="card text-center" style={{ width: '15rem' }}>
                    <img src="https://m.media-amazon.com/images/I/61XYW4EO0pL._AC_SL1500_.jpg" className="card-img-top" alt="Foto" />
                    <div className="card-body">
                        <h5 className="card-title">TARJ. VIDEO PNY QUADRO RTX 4000 16GB DDR6 ( VCNRTXA4000)
                        </h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 6115.45</p>
                            <p className="card-text">PEN 5824.24</p>
                        </div>
                        <Link className="btn btn-danger" to="/catalogo/formPago">Comprar</Link>
                    </div>
                </div>
                <div className="card text-center" style={{ width: '15rem' }}>
                    <img src="https://www.impacto.com.pe/storage/products/md/1648658106.jpg" className="card-img-top" alt="Foto " />
                    <div className="card-body">
                        <h5 className="card-title">CASE DEEP COOL CC560 ( R-CC560-BKGAA4-G-1) | GAMING | NEGRO
                        </h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 272.41</p>
                            <p className="card-text">PEN 259.44</p>
                        </div>
                        <Link className="btn btn-danger" to="/catalogo/formPago">Comprar</Link>
                    </div>
                </div>

                <div className="card text-center" style={{ width: '16rem' }}>
                    <img src="https://media.kingston.com/kingston/product/ktc-product-ssd-kc600-1024gb-3-sm.jpg" className="card-img-top" alt="Foto " />
                    <div className="card-body"> 
                        <h5 className="card-title">SSD SOLIDO KINGSTON 1.92TB (S/1920G) BLISTER
                        </h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 1062.01</p>
                            <p className="card-text">PEN 1011.44</p>
                        </div>
                        <Link className="btn btn-danger" to="/catalogo/formPago">Comprar</Link>
                    </div>
                </div>

                </div>  
          
            </section>

            <section className="primera-necesidad__container">
                <h1 className="primera-necesidad__title">Sillas y Mesas Gamer</h1>
                <div className="cards-conatiner" id="cardsContainer2">
                    <div className="card text-center" style={{ width: '15rem' }}>
                        <img src="https://lawgamers.com/wp-content/uploads/2019/05/OVERTURE-SERIES-VERDE-300x300.jpg" className="card-img-top" alt="Foto" />
                        <div className="card-body">
                            <h5 className="card-title">Silla OVERTURE-SERIES-VERDE </h5>
                            <div className="d-flex flex-row justify-content-center gap-3">
                                
                                <p className="card-text">PEN 1500</p>
                            </div>
                            <Link className="btn btn-danger" to="/catalogo/formPago">Comprar</Link> 
                        </div>
                    </div>

                    <div className="card text-center" style={{ width: '15rem' }}>
                        <img src="https://lawgamers.com/wp-content/uploads/2021/10/SIERRA-GAMING-DESK.2jpg-300x300.jpg" className="card-img-top" alt="Foto" />
                        <div className="card-body">
                            <h5 className="card-title">SIERRA-GAMING-DESK</h5>
                            <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text btn-warning">AGOTADO</p>
                            <p className="card-text">PEN 1500</p>
                            </div>
                            <Link className="btn btn-danger" to="/catalogo/formPago">Comprar</Link>
                        </div>
                    </div>

                    <div className="card text-center" style={{ width: '14.5rem' }}>
                        <img src="https://lawgamers.com/wp-content/uploads/2021/05/AKRacing_Silla_Premium_Series_Red_Plus-3521_1-300x300.jpg" className="card-img-top" alt="Foto" />
                        <div className="card-body">
                            <h5 className="card-title">Silla Premium Series Red Plus-3521</h5>
                            <div className="d-flex flex-row justify-content-center gap-3">
                                <p className="card-text btn-warning">AGOTADO</p>
                                <p className="card-text">PEN 1600</p>
                            </div>
                            <Link className="btn btn-danger" to="/catalogo/formPago">Comprar</Link>
                        </div>
                    </div>

                    <div className="card text-center" style={{ width: '15rem' }}>
                        <img src="https://coolboxpe.vtexassets.com/arquivos/ids/191400-800-auto?v=637683547749300000&width=800&height=auto&aspect=true" className="card-img-top" alt="Foto" />
                        <div className="card-body">
                            <h5 className="card-title">Mesa gaming Teraware4gaming </h5>
                            <div className="d-flex flex-row justify-content-center gap-3">
                                <p className="card-text">PEN 350</p>
                            </div>
                            <Link className="btn btn-danger" to="/catalogo/formPago">Comprar</Link>
                        </div>
                    </div>
                </div>  
        
            </section>

           
        

        </>
    );
}
 
export default Tienda;