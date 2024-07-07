import { Shift as TShift } from "../api/shift/Shift";

export const SHIFT_TITLE_FIELD = "id";

export const ShiftTitle = (record: TShift): string => {
  return record.id?.toString() || String(record.id);
};
