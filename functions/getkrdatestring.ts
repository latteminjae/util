//  date : string | Date 타임스탬프 스트링 또는 date 규칙이 지켜진 스트링, date 객체 모두 대응한다.
//  addZero : boolean -> true를 넣게 되면 한자릿수에 대하여 앞에 0을 추가한다.
//       ex) 2021년 9월 1일 (월) -> 2021년 09월 01일 (월)

export function getKRDateString(
    date: string | Date,
    addZero?: boolean
): string {
    const ins = typeof date === "string" ? new Date(date) : date;
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const dayIndex = ins.getUTCDay();

    const month = ins.getUTCMonth() + 1;
    const day = ins.getUTCDate();

    if (addZero === undefined) {
        return `${ins.getUTCFullYear()}년 ${month}월 ${day}일 (${
            week[dayIndex]
        })`;
    } else {
        return `${ins.getUTCFullYear()}년 ${
            month < 10 ? `0${month}` : month
        }월 ${day < 10 ? `0${day}` : day}일 (${week[dayIndex]})`;
    }
}
