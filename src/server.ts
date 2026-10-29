import app from "./app"
import config from "./config"
import 'dotenv/config';

const port = config.PORT

app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})