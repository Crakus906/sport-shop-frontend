import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTest } from "../../redux/actions/data";
import { homeContentSelector } from "../../redux/selectors/data";

const Home = () => {
  const dispatch = useDispatch();
  const { test } = useSelector(homeContentSelector);

  return (
    <div>
      <div>homeasdcas</div>
    </div>
  );
};

export default Home;
