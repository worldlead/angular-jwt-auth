import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    name: String
});

const RoleModel = mongoose.model("Role", RoleSchema);
export default RoleModel;
