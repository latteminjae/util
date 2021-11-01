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
