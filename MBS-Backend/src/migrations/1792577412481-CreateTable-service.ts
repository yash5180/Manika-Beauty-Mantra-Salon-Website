import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableService1792577412481 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'services',
                columns:[
                    {
                        name:'id',
                        type:'integer',
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment",
                    },
                    {
                        name:'name',
                        type:'varchar'
                    },
                    {
                        name:'description',
                        type:'text'
                    },
                    {
                        name:'price',
                        type:"integer"
                    },
                    {
                        name:'durationMinutes',
                        type:'integer',
                    },
                    {
                        name:'isActive',
                        type:"boolean",
                        default:true,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("services");
    }

}
