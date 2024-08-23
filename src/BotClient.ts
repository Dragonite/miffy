import { Client, Events, GatewayIntentBits } from 'discord.js';
import { PrismaClient } from '@prisma/client';

class BotClient extends Client {
    public database: PrismaClient = new PrismaClient();

    constructor() {
        const token = process.env.DISCORD_TOKEN
        if (!token) {
            console.log('The token is not configured for this application. Check your .env file.')
            return;
        }
        super({ intents: [GatewayIntentBits.Guilds] });
        this.findWorkouts();
        this.setupReady();
        this.login(token);
    }

    setupReady() {
        this.once(Events.ClientReady, readyClient => {
            console.log(`Ready! Logged in as ${readyClient.user.tag}`);
        });
    }

    async findWorkouts() {
        const workouts = await this.database.workout.findMany()
        console.log(workouts)
    }
}

export default BotClient;