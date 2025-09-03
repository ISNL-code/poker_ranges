import React from "react";
import {
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Slider,
  Typography,
} from "@mui/material";
import { PokerMatrixProps } from "../App";

interface RangeFiltersProps {
  filters: PokerMatrixProps;
  onChange: <K extends keyof PokerMatrixProps>(
    key: K,
    value: PokerMatrixProps[K]
  ) => void;
  positionLabelsMap: Record<string, string[]>;
}

const RangeFilters: React.FC<RangeFiltersProps> = ({
  filters,
  onChange,
  positionLabelsMap,
}) => {
  const positions = positionLabelsMap[filters.tableSize] || [];

  const handleWheel = (e: React.WheelEvent<HTMLSpanElement>) => {
    // e.preventDefault(); // чтобы не прокручивалась страница
    const delta = e.deltaY < 0 ? 1 : -1;
    const newValue = Math.min(100, Math.max(0, filters.eff_stack + delta));
    onChange("eff_stack", newValue);
  };

  return (
    <Box borderBottom="1px solid #ddd" bgcolor="#fafafa">
      <Stack
        py={1}
        px={2}
        direction="row"
        gap={1.5}
        flexWrap="wrap"
        alignItems="center"
      >
        {/* Model Type */}
        <ToggleButtonGroup
          value={filters.modelType}
          exclusive
          onChange={(_, value) => value && onChange("modelType", value)}
          size="small"
          sx={{ fontSize: 12 }}
          disabled
        >
          <ToggleButton value="chipEV">ChipEV</ToggleButton>
          <ToggleButton value="icm">ICM</ToggleButton>
        </ToggleButtonGroup>

        {/* Tournament Type */}
        <FormControl size="small" disabled>
          <InputLabel>Tournament</InputLabel>
          <Select
            sx={{ width: 120 }}
            value={filters.tournamentType}
            label="Tournament"
            onChange={(e) => onChange("tournamentType", e.target.value)}
          >
            <MenuItem value="bounty">Bounty</MenuItem>
            <MenuItem value="classic">Classic</MenuItem>
          </Select>
        </FormControl>

        {/* Table Size */}
        <FormControl size="small" disabled>
          <InputLabel>Players</InputLabel>
          <Select
            sx={{ width: 120 }}
            value={filters.tableSize}
            label="Players"
            onChange={(e) => onChange("tableSize", e.target.value)}
          >
            {Array.from({ length: 8 }, (_, i) => (
              <MenuItem key={i + 2} value={`${i + 2}-max`}>
                {i + 2}-max
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Action Type — 🆕 новый селект */}
        <FormControl size="small">
          <InputLabel>Type</InputLabel>
          <Select
            sx={{ width: 120 }}
            value={filters.action}
            label="Action"
            onChange={(e) => onChange("action", e.target.value)}
            disabled
          >
            <MenuItem value="open">Open</MenuItem>
          </Select>
        </FormControl>

        {/* Position Selector */}
        <ToggleButtonGroup
          value={filters.position}
          exclusive
          onChange={(_, value) => value && onChange("position", value)}
          size="small"
          sx={{ height: "40px" }}
        >
          {positions.map((pos) => (
            <ToggleButton
              key={pos}
              value={pos}
              sx={{
                width: 50,
                fontSize: 14,
                fontWeight: 700,
                "&.Mui-disabled": {
                  color: "#999",
                  borderColor: "#ccc",
                  backgroundColor: "#f5f5f5",
                  opacity: 0.5, // убираем стандартную полупрозрачность
                },
                border: "1px solid lightgray !important",
                borderRadius: pos === "BTN" ? "12px !important" : "",
                borderTopLeftRadius: pos === "SB" ? "12px  !important" : "",
                borderBottomLeftRadius: pos === "SB" ? "12px  !important" : "",
                borderTopRightRadius: pos === "CO" ? "12px  !important" : "",
                borderBottomRightRadius: pos === "CO" ? "12px  !important" : "",
              }}
              disabled={pos === "BB" && filters.action === "open"}
            >
              {pos}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        {/* Stack Size */}
        <Box sx={{ ml: 0, display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              p: 1,
              border: "1px solid #ccc",
              borderRadius: 1,
              width: 60,
              textAlign: "center",
              bgcolor: "white",
            }}
            onWheel={handleWheel}
          >
            <Typography variant="body1" color="textSecondary">
              <b>{filters.eff_stack} BB</b>
            </Typography>
          </Box>
          <Slider
            value={filters.eff_stack}
            onChange={(_, val) => onChange("eff_stack", val as number)}
            onWheel={handleWheel}
            min={0}
            max={100}
            step={1}
            size="small"
            sx={{
              width: 300,
              fontSize: 12,
              "& .MuiSlider-markLabel": {
                color: "#555",
                fontSize: 12,
              },
              "& .MuiSlider-mark": {
                backgroundColor: "#aaa",
                height: 6,
                width: 2,
              },
              "& .MuiSlider-markActive": {
                backgroundColor: "#1976d2",
              },
            }}
            marks={[
              { value: 0, label: 0 },
              { value: 10, label: 10 },
              { value: 20, label: 20 },
              { value: 30, label: 30 },
              { value: 40, label: 40 },
              { value: 50, label: 50 },
              { value: 60, label: 60 },
              { value: 80, label: 80 },
              { value: 100, label: 100 },
            ]}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default RangeFilters;
