import '../styles/css/Tienda.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductosNuevos = () => {
    return (
        <section className="primera-necesidad__container">
            <h1 className="primera-necesidad__title">Nuevos Productos</h1>
            <div className="cards-conatiner">
                <div className="card text-center" style={{ width: '15rem' }}>
                    <img src="https://www.impacto.com.pe/storage/products/md/1649273966.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">TARJ. VIDEO MSI GEFORCE GTX 1650 4GB GDDR5|128 BIT</h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 1519.98</p>
                            <p className="card-text">PEN 1447.60</p>
                        </div>
                        <button className="btn btn-danger">Saber Mas</button>
                    </div>
                </div>

                <div className="card text-center" style={{ width: '15rem' }}>
                    <img src="https://m.media-amazon.com/images/I/61XYW4EO0pL._AC_SL1500_.jpg" class="card-img-top" alt="Foto de videojuego" />
                    <div className="card-body">
                        <h5 className="card-title">TARJ. VIDEO PNY QUADRO RTX 4000 16GB DDR6 ( VCNRTXA4000)
                        </h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 6115.45</p>
                            <p className="card-text">PEN 5824.24</p>
                        </div>
                        <button className="btn btn-danger">Saber Mas</button>
                    </div>
                </div>
                <div className="card text-center" style={{ width: '15rem' }}>
                    <img src="https://www.impacto.com.pe/storage/products/md/1648658106.jpg" class="card-img-top" alt="Foto de videojuego" />
                    <div className="card-body">
                        <h5 className="card-title">CASE DEEP COOL CC560 ( R-CC560-BKGAA4-G-1) | GAMING | NEGRO
                        </h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 272.41</p>
                            <p className="card-text">PEN 259.44</p>
                        </div>
                        <button className="btn btn-danger">Saber Mas</button>
                    </div>
                </div>

                <div className="card text-center" style={{ width: '16rem' }}>
                    <img src="https://media.kingston.com/kingston/product/ktc-product-ssd-kc600-1024gb-3-sm.jpg" class="card-img-top" alt="Foto de videojuego" />
                    <div className="card-body"> 
                        <h5 className="card-title">SSD SOLIDO KINGSTON 1.92TB (S/1920G) BLISTER
</h5>
                        <div className="d-flex flex-row justify-content-center gap-3">
                            <p className="card-text text-decoration-line-through">PEN 1062.01</p>
                            <p className="card-text">PEN 1011.44</p>
                        </div>
                        <button className="btn btn-danger">Saber Mas</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default ProductosNuevos;