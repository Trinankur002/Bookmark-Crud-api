import { CreateBookmarkDto } from './createBookmark.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateBookmarkDto extends OmitType(CreateBookmarkDto, ['title'] as const) {
  
}
