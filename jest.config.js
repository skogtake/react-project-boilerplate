module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.(js|jsx)?$': 'babel-jest',
		'^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
	moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupTestFrameworkScriptFile: '<rootDir>/src/setupEnzyme.js',
};
