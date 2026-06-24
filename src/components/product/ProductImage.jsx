import React, { useState } from "react";

import img1 from "../../assets/products/Alma Oud.jpg";
import img2 from "../../assets/products/Ameera.jpg";
import img3 from "../../assets/products/BlueMoon.jpg";
import img4 from "../../assets/products/Megnus.jpg";
import img5 from "../../assets/products/Mukhallat oud.jpg";
import img6 from "../../assets/products/OUD lail.jpg";
import img7 from "../../assets/products/Peace.jpg";
import img8 from "../../assets/products/Romance men.jpg";
import img9 from "../../assets/products/fresh rose.jpg";
import img10 from "../../assets/products/janan sports.jpg";
import img11 from "../../assets/products/kirky.jpg";

const localImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

function ProductImage({ productId, title, className }) {
  const [imageError, setImageError] = useState(false);

  const index = (productId - 1) % localImages.length;
  const imageToShow = imageError ? img1 : localImages[index];

  return (
    <img
      src={imageToShow}
      alt={title}
      className={className}
      onError={function () {
        setImageError(true);
      }}
    />
  );
}

export default ProductImage;
