import { StationComparison as TStationComparison } from "../api/stationComparison/StationComparison";

export const STATIONCOMPARISON_TITLE_FIELD = "id";

export const StationComparisonTitle = (record: TStationComparison): string => {
  return record.id?.toString() || String(record.id);
};
