import express from "express"
import "express-async-errors"
import swaggerUi from "swagger-ui-express"
import bodyParser from "body-parser"
import morgan from "morgan"
import helmet from "helmet"
import routes from "./routes"
import errorHandler from "./middlewares/errorHandler"
import cors from "cors"

// App creation
const app = express()

app.use(
  cors({
    origin: "*",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
    allowMethods: "GET, PUT, POST, DELETE, OPTIONS"
  })
)

// Swagger UI
app.use(
  "/api-specs",
  express.static(`${__dirname}/../reference/les-batisseurs-moyen-age`)
)
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: "/api-specs/openapi.yaml"
    }
  })
)

// Middlewares
app.use(helmet())
app.use(morgan("short"))
app.use(bodyParser.json())
app.use(routes)
app.use(errorHandler)

export default app
