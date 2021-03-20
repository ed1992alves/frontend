import React, { useLayoutEffect, useEffect, useReducer } from "react";
import { AvatarImage } from "../styles/images/avatar";
import { Dropdown } from "../components/dropdown";

const initialState = {
  beard: {
    size: "none",
    color: "brown"
  },
  glasses: false,
  frackles: false,
  hair: {
    type: "Hair1",
    color: "brown"
  },
  face: "F6E0C9"
};

function reducer(state, action) {
  switch (action.type) {
    case "beard_size":
      return {
        ...state,
        beard: { size: action.value, color: state.beard.color }
      };
    case "glasses_on":
      return {
        ...state,
        glasses: true
      };
    case "glasses_off":
      return {
        ...state,
        glasses: false
      };
    case "frackles_on":
      return {
        ...state,
        frackles: true
      };
    case "frackles_off":
      return {
        ...state,
        frackles: false
      };
    case "hair_type":
      return {
        ...state,
        hair: {
          type: action.value,
          color: state.hair.color
        }
      };
    case "items_color":
      return {
        ...state,
        beard: { size: state.beard.size, color: action.value },
        hair: {
          type: state.hair.type,
          color: action.value
        }
      };
    case "face_color":
      return {
        ...state,
        face: action.value
      };
    default:
      throw new Error();
  }
}

export const Avatar = () => {
  const itemsBeardSize = ["none", "small", "big"];
  const itemsHair = ["Hair1", "Hair2", "Hair3", "Hair4", "Hair5"];
  const itemsColor = ["Brown", "Yellow", "Orange", "Grey", "Black"];
  const faceColor = ["F6E0C9", "DEBA93", "A07444"];
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const glassCheckbox = document.querySelector("input[name=glasses]");
    const fracklesCheckbox = document.querySelector("input[name=frackles]");
    glassCheckbox.addEventListener("change", function() {
      if (this.checked) {
        dispatch({ type: "glasses_on" });
      } else {
        dispatch({ type: "glasses_off" });
      }
    });

    fracklesCheckbox.addEventListener("change", function() {
      if (this.checked) {
        dispatch({ type: "frackles_on" });
      } else {
        dispatch({ type: "frackles_off" });
      }
    });
  }, []);

  useLayoutEffect(() => {
    let beardList = document.getElementsByClassName("Beard");
    for (let item of beardList) {
      item.style.opacity = 0;
    }
    let hairList = document.getElementsByClassName("Hair");
    for (let item of hairList) {
      item.style.opacity = 0;
    }
    state.glasses
      ? (document.getElementById(`Glasses`).style.opacity = 1)
      : (document.getElementById(`Glasses`).style.opacity = 0);
    state.frackles
      ? (document.getElementById(`Frackles`).style.opacity = 1)
      : (document.getElementById(`Frackles`).style.opacity = 0);
    if (state.beard.size != "none") {
      document.getElementById(`Beard_${state.beard.size}`).style.opacity = 1;
      document.getElementById(`Beard_${state.beard.size}`).style.fill =
        state.beard.color;
    }
    document.getElementById(state.hair.type).style.opacity = 1;
    document.getElementById(state.hair.type).style.fill = state.hair.color;
    document.getElementById(state.hair.type).style.stroke = state.hair.color;
    document.getElementById("face").style.fill = "#" + state.face;
  });

  return (
    <div className="avatarImage">
      <AvatarImage></AvatarImage>
      <Dropdown
        name={"beardName"}
        title={"Bear Size:"}
        items={itemsBeardSize}
        callback={item => dispatch({ type: "beard_size", value: item })}
        selected={itemsBeardSize[0]}
      ></Dropdown>
      <Dropdown
        name={"hairOptions"}
        title={"Hair Options:"}
        items={itemsHair}
        callback={item => dispatch({ type: "hair_type", value: item })}
        selected={itemsHair[0]}
      ></Dropdown>
      <Dropdown
        name={"faceColor"}
        title={"Face:"}
        items={faceColor}
        callback={item => dispatch({ type: "face_color", value: item })}
        selected={faceColor[0]}
      ></Dropdown>
      <Dropdown
        name={"itemsColor"}
        title={"Items Color:"}
        items={itemsColor}
        callback={item => dispatch({ type: "items_color", value: item })}
        selected={itemsColor[0]}
      ></Dropdown>
      <input type="checkbox" id="frackles" name="frackles" value="frackles" />
      <label htmlFor="frackles">Frackles</label>
      <input type="checkbox" id="glasses" name="glasses" value="glasses" />
      <label htmlFor="glasses">Glasses</label>
    </div>
  );
};
