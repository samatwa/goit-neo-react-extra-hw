import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@mui/material';
import css from './ConfirmModal.module.css';

const ConfirmModal = ({ message, onConfirm, onCancel, open }) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="confirm-dialog"
      aria-describedby="confirm-dialog-description"
    >
      <DialogContent>
        <DialogContentText
          id="confirm-dialog-description"
          className={css.dialogContentText}
        >
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={css.dialogButtons}>
        <Button
          onClick={onCancel}
          className={css.cancelButton}
          variant="contained"
        >
          No
        </Button>
        <Button
          onClick={onConfirm}
          className={css.confirmButton}
          variant="contained"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;

