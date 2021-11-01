export function isEndConsonant(strKR: string) {
  const finalChrCode = strKR.charCodeAt(strKR.length - 1);
  const finalConsonantCode = (finalChrCode - 44032) % 28;
  return finalConsonantCode !== 0; // 0 = 받침 없음, 그 외 = 받침 있음
}
