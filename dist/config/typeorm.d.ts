import { DataSource } from 'typeorm';
export declare const config: {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
};
declare const _default: (() => {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: string[];
    migrations: string[];
    synchronize: boolean;
}>;
export default _default;
export declare const connectionSourse: DataSource;
