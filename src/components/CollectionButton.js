import { Button, Typography } from '@mui/material';

const CollectionButton = ({ style, onClick, children }) => {
  return (
    <>
      {children && (
        <>
          <Button
            className='collectionButton'
            elevation={2}
            // variant='contained'
            sx={style}
            onClick={onClick ? onClick : null}>
            <Typography
              variant='h5'
              sx={{
                width: '100%',
                color: '#fff',
              }}>
              <strong>{children}</strong>
            </Typography>
          </Button>
        </>
      )}
    </>
  );
};

export default CollectionButton;
