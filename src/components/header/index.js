import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Background, ButtonLink, Container, Logo,Feature,Text,FeatureCallOut, } from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children} </Background> : children;
}
Header.Feature = function HeaderFeatureCallOut({ childern, ...restProps }) {
  return <FeatureCallOut {...restProps}>{childern}</FeatureCallOut>;
};
Header.Feature = function HeaderFeature({ childern, ...restProps }) {
  return <Feature {...restProps}>{childern}</Feature>;
};
Header.Text = function HeaderText({ childern, ...restProps }) {
  return <Text {...restProps}>{childern}</Text>;
};
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.ButtonLink = function HeaderButtonLinks({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
