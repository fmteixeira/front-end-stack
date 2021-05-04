import { FC} from "react";
import CircleIcon from "./CircleIcon"
// Components
// Context
// Hooks
// Pages
import file from "../../resources/media/icons/file.svg"
import video from "../../resources/media/icons/video.svg"
import image from "../../resources/media/icons/image.svg"

// Resources

export interface Props {}

const Attachment: FC<Props> = ({}) => {
    return (
        <div className="z-50 grid justify-items-start gap-y-2">
            <button><CircleIcon icon={video} gradient={false}></CircleIcon></button>
            <button><CircleIcon icon={image} gradient={false}></CircleIcon></button>
            <button><CircleIcon icon={file} gradient={false}></CircleIcon></button>
        </div>
        )
    }

export default Attachment;
