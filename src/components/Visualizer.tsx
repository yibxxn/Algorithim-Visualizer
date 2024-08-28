"use client";

import React, { useState, useEffect } from 'react';
import '@/styles/Visualizer.css';

const SortingVisualizer = () => {

const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    resetArray();
  }, []);


  const resetArray = () => {
    const array: number[] = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 700));
    }
    setArray(array);
  };

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{ height: `${value * 0.6}px` }}
        ></div>
      ))}   
    </div>
  );
};

// Helper function to generate a random integer between two values
const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

export default SortingVisualizer;
