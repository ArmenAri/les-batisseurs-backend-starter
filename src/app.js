import express from "express"
import "express-async-errors"
import swaggerUi from "swagger-ui-express"
import bodyParser from "body-parser"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import routes from "./routes"
import errorHandler from "./middlewares/errorHandler"

// App creation
const app = express()

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
app.use(cors({ origin: "*" }))
app.use(morgan("short"))
app.use(bodyParser.json())
app.use(routes)
app.use(errorHandler)

export default app
