import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import outing from "./ducks/outing";

export default createStore( outing, undefined, applyMiddleware( promiseMiddleware() ) );
