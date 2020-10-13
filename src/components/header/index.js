import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Background, ButtonLink, Container, Logo,Feature,Text,FeatureCallOut,Link,Group, Picture,Profile, Dropdown } from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children} </Background> : children;
}
Header.Feature = function HeaderFeatureCallOut({ childern, ...restProps }) {
  return <FeatureCallOut {...restProps}>{childern}</FeatureCallOut>;
};
Header.Profile = function HeaderProfile({childern, ...restProps}){
return <Profile {...restProps}>{childern}</Profile>
}
Header.Feature = function HeaderFeature({ childern, ...restProps }) {
  return <Feature {...restProps}>{childern}</Feature>;
};
Header.TextLink = function HeaderTextLink({ childern, ...restProps }) {
  return <Link {...restProps}>{childern}</Link>;
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Text = function HeaderText({ childern, ...restProps }) {
  return <Text {...restProps}>{childern}</Text>;
};
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
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
