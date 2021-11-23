package v1;

object Util {
	fun getSlopeInterceptObject(pointA: Point, pointB: Point): SlopeIntercept {
		return SlopeIntercept(yintercept = computeYIntercept(pointA, pointB),
													slope = computeSlope(pointA, pointB))
	}

	fun computeSlope(pointA: Point, pointB: Point): Float {
		if ((pointB.x - pointA.x) === 0) {
			return 0.toFloat()
		}
		return (pointB.y-pointA.y).toFloat()/(pointB.x-pointA.x).toFloat()
	}

	fun computeYIntercept(pointA: Point, pointB: Point): Float {
		return (pointB.y - (computeSlope(pointA, pointB) * pointB.x))
	}
}

