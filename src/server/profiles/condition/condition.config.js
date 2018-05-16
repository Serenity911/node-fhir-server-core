const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const condition_args = require('./condition.arguments');
const controller = require('./condition.controller');

const scopes = [
	'user/*.*',
	'user/Condition.*',
	'user/Condition.read',
	'user/*.read',
	'condition/*.*',
	'condition/Condition.*',
	'condition/Condition.read',
	'condition/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/condition',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, condition_args.ABATEMENT_AGE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ABATEMENT_BOOLEAN),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ABATEMENT_DATE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ABATEMENT_STRING),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ASSERTED_DATE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ASSERTER),
			Object.assign({versions: VERSIONS.STU3}, condition_args.BODY_SITE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, condition_args.CLINICAL_STATUS),
			Object.assign({versions: VERSIONS.STU3}, condition_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, condition_args.EVIDENCE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.EVIDENCE_DETAIL),
			Object.assign({versions: VERSIONS.STU3}, condition_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ONSET_AGE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ONSET_DATE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ONSET_INFO),
			Object.assign({versions: VERSIONS.STU3}, condition_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, condition_args.SEVERITY),
			Object.assign({versions: VERSIONS.STU3}, condition_args.STAGE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, condition_args.VERIFICATION_STATUS)
		],
		scopes: scopes,
		controller: controller.getCondition
	},
	{
		type: 'post',
		path: '/:version/condition/_search',
		corsOptions: {methods: ['POST']},
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, condition_args.ABATEMENT_AGE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ABATEMENT_BOOLEAN),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ABATEMENT_DATE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ABATEMENT_STRING),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ASSERTED_DATE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ASSERTER),
			Object.assign({versions: VERSIONS.STU3}, condition_args.BODY_SITE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, condition_args.CLINICAL_STATUS),
			Object.assign({versions: VERSIONS.STU3}, condition_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, condition_args.EVIDENCE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.EVIDENCE_DETAIL),
			Object.assign({versions: VERSIONS.STU3}, condition_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ONSET_AGE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ONSET_DATE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.ONSET_INFO),
			Object.assign({versions: VERSIONS.STU3}, condition_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, condition_args.SEVERITY),
			Object.assign({versions: VERSIONS.STU3}, condition_args.STAGE),
			Object.assign({versions: VERSIONS.STU3}, condition_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, condition_args.VERIFICATION_STATUS)
		],
		scopes: scopes,
		controller: controller.getCondition
	},
	{
		type: 'get',
		path: '/:version/condition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getConditionById
	}
];

/**
 * @name exports
 * @summary Condition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CONDITION
	},
	routes
};