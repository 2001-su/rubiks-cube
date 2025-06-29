function getCubeSvg(cube) {
  const f = cube.faces;
  return `U: ${f.U.join('')}
R: ${f.R.join('')}
F: ${f.F.join('')}
D: ${f.D.join('')}
L: ${f.L.join('')}
B: ${f.B.join('')}
`;
}
