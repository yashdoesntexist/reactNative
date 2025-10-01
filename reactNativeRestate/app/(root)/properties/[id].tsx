import { useLocalSearchParams } from "expo-router";
import React from "react";

const property = () => {
  const { id } = useLocalSearchParams();
  return (
    <view>
      <text>Property {id}</text>
    </view>
  );
};

export default property;
