export function getKRDateString(str: string, addZero?: boolean): string {
    const date = new Date(str);
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const dayIndex = date.getUTCDay();

    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    if (addZero === undefined) {
        return `${date.getUTCFullYear()}년 ${month}월 ${day}일 (${
            week[dayIndex]
        })`;
    } else {
        return `${date.getUTCFullYear()}년 ${
            month < 10 ? `0${month}` : month
        }월 ${day < 10 ? `0${day}` : day}일 (${week[dayIndex]})`;
    }
}

// return 2021년 2월 9일
