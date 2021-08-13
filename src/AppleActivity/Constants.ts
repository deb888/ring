import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const { PI } = Math;
export const TAU = 2 * PI;
export const SIZE = width;
export const STROKE_WIDTH = 40;
export const CX = SIZE / 2;
export const CY = SIZE / 2;

type Color = string;

export interface Ring {
  start: Color;
  end: Color;
  bg: Color;
  theta: number;
  size: number;
}

export const R1: Ring = {
  start: "rgb(246, 95, 48)",
  end: "rgb(104, 3, 3)",
  bg: "rgb(191, 145, 130)",
  theta: 3.6 * TAU,
  size: SIZE - STROKE_WIDTH * 4,
};

export const R2: Ring = {
  start: "rgb(153, 255, 0)",
  end: "rgb(216, 255, 1)",
  bg: "rgb(47, 78, 0)",
  theta: 1.6 * TAU,
  size: SIZE - STROKE_WIDTH * 2,
};

export const R3: Ring = {
  start: "rgb(249, 18, 78)",
  end: "rgb(249, 56, 133)",
  bg: "rgb(50, 1, 14)",
  theta: 1.2 * TAU,
  size: SIZE,
};
