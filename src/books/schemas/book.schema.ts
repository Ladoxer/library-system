import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Author } from "../../authors/schemas/author.schema";

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: Author.name,required: true })
  authorId: Types.ObjectId;

  @Prop({ required: true })
  publishedDate: String;
}

export const BookSchema = SchemaFactory.createForClass(Book);