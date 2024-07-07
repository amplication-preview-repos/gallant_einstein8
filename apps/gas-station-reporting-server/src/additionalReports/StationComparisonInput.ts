import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class StationComparisonInput {
    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    start_date?: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    end_date?: string;

    @Field(() => [String], {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => [String]
    })
    @Type(() => String)
    source?: string;
}

export { StationComparisonInput as StationComparisonInput };