

const maskunixtime = BigInt(0b0111111111111111111111111111111111111111000000000000000000000000)
const maskchaos = BigInt(0b0000000000000000000000000000000000000000111111111111111111111111)
const maxbitwidth = BigInt(64)


const widthfirst = BigInt(40)
const widthsecond = maxbitwidth - widthfirst

export default class xim {
    maximumOverload = BigInt(0x7FFFFFFFFFFFFFFF)
    generate(): String {
        const now = BigInt(Date.now())
        const random = this.randomness()
        return this.compile(now, random)
    }
    compile(first: bigint, second: bigint): String {
        const compiled = ((first << widthsecond) & maskunixtime) | (second & maskchaos)
        if (compiled > this.maximumOverload) {
            return this.compile(first, second)
        }
        return `${compiled}`
    }
    randomness(): bigint {
        const UTCNow = new Date().getTime()
        const randomSeed = Math.random() * (UTCNow - 0)
        return BigInt(randomSeed.toFixed(0))
    }
}
