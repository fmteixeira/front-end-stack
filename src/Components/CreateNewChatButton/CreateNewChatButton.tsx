import React from "react";
import styles from "./CreateNewChatButton.styles";
// Components
// Media
import plus from "../../assets/svg/plus.svg";
// Context
// Hooks
// Pages
// Resources

export interface Props {
    text: string;
    darkMode?: boolean;
}

const CreateNewChatButton: React.FC<Props> = ({ text, darkMode = false }: Props) => {
    return (
        <button className={styles.button({ darkMode })}>
            <div>
                <img src={plus} alt="" className={styles.buttonImage} />
            </div>
            <div>{text}</div>
        </button>
    );
};

export default CreateNewChatButton;
