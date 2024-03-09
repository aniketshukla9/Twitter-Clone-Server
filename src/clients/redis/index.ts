import Redis from "ioredis";

export const redisClient = new Redis(
  "redis://default:d7166a8a4e624f6199cbe25475af6a7d@us1-ample-egret-41994.upstash.io:41994"
);
