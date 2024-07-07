import * as graphql from "@nestjs/graphql";
import { SalesReportInput } from "../additionalReports/SalesReportInput";
import { ShiftReportInput } from "../additionalReports/ShiftReportInput";
import { StationComparisonInput } from "../additionalReports/StationComparisonInput";
import { TelegramReport } from "../additionalReports/TelegramReport";
import { AdditionalReportsService } from "./additionalreports.service";

export class AdditionalReportsResolver {
  constructor(protected readonly service: AdditionalReportsService) {}

  @graphql.Mutation(() => String)
  async GenerateSalesReport(
    @graphql.Args()
    args: SalesReportInput
  ): Promise<string> {
    return this.service.GenerateSalesReport(args);
  }

  @graphql.Mutation(() => String)
  async GenerateShiftReport(
    @graphql.Args()
    args: ShiftReportInput
  ): Promise<string> {
    return this.service.GenerateShiftReport(args);
  }

  @graphql.Mutation(() => String)
  async GenerateStationComparisonReport(
    @graphql.Args()
    args: StationComparisonInput
  ): Promise<string> {
    return this.service.GenerateStationComparisonReport(args);
  }

  @graphql.Mutation(() => String)
  async SendReportToTelegram(
    @graphql.Args()
    args: TelegramReport
  ): Promise<string> {
    return this.service.SendReportToTelegram(args);
  }
}
