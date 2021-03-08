import React, { useState, useLayoutEffect, useEffect, useRef } from "react";

export const Card = props => {
  const { name, imageSrc, info, ability, callbackAbility } = props;
  const {
    height,
    weight,
    type,
    speed,
    hp,
    attack,
    defense,
    specialDefense,
    specialAttack
  } = info;

  const defaultMessage = "...";
  const { normal, hidden } = ability;
  return (
    <div className={`card u-full-width ${type}`} data-testid="card">
      <div className="imageWrapper">
        <img src={imageSrc} className="pokemon-image" />
      </div>
      <div className="textWrapper">
        <div className="pokemon-type">{type || defaultMessage}</div>
        <div className="pokemon-name">{name || defaultMessage}</div>

        <div className="pokemon-info">
          <div className="pokemon-column">HP:</div>{" "}
          <div className="pokemon-value">{hp}</div>
        </div>
        <div className="pokemon-info">
          <div className="pokemon-column">Attack:</div>{" "}
          <div className="pokemon-value">{attack}</div>
        </div>
        <div className="pokemon-info">
          <div className="pokemon-column">Defense:</div>{" "}
          <div className="pokemon-value">{defense}</div>
        </div>
        <div className="pokemon-info">
          <div className="pokemon-column">Special Attack:</div>{" "}
          <div className="pokemon-value">{specialAttack}</div>
        </div>
        <div className="pokemon-info">
          <div className="pokemon-column">Special Defense:</div>{" "}
          <div className="pokemon-value">{specialDefense}</div>
        </div>
        <div className="pokemon-info">
          <div className="pokemon-column">Speed:</div>{" "}
          <div className="pokemon-value">{`${speed} m/s`}</div>
        </div>
        <div className="pokemon-info">
          <div className="pokemon-column">Height:</div>{" "}
          <div className="pokemon-value">{`${height} feets`}</div>
        </div>

        <div className="pokemon-info">
          <div className="pokemon-column">Weight:</div>{" "}
          <div className="pokemon-value">{`${weight} pounds`}</div>
        </div>
        <div className="pokemon-info">
          <div className="column">
            <div className="pokemon-column">Ability:</div>
            <div
              className="pokemon-value"
              onClick={() => callbackAbility("Normal")}
            >
              {normal}
            </div>
          </div>
          <div className="column">
            <div className="pokemon-column">Hidden Ability:</div>
            <div
              className="pokemon-value"
              onClick={() => callbackAbility("Hidden")}
            >
              {hidden ? hidden : "--"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
