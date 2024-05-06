/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["m.media-amazon.com","lh3.googleusercontent.com", 'firebasestorage.googleapis.com']
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
          config.externals.push('_not-found.js');
        }
    
        return config;
      },
}

module.exports = nextConfig
