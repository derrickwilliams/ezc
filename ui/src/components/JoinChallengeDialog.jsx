import React from 'react';
import { Dialog } from 'mineral-ui';

const JoinChallengeDialog = ({ onClose, onSave, ...props }) => {
    const allProps = {
        ...props,
        onClose,
        actions: [
            { text: 'Cancel', onClick: onClose }
        ],
    };

    return (
        <Dialog
            title="Join Challenge"
            closeOnClickOutside={false}
            size="small"
            showCloseButton={true}
            {...allProps}>
        </Dialog>
    );
};

JoinChallengeDialog.NAME = 'join-challenge-dialog';

export default JoinChallengeDialog;
