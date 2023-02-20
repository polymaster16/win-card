import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modal0(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img
         src="https://cdn.pixabay.com/animation/2022/11/03/15/02/15-02-49-242_512.gif"
        alt=""/>
          <div class="text-2xl font-bold text-center">
           Vous avez gagné 0 xaf...
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Vous serez redirigé vers winmooney.com ou vous pourrez à nouvea jouer.
          </Typography>
          <div className="my-6 flex flex-row justify-center">
            <Button  size="large" variant="contained" color="secondary"
            onClick={props.handleClose}>
              Okay
              
              
              </Button>
              </div>
        </Box>
      </Modal>
    </div>
  );
}