import { rest } from 'msw'

const posts = [
    {
        userId: 1,
        id: 1,
        title: 'first post title',
        body: 'first post body'
    }
    // ...
]

export const handlers = [
    rest.get('/post', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                status: 'success',
                message: 'yea'
            })
        )
    }),
    rest.get('https://dummyjson.com/products', (req, res, ctx) => {
        return res(
            ctx.json(posts)
        )
    })
]
