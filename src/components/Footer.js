import '../styles/css/Footer.css';
import facebook from '../assets/img/facebook.svg';
import instagram from '../assets/img/instagram.svg';
import twiter from '../assets/img/twitter.svg';
import youtube from '../assets/img/youtube.svg';

const documentReady = () => {
    let button = document.getElementById("footerScrollToTopContainer");

    var rootElement = document.documentElement;

    function backToTop() {
        rootElement.scrollTo(
            {
                top: 0 ,
                behavior: 'smooth',
            }
        ) 
    }
    
    button.addEventListener("click", backToTop);
};
document.addEventListener('DOMContentLoaded', documentReady);

const Footer = () => {

    return (
        <footer class="footer">
        <article class="footer__credits-container">

            <section class="footer__credits-up">

                <article class="footer-credits-up__items-container">

                    <div class="footer-credits-up__links-icons">
                        <ul class="footer-credits-up__links-icons">
                            <li class="footer-credits-up__links">
                                <a href="https://www.youtube.com/channel/UC5Qk8mWBwtMyEj7iQQYRk1A"
                                    class="footer-credits-up__link-icon">
                                    <img src={youtube} alt="youtubeIcon" class="footer-credits-up__icon" />
                                </a>
                            </li>
                            <li class="footer-credits-up__links">
                                <a href="https://www.facebook.com/epicgames" class="footer-credits-up__link-icon">
                                    <img src={facebook} alt="facebookIcon" class="footer-credits-up__icon" />
                                </a>
                            </li>
                            <li class="footer-credits-up__links">
                                <a href="https://www.instagram.com/epicgames/?hl=es"
                                    class="footer-credits-up__link-icon">
                                    <img src={instagram} alt="instagramIcon"
                                        class="footer-credits-up__icon" />
                                </a>
                            </li>
                            <li class="footer-credits-up__links">
                                <a href="https://twitter.com/epicgameses?lang=es" class="footer-credits-up__link-icon">
                                    <img src={twiter} alt="twitterIcon" class="footer-credits-up__icon" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-credits-up__arrow-content" id="footerScrollToTopContainer">
                        <button type="button" class="footer-credits-up__arrow-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                class="footer-credits-up__arrow">
                                <title />
                                <g data-name="Layer 2" id="Layer_2">
                                    <path
                                        d="M1,16A15,15,0,1,1,16,31,15,15,0,0,1,1,16Zm2,0A13,13,0,1,0,16,3,13,13,0,0,0,3,16Z"
                                        fill="#6c6c6c" />
                                    <path
                                        d="M10.41,19.87,16,14.29l5.59,5.58a1,1,0,0,0,1.41,0h0a1,1,0,0,0,0-1.41L16.64,12.1a.91.91,0,0,0-1.28,0L9,18.46a1,1,0,0,0,0,1.41H9A1,1,0,0,0,10.41,19.87Z"
                                        fill="#6c6c6c" />
                                </g>
                            </svg>
                        </button>

                    </div>

                </article>

                <article class="footer-credits-up__list-container">
                    <section class="footer-credits-up__resources-list-content">
                        <p class="footer-credits-up__resources-list-title">Recursos</p>
                        <ul class="footer-credits-up__resources-list">
                            <li class="footer-credits-up__links-list">
                                <a href="https://dev.epicgames.com/en-US/home" class="footer-credits-up__link">Servicios
                                    en linea</a>
                            </li>
                            
                            <li class="footer-credits-up__links-list">
                                <a href="https://store.epicgames.com/es-ES/publish"
                                    class="footer-credits-up__link">Catalogo</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/site/es-ES/careers"
                                    class="footer-credits-up__link">Empleo</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/site/es-ES/about"
                                    class="footer-credits-up__link">Empresa</a>
                            </li>
                            <li class="footer-credits-up__links-list">
                                <a href="https://www.epicgames.com/site/es-ES/fan-art-policy"
                                    class="footer-credits-up__link">Política</a>
                            </li>
                            
                            
                            
                        </ul>
                    </section>
                </article>

              
            </section>

            <hr class="footer__line-divider" />

            <section class="footer__credits-down">
                <article class="footer-credits-down__content">
                    <div class="footer-credits-down__paragraph-content">
                        <p class="footer-credits-down__paragraph">
                            &copy; 2022, Arkade, Inc. Todos los derechos reservados. Arkade, el
                            logotipo de Arkade, es una tienda de Cómputo con la Mayor Variedad de Productos Informáticos a los Mejores Precios. Venta de Computadoras, Accesorios, Productos Gamer y mas.,tanto en Peru como al resto de la region. Otras marcas o nombres de productos son marcascomerciales de sus respectivos proietarios. Las transacciones fuera de Peru. se
                            realizan a través de Arkade International.
                        </p>
                    </div>

                    <ul class="footer-credits-down__links-item-list">
                        <li class="footer-credits-down__link-item">
                            <a href="https://www.epicgames.com/site/es-MX/tos"
                                class="footer-credits-down__link">Términos de servicio</a>
                        </li>
                        <li class="footer-credits-down__link-item">
                            <a href="https://www.epicgames.com/site/es-MX/privacypolicy"
                                class="footer-credits-down__link">Política de
                                privacidad</a>
                        </li>
                        <li class="footer-credits-down__link-item">
                            <a href="https://www.epicgames.com/site/es-MX/store-refund-policy"
                                class="footer-credits-down__link">Política de
                                reembolso de la tienda</a>
                        </li>
                    </ul>



                </article>
            </section>
        </article>
    </footer>
    );
}
 
export default Footer;