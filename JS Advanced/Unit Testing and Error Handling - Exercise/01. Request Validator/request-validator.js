function requestValidator(obj) {
    
    let methodProperties = ["GET", "POST", "DELETE", "CONNECT"];

    if (!methodProperties.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    };

    let uriPattern = /^[\w.]+$/g;
    if (!uriPattern.test(obj.uri) || !obj.uri) {
        throw new Error(`Invalid request header: Invalid URI`);
    };

    let versionProperties = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (!versionProperties.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    };

    let messagePattern = /^[^\<\>\\\&\'\"]*$/g;
    if (!messagePattern.test(obj.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    let properties = ['Method', 'URI', 'Version', 'Message'];
    let objKeys = Object.keys(obj);
    
    for (let i = 0; i < properties.length; i++) {

        if (!(objKeys[i] == properties[i].toLowerCase())) {
            throw new Error (`Invalid request header: Invalid ${properties[i]}`);
        }
    }

    return obj;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
});