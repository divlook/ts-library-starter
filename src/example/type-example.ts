import type { IArg } from '~/example/type-example.types'

export const typeExample = (arg: IArg) => {
    switch (arg) {
        case 'A':
        case 'B':
        case 'C':
            return arg

        default:
            throw new Error('잘못된 파라미터입니다.')
    }
}
