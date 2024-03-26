import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Set host to '0.0.0.0' to listen on all addresses
    port: 8080, // Change the port to 8080
  },
});
