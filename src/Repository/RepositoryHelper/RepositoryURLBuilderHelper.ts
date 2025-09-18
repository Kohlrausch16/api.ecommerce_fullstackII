import { UUIDTypes } from "../../../node_modules/uuid/dist/cjs/types";

export const repositoryURLBuilderHelper = (id: UUIDTypes) => {
    const url = require("url");
    return url.parse(`http://localhost:3000/produto/${id}`);
}