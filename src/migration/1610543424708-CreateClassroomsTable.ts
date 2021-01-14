import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClassroomsTable1610640281971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'classrooms',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    unsigned: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'classroom_number',
                    type: 'int'
                },
                {
                    name: 'booking_url',
                    type: 'varchar'
                }
            ]
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classrooms');
    }

}
