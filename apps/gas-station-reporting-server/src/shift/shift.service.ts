import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShiftServiceBase } from "./base/shift.service.base";

@Injectable()
export class ShiftService extends ShiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
