import React from "react";
import styles from "./App.module.scss";
// Components
// Context
// Hooks
// Pages
// Resources

interface Props {
  name: string;
}

export const App: React.FC<Props> = () => {
  return (
    <div className={styles["block-name__element-name--modifier-name"]}>
      Hello World!
    </div>
  );
};
