function greet(name){
    return `Hello, ${name}`
}

module.export = greet;

if(requestAnimationFrame.main === module){
    console.log(greet("World"))
}