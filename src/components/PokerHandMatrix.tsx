import { styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { PokerMatrixProps, SourceType } from "../App";
import { tournaments_DB } from "../db/tournaments/tournaments_DB";
import { Typography } from "@mui/material";
import ActionFilter from "./ActionFilter";
import { useState } from "react";

// Получение цвета из темы
const getThemeColor = (theme: Theme, key: string): string => {
  const [main, sub] = key.split(".");
  const colorGroup = (theme.palette as any)[main];
  return colorGroup?.[sub] || key;
};

// Стилизованный компонент ячейки
const Item = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "bgcolor",
})<{ bgcolor: string }>(({ theme, bgcolor }) => ({
  backgroundColor: getThemeColor(theme, bgcolor),
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
  height: 45,
  width: 45,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontFamilyL: "Roboto",
  position: "relative",
}));

// Ранжированные карты
const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

// Получение метки руки
const getHandLabel = (i: number, j: number) => {
  const high = ranks[i];
  const low = ranks[j];
  if (i === j) return `${high}${high}`;
  if (i < j) return `${high}${low}s`;
  return `${low}${high}o`;
};

// Компонент
export default function PokerMatrix({
  filters,
}: {
  filters: PokerMatrixProps;
}) {
  const [actionsFilter, setActionsFilter] = useState(["raise", "limp", "push"]);

  const source: SourceType =
    filters.tournamentType === "bounty"
      ? tournaments_DB.bountyT
      : tournaments_DB.classicT;

  // типы ключей строго ограничены, TS не ругается
  const table = source?.[filters.tableSize]?.[filters.modelType];

  const raiseHand = (label: string): boolean => {
    if (!table?.hands) return false;

    return table.hands.some((hand) => {
      if (hand.code !== label) return false;

      const actionGroup = hand.raises["open_raise"];
      const positionData = actionGroup?.[filters.position];

      if (!positionData) return false;

      return (
        filters.eff_stack >= positionData.min_eff_stack &&
        filters.eff_stack <= positionData.max_eff_stack
      );
    });
  };

  const pushHand = (label: string): boolean => {
    if (!table?.hands) return false;

    return table.hands.some((hand) => {
      if (hand.code !== label) return false;

      const actionGroup = hand.raises["open_push"];
      const positionData = actionGroup?.[filters.position];

      if (!positionData) return false;

      return (
        filters.eff_stack >= positionData.min_eff_stack &&
        filters.eff_stack <= positionData.max_eff_stack
      );
    });
  };

  const limpHand = (label: string): boolean => {
    if (!table?.hands) return false;

    return table.hands.some((hand) => {
      if (hand.code !== label) return false;
      if (!hand.calls) return null;
      const actionGroup = hand.calls["open_limp"];

      const positionData = actionGroup?.[filters.position];

      if (!positionData) return false;

      return (
        filters.eff_stack >= positionData.min_eff_stack &&
        filters.eff_stack <= positionData.max_eff_stack
      );
    });
  };

  const foldedHand = (label: string): boolean | null => {
    if (!table?.hands) return false;

    for (const hand of table.hands) {
      if (hand.code !== label) continue;

      const actionGroup = hand.folds?.open_folds;
      if (!actionGroup) return false;

      const positionData = actionGroup[filters.position];

      // Явно задано как null
      if (positionData === null) return null;

      // Позиция не указана вообще
      if (!positionData) return false;

      const inRange =
        filters.eff_stack >= positionData.min_eff_stack &&
        filters.eff_stack <= positionData.max_eff_stack;

      // Позиция указана, но стек вне диапазона
      if (!inRange) return null;

      return true;
    }

    return false;
  };

  const calculateRangeNumber = () => {
    if (!table?.hands) return 0;

    let totalCombos = 0;

    table.hands.forEach((hand) => {
      const label = hand.code;

      const isRaised = raiseHand(label);
      const isPushed = pushHand(label);
      const isLimped = limpHand(label);

      if (isRaised || isPushed || isLimped) {
        if (/^[AKQJT98765432]{2}$/.test(label)) {
          totalCombos += 6; // пара
        } else if (/s$/.test(label)) {
          totalCombos += 4; // сьютед
        } else if (/o$/.test(label)) {
          totalCombos += 12; // оффсьютед
        }
      }
    });

    const percentage = Math.round((totalCombos / 1326) * 100);

    return percentage + "%";
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
      <Box
        sx={{
          p: 0.5,
          display: "grid",
          gridTemplateColumns: "repeat(13, 1fr)",
          gap: 0.75,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {ranks.map((_, row) =>
          ranks.map((_, col) => {
            const label = getHandLabel(row, col);

            const isRaised = raiseHand(label);
            const isFolded = foldedHand(label);
            const isPushHand = pushHand(label);
            const isLimpHand = limpHand(label);

            const showRaise = actionsFilter?.includes("raise");
            const showLimp = actionsFilter?.includes("limp");
            const showPush = actionsFilter?.includes("push");

            return (
              <Item
                key={`${row}-${col}`}
                bgcolor={
                  isRaised && showRaise
                    ? "warning.light"
                    : isPushHand && showPush
                    ? "error.dark"
                    : isLimpHand && showLimp
                    ? "success.light"
                    : isFolded
                    ? "error.main"
                    : "gray"
                }
                sx={{
                  overflow: "hidden",
                  letterSpacing: 1.15,
                  borderRadius: 2,
                  boxShadow:
                    row === col ? "0 0 3px 3px rgba(41, 60, 230, 1)" : "",
                  opacity: () => {
                    if ((isPushHand && showPush) || (isLimpHand && showLimp))
                      return 1;
                    if (isRaised && showRaise) return 1;
                    if (isRaised && showRaise && !isFolded) return 1;
                    if (isFolded) return 0.25;

                    return 0.25;
                  },
                }}
              >
                {isPushHand && showPush && (
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      position: "absolute",
                      bgcolor: "error.dark",

                      bottom: 4,
                      left: 4,
                    }}
                  ></Box>
                )}
                {isLimpHand && showLimp && (
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      position: "absolute",
                      bgcolor: "success.light",
                      top: 4,
                      left: 4,
                    }}
                  ></Box>
                )}
                {isRaised && showRaise && (
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      position: "absolute",
                      bgcolor: "warning.light",
                      top: 4,
                      right: 4,
                    }}
                  ></Box>
                )}
                {label}
              </Item>
            );
          })
        )}
      </Box>
      <Box>
        <Box
          sx={{
            p: 1,
            border: "1px solid #ccc",
            borderRadius: 1,
            width: 60,
            height: "fit-content",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" color="textSecondary" fontWeight="bold">
            {calculateRangeNumber()}
          </Typography>
        </Box>

        <ActionFilter
          actionsFilter={actionsFilter}
          setActionsFilter={setActionsFilter}
        />
      </Box>
    </Box>
  );
}
