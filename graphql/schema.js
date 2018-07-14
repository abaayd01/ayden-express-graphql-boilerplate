const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');

const Query = `
	type Query {
		_empty: String
	}
`;

const typeDefs = [];
const resolvers = merge();

const schema = makeExecutableSchema({
	typeDefs: typeDefs,
	resolvers: resolvers
});

module.exports.typeDefs = typeDefs;
module.exports.schema = schema;
