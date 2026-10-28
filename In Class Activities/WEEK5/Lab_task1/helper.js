function getCurrentTime() {
    return new Date().toString();
}
function getServerStatus() {
    return { status: "active", timestamp: getCurrentTime() };
}
module.exports = { getCurrentTime, getServerStatus };