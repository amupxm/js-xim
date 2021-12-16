import xim from '../xim'


test('should create two randoms', () => {
    expect(
        new xim().generate()
    ).not.toEqual(
        new xim().generate()
    )
})
test('if xim be one instance , then should create two randoms too', () => {
    const localXim = new xim()
    expect(
        localXim.generate()
    ).not.toEqual(
        localXim.generate()
    )
})