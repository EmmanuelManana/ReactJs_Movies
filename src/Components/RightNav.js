import React from "react";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";

const Ul = styled.ul`
  width: 50px;
  align-items: center;
  margin-left: 600px;
  justify-content: space-evenly;

  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 10px 30px;
    list-style: none;
  }
  li a {
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 1px;
    color: rgb(88, 88, 88);
  }
  @media screen and (max-width: 1080px) {
    margin-left: 300px;
  }
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: goldenrod;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 60vh;
    width: 250px;
    padding-top: 4rem;
    transition: transform 0.2s ease-in;

    li {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {MenuItems.map((item, i) => (
        <li key={i} className={item.className}>
          <p>
            <a href={item.link}>{item.title}</a>
          </p>
        </li>
      ))}
    </Ul>
  );
};

export default RightNav;
