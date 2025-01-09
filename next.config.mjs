// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gltf|glb)$/,
      type: "asset/resource",
    });
    return config;
  },
};

// module.exports = nextConfig;

export default nextConfig;
