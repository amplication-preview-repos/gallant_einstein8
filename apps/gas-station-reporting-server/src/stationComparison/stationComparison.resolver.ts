import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StationComparisonResolverBase } from "./base/stationComparison.resolver.base";
import { StationComparison } from "./base/StationComparison";
import { StationComparisonService } from "./stationComparison.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StationComparison)
export class StationComparisonResolver extends StationComparisonResolverBase {
  constructor(
    protected readonly service: StationComparisonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
