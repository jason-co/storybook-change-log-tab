module.exports = {
    stories: ['../components/**/*.stories.mdx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        './components/change-log/preset.js'
    ],
    framework: '@storybook/react',
    features: {
        storyStoreV7: true,
        previewMdx2: true
    },
    core: {
        builder: 'webpack5'
    }
};
