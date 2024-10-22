import { DataSource } from 'typeorm';
export declare const config: {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    logging: boolean;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
    dropSchema: boolean;
};
declare const _default: (() => {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    logging: boolean;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
    dropSchema: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    logging: boolean;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
    dropSchema: boolean;
}>;
export default _default;
export declare const connectionSourse: DataSource;