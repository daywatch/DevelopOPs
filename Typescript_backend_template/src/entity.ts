import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("Company")
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column() name: string;
  @Column("text") description: string;
  @Column("text") website: string;
  @Column("text") companySize: string;

  @CreateDateColumn({ type: "timestamptz" }) createdAt: Date;
  @UpdateDateColumn({ type: "timestamptz" }) updatedAt: Date;
}
