import React from "react";
import styles from "./CreateNewChatButton.module.css";
import clsx from "clsx";
// Components
// Media
import plus from "../../assets/svg/plus.svg";
// Context
// Hooks
// Pages
// Resources

export interface Props {
  text: string;
}

export default function CreateNewChatButton({ text }: Props) {
  return (
    <button
      className={clsx(
        "bg-gradient-to-r from-blue-start to-blue-end",
        "rounded-md",
        "px-6 py-5",
        "text-xl text-white-100",
        "grid grid-columns-auto-fr gap-2 place-items-center"
      )}
    >
      <div>
        <img src={plus} alt="" />
      </div>
      <div>{text}</div>
    </button>
  );
}
