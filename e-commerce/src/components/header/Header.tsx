import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import styled from "styled-components";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Link } from "react-router-dom";

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

  .profile {
    position: relative;
    top: 1rem;
    right: 1rem;
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

  .p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-content
    .p-menuitem-link
    .p-menuitem-text {
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
      label: "Mobiles",
      icon: "pi pi-home",
    },
    {
      label: "Laptops",
      icon: "pi pi-star",
    },
    {
      label: "Kitchen",
      icon: "pi pi-star",
    },
  ];

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div className="logo">
          <Link to="/">E-Commerce</Link>
        </div>
        <div className="search">
          <InputText
            className="search-bar"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="profile">
          <Avatar label="U" size="xlarge" className="p-overlay-badge">
            <Badge value="0" />
          </Avatar>
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
