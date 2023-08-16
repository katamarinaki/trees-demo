class LSystem {
  currentString: string
  rules: { [key: string]: string }
  x: number
  y: number
  currentAngle: number
  length: number
  angle: number
  stack: Array<{ x: number; y: number; angle: number }>

  // import { draw } from './drawTree'

  constructor() {
    this.currentString = 'X'
    this.rules = {
      X: 'F-[[X]+X]+F[+FX]F--X',
      F: 'FF',
    }
    this.x = 0
    this.y = 0
    this.currentAngle = 0
    this.length = 3
    this.angle = 20 * (Math.PI / 180)
    this.stack = []
  }

  generate(n: number): void {
    for (let i = 0; i < n; i++) {
      let newString = ''
      for (let j = 0; j < this.currentString.length; j++) {
        newString += this.rules[this.currentString[j]] || this.currentString[j]
      }
      this.currentString = newString
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    // this.x = ctx.canvas.width / 2
    this.y = ctx.canvas.height / 2

    for (let i = 0; i < this.currentString.length; i++) {
      const currentChar = this.currentString[i]
      switch (currentChar) {
        case 'F':
          let newX = this.x + this.length * Math.cos(this.currentAngle)
          let newY = this.y - this.length * Math.sin(this.currentAngle)
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(newX, newY)
          ctx.stroke()
          this.x = newX
          this.y = newY

          // let newX = this.x + this.length * Math.cos(this.currentAngle)
          // let newY = this.y - this.length * Math.sin(this.currentAngle)
          // const kekAngle = this.currentAngle + Math.PI / 2
          // let midX = this.x + (this.length / 2) * Math.cos(kekAngle)
          // let midY = this.y - (this.length / 2) * Math.sin(kekAngle)

          // ctx.beginPath()
          // ctx.moveTo(this.x, this.y)
          // ctx.quadraticCurveTo(midX, midY, newX, newY)
          // ctx.stroke()

          // this.x = newX
          // this.y = newY
          break
        case '+':
          this.currentAngle += this.angle
          break
        case '-':
          this.currentAngle -= this.angle
          break
        case '[':
          this.stack.push({
            x: this.x,
            y: this.y,
            angle: this.currentAngle,
          })
          break
        case ']':
          let last = this.stack.pop()
          if (last) {
            this.x = last.x
            this.y = last.y
            this.currentAngle = last.angle
          }
          break
      }
    }
  }
}

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')!

const tree = new LSystem()
tree.generate(6)

console.log(tree.currentString)

tree.draw(ctx)
