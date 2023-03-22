/** @jsxImportSource react */
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import GitHubIcon from '@mui/icons-material/GitHub';

function ReactFooter() {
  return (
    <Sheet
      variant="solid"
      sx={{
        color: '#fff',
        bgcolor: '#1976d2',
        p: 2,
        mx: -3,
        my: -3,
        padding: '5vw',
        paddingTop: 0,
      }}
    >
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography
          level="body2"
          startDecorator={<Typography textColor="text.tertiary">by</Typography>}
        >
          Expert Services
        </Typography>
        <GitHubIcon />

        <Typography level="body3" sx={{ ml: 'auto' }}>
          Copyright 2023
        </Typography>
      </Box>
    </Sheet>
  );
}

export default ReactFooter;