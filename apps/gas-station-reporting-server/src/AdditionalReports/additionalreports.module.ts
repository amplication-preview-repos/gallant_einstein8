import { Module } from "@nestjs/common";
import { AdditionalReportsService } from "./additionalreports.service";
import { AdditionalReportsController } from "./additionalreports.controller";
import { AdditionalReportsResolver } from "./additionalreports.resolver";

@Module({
  controllers: [AdditionalReportsController],
  providers: [AdditionalReportsService, AdditionalReportsResolver],
  exports: [AdditionalReportsService],
})
export class AdditionalReportsModule {}
