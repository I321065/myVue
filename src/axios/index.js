var merge = require('webpack-merge');

const baseConfig = {
    baseUrl: ''
};

const loginConfig = merge(baseConfig, {
    url: baseConfig.baseUrl + '/user/save',
    method: 'POST'
});

export default {
    loginConfig
};
