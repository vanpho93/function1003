function veHinh1(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dk = i >= j
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh2(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dk = i + j >= n + 1;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh3(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const dk = i + j <= n + 1;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh4(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const soBuoc = (n - 1) / 2;
            const soTrungTam = soBuoc + 1;
            const soBuocDoc = Math.abs(j - soTrungTam);
            const soBuocNgang = Math.abs(i - soTrungTam);
            const dk = soBuocDoc + soBuocNgang <= soBuoc;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}


function veHinh5(n) {
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n; j++) {
            const soBuoc = (n - 1) / 2;
            const soTrungTam = soBuoc + 1;
            const soBuocDoc = Math.abs(j - soTrungTam);
            const soBuocNgang = Math.abs(i - soTrungTam);
            const dkDuongVien = soBuocDoc + soBuocNgang === soBuoc;
            const dkTrucDoc = i === soTrungTam;
            const dkTrucNgang = j === soTrungTam;
            const dk = dkDuongVien || dkTrucDoc || dkTrucNgang;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh6(n) {
    const soCot = n * 2 - 1;
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= soCot; j++) {
            const soBuoc = n - 1;
            const soTrungTam = soBuoc + 1;
            const soBuocDoc = Math.abs(j - soTrungTam);
            const soBuocNgang = Math.abs(i - soTrungTam);
            const dk = soBuocDoc + soBuocNgang <= soBuoc;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}
