
//tansParams 转换参数
//将 JavaScript 对象转换为 URL 查询参数字符串。
export function tansParams(params:any) {
    let result = ''
    for (const propName of Object.keys(params)) {
        const value = params[propName];
        var part = encodeURIComponent(propName) + "="; //存储该属性的 URL 查询参数名
        if (value !== null && typeof (value) !== "undefined") {
            if (typeof value === 'object') {
                for (const key of Object.keys(value)) { // 遍历 params 对象的属性
                    if (value[key] !== null && typeof (value[key]) !== 'undefined') {
                        let params = propName + '[' + key + ']';
                        var subPart = encodeURIComponent(params) + "=";
                        result += subPart + encodeURIComponent(value[key]) + "&";
                    }
                }
            } else {
                result += part + encodeURIComponent(value) + "&";
            }
        }
    }
    return result
}
// 如果该属性的值是一个对象，则进一步遍历该对象的属性，并为每个属性生成一个嵌套的 URL 查询参数名，并将其与属性值一起编码为 URL 查询参数字符串。
// 否则，如果该属性的值不是一个对象，则直接将其编码为 URL 查询参数字符串。
