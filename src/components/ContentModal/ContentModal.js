import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './ContentModal.css';
import axios from 'axios';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
}));

export default function ContentModal({children, Type, Title, Year, Poster}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=faf7e5bb&s=${Title}`
    );

    setContent(data);
    // console.log(data);
  };

  useEffect(() => {
      fetchData()
  }, [])

  return (
    <div>
      <div type="button" className="content" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          {content && ( <img src={content.Title}/>)}
          <img src={Poster}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
