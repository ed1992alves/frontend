import React from "react";
const Text = ({ content, colour, nr_idents }) => {
  const className = nr_idents ? `${colour} nr_idents${nr_idents}` : colour;
  return <span className={className}>{content}</span>;
};
export const Grey = props => (
  <Text colour="grey" {...props} content={props.children}></Text>
);
export const Green = props => (
  <Text colour="green" {...props} content={props.children}></Text>
);
export const Purple = props => (
  <Text colour="purple" {...props} content={props.children}></Text>
);
export const Orange = props => (
  <Text colour="orange" {...props} content={props.children}></Text>
);
export const Blue = props => (
  <Text colour="blue" {...props} content={props.children}></Text>
);
export const Yellow = props => (
  <Text colour="yellow" {...props} content={props.children}></Text>
);

export const Red = props => (
  <Text colour="red" {...props} content={props.children}></Text>
);

export const Pink = props => (
  <Text colour="pink" {...props} content={props.children}></Text>
);

export const Black = props => <Text {...props} content={props.children}></Text>;
