import q35, { cases35 } from "../problems/q35";
import q542, { cases542 } from "../problems/q542";
import q704, { cases704 } from "../problems/q704";
import q994, { cases994 } from "../problems/q994";

const data = [
  {
    id: 35,
    name: "Search Insert Position",
    desc: `Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.`,
    categories: ["Binary Search", "Array"],
    solution: "Binary Search",
    code: q35,
    testCases: cases35,
  },
  {
    id: 542,
    name: "01 Matrix",
    desc: `Given an m x n binary matrix "mat", return the distance of the nearest 0 for each cell. The distance between two adjacent cells is 1.`,
    categories: ["Breadth First Search", "Matrix"],
    solution: "Breadth First Search",
    code: q542,
    testCases: cases542,
  },
  {
    id: 704,
    name: "Binary Search",
    desc: `Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.`,
    categories: ["Binary Search"],
    solution: "Binary Search",
    code: q704,
    testCases: cases704,
  },
  {
    id: 994,
    name: "Rotting Oranges",
    desc: "You are given an m x n grid where each cell can have one of three values: 0 representing an empty cell, 1 representing a fresh orange, or 2 representing a rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.",
    categories: ["Breadth First Search"],
    solution: "Breadth First Search",
    code: q994,
    testCases: cases994,
  },
];

export default data;
