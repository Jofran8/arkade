
import {
    Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SociosClaves = () => {
    return (
        <section>
            <div class="container-sm    mt-4 px-4">

                <div class="row">

                    <div class="col">

                        <div class="row py-3">

                            <div class="col-6 d-flex justify-content-start">
                                <h2 class=" mt-1 px-3 color-text-light">
                                   Socios claves 
                                </h2>                     

                            </div>

                            <div class="col">

                                <div class=" float-end">
                                   <Link to="/socios" class="btn btn-outline-light">Ver mas</Link>
                                </div>

                            </div>

                        </div>

                        <div class="row ">

                            <div class="col-md-3 ">

                                <div class="card bg-dark">
                                    <img class="card-img bg-dark" src="https://p4.wallpaperbetter.com/wallpaper/567/835/709/acer-wallpaper-preview.jpg" />
                                    
                                    <div class="card-footer rounded-bottom bg-black d-flex justify-content-center ">
                                        <small class="text-light">ACER</small>
                                    </div>
                                </div>

                            </div>

                            <div class=" col-md-3">

                                <div class="card bg-dark">
                                    <img class="card-img" src="https://wallpapercave.com/wp/wp7231722.png" />
                                    <div class="card-footer rounded-bottom bg-black d-flex justify-content-center">
                                        <small class="text-light">Logitech</small>
                                    </div>
                                </div>

                            </div>

                            <div class=" col-md-3">

                                <div class="card bg-dark">
                                    <img src="https://fondosmil.com/fondo/11561.jpg" class="card-img border-radius rounded-top" />
                                    <div class="card-footer rounded-bottom bg-black d-flex justify-content-center">
                                        <small class="text-light">Microsoft</small>
                                    </div>                                 
                                </div>

                            </div>

                            <div class=" col-md-3">

                                <div class="card bg-dark">
                                    <img src="https://asset.msi.com/global/picture/image/images/wallpaper/2017/msi_logo.jpg" class="card-img border-radius rounded-top" />
                                    <div class="card-footer rounded-bottom bg-black d-flex  justify-content-center">
                                        <small class="text-light">MSI</small>
                                    </div>
                                </div>

                            </div>
                        

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
 
export default SociosClaves;