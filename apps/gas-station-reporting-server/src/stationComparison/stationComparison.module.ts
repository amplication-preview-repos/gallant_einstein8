import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StationComparisonModuleBase } from "./base/stationComparison.module.base";
import { StationComparisonService } from "./stationComparison.service";
import { StationComparisonController } from "./stationComparison.controller";
import { StationComparisonResolver } from "./stationComparison.resolver";

@Module({
  imports: [StationComparisonModuleBase, forwardRef(() => AuthModule)],
  controllers: [StationComparisonController],
  providers: [StationComparisonService, StationComparisonResolver],
  exports: [StationComparisonService],
})
export class StationComparisonModule {}
