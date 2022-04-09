import React from "react";
import CardSocio from "./CardSocio";

const cards = [
  {
      id: 1,
      title: "Acer",
      price: "0",
      image: "https://1000marcas.net/wp-content/uploads/2020/01/Acer-Logotipo.jpg",
      description: "es una empresa taiwanesa fabricante de computadoras y productos informáticos. Es uno de los tres mayores fabricante de computadoras a nivel mundial y la mayor empresa de venta al por menor de computadoras en Taiwán.",
  },
  
  {
    id: 2,
      title: "Logitech",
      price: "0",
      image: "https://cdn.freebiesupply.com/logos/large/2x/logitech-gaming-4-logo-png-transparent.png",
      description: "Logitech es una empresa suiza dedicada a la electrónica que fabrica periféricos para computadoras personales ",
  },
  {
    id: 3,
      title: "HP",
      price: "0",
      image: "https://brandemia.org/contenido/subidas/2014/03/logo_hp_principal.jpg",
      description: "Hewlett-Packard Company, más conocida como HP, fue una empresa de tecnología estadounidense, dedicada a la fabricación y comercialización de hardware y software.",
  },
  {
    id: 4,
      title: "Microsoft",
      price: "0",
      image: "https://www.adslzone.net/app/uploads-adslzone.net/2020/03/aperMicrosoft.jpg",
      description: "Microsoft Corporation es una empresa tecnológica multinacional con sede en Redmond, Washington, Estados Unidos.",
  },
  {
    id: 5,
      title: "MSI",
      price: "0",
      image: "https://1000marcas.net/wp-content/uploads/2020/03/MSI-Colores.jpg",
      description: "Micro-Star International, Co., Ltd es una empresa multinacional taiwanesa de tecnología de la información.",
  },
  {
    id: 6,
      title: "ASUS",
      price: "0",
      image: "https://dlcdnimgs.asus.com/websites/global/Sno/79183.jpg",
      description: "ASUSTeK Computer, Inc., conocida simplemente como ASUS, es una corporación multinacional de hardware, electrónica y robótica​.",
  },
  {
    id: 7,
      title: "Kingston",
      price: "0",
      image: "https://www.estamosenlinea.com/wp-content/uploads/2020/10/Kingston-Technology.jpg",
      description: "Kingston Corporation es un fabricante estadounidense de productos de memorias de ordenadores. Está localizado en Fountain Valley, California. ",
  },
  {
    id: 8,
      title: "Dell",
      price: "0",
      image: "https://computadorasytecnologia.com/uploads/134901174-2232/slider/1618d65ada973d.jpg",
      description: "Dell es una compañía multinacional estadounidense establecida en Round Rock, la cual desarrolla, fabrica, vende y da soporte a computadoras personales.",
  },
 
];


  const CardsSocios = ({ titulo }) => {
  return (
    
    <div className="container">
      <h1 className="title">{titulo}</h1>
      <div className="row">
        {cards.map(({ title, image, url, id ,description}) => (
          <div className="col-md-4" key={id}>
            <CardSocio imageSource={image} title={title} url={url} description={description}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsSocios;