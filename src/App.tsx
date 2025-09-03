import { JSX, useState } from "react";
import PokerHandMatrix from "./components/PokerHandMatrix";
import RangeFilters from "./components/RangesFilters";

export type TableSize =
  | "2-max"
  | "3-max"
  | "4-max"
  | "5-max"
  | "6-max"
  | "7-max"
  | "8-max"
  | "9-max";

export type ModelType = "chipEV" | "icm";

export type Action = "open";

export type ActionOpenType =
  | "open_raise"
  | "open_folds"
  | "open_push"
  | "open_limp";

export type SourceType = Partial<
  Record<
    TableSize,
    {
      [key in ModelType]: {
        hands?: {
          code: string;
          raises: {
            [key in ActionOpenType]?: Partial<
              Record<
                Position,
                {
                  min_eff_stack: number;
                  max_eff_stack: number;
                } | null
              >
            > | null;
          };
          folds?:
            | {
                [key in ActionOpenType]?: Partial<
                  Record<
                    Position,
                    {
                      min_eff_stack: number;
                      max_eff_stack: number;
                    } | null
                  >
                > | null;
              }
            | null; // <-- добавляем null сюда, чтобы позволить полностью отсутствовать folds
          calls?:
            | {
                [key in ActionOpenType]?: Partial<
                  Record<
                    Position,
                    {
                      min_eff_stack: number;
                      max_eff_stack: number;
                    } | null
                  >
                > | null;
              }
            | null;
        }[];
      };
    }
  >
>;

export type Position =
  | "UTG"
  | "UTG1"
  | "UTG2"
  | "LJ"
  | "HJ"
  | "CO"
  | "BTN"
  | "SB"
  | "BB";

export interface PokerMatrixProps {
  tournamentType: "bounty" | "classic";
  tableSize: TableSize;
  modelType: ModelType;
  action: Action;
  position: Position;
  eff_stack: number;
}

const positionLabelsMap: Record<TableSize, Position[]> = {
  "2-max": ["SB", "BB"],
  "3-max": ["BTN", "SB", "BB"],
  "4-max": ["CO", "BTN", "SB", "BB"],
  "5-max": ["HJ", "CO", "BTN", "SB", "BB"],
  "6-max": ["LJ", "HJ", "CO", "BTN", "SB", "BB"],
  "7-max": ["UTG", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
  "8-max": ["UTG", "UTG1", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
  "9-max": ["UTG", "UTG1", "UTG2", "LJ", "HJ", "CO", "BTN", "SB", "BB"],
};

function App(): JSX.Element {
  const [filters, setFilters] = useState<PokerMatrixProps>({
    tournamentType: "classic",
    tableSize: "8-max",
    modelType: "chipEV",
    eff_stack: 50,
    position: "UTG",
    action: "open",
  });

  const handleFilterChange = <K extends keyof PokerMatrixProps>(
    key: K,
    value: PokerMatrixProps[K]
  ) => {
    setFilters((prev) => {
      if (key === "tableSize") {
        const newPositions = positionLabelsMap[value as TableSize];
        return {
          ...prev,
          tableSize: value as TableSize,
          position: newPositions[0],
        };
      }
      return { ...prev, [key]: value };
    });
  };

  return (
    <div className="App">
      <RangeFilters
        filters={filters}
        onChange={handleFilterChange}
        positionLabelsMap={positionLabelsMap}
      />

      <div style={{ padding: 16 }}>
        <PokerHandMatrix filters={filters} />
      </div>
    </div>
  );
}

export default App;
