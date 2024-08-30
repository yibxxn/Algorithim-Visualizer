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

  const mergeSort = () =>{};
  const quickSort = () =>{};
  const heapSort = () =>{};
  const bubbleSort = () =>{};

  return (
    <div className="array-container flex flex-col items-center">
      <div className="bars-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value * 0.6}px` }}
          ></div>
        ))}
      </div>
      <div className="mt-4 flex space-x-4">
      <button 
        className="mt-4 bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-400 rounded"
        onClick={resetArray}
      >
        Generate New Array
      </button>
      <button 
        className="mt-4 bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-400 rounded"
        onClick={resetArray}
      >
        Merge Sort
      </button>
      <button 
        className="mt-4 bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-400 rounded"
        onClick={resetArray}
      >
        Qucik Sort
      </button>
      <button 
        className="mt-4 bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-400 rounded"
        onClick={resetArray}
      >
        Heap Sort
      </button>
      <button 
        className="mt-4 bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-400 rounded"
        onClick={resetArray}
      >
        Bubbule Sort
      </button>
    </div>
    </div>
  );
};

// Helper function to generate a random integer between two values
const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

export default SortingVisualizer;
