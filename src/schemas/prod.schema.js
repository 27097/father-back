const { z } = require('zod')

const prodSchema = z.object({
    name: z.string({ required_error: 'name of prod is required' }).min(4, { message: 'name must be at least 4 characters' }),
    description: z.string({ required_error: 'Email is required' }).optional(),
    code: z.string({ required_error: 'Password is required' }).min(4, { message: 'Password must be at least 6 characters' }),
    price: z.string({ required_error: 'Password is required' })
});


module.exports = { prodSchema }