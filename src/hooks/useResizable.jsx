// React
import { useEffect } from "react";

// Config
import { PHONE_WIDTH } from "../config";

export const useResizable = ({ draggableRef, left, right }) => {
  useEffect(() => {
    draggableRef.current.addEventListener("mousedown", handleMouseDown);
    return () => {
      draggableRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  });
  const handleMouseDown = () => {
    draggableRef.current.addEventListener("mousemove", handleMouseMove);
    draggableRef.current.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseUp = () => {
    draggableRef.current.removeEventListener("mousemove", handleMouseMove);
    draggableRef.current.removeEventListener("mouseup", handleMouseUp);
  };
  const handleMouseMove = (e) => {
    if (window.innerWidth > PHONE_WIDTH) {
      var mX = e.pageX;
      var leftPercentage = (mX / window.innerWidth) * 100;
      var rightPercentage = 100 - leftPercentage;
      if (leftPercentage <= 20) {
        leftPercentage = 20;
        rightPercentage = 80;
      }
      if (leftPercentage >= 80) {
        leftPercentage = 80;
        rightPercentage = 20;
      }
      left.current.style.width = `${leftPercentage}%`;
      right.current.style.width = `${rightPercentage}%`;
    }
  };
};
