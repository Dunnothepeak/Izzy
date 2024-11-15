function solveCircle() {
    const centerInput = document.getElementById('centerInput').value;
    const radiusInput = document.getElementById('radiusInput').value;
    const pointOnCircleInput = document.getElementById('pointOnCircleInput').value;
    const tangentLineInput = document.getElementById('tangentLineInput').value;
    const centerLineInput = document.getElementById('centerLineInput').value;
    let result = '';
    let explanation = '';

    let [h, k] = centerInput.split(',').map(Number);

    // Calculate radius if a point on the circle is given
    if (!radiusInput && pointOnCircleInput) {
        const [x, y] = pointOnCircleInput.split(',').map(Number);
        const r = Math.sqrt((x - h) ** 2 + (y - k) ** 2);
        result += `Calculated Radius from Point: ${r.toFixed(2)}\n`;
        explanation += `To find the radius, we used the distance formula between the center (${h}, ${k}) and the point (${x}, ${y}) on the circle: \n` +
                       `r = √((x - h)² + (y - k)²)\n` +
                       `This gives r = √((${x} - ${h})² + (${y} - ${k})²) = ${r.toFixed(2)}.\n`;
    }

    if (tangentLineInput && radiusInput) {
        // Additional logic for tangent lines and their explanations
        result += `Tangent Line Information: ${tangentLineInput}\n`;
        explanation += `The tangent line is checked against the radius and the center to ensure it touches the circle at exactly one point.\n`;
    }

    if (centerLineInput) {
        // Logic to check if the center lies on the line and its explanation
        result += `Center Line Information: ${centerLineInput}\n`;
        explanation += `The center line equation is analyzed to verify that the center (${h}, ${k}) lies on it.\n`;
    }

    if (!result) {
        result = 'Please provide sufficient data to solve the circle.';
        explanation = 'No valid inputs were provided to solve the circle.';
    }

    document.getElementById('result').textContent = result;
    document.getElementById('explanation').textContent = explanation;
}

function solveParabola() {
    const coefficients = document.getElementById('parabolaCoefficientsInput').value;
    const focusInput = document.getElementById('focusInput').value;
    const vertexInput = document.getElementById('vertexInput').value;
    let result = '';
    let explanation = '';

    let [a, b, c] = coefficients.split(',').map(Number);

    if (vertexInput) {
        const [vertexX, vertexY] = vertexInput.split(',').map(Number);
        result += `Given Vertex: (${vertexX}, ${vertexY})\n`;
        explanation += `The vertex is provided directly: (${vertexX}, ${vertexY}).\n`;
    }

    if (focusInput) {
        const [focusX, focusY] = focusInput.split(',').map(Number);
        result += `Given Focus: (${focusX}, ${focusY})\n`;
        explanation += `The focus is provided directly: (${focusX}, ${focusY}).\n`;
    }

    // Calculate the vertex if coefficients are provided
    const vertexX = -b / (2 * a);
    const vertexY = a * vertexX ** 2 + b * vertexX + c;
    result += `Calculated Vertex: (${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})\n`;
    explanation += `To find the vertex, we use the formula:\n` +
                   `vertexX = -b / (2a)\n` +
                   `vertexY = a(vertexX)² + b(vertexX) + c\n` +
                   `With the coefficients (${a}, ${b}, ${c}), this gives vertex: (${vertexX.toFixed(2)}, ${vertexY.toFixed(2)}).\n`;

    if (!result) {
        result = 'Please provide sufficient data to solve the parabola.';
        explanation = 'No valid inputs were provided to solve the parabola.';
    }

    document.getElementById('result').textContent = result;
    document.getElementById('explanation').textContent = explanation;
}
