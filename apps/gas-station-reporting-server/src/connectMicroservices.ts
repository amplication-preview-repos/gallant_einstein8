import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MicroserviceOptions } from "@nestjs/microservices";
import { generateRedisClientOptions } from "./redis/generateRedisClientOptions";

export async function connectMicroservices(app: INestApplication) {
  const configService = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>(generateRedisClientOptions(configService));
}
