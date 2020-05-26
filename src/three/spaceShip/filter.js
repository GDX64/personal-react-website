import { dot } from 'mathjs'

let defaultA = [0.19359961, 0, -0.19359961].reverse();
let defaultB = [1, -1.41421356, 0.61280079].reverse();

class Filter {
    constructor(a, b) {

        this.mouseX = 0;
        this.a = a
        this.b = b
        this.x = a.map(() => 0)
        this.y = b.slice(1).map(() => 0)

        document.addEventListener("mousemove", e => {
            this.mouseX = e.x / 100;
        });
    }

    filterIter = (exi) => {
        this.x.push(exi)
        this.x.shift(1)

        let now = dot(this.a, this.x) - dot(this.b.slice(0, -1), this.y);
        this.y.push(now);
        this.y.shift(1);

        return this.y;
    }
}

export default Filter