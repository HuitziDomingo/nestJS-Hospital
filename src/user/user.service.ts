import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
import { HttpException, HttpStatus } from '@nestjs/common'
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const userExist = this.userRepository.findOne({ where: { email: createUserDto.email } })
    if (userExist)
      throw new HttpException({
        statusCode: HttpStatus.CONFLICT,
        message: 'El correo electronico ya existe',
        error: 'CONFLICT',
      }, HttpStatus.CONFLICT)

    return await this.userRepository.save(createUserDto)
  }

  async findAll() {
    return await this.userRepository.find()
  }

  async findOne(id: number) {
    let user = await this.userRepository.findOne({ where: { id } })
    if (!user)
      throw new HttpException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'El usuario no fue encontrado',
        error: 'NOT_FOUND',
      }, HttpStatus.NOT_FOUND)
    return await this.userRepository.findOneBy({ id })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto)
    return await this.userRepository.findOneBy({ id })
  }

  async remove(id: number) {
    let userToDelete = await this.userRepository.findOne({ where: { id } })
    if (!userToDelete)
      throw new HttpException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'No se encontro usuario para eliminar.',
        error: 'NOT_FOUND',
      }, HttpStatus.NOT_FOUND)

    return {
      responseSuccess: await this.userRepository.delete(id),
      message: 'Se elimino correctamente'
    }
  }
}
