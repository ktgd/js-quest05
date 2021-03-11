//for (var i = 2; i < arguments.length; i++) { // FFS, ce kludge dégueulasse.
//    process.stdout.write(process.argv[i] + '\n'); // Mais bordel, c'est encore pire. C'est pas possible.
for (var i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}