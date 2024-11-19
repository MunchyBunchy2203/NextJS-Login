import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    authEndpoint: "http://localhost:3000/loginUser"
  }
};

export default nextConfig;
