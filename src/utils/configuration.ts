// Данный модуль предназначен для конфигурации телеграм-бота и проверки её работоспособности.

// Импорт
import {DotenvParseOutput, config} from "dotenv";

// Интерфейс конфигурации, обязательно должен включать в себя метод get
interface IConfig {
    get(key: string): string;
}

// Класс конфигурации
class Config implements IConfig {
    // Массив нашего конфигурационного файла
    private config: DotenvParseOutput;

    constructor() {
        const { error, parsed } = config();

        if (error) {
            throw new Error('ОШИБКА КОНФИГУРАЦИИ: Отсутствует файл .env');
        }
        if (!parsed) {
            throw new Error ('ОШИБКА КОНФИГУРАЦИИ: Файл .env пуст!');
        }

        // Если нет ошибок, то вносим .env файл в наш массив
        this.config = <DotenvParseOutput>parsed;
    };

    // Метод для получения ключа
    get(key: string): string {
        const result = this.config[key]
        if (!result) throw new Error('ОШИБКА КОНФИГУРАЦИИ: Данного ключа не существует!');
        return result;
    };
}

export default new Config();

// (c) SoftiumCode, 2023