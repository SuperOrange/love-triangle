/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let cnt = 0;
    let first, second, third;

    for (let i = 0; i < preferences.length; i++) {
        if (preferences[i] === i + 1) continue;

        first = preferences[i] - 1;
        second = preferences[first] - 1;
        third = preferences[second] - 1;

        if (third === i) {
            cnt++;

            preferences[i] = preferences[first] = preferences[second] = 0;
        }
    }

    return cnt;
};
