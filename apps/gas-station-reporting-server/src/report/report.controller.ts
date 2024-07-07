import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReportService } from "./report.service";
import { ReportControllerBase } from "./base/report.controller.base";

@swagger.ApiTags("reports")
@common.Controller("reports")
export class ReportController extends ReportControllerBase {
  constructor(
    protected readonly service: ReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
