import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { ModulesModule } from './modules/modules.module';
import { RATE_LIMIT, RATE_TTL } from '@env';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: RATE_TTL,
      limit: RATE_LIMIT,
    }),
    ModulesModule,
  ],
})
export class AppModule {}
