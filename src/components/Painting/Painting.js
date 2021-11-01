import React from "react";
import PropTypes from "prop-types";

const Painting = ({ title, url, price, profileUrl, tag, quantity }) => {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор:
        <a href={profileUrl}>{tag}</a>
      </p>
      <p>Цена:{price} кредитов</p>
      <p>Доступность:{quantity < 10 ? "Закінчується" : "Є в наявності"}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
