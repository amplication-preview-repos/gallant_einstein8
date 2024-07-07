import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdditionalReportsService } from "./additionalreports.service";
import { TelegramReport } from "../additionalReports/TelegramReport";

@swagger.ApiTags("additionalReports")
@common.Controller("additionalReports")
export class AdditionalReportsController {
  constructor(protected readonly service: AdditionalReportsService) {}

  @common.Post("/generate-sales-report")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateSalesReport(
    @common.Body()
    body: TelegramReport
  ): Promise<string> {
        return this.service.GenerateSalesReport(body);
      }

  @common.Post("/generate-shift-report")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateShiftReport(
    @common.Body()
    body: TelegramReport
  ): Promise<string> {
        return this.service.GenerateShiftReport(body);
      }

  @common.Post("/generate-station-comparison-report")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateStationComparisonReport(
    @common.Body()
    body: TelegramReport
  ): Promise<string> {
        return this.service.GenerateStationComparisonReport(body);
      }

  @common.Post("/send-report-telegram")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendReportToTelegram(
    @common.Body()
    body: TelegramReport
  ): Promise<string> {
        return this.service.SendReportToTelegram(body);
      }
}
