import { PrismaClient } from "@prisma/client";
import { Client } from "discord.js";

interface CustomBotClient extends Client {
    database: PrismaClient;
};
