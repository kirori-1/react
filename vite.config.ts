import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import type { IncomingMessage, ServerResponse } from "http";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "mock-api",
      configureServer(server) {
        server.middlewares.use(
          "/api/data",
          (req: IncomingMessage, res: ServerResponse) => {
            const method = req.method?.toUpperCase();

            res.setHeader("Content-Type", "application/json");

            if (method === "GET") {
              res.end(JSON.stringify({ value: 42 }));
            } else if (method === "POST") {
              let body = "";
              req.on("data", (chunk) => (body += chunk));
              req.on("end", () => {
                try {
                  const parsed = JSON.parse(body);
                  res.end(JSON.stringify({ status: "ok", received: parsed }));
                } catch (error) {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ error: "Invalid JSON" }));
                }
              });
            } else {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: "Method Not Allowed" }));
            }
          }
        );
      },
    },
  ],
});
