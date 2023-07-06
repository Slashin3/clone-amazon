import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          src={require("./hero.jpg")}
          alt="kitchen"
          className="home__image"
        ></img>
        <div className="home__row">
          {/*Product*/}
          <Product
            id={1}
            title="ConairMAN Lithium Ion All-in-1 Beard, Ear, Nose and Body Hair Trimmer
          for Men"
            price={19.99}
            rating={4}
            image={require("./conairMAN.jpg")}
          />
          {/*Product*/}
          <Product
            id={2}
            title="Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone"
            price={31.99}
            rating={5}
            image={require("./airPods.jpg")}
          />
        </div>
        <div className="home__row">
          {/*Product*/}
          <Product
            id={3}
            title="Amazon Fire HD 10 Tablet"
            price={89.99}
            rating={4}
            image={require("./amazon_FireHD_10_Tablet.jpg")}
          />
          {/*Product*/}
          <Product
            id={4}
            title="Amazon Essentials Women's High-Rise Skinny Jean"
            price={25.6}
            rating={4}
            image={require("./jeans.jpg")}
          />
          {/*Product*/}
          <Product
            id={5}
            title="Hismile v34 Colour Corrector, Purple Teeth Whitening, Tooth Stain Removal, Teeth Whitening Booster, Purple Toothpaste, Colour Correcting, Hismile V34, Hismile Colour Corrector, Tooth Colour Corrector"
            price={23.2}
            rating={4}
            image={require("./color_corrector.jpg")}
          />
        </div>
        <div className="home__row">
          {/*Product*/}
          <Product
            id={6}
            title="Type TV LED TV 65-inch LCD TV 32-inch Curved TV Intelligent Network Screen Type LED LCD"
            price={7500.0}
            rating={5}
            image={require("./tv.jpg")}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
