/// <reference types="node" />

declare module "react-dock" {
  import { Component } from "react";

  export interface DockProps {
    position: "left" | "right" | "top" | "bottom";
    zIndex?: number;
    fluid?: boolean;
    size?: number;
    defaultSize?: number;
    dimMode?: "none" | "transparent" | "opaque";
    isVisible?: boolean;
    onVisibleChange?: () => void;
    onSizeChange?: () => void;
    dimStyle?: {};
    dockStyle?: {};
    duration?: number;
  }

  class Dock extends Component<DockProps, any> {}

  export default Dock;
}
