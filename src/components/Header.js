import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {
  const { googleSignIn, user, logout, loading } = useAuthContext();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      {console.log(loading)}
      <Title>Quiz App</Title>
      <Menu>
        {!user && !loading && (
          <>
            <MenuItem>Register</MenuItem>
            <MenuItem onClick={handleSignIn}>Login</MenuItem>
          </>
        )}
        {user && !loading && (
          <>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        )}
      </Menu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  min-height: 80px;
  display: flex;
  align-items: center;
  padding: 30px;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  margin-right: 40px;
`;

const MenuItem = styled.div`
  margin-left: 30px;

  :hover {
    cursor: pointer;
  }
  > a {
    text-decoration: none;
  }
`;
