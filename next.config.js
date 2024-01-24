/** @type {import('next').NextConfig} */
const nextConfig = {

    // images:{
    //     domains: ['raw.githubusercontent.com','images.wallpapersden.com', 'i.imgur.com']
    // }
    images: {
        remotePatterns: [{
          protocol:'https',
          hostname:'raw.githubusercontent.com',
        },
        {
            protocol:'https',
          hostname:'i.imgur.com',
        }
       
    ],
    },
}

module.exports = nextConfig
