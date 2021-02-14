const http = require("http")

const routes = {
    "/": function (req, res) {
        res.write("Home page")
    },
    "/about": function (req, res) {
        res.write("About me")
    },
}

function router(req, res) {
    if (!routes.hasOwnProperty(req.url)) {
        res.writeHead(404)
        res.write("Page not found")
        res.end()
        return
    }
    routes[req.url](res, res)
    res.end()
}

const server = http.createServer(router)

server.listen(3000)
