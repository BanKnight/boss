const boss = require("../lib")

async function start()
{
    await boss.init()

    boss.on_invoke(function (func_name, ...args)
    {
        console.log(`get invoke:${func_name}(${args})`)
    })

    boss.on_call(function (func_name, ...args)
    {
        console.log(`get call:${func_name}(${args})`)
        return args
    })

    for (let i = 0, len = 1; i < len; ++i)
    {
        let id = await boss.new_worker("./example/test_service_step.js")

        console.log(`----- new worker back: ${id} `)

        let ret = await boss.call_worker(id, "test_123", false)

        console.log(`get result:${ret}`)
    }
}

start()









