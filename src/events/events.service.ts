import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    return await this.eventRepository.save(createEventDto);
  }

  async findAll(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  async findOne(id: number): Promise<Event | null> {
    return await this.eventRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateEventDto: UpdateEventDto,
  ): Promise<UpdateResult> {
    return await this.eventRepository.update(id, updateEventDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.eventRepository.delete(id);
  }
}
