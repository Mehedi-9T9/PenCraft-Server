import { app } from "./apps";

const port = 3000


const main =()=>{}


  (function() {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
})();