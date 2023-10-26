/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponents: true,
    },
    images:{
        domains:["links.papareact.com"]
    }
}

module.exports = nextConfig
