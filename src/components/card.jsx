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
    <div class={`card u-full-width ${type}`} data-testid="card">
      <div class="imageWrapper">
        <img src={imageSrc} class="pokemon-image" />
      </div>
      <div class="textWrapper">
        <div class="pokemon-type">{type || defaultMessage}</div>
        <div class="pokemon-name">{name || defaultMessage}</div>

        <div class="pokemon-info">
          <div class="pokemon-column">HP:</div>{" "}
          <div class="pokemon-value">{hp}</div>
        </div>
        <div class="pokemon-info">
          <div class="pokemon-column">Attack:</div>{" "}
          <div class="pokemon-value">{attack}</div>
        </div>
        <div class="pokemon-info">
          <div class="pokemon-column">Defense:</div>{" "}
          <div class="pokemon-value">{defense}</div>
        </div>
        <div class="pokemon-info">
          <div class="pokemon-column">Special Attack:</div>{" "}
          <div class="pokemon-value">{specialAttack}</div>
        </div>
        <div class="pokemon-info">
          <div class="pokemon-column">Special Defense:</div>{" "}
          <div class="pokemon-value">{specialDefense}</div>
        </div>
        <div class="pokemon-info">
          <div class="pokemon-column">Speed:</div>{" "}
          <div class="pokemon-value">{`${speed} m/s`}</div>
        </div>
        <div class="pokemon-info">
          <div class="pokemon-column">Height:</div>{" "}
          <div class="pokemon-value">{`${height} feets`}</div>
        </div>

        <div class="pokemon-info">
          <div class="pokemon-column">Weight:</div>{" "}
          <div class="pokemon-value">{`${weight} pounds`}</div>
        </div>
        <div class="pokemon-info">
          <div class="column">
            <div class="pokemon-column">Ability:</div>
            <div
              class="pokemon-value"
              onClick={() => callbackAbility("Normal")}
            >
              {normal}
            </div>
          </div>
          <div class="column">
            <div class="pokemon-column">Hidden Ability:</div>
            <div
              class="pokemon-value"
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
