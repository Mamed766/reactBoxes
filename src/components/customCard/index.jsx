import React from "react";

import cardStyle from "./card.module.scss";

const CustomCard = ({ title, desc, icon: Icon }) => {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.card__icon}>
        <Icon size={40} />
      </div>
      <div className={cardStyle.card__title}>
        <h2>{title}</h2>
      </div>
      <div className={cardStyle.card__content}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CustomCard;
