"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apps_1 = require("./apps");
const port = 3000;
const main = () => { };
(function () {
    apps_1.app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
})();
