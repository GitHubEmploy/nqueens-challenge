package v1

data class SlopeIntercept(
    val yintercept: Float,
    val slope: Float
) : Comparable<SlopeIntercept> {
    override fun compareTo(other: SlopeIntercept): Int {
        return compareValuesBy(this, other, { it.yintercept }, { it.slope })
    }


}
