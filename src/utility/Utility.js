export function deepCloneObject(object) {
    if (object === undefined || object === null || !object) return object;
    return JSON.parse(JSON.stringify(object));
}