import {
  BaseEntity,
  OneToMany,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import {
  IsBoolean,
  IsEmail,
  IsNumberString,
  IsStrongPassword,
  Length,
  Matches,
} from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Ad } from "./Ad";
import { ObjectId } from "./ObjectId";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column({ length: 50 })
  @Length(2, 50, { message: "Entre 2 et 50 caractères" })
  @Matches(/^[a-zA-Z -]+$/, {
    message: "Le prénom ne doit contenir que des lettres",
  })
  @Field()
  firstName!: string;

  @Column({ length: 50 })
  @Length(2, 50, { message: "Entre 2 et 50 caractères" })
  @Matches(/^[a-zA-Z -]+$/, {
    message: "Le nom de famille ne doit contenir que des lettres",
  })
  @Field()
  lastName!: string;

  @Column({ length: 50, nullable: true })
  @Length(2, 50, { message: "Entre 2 et 50 caractères" })
  @Field({ nullable: true })
  nickName!: string;

  @Column({ length: 500 })
  @Field({ nullable: true })
  picture?: string;

  @Column({ length: 100 })
  @IsEmail()
  @Field()
  email!: string;

  @Column({ length: 250 })
  @IsStrongPassword()
  @Field()
  password!: string;

  @Column()
  @Length(8, 12, { message: "Entre 8 et 12 caractères" })
  @Field()
  registrationDate!: string;

  @Column({ length: 100, nullable: true })
  @Length(5, 100, { message: "Entre 5 et 100 caractères" })
  @Field()
  adress!: string;

  @Column({ length: 5, nullable: true })
  @IsNumberString(
    {},
    { message: "Le code postal doit être une chaîne de chiffres" }
  )
  @Length(5, 5, { message: "Le code postal doit avoir exactement 5 chiffres" })
  @Field()
  zipCode!: string;

  @Column({ length: 50, nullable: true })
  @Length(3, 50, { message: "Entre 3 et 50 caractères" })
  @Field()
  city!: string;

  @Column({ length: 10, nullable: true })
  @IsNumberString(
    {},
    { message: "Le numéro de téléphone doit être une chaîne de chiffres" }
  )
  @Length(10, 10, {
    message: "Le numéro de téléphone doit avoir exactement 10 chiffres",
  })
  @Field()
  phoneNumber!: string;

  @Column({ type: "boolean", default: false })
  @IsBoolean()
  @Field()
  isAdmin!: boolean;

  @OneToMany(() => Ad, (ad) => ad.user)
  @Field(() => [Ad])
  ads!: Ad[];
}

@InputType()
export class UserCreateInput {
  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  nickName!: string;

  @Field()
  picture!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  adress!: string;

  @Field()
  zipCode!: string;

  @Field()
  city!: string;

  @Field()
  phoneNumber!: string;

  @Field()
  isAdmin!: boolean;
}

@InputType()
export class UserUpdateInput {
  @Field({ nullable: true })
  firstName!: string;

  @Field({ nullable: true })
  lastName!: string;

  @Field({ nullable: true })
  nickName!: string;

  @Field({ nullable: true })
  picture!: string;

  @Field({ nullable: true })
  email!: string;

  @Field({ nullable: true })
  password!: string;

  @Field({ nullable: true })
  adress!: string;

  @Field({ nullable: true })
  zipCode!: string;

  @Field({ nullable: true })
  city!: string;

  @Field({ nullable: true })
  phoneNumber!: string;

  @Field({ nullable: true })
  isAdmin!: boolean;

  @Field(() => [ObjectId], { nullable: true })
  ads!: ObjectId[];
}
