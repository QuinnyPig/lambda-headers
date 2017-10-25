'use strict';

exports.handler = (event, context, callback) => {
    console.log('Adding static headers to CloudFront response because God is dead.');

    const response = event.Records[0].cf.response;
    response.headers['strict-transport-security'] = [{
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload',
    }];
    response.headers['x-content-type-options'] = [{
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    }];
    response.headers['x-frame-options'] = [{
        key: 'x-frame-options',
        value: 'DENY',
    }];
    response.headers['x-xss-protection'] = [{
        key: 'x-xss-protection',
        value: '1; mode=block',
    }];
    response.headers['referrer-policy'] = [{
        key: 'referrer-policy',
        value: 'origin',
    }];
    callback(null, response);
};
