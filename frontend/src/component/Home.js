import React, { useState, useEffect } from "react";
import {
  Typography,
  makeStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";
import AlignedText from "./AlignedText";
import BoxScore from "./BoxScore";
import axios from '../axios'
import Card from './Card'

const useStyles = makeStyles(() => ({
  deleteButton: {},
}));

export default function Home() {
  const classes = useStyles();
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState();
  const [disabled, setDisabled] = useState(true);
  const [create, setCreate] = useState(false);
  const [view, setView] = useState(false)
  const [history, setHistory] = useState([])

  // Create Dialog
  const [popUp, setPopUp] = useState(false);

  const handleClickCreate = () => {
    setPopUp(true);
  };
  const handleClosePopUp = () => {
    setPopUp(false);
  };
  const handleSubmitCreate = () => {
    setPopUp(false);
    setCreate(true);
  };

  // Delete Dialog
  const [popUpDelete, setPopUpDelete] = useState(false);
  const handleClickDelete = () => {
    setPopUpDelete(true);
  };
  const handleClosePopUpDelete = () => {
    setPopUpDelete(false);
  };

  const handleSubmitDelete = () => {
    // dispatch(deleteAnnouncement(authToken, announcementId));
    // history.push('/admin/system/announcement');
  };

  // save stats
  const handleClickSave = () => { };

  const handleGet = async () => {
    const {
      data: { message },
    } = await axios.get('/api/get-game')
    setHistory(message)
  }

  useEffect(() => {
    if (isNaN(players) === true || players === "" || Number(players) <= 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    handleGet()


  }, [players, history]);

  return (
    <>
      {create === false && (
        <div>
          <div className="home">
            <h1>Want to Create Game Stats?</h1>
          </div>
          <Button
            style={{ textTransform: "none" }}
            variant="outlined"
            onClick={handleClickCreate}
          >
            Create
          </Button>
          <div>
            <Card history={history} />
          </div>
        </div>
      )}
      {create === true && (
        <div>
          {/* <div className="record">
            <h1>Start Recording your Game Stats !</h1>
          </div> */}
          <h2>台大資管 v.s. {team}</h2>
          {/* <div>
            <Button
              style={{ textTransform: "none" }}
              className={classes.saveButton}
              variant="contained"
              onClick={handleClickSave}
            >
              Save
            </Button>
            <Button
              style={{ textTransform: "none" }}
              className={classes.deleteButton}
              variant="contained"
              onClick={handleClickDelete}
            >
              Delete
            </Button>
          </div> */}
          <div>
            <BoxScore playerNum={players} team={team} />
          </div>
        </div>
      )}
      {/* Create dialog */}
      <Dialog open={popUp} keepMounted onClose={handleClosePopUp}>
        <DialogTitle>
          <Typography variant="h4">Add Boxscore</Typography>
        </DialogTitle>
        <DialogContent>
          <AlignedText text="Opponent's Name" childrenType="field">
            <TextField
              id="title"
              value={team}
              onChange={(e) => {
                setTeam(e.target.value);
              }}
            />
          </AlignedText>
          <AlignedText text="Number of Players" childrenType="field">
            <TextField
              id="players"
              value={players}
              onChange={(e) => {
                setPlayers(e.target.value);
              }}
            />
          </AlignedText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ textTransform: "none" }}
            variant="contained"
            onClick={handleClosePopUp}
          >
            Cancel
          </Button>
          <Button
            disabled={disabled}
            style={{ textTransform: "none" }}
            variant="contained"
            onClick={() => handleSubmitCreate()}
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
      {/* Delete dialog */}
      <Dialog open={popUpDelete} keepMounted onClose={handleClosePopUpDelete}>
        <DialogTitle>
          <Typography variant="h4">Delete Box Score</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" color="secondary">
            {team}
          </Typography>
        </DialogContent>
        <DialogContent>
          <Typography variant="body2">
            Once you delete an Box Score, there is no going back. Please be
            certain.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ textTransform: "none" }}
            variant="contained"
            onClick={handleClosePopUpDelete}
          >
            Cancel
          </Button>
          <Button
            style={{ textTransform: "none" }}
            className={classes.deleteButton}
            variant="contained"
            onClick={() => handleSubmitDelete()}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
