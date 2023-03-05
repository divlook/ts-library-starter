import { typeExample } from '~/example/type-example'

describe('typeExample 테스트입니다.', () => {
    it('A를 반환합니다.', () => {
        expect(typeExample('A')).toEqual('A')
    })

    it('B를 반환합니다.', () => {
        expect(typeExample('B')).toEqual('B')
    })

    it('C를 반환합니다.', () => {
        expect(typeExample('C')).toEqual('C')
    })

    it('D는 잘못된 파라미터입니다.', () => {
        expect(() => {
            // @ts-ignore
            typeExample('D')
        }).toThrow()
    })
})
