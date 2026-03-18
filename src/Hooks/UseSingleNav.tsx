import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UseSingleNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (path: string) => {
      if (location.pathname === path) return;
      navigate(path);
    },
    [navigate, location.pathname],
  );
};

export default UseSingleNav;
