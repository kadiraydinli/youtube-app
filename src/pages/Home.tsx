import React, { useEffect } from "react";
import { Card, Filter } from "../components";
import homeAction from "../redux/actions/HomeData";
import { useAppDispatch, useAppSelector } from "../redux/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getVideos } = useAppSelector((state) => state.getVideos);

  useEffect(() => {
    dispatch(homeAction("new"));
  }, [dispatch]);

  const data: any[] = getVideos.items || [];

  return (
    <div className="p-4">
      <Filter />
      <div className="flex flex-wrap gap-5">
        {data.map((item, index) => (
          <Card key={`card-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
