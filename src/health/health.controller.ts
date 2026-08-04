import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}
  @Get()
  @ApiOperation({
    summary: 'Check API health',
    description: 'Returns the current health status of the backend service',
  })
  @ApiResponse({
    status: 200,
    description: 'The backend service is running successfully',
  })
  checkHealth() {
    return this.healthService.checkHealth();
  }
}
