import {MigrationInterface, QueryRunner, Table} from "typeorm";
/*
export class CreateTeachersTable1610640281971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'teachers',
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
                    name: 'first_name',
                    type: 'varchar'
                },
                {
                    name: 'last_name',
                    type: 'varchar'
                },
                {
                    name: 'age',
                    type: 'integer'
                },
                {
                    name: 'years_of_experience',
                    type: 'integer'
                },
                {
                    name: 'worked_in_universities',
                    type: 'boolean'
                },
                {
                    name: 'created_on',
                    type: 'timestamp'
                }
            ]
        }));


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //await queryRunner.dropTable('teachers');
    }

}
*/