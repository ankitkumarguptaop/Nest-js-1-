import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource, DataSourceOptions } from "typeorm";
import { ConfigService } from '@nestjs/config';
import { SeederOptions } from 'typeorm-extension';

export const dataSourceOptions = (
    configService: ConfigService,
): DataSourceOptions & SeederOptions => ({
    type: "postgres",
    username: 'postgres',
    password: 'Ankit@1234',
    database: 'tododb',
    host: 'database',
    port: 5432,
    entities: ["dist/src/domain/**/*.entity.js"],
    synchronize: false,
    migrationsTableName: 'custom_migration_table',
    migrations: ['dist/src/infrastructure/database/migrations/*{.ts,.js}'],
    logging:true
})

export const dataSource = new DataSource(dataSourceOptions(new ConfigService()),)

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })