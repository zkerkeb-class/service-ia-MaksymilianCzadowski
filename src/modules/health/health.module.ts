import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { CommonModule } from "../../common/common.module";
import { HealthController } from "./health.controller";
import { HealthService } from "./health.service";

@Module({
  imports: [CommonModule, HttpModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
