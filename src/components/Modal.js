import { Modal, Paper } from '@mui/material';

const LoginModal = ({ open, handleClose, children }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '80%',
    width: '90%',
    boxShadow: 24,
    overflowY: 'scroll',
    borderRadius: 0,
    pl: 2,
    pr: 2,
    pb: 6,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='Button'
        aria-describedby='Select'>
        <Paper sx={style} xs={12}>
          {children}
        </Paper>
      </Modal>
    </div>
  );
};

export default LoginModal;
