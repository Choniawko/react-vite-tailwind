import { rest, RequestHandler } from "msw";
import { dashboard } from "./mocks/mocks";

export const handlers: RequestHandler[] = [
  rest.get("/api/opportunities", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(dashboard.opportunities));
  }),
  rest.get("/api/opportunities/:id", (req, res, ctx) => {
    const { id } = req.params;
    const item = dashboard.opportunities.find((item) => item.oppId === id);
    if (!item) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.json(item));
  }),
];
