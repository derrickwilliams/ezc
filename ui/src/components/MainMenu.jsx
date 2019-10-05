import React from 'react';
import { Box, Menu, MenuItem } from 'mineral-ui';
import IconStarHalf from 'mineral-ui-icons/IconStarHalf';
import IconAdd from 'mineral-ui-icons/IconAdd';
import IconFolderOpen from 'mineral-ui-icons/IconFolderOpen';
import IconSettings from 'mineral-ui-icons/IconSettings';

const MainMenu = ({ onCreateClick, onOpenClick, onJoinClick, onAdminClick }) => {
    return (
        <Box
            marginHorizontal="auto"
            width="14vw"
            css={{ minWidth: '200px', border: 'dotted 1px lightgray' }}>

            <Menu>
                <MenuItem iconEnd={<IconAdd />} onClick={onCreateClick}>
                    Create Challenge
                </MenuItem>
                <MenuItem iconEnd={<IconStarHalf />} onClick={onJoinClick}>
                    Join Challenge
                </MenuItem>
                <MenuItem iconEnd={<IconFolderOpen />} onClick={onOpenClick}>
                    Open Challenge
                </MenuItem>
                <MenuItem iconEnd={<IconSettings />} onClick={onAdminClick}>
                    Admin
                </MenuItem>
            </Menu>

        </Box>
    );
};

export default MainMenu;
