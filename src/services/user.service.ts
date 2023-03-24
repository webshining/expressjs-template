import { FindOptionsWhere } from "typeorm";
import AppDataSource from "../db";
import { User } from "../models/user.entity";

class UserService {
	private readonly userRepository = AppDataSource.getRepository(User);

	getOne = async (options: FindOptionsWhere<User>[] | FindOptionsWhere<User>): Promise<User | null> => {
		return this.userRepository.findOne({ where: options });
	};

	getMany = async (options?: FindOptionsWhere<User>[] | FindOptionsWhere<User>): Promise<User[]> => {
		return this.userRepository.find({ where: options });
	};
}

export default UserService;
