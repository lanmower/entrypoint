import React from "react";
import { Navbar as BsNavbar, NavItem, Nav } from "react-bootstrap";
import * as Dapp from "@elrondnetwork/dapp";
import { useHistory } from "react-router-dom";
import { ReactComponent as ElrondLogo } from "./../../../assets/img/elrond.svg";

const Navbar = () => {
  const { loggedIn } = Dapp.useContext();
  const dappDispatch = Dapp.useDispatch();
  const history = useHistory();

  const logOut = (e: React.MouseEvent) => {
    e.preventDefault();
    dappDispatch({ type: "logout" });
    history.push("/");
  };

  return (
    <BsNavbar className="bg-white border-bottom px-4 py-3">
      <div className="container-fluid">
        <NavItem className="d-flex align-items-center">
          <ElrondLogo className="elrond-logo" />
          <span className="dapp-name text-muted">Dapp</span>
        </NavItem>

        <Nav className="ml-auto">
          {loggedIn && (
            <NavItem>
              <a href="/" onClick={logOut}>
                Close
              </a>
            </NavItem>
          )}
        </Nav>
      </div>
    </BsNavbar>
  );
};

export default Navbar;
