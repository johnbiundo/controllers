// tslint:disable:max-classes-per-file
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class UpdateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export interface ListAllEntities {
  offset: number;
  limit: number;
}
