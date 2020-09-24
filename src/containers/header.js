import React from "react";

import { Header } from '../components';



export default function HeaderCentral() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo />
      </Header.Frame>
      <Header.Button/>
    </Header>
  );
}
