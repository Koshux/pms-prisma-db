const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers  = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  },
  Mutation: {
    post: (root, args, context, info) => {
      return context.db.mutation.createLink({
        data: {
          url: args.url,
          description: args.description
        }
      }, info)
    },
    updateLink: (root, args) => {
      console.log('args:', args)
      const linkPosition = links.map(link => link.id).indexOf(args.id)

      if (linkPosition === -1) return

      const link = links[linkPosition]
      link.description = args.description
      link.url = args.url

      return link
    },
    deleteLink: (root, args) => {
      const linkPosition = links.map(link => link.id).indexOf(args.id)

      if (linkPosition === -1) return

      links.splice(linkPosition, 1)

      return links
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:8080',
      secret: 'mysecret123',
      debug: true
    })
  })
})

server.start({
  port: 8801
}, () => console.log(`Server is running on http://localhost:8801`))
