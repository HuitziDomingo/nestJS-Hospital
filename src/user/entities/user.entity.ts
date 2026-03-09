import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'uuid', default: () => 'gen_random_uuid()' })
  uuid: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'bigint', nullable: true })
  telephone: bigint | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
