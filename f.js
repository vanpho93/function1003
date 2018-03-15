function veHinh(n, checkFn) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dk = checkFn(i, j, n);
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

// veHinh(5, (i, j, n) => i >= j);
// veHinh(5, (i, j, n) =>  i + j >= n + 1);
// veHinh(5, (i, j, n) =>  i + j <= n + 1);
// veHinh(5, (i, j, n) => {
//     const soBuoc = (n - 1) / 2;
//     const soTrungTam = soBuoc + 1;
//     const soBuocDoc = Math.abs(j - soTrungTam);
//     const soBuocNgang = Math.abs(i - soTrungTam);
//     return soBuocDoc + soBuocNgang <= soBuoc;
// });

// veHinh(9, (i, j, n) => {
//     const soBuoc = (n - 1) / 2;
//     const soTrungTam = soBuoc + 1;
//     const soBuocDoc = Math.abs(j - soTrungTam);
//     const soBuocNgang = Math.abs(i - soTrungTam);
//     const dkDuongVien = soBuocDoc + soBuocNgang === soBuoc;
//     const dkTrucDoc = i === soTrungTam;
//     const dkTrucNgang = j === soTrungTam;
//     return dkDuongVien || dkTrucDoc || dkTrucNgang;
});
