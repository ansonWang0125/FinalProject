import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  plusButton: {
    minWidth: "25px !important",
    height: "25px !important",
    color: "white !important",
    backgroundColor: "blue !important",
    borderRadius: "50% !important",
  },
  minusButton: {
    minWidth: "25px !important",
    height: "25px !important",
    color: "white !important",
    backgroundColor: "red !important",
    borderRadius: "50% !important",
  },
  stats: {
    fontSize: "25px",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "cornflowerblue",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function BoxScore({ playerNum }) {
  const classes = useStyles();
  const [playerList, setPlayerList] = useState(
    Array.from({ length: Number(playerNum) }, () => {
      return {
        name: "",
        points: 0,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        FGM: 0,
        FGA: 0,
        FGP: 0,
        threePM: 0,
        threePA: 0,
        threePP: 0,
        FTM: 0,
        FTA: 0,
        FTP: 0,
        offenseRebounds: 0,
        defenseRebounds: 0,
        turnovers: 0,
        fouls: 0,
      };
    })
  );
  // useEffect to control the stats changed in boxScore
  useEffect(() => {
    //
  }, [playerList]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Players</StyledTableCell>
            <StyledTableCell align="right">PTS</StyledTableCell>
            <StyledTableCell align="right">REB</StyledTableCell>
            <StyledTableCell align="right">AST</StyledTableCell>
            <StyledTableCell align="right">STL</StyledTableCell>
            <StyledTableCell align="right">BLK</StyledTableCell>
            <StyledTableCell align="right">FGM</StyledTableCell>
            <StyledTableCell align="right">FGA</StyledTableCell>
            <StyledTableCell align="right">FT%</StyledTableCell>
            <StyledTableCell align="right">3PM</StyledTableCell>
            <StyledTableCell align="right">3PA</StyledTableCell>
            <StyledTableCell align="right">3P%</StyledTableCell>
            <StyledTableCell align="right">FTM</StyledTableCell>
            <StyledTableCell align="right">FTA</StyledTableCell>
            <StyledTableCell align="right">FT%</StyledTableCell>
            <StyledTableCell align="right">OREB</StyledTableCell>
            <StyledTableCell align="right">DREB</StyledTableCell>
            <StyledTableCell align="right">TO</StyledTableCell>
            <StyledTableCell align="right">PF</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playerList.map((player, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="player">
                <TextField
                  id="playerNumber"
                  value={player.name}
                  style={{ width: "150px" }}
                  onChange={(e) => {
                    let newList = [...playerList]; // copying the old datas array
                    newList[index].name = e.target.value; // replace e.target.value with whatever you want to change it to
                    setPlayerList(newList);
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align="auto">
                <div>
                  <div className={classes.stats}>{player.points}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].points += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].points) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].points = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].points -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.rebounds}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].rebounds += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].rebounds) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].rebounds = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].rebounds -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.assists}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].assists += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].assists) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].assists = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].assists -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.steals}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].steals += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].steals) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].steals = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].steals -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.blocks}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].blocks += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].blocks) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].blocks = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].blocks -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.FGM}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].FGM += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].FGM) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].FGM = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].FGM -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.FGA}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].FGA += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].FGA) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].FGA = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].FGA -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.FGP}</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.threePM}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].threePM += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].threePM) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].threePM = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].threePM -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.threePA}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].threePA += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].threePA) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].threePA = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].threePA -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.threePP}</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.FTM}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].FTM += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].FTM) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].FTM = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].FTM -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.FTA}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].FTA += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].FTA) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].FTA = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].FTA -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.FTP}</div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.offenseRebounds}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].offenseRebounds += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].offenseRebounds) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].offenseRebounds = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].offenseRebounds -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.defenseRebounds}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].defenseRebounds += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].defenseRebounds) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].defenseRebounds = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].defenseRebounds -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.turnovers}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].turnovers += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].turnovers) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].turnovers = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].turnovers -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  <div className={classes.stats}>{player.fouls}</div>
                  <Button
                    className={classes.plusButton}
                    onClick={(e) => {
                      let newList = [...playerList]; // copying the old datas array
                      newList[index].fouls += 1; // replace e.target.value with whatever you want to change it to
                      setPlayerList(newList);
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className={classes.minusButton}
                    onClick={(e) => {
                      if (Number(playerList[index].fouls) <= 0) {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].fouls = 0; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      } else {
                        let newList = [...playerList]; // copying the old datas array
                        newList[index].fouls -= 1; // replace e.target.value with whatever you want to change it to
                        setPlayerList(newList);
                      }
                    }}
                  >
                    -
                  </Button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
