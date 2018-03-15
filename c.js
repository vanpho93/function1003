// function inSo(soBiChia, soDu) {
//     for (let i = 0; i <= 100; i++) {
//         const dk = i % soBiChia === soDu;
//         if (dk) console.log(i);
//     }
// }

function inSo(checkFn) {
    for (let i = 0; i <= 100; i++) {
        const dk = checkFn(i);
        if (dk) console.log(i);
    }
}

inSo(a => a % 2 === 0);
inSo(i => i % 2 === 1);
