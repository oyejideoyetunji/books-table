export function urlStringParser(value){
    return value.trim().replace(/\s/g, '%20')
}