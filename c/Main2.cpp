#include <vector>
#include <iostream>

struct SolverJob {
	std::vector<unsigned char> positions;

	const unsigned char size;

	SolverJob(std::vector<unsigned char>&& positions)
	: positions(positions), size(positions.size()) {}

	bool validate() {
		// Check for diagonal conflicts
		for (unsigned char i1 = 0; i1 < size - 1; ++i1) {
			for (unsigned char i2 = i1 + 1; i2 < size; ++i2) {
				if (codiagonal(
						i1, positions[i1],
						i2, positions[i2]
				)) {
					return false;
				}
			}
		}

		// Check for collinearity
		for (unsigned char i1 = 0; i1 < size - 2; ++i1) {
			for (unsigned char i2 = i1 + 1; i2 < size - 1; ++i2) {
				for (unsigned char i3 = i2 + 1; i3 < size; ++i3) {
					if (collinear(
							i1, positions[i1],
							i2, positions[i2],
							i3, positions[i3]
					)) {
						return false;
					}
				}
			}
		}

		return true;
	}

private:

	inline static constexpr bool collinear(
			int x1, int y1,
			int x2, int y2,
			int x3, int y3
	) {
		return x1 * (y2 - y3) +
		       x2 * (y3 - y1) +
		       x3 * (y1 - y2)
		       == 0;
	}

	inline static constexpr bool codiagonal(
			int x1, int y1,
			int x2, int y2
	) {
		return x1 - x2 == y1 - y2 || x1 - y2 == x2 - y1;
	}
};

#undef SIZE

int main() {
	std::vector<unsigned char> positions;

	unsigned size;

	std::cin >> size;

	positions.reserve(size);

	for (unsigned char i = 0; i < size; ++i) {
		unsigned val;
		std::cin >> val;
		positions.push_back(val - 1);
	}

	SolverJob job(std::move(positions));

	if (job.validate()) {
		std::cout << "Valid solution" << std::endl;
	} else {
		std::cout << "Invalid solution" << std::endl;
	}

	return 0;
}
