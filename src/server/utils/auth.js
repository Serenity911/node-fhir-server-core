const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const errors = require(path.resolve('./src/server/utils/error.utils'));
const logger = require(path.resolve('./src/lib/winston'));
const config = require(path.resolve('./src/lib/winston'));



/**
 * Parse the `token` from the given
 * `req`'s authorization header.
 *
 * @api public
 * @param {Request} req
 * @return {String|null}
 */
function _parseBearerToken(req) {

		let auth;
		if (!req.headers || !(auth = req.headers.authorization)) {
			return null;
		}

		// split on space
		const parts = auth.split(' ');
		if (parts.length < 2) {
				return null;
		}

		// get schema and token from array
		const schema = parts.shift().toLowerCase();
		const token = parts.join(' ');

		// validate that it is a bearer
		if (schema !== 'bearer') {
				return null;
		}

		return token;
	}

/**
 * Verify the JWT token
 *
 * @param {*} token
 * @param {*} secretOrPublicKey
 * @param {*} next
 */
function _verifyToken(token, secretOrPublicKey, options = {}, next) {
		const issuer = config.auth.issuer.uri;
		const clientId = config.auth.clientId;
		const allOptions = Object.assign(options, { audience: clientId, issuer: issuer });

		// verify the token and signature with secret/pub key
		jwt.verify(token, secretOrPublicKey, allOptions, function(err, decoded) {
				if (err) {
						// log error return 401 with error message;
						logger.error(err, err.message);
						return next(errors.custom(401, 'Unauthorized request: ' + err.message));
				}

				// token should be valid at this point
				// TODO get scopes/permissions/patienid
				next(decoded);
		});
}

/**
 * @name Validate
 * @summary Validates the bearer token in the headers.
 */
module.exports.validate = (req, res, next) => {

		// get bearer token
		const bearerToken = _parseBearerToken(req);

		if (bearerToken) {
				const decodedToken = jwt.decode(bearerToken, {complete: true});

				// check algorithm so we know how to validate the signature
				if (decodedToken && decodedToken.header && decodedToken.header.alg) {
						if (decodedToken.header.alg.startsWith('HS')) {
								// IF HS*** algorith, validate signature based on secret key
								_verifyToken(bearerToken, config.auth.secret, {}, next);

						} else if (decodedToken.header.alg.startsWith('RS')) {
								// IF RS*** algorithm, validate signature based on certificate
								// Get public key (update this to point to the correct public key path)
								const cert = fs.readFileSync(config.security.cert);
								_verifyToken(bearerToken, cert, {algorithms: [decodedToken.header.alg]}, next);
						}
				}
		}

		// did not pass checks, return 401 message
		next(errors.unauthorized());
};
