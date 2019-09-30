import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { dataGet } from "../../redux/data/actions";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataGet());
  }, [dispatch]);
  return <div>app</div>;
};
