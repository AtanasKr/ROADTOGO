import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 18,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              RoadToGo
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            RoadToGo е онлайн платформа, която предоставя широк набор от ресурси и инструменти за 
            пътниците, за да планират и резервират своите пътувания. Те могат да включват услуги за 
            резервация на полети и хотели, коли под наем, застраховка при пътуване и услуги за резервация 
            на дейности. RoadToGo развива дейности като туризъм, къмпинг, наблюдение на птици или просто 
            разходка в близкия парк или гора. 
            </Typography>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}