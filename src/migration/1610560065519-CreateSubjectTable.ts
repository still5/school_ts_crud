import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSubjectTable1610560065519 implements MigrationInterface {
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subjects');
    }
    public async up(queryRunner: QueryRunner): Promise<void> {
        enum Subjects {
            Math = 'Math',
            Biology = 'Biology',
            Physics = 'Physics',
            Chemistry = 'Chemistry',
            Philosophy = 'Philosophy',
            Arts = 'Arts',
            History = 'History'
        }
        await queryRunner.createTable(new Table({
            name: 'subjects',
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
                    name: 'name',
                    type: 'varchar'
                }
            ]
        }));
    }


}
