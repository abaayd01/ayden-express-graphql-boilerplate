const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');

const Query = `
	type Query{
		_empty: String
	}
`;

const Book = require('./Book').typeDefs;
const bookResolvers = require('./Book').resolvers;

const typeDefs = [Query, Book];
const resolvers = merge(bookResolvers);

const schema = makeExecutableSchema({
	typeDefs: typeDefs,
	resolvers: resolvers
});

module.exports.typeDefs = typeDefs;
module.exports.schema = schema;
