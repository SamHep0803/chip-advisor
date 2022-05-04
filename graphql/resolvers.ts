import { Context } from "./context"

export const resolvers = {
  Query: {
    chips: (_parent: any, _args: any, ctx: Context) => {
      return ctx.prisma.chip.findMany()
    }
  }
}
