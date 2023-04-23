// This function has a time and space complexity of O(n^3)
export const detectSums = (array) => {
  if (!Array.isArray(array)) throw Error('Input is not an array');

  const result = new Set();

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const sum = array[i] + array[j];

      for (let k = 0; k < array.length; k++) {
        let alreadyExits = false;

        if (array[k] === sum && k !== i && k !== j && i !== j) {
          const sumArr = [i, j, k];

          for (const resultString of result) {
            const resultSumString = resultString.split(',').sort().join(',');
            const sumString = [...sumArr].sort().join(',');

            if (sumString === resultSumString) {
              alreadyExits = true;
              break;
            }
          }

          if (alreadyExits) break;

          result.add(sumArr.join(','));
        }
      }
    }
  }

  const output = [];
  for (const sumArr of result) {
    const [pA, pB, sum] = sumArr.split(',');
    output.push({ pA: Number(pA), pB: Number(pB), sum: Number(sum) });
  }

  return output;
};

export function calculateResult(input) {
  const parsedInput = input.split(',').map((i) => parseInt(i.trim(), 10));
  let error = null;
  let result = '';
  try {
    result = detectSums(parsedInput);
  } catch (e) {
    error = e.message;
  }
  return { input: parsedInput, result, error: '' };
}
