import {useState} from "react";
import {useHistory} from "react-router-dom";

export const useMenuBar = () => {
    const history = useHistory();

    const menuItems = [
        {
            text: "Home",
            onClick: () => history.push("/"),
        },
        {
            text: "About",
            onClick: () => history.push("/about"),
        },
        {
            text: "Cat votes",
            onClick: () => history.push("/about/votes"),
        },
        {
            text: "Post a vote",
            onClick: () => history.push("/about/create-vote"),
        },
    ];

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return {
        open,
        menuItems,
        handleDrawerOpen,
        handleDrawerClose,
    };
};
