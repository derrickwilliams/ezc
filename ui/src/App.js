import React, { useState } from 'react';
import { ThemeProvider } from 'mineral-ui/themes';
import { Box } from 'mineral-ui';

import CreateChallengeDialog from './components/CreateChallengeDialog';
import OpenChallengeDialog from './components/OpenChallengeDialog';
import JoinChallengeDialog from './components/JoinChallengeDialog';
import MainMenu from './components/MainMenu';

import './App.css';

function App() {
  const [currentOpenDialog, setCurrentOpenDialog] = useState(null);

  return (
    <ThemeProvider>
      <>
        <Box css={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
          <MainMenu
            onCreateClick={() => setCurrentOpenDialog(CreateChallengeDialog.NAME)}
            onOpenClick={() => setCurrentOpenDialog(OpenChallengeDialog.NAME)}
            onJoinClick={() => setCurrentOpenDialog(JoinChallengeDialog.NAME)}
          />
        </Box>

        <CreateChallengeDialog
          isOpen={currentOpenDialog === CreateChallengeDialog.NAME}
          onClose={() => setCurrentOpenDialog(null)}
        />
        <OpenChallengeDialog
          isOpen={currentOpenDialog === OpenChallengeDialog.NAME}
          onClose={() => setCurrentOpenDialog(null)}
        />
        <JoinChallengeDialog
          isOpen={currentOpenDialog === JoinChallengeDialog.NAME}
          onClose={() => setCurrentOpenDialog(null)}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
