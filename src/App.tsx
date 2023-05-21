import { useEffect } from "react";
import Home from "./pages/Home";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./features/apiSlice";
import { RootState } from "./store/index";
import { API_KEY } from "./constants";

const App = () => {
  const { searchValue } = useSelector((store: RootState) => store);

  const dispatch = useDispatch();

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchValue}&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    axios.get(url).then((res) => dispatch(getData(res.data)));
  }, [searchValue, dispatch, url]);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
