// import 'whatwg-fetch'

import { fetch } from 'cross-fetch'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll } from 'vitest'

export const restHandlers = [
    rest.get('https://dummyjson.com/products', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({
            products: [
                { id: 1, title: 'test product' }
            ]
        }))
    }),
]

const server = setupServer(...restHandlers)

global.fetch = fetch

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
