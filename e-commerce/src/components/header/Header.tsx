import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import styled from "styled-components";
import { Menubar } from "primereact/menubar";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  margin: 5px;

  .search {
    .search-bar {
      width: 45rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  .p-menubar {
    padding: 0.5rem;
    background: none;
    color: black;
    border: none;
    border-radius: 6px;
  }

  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: black;
    font-size: large;
    font-weight: bold;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: flex-start;
    padding: 1px;
    .p-menubar-root-list {
      width: 15rem;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  height: 8rem;
  margin: -8px;
  position: fixed;
  width: 100%;
  top: 0rem;
  overflow: hidden;
`;

export default function Header() {
  const [value, setValue] = useState("");
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
  ];

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div className="logo">
          <h4>E-Commerce</h4>
        </div>
        <div className="search">
          <InputText
            className="search-bar"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="profile">
          <h4>User Profile</h4>
        </div>
      </HeaderWrapper>
      <MenuWrapper>
        <div>
          <Menubar model={items} />
        </div>
      </MenuWrapper>
    </HeaderContainer>
  );
}