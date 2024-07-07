import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StationComparisonServiceBase } from "./base/stationComparison.service.base";

@Injectable()
export class StationComparisonService extends StationComparisonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
