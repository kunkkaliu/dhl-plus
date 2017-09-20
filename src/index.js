export default (a = 0, b = 0) => {
    let obj = {
        name: '',
    };
    obj = Object.assign(obj, {
        a,
        b,
    });
    return obj.a + obj.b;
};
