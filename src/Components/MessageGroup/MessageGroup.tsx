import { FC } from "react";
// Components
//Media
import ellipsis from "../../resources/media/icons/ellipsis.svg";
// Context
// Hooks
// Pages
// Resources

export interface Props {
    userAvatar: string;
    mensagens: Array<Mensagem>;
    lastMsgTime: number;
}
interface Mensagem {
    id: number;
    text: string;
}

const MessageGroup: FC<Props> = ({ mensagens, lastMsgTime, userAvatar }) => {
    return (
        <div className="grid gap-5 grid-cols-[auto,1fr]">
            <div>
                <img src={userAvatar} alt="" className="rounded-full h-[36px] w-[36px]" />
            </div>

            <div className="grid gap-5 place-items-start">
                {mensagens.map((mensagem, idx) => (
                    <div key={mensagem.id} className="grid grid-cols-[1fr,auto] gap-3 place-items-center">
                        <p
                            className="p-3 text-base rounded-xl rounded-tl-none bg-gradient-to-r
                                        from-blue-start to-blue-end text-white-100 shadow-lg"
                        >
                            {mensagem.text}
                        </p>

                        <button>
                            <img src={ellipsis} alt="" />
                        </button>

                        {idx + 1 === mensagens.length && (
                            <span className="text-gray opacity-70 text-sm place-self-end">{lastMsgTime} days ago</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessageGroup;
