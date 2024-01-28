import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { UserType } from "../../types";

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

UserSchema.pre("save", async function(next){
    try{
        if(this.isModified("password")){
            this.password = await bcrypt.hash(this.password, 10);
        }
        next();
    }catch(error){
        console.log(error);
    }
})

export const userModel = mongoose.model<UserType>("User", UserSchema);

