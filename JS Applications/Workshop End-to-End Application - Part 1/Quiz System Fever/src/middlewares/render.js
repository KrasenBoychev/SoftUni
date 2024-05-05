import { renderTemplate as baseRender } from "../lib.js";

export function renderer(root) {
    return function(ctx, next) {
        ctx.render = (templateResult) => baseRender(templateResult, root);
        next();
    };
}