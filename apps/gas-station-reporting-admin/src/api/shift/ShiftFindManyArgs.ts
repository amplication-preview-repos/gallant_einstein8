import { ShiftWhereInput } from "./ShiftWhereInput";
import { ShiftOrderByInput } from "./ShiftOrderByInput";

export type ShiftFindManyArgs = {
  where?: ShiftWhereInput;
  orderBy?: Array<ShiftOrderByInput>;
  skip?: number;
  take?: number;
};
