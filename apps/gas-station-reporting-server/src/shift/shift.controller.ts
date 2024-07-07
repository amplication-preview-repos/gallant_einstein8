import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShiftService } from "./shift.service";
import { ShiftControllerBase } from "./base/shift.controller.base";

@swagger.ApiTags("shifts")
@common.Controller("shifts")
export class ShiftController extends ShiftControllerBase {
  constructor(
    protected readonly service: ShiftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
