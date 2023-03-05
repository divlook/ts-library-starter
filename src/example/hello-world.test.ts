import { HelloWorld } from '~/example/hello-world'

describe('HelloWorld 테스트입니다.', () => {
    it('Hello, World!', () => {
        expect(HelloWorld()).toEqual('Hello, World!')
    })

    it('Hello, Divlook!', () => {
        expect(HelloWorld('Divlook')).toEqual('Hello, Divlook!')
    })
})
