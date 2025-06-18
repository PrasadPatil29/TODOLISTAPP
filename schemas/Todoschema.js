const z = require('zod')

const Todo=z.object({
    title:z.string(),
    description:z.string(),
})

module.exports=Todo;