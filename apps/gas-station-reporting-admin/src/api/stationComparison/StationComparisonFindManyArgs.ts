import { StationComparisonWhereInput } from "./StationComparisonWhereInput";
import { StationComparisonOrderByInput } from "./StationComparisonOrderByInput";

export type StationComparisonFindManyArgs = {
  where?: StationComparisonWhereInput;
  orderBy?: Array<StationComparisonOrderByInput>;
  skip?: number;
  take?: number;
};
