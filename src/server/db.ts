import * as edgedb from "edgedb";
import { env } from "../env.mjs";

const globalForEdgeDB = globalThis as unknown as { edge: edgedb.Client };

export const edge = globalForEdgeDB.edge || edgedb.createClient();

if (env.NODE_ENV !== "production") globalForEdgeDB.edge = edge;
