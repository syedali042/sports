const withImages = require('next-images')
module.exports = {
    ...withImages(),
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        })

        return config
    },
    distDir: 'build',
    webpack5: true,
}
