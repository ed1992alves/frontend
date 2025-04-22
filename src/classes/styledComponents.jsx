import React, { useState } from "react";
import "../styles/css.less";
import * as Text from "../Utils/Text";

const StyledComponents = () => {
  return (
    <>
      <h2> Installation</h2>
      <div className="examples">
        # with npm <br></br>
        npm install styled-components <p></p># with yarn<br></br> yarn add
        styled-components
      </div>
      <h2>Getting Started</h2>
      <div>
        styled-components utilises tagged template literals to style your
        components. <p></p>It removes the mapping between components and styles.
        This means that when you're defining your styles, you're actually
        creating a normal React component, that has your styles attached to it.
      </div>
      <div className="examples">
        <Text.Grey>
          // Create a Title component that'll render an {"<h1>"} tag with some
          styles
        </Text.Grey>
        <br></br>
        <Text.Green>const</Text.Green> Title = styled.h1`
        <br></br>
        <Text.WarmBlue className="nr_idents1">font-size: 1.5em;</Text.WarmBlue>
        <br></br>
        <Text.WarmBlue className="nr_idents1">
          text-align: center;
        </Text.WarmBlue>
        <br></br>
        <Text.WarmBlue className="nr_idents1">color: #BF4F74;</Text.WarmBlue>
        <br></br>
        `;
        <p></p>
        <Text.Grey>
          / Use Title like any other React component – except they're styled!
        </Text.Grey>
        <br></br>
        <Text.Red>render</Text.Red>(<br></br>
        <Text.Blue className="nr_idents1">{"<Title>"}</Text.Blue> Hello World!
        <Text.Blue>{"</Title>"}</Text.Blue>
        <br></br>
        );
      </div>
      <h2>Adapting based on props</h2>
      <div>
        You can pass a function ("interpolations") to a styled component's
        template literal to adapt it based on its props.
        <p></p>
        This button component has a primary state that changes its color. When
        setting the $primary prop to true, we are swapping out its background
        and text color.
      </div>
      <div className="examples">
        <Text.Green>const</Text.Green> Button = styled.button{"<{ $"} primary
        <Text.Green>?</Text.Green>: <Text.Purple>boolean</Text.Purple>; {"} >"}`
        <br></br>
        <Text.Grey className="nr_idents1">
          /* Adapt the colors based on primary prop */
        </Text.Grey>
        <br></br>
        <Text.WarmBlue className="nr_idents1">background:</Text.WarmBlue>:{" "}
        <Text.Purple>{"$ {"}</Text.Purple>props <Text.Green>=></Text.Green>
        props.$primary<Text.WarmBlue> ? "#BF4F74" : "white"</Text.WarmBlue>
        <Text.Purple>{"}"}</Text.Purple>;<br></br>
        <Text.WarmBlue className="nr_idents1">color:</Text.WarmBlue>:{" "}
        <Text.Purple>{"$ {"}</Text.Purple>props <Text.Green>=></Text.Green>
        props.$primary<Text.WarmBlue> ? "white" : "BF4F74""</Text.WarmBlue>
        <Text.Purple>{"}"}</Text.Purple>;<p></p>
        <Text.WarmBlue className="nr_idents1">font-size: 1em;</Text.WarmBlue>
        <br></br>
        <Text.WarmBlue className="nr_idents1">margin: 1em;</Text.WarmBlue>
        <br></br>
        <Text.WarmBlue className="nr_idents1">
          border: 1px solid #BF4F74;
        </Text.WarmBlue>
        <br></br>
        `;
        <p></p>
        <Text.Grey>
          / Use Title like any other React component – except they're styled!
        </Text.Grey>
        <br></br>
        <Text.Red>render</Text.Red>(<br></br>
        <Text.Blue className="nr_idents1">{"<div>"}</Text.Blue>
        <br></br>
        <Text.Blue className="nr_idents2">{"<Button>"}</Text.Blue> Normal
        <Text.Blue>{"</Button>"}</Text.Blue>
        <br></br>
        <Text.Blue className="nr_idents2">{"<Button"}</Text.Blue>
        <Text.Purple>{" $primary"}</Text.Purple>
        <Text.Blue>{">"}</Text.Blue> Primary
        <Text.Blue>{"</Button>"}</Text.Blue>
        <br></br>
        <Text.Blue className="nr_idents1">{"</div>"}</Text.Blue>
        <br></br>
        );
      </div>
      <h2>Extending Styles</h2>
      <div>
        Quite frequently you might want to use a component, but change it
        slightly for a single case. Now, you could pass in an interpolated
        function and change them based on some props, but that's quite a lot of
        effort for overriding the styles once.
        <p></p>
        To easily make a new component that inherits the styling of another,
        just wrap it in the styled() constructor. Here we use the button from
        the last section and create a special one, extending it with some
        color-related styling:
      </div>
      <div className="examples">
        <Text.Green>const</Text.Green> Button = styled.button`
        <br></br>
        <Text.WarmBlue className="nr_idents1">color: #BF4F74;</Text.WarmBlue>
        <br></br>
        <Text.WarmBlue className="nr_idents1">font-size: 1em;</Text.WarmBlue>
        <br></br>
        <Text.WarmBlue className="nr_idents1">margin: 1em;</Text.WarmBlue>
        <br></br>
        `;
        <p></p>
        <Text.Grey>
          / A new component based on Button, but with some override styles
        </Text.Grey>
        <br></br>
        <Text.Green>const</Text.Green> TomatoButton ={" "}
        <Text.Red>styled</Text.Red>(Button)`
        <br></br>
        <Text.WarmBlue className="nr_idents1">color: tomato;</Text.WarmBlue>
        <br></br>
        <Text.WarmBlue className="nr_idents1">
          order-color: tomato;
        </Text.WarmBlue>
        <br></br>
        <Text.WarmBlue className="nr_idents1">margin: 1em;</Text.WarmBlue>
        <br></br>
        `;
        <p></p>
        <br></br>
        <Text.Red>render</Text.Red>(<br></br>
        <Text.Blue className="nr_idents1">{"<div>"}</Text.Blue>
        <br></br>
        <Text.Blue className="nr_idents2">{"<Button>"}</Text.Blue> Normal Button
        <Text.Blue>{"</Button>"}</Text.Blue>
        <br></br>
        <Text.Blue className="nr_idents2">{"<TomatoButton"}</Text.Blue>
        <Text.Blue>{">"}</Text.Blue> Tomato Button
        <Text.Blue>{"</TomatoButton>"}</Text.Blue>
        <br></br>
        <Text.Blue className="nr_idents1">{"</div>"}</Text.Blue>
        <br></br>
        );
      </div>
    </>
  );
};

export default StyledComponents;
