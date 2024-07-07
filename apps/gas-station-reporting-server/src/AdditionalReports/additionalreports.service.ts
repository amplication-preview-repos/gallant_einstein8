import { Injectable } from "@nestjs/common";
import { SalesReportInput } from "../additionalReports/SalesReportInput";
import { ShiftReportInput } from "../additionalReports/ShiftReportInput";
import { StationComparisonInput } from "../additionalReports/StationComparisonInput";
import { TelegramReport } from "../additionalReports/TelegramReport";

@Injectable()
export class AdditionalReportsService {
  constructor() {}
  async GenerateSalesReport(args: SalesReportInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async GenerateShiftReport(args: ShiftReportInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async GenerateStationComparisonReport(args: StationComparisonInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async SendReportToTelegram(args: TelegramReport): Promise<string> {
    throw new Error("Not implemented");
  }
}
