export const filterLc = (readLC) => {
	const LC = [];
	for (let i = 0; i < readLC.length; i++) {
		if (readLC[i]) {
			LC.push(readLC[i]);
		}
	}
	return LC
}
