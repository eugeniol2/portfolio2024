import * as React from 'react'
import Box from '@mui/material/Box'
import CodeIcon from '@mui/icons-material/Code'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { Button, Chip, Popper, IconButton } from '@mui/material'

interface ModalButtonProps {
  tags: string[]
}

export const ModalButton: React.FC<ModalButtonProps> = ({ tags }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = React.useState(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(prev => !prev)
  }

  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Button onClick={handleClick} variant="outlined" endIcon={<CodeIcon />}>
        Stacks
      </Button>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        onAbort={handleClose}
        disablePortal
        sx={{
          zIndex: theme => theme.zIndex.modal + 1
        }}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3,
            p: 2,
            minHeight: '180px',
            position: 'relative',
            maxWidth: '300px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2
            }}
          >
            <Typography variant="h6" component="h2">
              Technologias utilizadas
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1
            }}
          >
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} variant="outlined" />
            ))}
          </Box>
        </Box>
      </Popper>
    </Box>
  )
}
