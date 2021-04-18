import clsx from "clsx";

const styles = {
    button: ({ darkMode }: { darkMode: boolean }) =>
        clsx(
            darkMode ? "bg-dark" : "bg-gradient-to-r from-blue-start to-blue-end",
            "rounded-md",
            "px-6 py-5",
            "text-xl text-white-100",
            "grid grid-cols-[auto,1fr] gap-2 place-items-center",
        ),
    buttonImage: clsx("h-[25px] w-[25px]"),
};

export default styles;
