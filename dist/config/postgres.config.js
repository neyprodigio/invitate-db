"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresConfig = void 0;
exports.postgresConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'Thais',
    password: '1234',
    database: 'invitation',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
//# sourceMappingURL=postgres.config.js.map