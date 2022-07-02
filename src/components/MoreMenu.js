import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';

const options = ['Delete collection'];

const MoreMenu = ({ handleDeleteCollection, collection }) => {
  const [warn, setWarn] = useState(false);

  const handleOpenWarn = () => {
    setWarn(true);
  };

  const handleCloseWarn = () => {
    setWarn(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        size='large'
        sx={{
          position: 'absolute',
          top: 15,
          right: 15,
          zIndex: 10,
          color: '#fff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
        onClick={handleClick}>
        <MoreVertIcon fontSize='large' />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}>
        {options.map((option) => (
          <MenuItem key={option} onClick={handleOpenWarn}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Dialog
        open={warn}
        onClose={handleCloseWarn}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>
          {'Permanently delete collection?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this collection? This action can not
            be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ minWidth: 0 }}
            variant='outlined'
            onClick={handleCloseWarn}>
            Cancel
          </Button>
          <Button
            sx={{ minWidth: 0 }}
            variant='contained'
            color='error'
            onClick={() => {
              handleClose();
              handleCloseWarn();
              handleDeleteCollection(collection);
            }}
            autoFocus>
            Delete Collection
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MoreMenu;
