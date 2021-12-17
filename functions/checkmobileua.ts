// user agent 를 분석하여 모바일기기 체크

export function checkMobileUA(): boolean {
    if (
        /iPad/i.exec(navigator.userAgent) ||
        /Tablet/i.exec(navigator.userAgent) ||
        /Android/i.exec(navigator.userAgent) ||
        /iPhone|iPod/i.exec(navigator.userAgent)
    ) {
        return true;
    }

    return false;
}
