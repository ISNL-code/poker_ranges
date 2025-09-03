// ActionFilter.tsx
import { Box, Button } from "@mui/material";

interface ActionFilterProps {
  actionsFilter: string[];
  setActionsFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const ActionFilter = ({
  actionsFilter,
  setActionsFilter,
}: ActionFilterProps) => {
  const toggleAction = (action: string) => {
    setActionsFilter((prev) =>
      prev.includes(action)
        ? prev.filter((a) => a !== action)
        : [...prev, action]
    );
  };

  const isActive = (action: string) => actionsFilter.includes(action);

  const buttons = [
    { label: "Raise", color: "warning.light", value: "raise" },
    { label: "Push", color: "error.dark", value: "push" },
    { label: "Limp", color: "success.light", value: "limp" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "column",
        mt: 1,
      }}
    >
      {buttons.map(({ label, color, value }) => (
        <Button
          key={value}
          onClick={() => toggleAction(value)}
          variant="text"
          size="small"
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            gap: 1,
            textTransform: "none",
            borderRadius: 2,
            paddingX: 1.5,
            paddingY: 0.5,
            opacity: isActive(value) ? 1 : 0.4,
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "action.hover",
            },
            minWidth: "auto",
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "3px",
              bgcolor: color,
            }}
          />
          {label}
        </Button>
      ))}
    </Box>
  );
};

export default ActionFilter;
