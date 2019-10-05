import React from 'react';
import { Dialog, FormField, TextInput, TextArea } from 'mineral-ui';

const CreateChallengeDialog = ({ onClose, onSave, ...props }) => {
    const allProps = {
        ...props,
        onClose,
        actions: [
            { text: 'Cancel', onClick: onClose },
            { text: 'Create', onClick: onSave },
        ],
    };

    return (
        <Dialog
            title="New Challenge"
            closeOnClickOutside={false}
            size="small"
            showCloseButton={true}
            {...allProps}
        >
            <FormField label="Name">
                <TextInput />
            </FormField>
            <FormField label="Description">
                <TextArea />
            </FormField>
        </Dialog>
    );
};

CreateChallengeDialog.NAME = 'create-challenge-dialog'

export default CreateChallengeDialog;
