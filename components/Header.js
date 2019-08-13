import React from "react";

import Nav from './Nav'
import Link from 'next/link'

import {withRouter} from "next/router";
import Global from "../constants/Global";
const { css } = Global;

import capitalize from '../utils/capitalize'

const LinkTag = (currentPath, item, indexRouteDefault) => {
  return (
    <a
      className={
        currentPath === item || (currentPath === "" && item === "/")
          ? "active"
          : ""
      }
    >
      {item === "/" ? indexRouteDefault : capitalize(item)}
      <style jsx>{`
        a {
          color: ${css.colors.header.items};
          padding: 1rem;
        }
        a:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        a:active {
          background: rgba(0, 0, 0, 0.1);
        }
        a.active {
          background: ${css.colors.state.active};
        }
      `}</style>
    </a>
  );
}

const Header = (props) => {
  let Links = []
  const siteMap = Global.siteMap
  return (
    <header>
      <div className="container">
        <Nav>
          {siteMap.map((item, index) => {
            let currentPath = props.router.pathname.split("/")[1];
            return (
              <Link key={index} href={item}>
                {LinkTag(currentPath, item, "Dashboard")}
              </Link>
            );
          })}
        </Nav>
      </div>
      <style jsx>{`
        header {
          background: ${css.colors.header.bg};
        }
        .container {
          max-width: ${css.sizes.pageMaxWidth};
          margin: auto;
        }
      `}</style>
    </header>
  );
}

export default withRouter(Header)
