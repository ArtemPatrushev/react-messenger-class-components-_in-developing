import { createMiddleware } from 'redux-api-middleware';
import messageMiddleware from './messageMiddleware.js';

export default [
    createMiddleware(),
    messageMiddleware
];
