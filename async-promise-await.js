async function hola () {
    const fs = require('fs-extra')
    console.log('antes de leer archivo')

    // en shell: $ export FILE_NAME="<file-name.ext>"
    // para comprobar: $ echo $FILE_NAME
    let fPromise1 = await fs.readFile(process.env.FILE_NAME, 'utf-8')
    // let f2 = fs.readFile('archivos/text2.txt', 'utf-8')
    // let f3 = fs.readFile('archivos/text3.txt', 'utf-8')

    console.log('despues de leer archivo')
    console.log(fPromise1)

    // fPromise1.then( res => console.log(res))

    // Promise.all([fPromise1, f2, f3])
    // .then((res) => { console.log(res) })

}

hola()