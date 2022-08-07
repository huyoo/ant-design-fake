import React, {useEffect} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useStores} from "@/stores";

const AuthorizedLayout: React.FC = () => {
  const {login:{isLogin}} = useStores();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login') {
      isLogin && navigate('/');
    } else if (!isLogin) {
      navigate('/login');
    }
  });

  return (
    <Outlet />
  );
};

export default AuthorizedLayout;
