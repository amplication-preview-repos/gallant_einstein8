import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ShiftModuleBase } from "./base/shift.module.base";
import { ShiftService } from "./shift.service";
import { ShiftController } from "./shift.controller";
import { ShiftResolver } from "./shift.resolver";

@Module({
  imports: [ShiftModuleBase, forwardRef(() => AuthModule)],
  controllers: [ShiftController],
  providers: [ShiftService, ShiftResolver],
  exports: [ShiftService],
})
export class ShiftModule {}
