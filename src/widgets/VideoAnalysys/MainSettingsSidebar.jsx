import React, { useCallback, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Spring from "@components/Spring";

const MainSettingsSidebar = ({
  analyzed,
  setTeamAName,
  setTeamBName,
  setStrategy,
  strategy,
  teamAName,
  teamBName,
  video,
}) => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const commonTransitionStyles = {
    transition: "all 150ms",
  };

  const commonInputStyles = {
    color: "var(--text)",
    ...commonTransitionStyles,
    "&:hover": {
      color: "var(--accent)",
    },
    "&.Mui-focused": {
      color: "var(--accent)",
    },
  };

  const commonOutlineStyles = {
    borderColor: "var(--border)",
    ...commonTransitionStyles,
    "&:hover": {
      borderColor: "var(--accent)",
    },
    "&.Mui-focused": {
      borderColor: "var(--accent)",
    },
  };

  const handleGeneratePlans = useCallback(async () => {
    video &&
      navigate("/generate-attack-plans", {
        state: { videoId: video.data.Video_ID, plan: strategy },
      });
  }, [navigate, strategy, video]);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Spring className="relative card flex flex-col gap-6 card-padded !rounded-lg px-6 py-8">
      <h3 className="text-base font-medium text-center">Main Settings</h3>
      <div className="flex flex-col gap-4">
        <TextField
          id="team-a-name"
          label="First Team Name"
          variant="outlined"
          value={teamAName}
          onChange={(e) => setTeamAName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root fieldset": commonOutlineStyles,
            "& .MuiInputBase-input": commonInputStyles,
            "& .MuiInputLabel-root": commonInputStyles,
          }}
        />

        <TextField
          id="team-b-name"
          label="Second Team Name"
          variant="outlined"
          value={teamBName}
          onChange={(e) => setTeamBName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root fieldset": commonOutlineStyles,
            "& .MuiInputBase-input": commonInputStyles,
            "& .MuiInputLabel-root": commonInputStyles,
          }}
        />
      </div>

      <hr className="w-full border-border" />

      <FormControl fullWidth className="group">
        <InputLabel
          id="strategy-select-label"
          sx={commonInputStyles}
          className="group-hover:text-accent"
        >
          Select Strategy Plan
        </InputLabel>
        <Select
          labelId="strategy-select-label"
          id="strategy-select"
          value={strategy}
          label="Select Strategy Plan"
          onChange={(e) => setStrategy(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": commonOutlineStyles,
            "& .MuiSelect-select": commonInputStyles,
            "& .MuiSvgIcon-root": commonInputStyles,
          }}
        >
          <MenuItem value="direct_assault">Direct Assault</MenuItem>
          <MenuItem value="flank_attack">Flank Attack</MenuItem>
          <MenuItem value="combination_play">Combination Play</MenuItem>
          <MenuItem value="quick_transition">Quick Transition</MenuItem>
          <MenuItem value="cross_field_move">Cross-Field Move</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenDialog}
        disabled={!analyzed || !video}
      >
        Generate Attack Plans
      </Button>

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      >
        <DialogTitle>{"Please Input Correct Team Names"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              "&": {
                color: "#fff",
              },
            }}
          >
            Please input correct team names first. It will take a minute to
            generate attack plans.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleGeneratePlans} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Spring>
  );
};

export default MainSettingsSidebar;
