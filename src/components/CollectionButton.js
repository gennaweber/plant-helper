import { Button, Typography } from "@mui/material";

const CollectionButton = ({ style, onClick, children }) => (
  <>
    {children && (
      <Button
        className="collectionButton"
        elevation={2}
        // variant='contained'
        sx={style}
        onClick={onClick || null}
      >
        <Typography
          variant="h4"
          sx={{
            width: "100%",
            color: "#fff",
          }}
        >
          <strong>{children}</strong>
        </Typography>
      </Button>
    )}
  </>
);

export default CollectionButton;
