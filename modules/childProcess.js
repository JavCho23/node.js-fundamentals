const { exec, spawn } = require("child_process")

// Exec puede ejecutar cualquier comando del sistema,
// Incluso ejecutar otro proceso de Node, o de otro lenguaje
// Exec retorna un buffer
// Exec hace un solo retorno en el callback
// La transferencia máxima es de 200kb
exec("ls -la", function (stdout) {
    console.log("stdout")
    console.log(stdout)
})

// Spawn tambien ejecuta un proceso, pero retorna un stream
// A spawn le puedes agregar listeners de eventos para que retorne datos
// Recomendado para gran procesamiento de datos cuando se necesita varias respuestas
const process = spawn("ls", ["-la"])
process.stdout.on("data", (data) => {
    console.log(data)
})
