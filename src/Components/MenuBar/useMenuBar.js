import * as React from "react";
import {useHistory} from "react-router-dom";

export const useMenuBar = () => {
    const history = useHistory()

    const menuItems = [
        {
            text: 'Home', onClick: () => history.push('/')
        },
        {
            text: 'About', onClick: () => history.push('/about')
        },
        {
            text: 'Cat votes',
            onClick: () => history.push('/about/votes')
        },
        {
            text: 'Create Vote',
            onClick: () => history.push('/about/create-vote')
        },
    ]

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return {
        open,
        handleDrawerOpen,
        handleDrawerClose,
        menuItems
    }
}
