let json = '{"age": 30}';
try {
    let user = JSON.parse(json);
    if(!user.name) {
        throw new SyntaxError('SyntaxError');
    }
    console.log(user.name);
} catch(e) {
    console.log('JSON Error:' + e);
}




try {
    console.log('Start:');
thisvar;
    console.log('End');

} catch(err) {
    console.log('Error ' + err.stack);

} finally {
    console.log('Finally always run');
    
}
console.log('... Continue...');
