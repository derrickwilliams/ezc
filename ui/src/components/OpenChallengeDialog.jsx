import React from 'react';
import { Dialog } from 'mineral-ui';

const OpenChallengeDialog = ({ onClose, onSave, ...props }) => {
    const allProps = {
        ...props,
        onClose,
        actions: [
            { text: 'Cancel', onClick: onClose }
        ],
    };

    return (
        <Dialog
            title="Open Challenge"
            closeOnClickOutside={false}
            size="small"
            showCloseButton={true}
            {...allProps}
        >
        </Dialog>
    );
};

OpenChallengeDialog.NAME = 'open-challenge-dialog'

export default OpenChallengeDialog;
