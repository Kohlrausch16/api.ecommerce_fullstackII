import { UUIDTypes } from "../../../node_modules/uuid/dist/cjs/types";
import { Client } from "../../Entities/Client";
import { User } from "../../Entities/User";

export const repositoryURLBuilderHelper = (id: UUIDTypes) => {
    const url = require("url");
    return url.parse(`http://localhost:3000/produto/${id}`);
}