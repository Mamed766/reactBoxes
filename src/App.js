import React from "react";
import { CardItems } from "./static/db";
import cardStyle from "./components/customCard/card.module.scss";
import CustomCard from "./components/customCard";

const App = () => {
  return (
    <>
      <div className={cardStyle.responsive__grid}>
        {CardItems &&
          CardItems.map((card, index) => (
            <CustomCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
            />
          ))}
      </div>
    </>
  );
};

export default App;
