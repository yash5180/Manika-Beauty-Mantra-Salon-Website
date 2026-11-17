import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableAppointment1792579406453 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'fullName',
            type: 'varchar',
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
            length: '15',
          },
          {
            name: 'serviceId',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'appointmentDate',
            type: 'timestamp',
          },
          {
            name: 'appointmentTime',
            type: 'time',
          },
          {
            name: 'status',
            type: 'varchar',
            default: "'PENDING'",
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        columnNames: ['serviceId'],
        referencedTableName: 'services',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
