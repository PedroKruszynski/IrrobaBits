import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class CheckIdMongoosePipe implements PipeTransform {
  transform(id: string, metadata: ArgumentMetadata) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('ID not valid');
    }
    return id;
  }
}
