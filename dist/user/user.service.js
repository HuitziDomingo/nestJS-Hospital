"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const common_2 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const userExist = await this.userRepository.findOne({ where: { email: createUserDto.email } });
        if (userExist)
            throw new common_2.HttpException({
                statusCode: common_2.HttpStatus.CONFLICT,
                message: 'El correo electronico ya existe',
                error: 'CONFLICT',
            }, common_2.HttpStatus.CONFLICT);
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const newUser = {
            ...createUserDto,
            password: hashedPassword,
        };
        return await this.userRepository.save(newUser);
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(id) {
        let user = await this.userRepository.findOne({ where: { id } });
        if (!user)
            throw new common_2.HttpException({
                statusCode: common_2.HttpStatus.NOT_FOUND,
                message: 'El usuario no fue encontrado',
                error: 'NOT_FOUND',
            }, common_2.HttpStatus.NOT_FOUND);
        return await this.userRepository.findOneBy({ id });
    }
    async update(id, updateUserDto) {
        await this.userRepository.update(id, updateUserDto);
        return await this.userRepository.findOneBy({ id });
    }
    async remove(id) {
        let userToDelete = await this.userRepository.findOne({ where: { id } });
        if (!userToDelete)
            throw new common_2.HttpException({
                statusCode: common_2.HttpStatus.NOT_FOUND,
                message: 'No se encontro usuario para eliminar.',
                error: 'NOT_FOUND',
            }, common_2.HttpStatus.NOT_FOUND);
        return {
            responseSuccess: await this.userRepository.delete(id),
            message: 'Se elimino correctamente'
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map