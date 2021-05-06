import { FC } from "react";
import CircleIcon from "./CircleIcon";
// Components
// Context
// Hooks
// Pages
import FileIcon from "../../resources/media/icons/FileIcon";
import ImageIcon from "../../resources/media/icons/ImageIcon"
import file from "../../resources/media/icons/file.svg";
import video from "../../resources/media/icons/video.svg";
import image from "../../resources/media/icons/image.svg";

// Resources

export interface Props {}

const Attachment: FC<Props> = ({}) => {
    return (
        <div className="z-50 grid justify-items-start gap-y-2">
            <button>
                <CircleIcon icon={video} gradient={false} />
            </button>
            <button>
                <CircleIcon icon={<ImageIcon active={true} />} gradient={false} />
            </button>
            <button>
                <CircleIcon icon={<FileIcon active={true} />} gradient={false} />
            </button>
        </div>
    );
};

export default Attachment;
