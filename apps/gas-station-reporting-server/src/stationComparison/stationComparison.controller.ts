import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StationComparisonService } from "./stationComparison.service";
import { StationComparisonControllerBase } from "./base/stationComparison.controller.base";

@swagger.ApiTags("stationComparisons")
@common.Controller("stationComparisons")
export class StationComparisonController extends StationComparisonControllerBase {
  constructor(
    protected readonly service: StationComparisonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
