import app from "./app"

// Start the server
const port = process.env.PORT || 16123
app.listen(port, () =>
  console.log(`Les Bâtisseurs - Moyen-Âge listening on port ${port}!`)
)
