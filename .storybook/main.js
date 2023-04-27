module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
        '../components/**/*.stories.mdx'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        './components/change-log/preset.js'
    ],
    framework: '@storybook/react',
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.change-log.mdx$/,
            use: [
                {
                    loader: 'raw-loader',
                    options: {
                        esModule: false
                    }
                }
            ]
        });
        return config;
    }
};
