// const canvas = document.getElementById('canvas') as HTMLCanvasElement
// const ctx = canvas.getContext('2d')!

// type Point = {
//   x: number
//   y: number
// }

const isOdd = (v: number) => {
  return v % 2 === 1
}

function getRandomNumber(a: number, b: number) {
  // Ensure 'a' is the smaller value and 'b' is the larger value
  const min = Math.min(a, b)
  const max = Math.max(a, b)

  // Generate a random number between 'min' (inclusive) and 'max' (exclusive)
  const randomNumber = Math.random() * (max - min) + min

  // Return the random number
  return randomNumber
}

// function degreesToRadians(degrees: number): number {
//   return degrees * (Math.PI / 180)
// }

// function radianToDegrees(radians: number): number {
//   return radians * (180 / Math.PI)
// }

// function drawTrapezoidWithWidths(
//   context: CanvasRenderingContext2D,
//   origin: { x: number; y: number },
//   bottomWidth: number,
//   topWidth: number,
//   height: number,
// ) {
//   // Calculate the coordinates
//   let points = [
//     { x: origin.x, y: origin.y }, // bottom left
//     { x: origin.x + bottomWidth, y: origin.y }, // bottom right
//     {
//       x: origin.x + bottomWidth + (topWidth - bottomWidth) / 2,
//       y: origin.y + height,
//     }, // top right
//     { x: origin.x - (topWidth - bottomWidth) / 2, y: origin.y + height }, // top left
//   ]

//   // Draw the trapezoid
//   context.beginPath()
//   context.moveTo(points[0].x, points[0].y)
//   for (let i = 1; i < points.length; i++) {
//     context.lineTo(points[i].x, points[i].y)
//   }
//   context.closePath()

//   // Stroke or fill
//   context.stroke()
// }

// function drawParallelogram(
//   origin: Point,
//   width: number,
//   height: number,
//   angle: number,
//   fillColor: string,
// ): Point {
//   // Define vectors based on width, height and angle
//   const vector1: Point = {
//     x: -width,
//     y: 0,
//   }

//   const vector2: Point = {
//     x: -height * Math.cos(angle),
//     y: -height * Math.sin(angle),
//   }

//   // Start drawing
//   ctx.beginPath()
//   ctx.moveTo(origin.x, origin.y)

//   // Draw from the origin to the end of vector1
//   ctx.lineTo(origin.x + vector1.x, origin.y + vector1.y)

//   // Draw from the end of vector1 to the end of vector1 + vector2
//   ctx.lineTo(origin.x + vector1.x + vector2.x, origin.y + vector1.y + vector2.y)

//   // Draw from the end of vector1 + vector2 to the end of vector2
//   ctx.lineTo(origin.x + vector2.x, origin.y + vector2.y)

//   // Draw from the end of vector2 to the origin
//   ctx.lineTo(origin.x, origin.y)
//   ctx.fillStyle = fillColor
//   ctx.strokeStyle = fillColor
//   // Stroke the path
//   ctx.stroke()
//   ctx.fill()

//   return { x: origin.x + vector2.x, y: origin.y + vector2.y }

//   // origin.x + vector2.x, origin.y + vector2.y - next point
// }

// // const branchLength = 500
// const initialWidth = 60

// let currentAngle = Math.PI / 2
// const maxAngle = 180 // degrees

// // const segmentLength = branchLength / numberOfSegments

// type BranchArgs = {
//   origin: Point
//   width: number
//   height: number
//   targetAngle: number
//   fillColor?: string
//   initialAngle?: number
//   // someCoefficient: number
// }

// type Vector = {
//   x: number
//   y: number
// }

// function vectorRotatedByDegrees(vector: Vector, degrees: number): Vector {
//   // Convert degrees to radians
//   const radians = degrees * (Math.PI / 180)

//   // Calculate the new vector coordinates
//   const newX = vector.x * Math.cos(radians) - vector.y * Math.sin(radians)
//   const newY = vector.x * Math.sin(radians) + vector.y * Math.cos(radians)

//   return { x: newX, y: newY }
// }

// type SomeArgs = {
//   growthVector: Vector
//   originPoint: Point
//   width: number
//   height: number
// }

// const UP_VECTOR: Vector = { x: 0, y: -1 }

// const INIT_GROWTH_VECTOR = { x: 0, y: -1 }
// const ANGLE_OFFSET_DEG = 10

// const drawSomething = (args: SomeArgs) => {
//   const { growthVector, originPoint, width } = args

//   const segmentAngle =

//   const nextPoint = drawParallelogram(
//     originPoint,
//     width,
//     segmentHeight,
//     currentAngle,
//     fillColor,
//   )

//   console.log('growthVector', growthVector)
// }

// const numberOfSegments = 10
// const drawBranch = (args: BranchArgs) => {
//   const {
//     origin,
//     width,
//     height,
//     fillColor = '#3c3464',
//     initialAngle = degreesToRadians(90),
//     targetAngle = degreesToRadians(120),
//   } = args

//   const angleOffset = degreesToRadians(5)

//   let segmentAngle =
//     initialAngle + degreesToRadians(getRandomNumber(-angleOffset, angleOffset))

//   if (Math.abs(radianToDegrees(segmentAngle - targetAngle)) < 5) {
//     segmentAngle = targetAngle
//   }

//   console.log('segmentAngle', segmentAngle)

//   const segmentHeight = height / numberOfSegments

//   const nextPoint = drawParallelogram(
//     origin,
//     width,
//     segmentHeight,
//     currentAngle,
//     fillColor,
//   )

//   const newAmount = amountOfSegments - 1
//   if (newAmount > 0) {
//     drawBranch(nextPoint, newAmount)
//   }
// }

// export const initTree = () => {
//   drawBranch({ x: canvas.width / 2, y: canvas.height }, 10)
//   // drawTrapezoidWithWidths(ctx, { x: 100, y: 100 }, 100, 50, 20)
// }

// const  drawBranch = (x: number, y: number, length: number, width: number, deformation: number, rotate: number) =>  {

// const params = {
// 		x: x,
// 		y: y,
// 		length,
// 		width: width,
// 		deformation: deformation,
// 		rotate: rotate,
// 	};

// 	this.parent = null; //родительский объект, те ветвь, от которой отросла дананная
// 	this.children = []; //дети объекта, то есть отростки.

//         //Рисование ветки на canvas из параметров
// 	this.render = function() {
// 		drawer.DrawStick(this.params.x,
// 			this.params.y,
// 			this.params.leng,
// 			this.params.width,
// 			this.params.deformation,
// 			this.params.rotate);

// 	}

//         //Получение конечных точек ветви для создания отростка
//         this.getEndPoints = function() {
// 		var ex = this.params.x + this.params.leng * Math.cos(this.params.rotate.degree()),
// 			ey = this.params.y + this.params.leng * Math.sin(this.params.rotate.degree());

// 		return [ex, ey];
// 	}

//         //Создание отростков, растущих из конца ветви
// 	this.createChild = function(leng, width, deform, rotate) {
// 		var exy = this.getEndPoints(); //Получение конечных

// 		//Создание новой ветки из конца данной и помещаем её в children
// 		this.children.push(new Branch(exy[0], exy[1], leng, width, deform, rotate));

// 		//Записываем в созданную ветку информацию
// 		this.children[this.children.length - 1].parent = this;

// 		return this.children[this.children.length - 1];
// 	}

// 	this.render(); //Вызываем функцию для рандиринга
// }
// https://www.pvsm.ru/javascript/53752
// type Point = {
//   x: number
//   y: number
// }

// const convertDegreesToRadians = (degrees: number) => {
//   return (degrees * Math.PI) / 180
// }
// const convertRadiansToDegrees = (radians: number) => {
//   return (radians * 180) / Math.PI
// }

// function findVectorEnd(start: Point, angle: number, distance: number): Point {
//   const angleRadians = convertDegreesToRadians(angle)

//   const newX = start.x + distance * Math.cos(angleRadians)
//   const newY = start.y + distance * Math.sin(angleRadians)

//   return { x: newX, y: newY }
// }

// type Args = {
//   startingPoint: Point
//   angle: number
//   distance: number
// }
// // point
// // angle
// // distance

// const CONTROL_CONST = 100
// export const drawBranch = (args: Args) => {
//   const { startingPoint, angle, distance } = args

//   const endPoint = findVectorEnd(startingPoint, angle, distance)

//   //draw vector with red
//   ctx.strokeStyle = 'red'
//   ctx.beginPath()
//   ctx.moveTo(startingPoint.x, startingPoint.y)
//   ctx.lineTo(endPoint.x, endPoint.y)
//   ctx.stroke()

//   const controlPoint: Point = {
//     x: Math.random() * CONTROL_CONST + Math.min(startingPoint.x, endPoint.x),
//     y: Math.random() * CONTROL_CONST + Math.min(startingPoint.y, endPoint.y),
//   }

//   console.log(controlPoint)

//   // Draw the curve
//   ctx.beginPath()
//   ctx.strokeStyle = 'black'
//   ctx.lineWidth = 30
//   ctx.moveTo(startingPoint.x, startingPoint.y)
//   ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y)
//   ctx.stroke()
// }

// const start = { x: canvas.width / 2, y: canvas.height }
// const maxAngle = 30
// const segmentsCount = 3

// const drawLine = (start: Point, end: Point) => {
//   ctx.beginPath()
//   ctx.moveTo(start.x, start.y)
//   ctx.lineTo(end.x, end.y)
//   ctx.stroke()
// }

// const generateBranchVectors = (
//   start: Point,
//   angle: number,
//   distance: number,
// ) => {
//   const points = [start]

//   ctx.strokeStyle = 'green'
//   ctx.beginPath()
//   ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI)
//   ctx.stroke()

//   const amountOfSegments = getRandomNumber(2, 6)

//   for (let i = 0; i < amountOfSegments - 1; i++) {
//     const point = points[i]
//     const angleOffset = getRandomNumber(1, maxAngle)

//     const rand = Math.ceil(getRandomNumber(1, 10))
//     console.log('rand', rand)
//     const shouldBuildMore = isOdd(rand)
//     console.log('shouldBuildMore', shouldBuildMore)
//     const newPoint = findVectorEnd(
//       point,
//       angle + angleOffset,
//       distance / amountOfSegments,
//     )

//     // if (shouldBuildMore) {
//     //   generateBranchVectors(
//     //     newPoint,
//     //     angle + angleOffset,
//     //     distance / amountOfSegments,
//     //   )
//     // }

//     ctx.strokeStyle = 'red'
//     ctx.beginPath()
//     ctx.moveTo(point.x, point.y)
//     ctx.lineTo(newPoint.x, newPoint.y)
//     ctx.stroke()
//     points.push(newPoint)
//   }

//   const endPoint = findVectorEnd(start, angle, distance)

//   ctx.strokeStyle = 'blue'
//   ctx.beginPath()
//   ctx.arc(endPoint.x, endPoint.y, 5, 0, 2 * Math.PI)
//   ctx.stroke()
//   console.log(points)
// }

// export function draw() {
//   // drawBranch({
//   //   startingPoint: { x: canvas.width / 2, y: canvas.height },
//   //   angle: -90,
//   //   distance: 200,
//   // })

//   generateBranchVectors({ x: canvas.width / 2, y: canvas.height / 2 }, 90, 200)
// }
