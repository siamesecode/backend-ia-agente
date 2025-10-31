import Fastify from "fastify";
import { number } from "zod";

const app = Fastify({
    logger: true,
});

app.listen({ port: Number(process.env.PORT) || 3333 }, (err: unknown, address: string) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
});

app.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});