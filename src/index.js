import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());



server.get('/ping', (req, resp) => {
    resp.send('pong');      
})



server.listen(process.env.PORT,
                () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));