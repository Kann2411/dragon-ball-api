import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanetEntity } from 'src/entities/Planets.entity';
import { Repository } from 'typeorm';
import * as characters from '../../utils/Characters.json';

@Injectable()
export class PlanetsRepository {
  constructor(
    @InjectRepository(PlanetEntity)
    private planetDBRepository: Repository<PlanetEntity>,
  ) {}

  async seedPlanets() {
    if((await this.planetDBRepository.find()).length > 0) {
      return {
        message: 'Ya existen planetas en la base de datos',
      };
    }
    characters.map(async (element) => {
      await this.planetDBRepository
        .createQueryBuilder()
        .insert()
        .into(PlanetEntity)
        .values({
          name: element.originPlanet.name,
          isDestroyed: element.originPlanet.isDestroyed,
          description: element.originPlanet.description,
          image: element.originPlanet.image,
        })
        .orIgnore()
        .execute();
    });
    return {
      message: 'Planetas guardados con exito',
    };
  }

  async getPlanets() {
    return this.planetDBRepository.find();
  }
}
