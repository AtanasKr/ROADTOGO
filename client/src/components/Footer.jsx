import { Box, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Copyright © RoadToGo {new Date().getFullYear()}
        </Typography>
      </Box>
      {/* End footer */}
    </div>
  )
}

export default Footer