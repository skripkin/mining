const fs = require('fs');

const ICONFONT_PATH = './assets/images/iconfont/';
const ICONFONT_FILE = './assets/bootstrap/_iconfont.scss';

const hasUnicodeMatches = (codes) => {
    const map = new Map();

    for (let code of codes) {
        if (map.has(code)) {
            return true;
        }

        map.set(code);
    }

    return false;
}

const replaceFileNames = () => {
    fs.readdir(ICONFONT_PATH, (err, files) => {
        if (err) {
            return console.log(err);
        }

        const codes = files.reduce((acc, file) => {
            if (file === '.DS_Store') {
                return acc;
            }

            if (!file.startsWith('uE')) { // Если к названию файла не был приписан unicode
                return acc;
            }

            const [code] = file.split('-');

            return [...acc, code ];
        }, []);

        if (!hasUnicodeMatches(codes)) return;

        for (file of files) {
            if (file.startsWith('uE')) {
                const newFileName = file.slice(file.indexOf('-') + 1);

                fs.rename(`${ICONFONT_PATH}${file}`, `${ICONFONT_PATH}${newFileName}`, (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
        }
    })
}

const getArrayOfCodes = () => {
    const files = fs.readdirSync(ICONFONT_PATH);

    const result = files.reduce((acc, file) => {
        if (file === '.DS_Store') {
            return acc;
        }

        var code = file.slice(0, file.indexOf('-'));
        var name = file.slice(file.indexOf('-') + 1, file.indexOf('.svg'));
        
        return [...acc, { name: name, value: code }];
    }, []);

    return result;
}

const writeArrayOfCodes = () => {
    const codes = JSON.stringify(getArrayOfCodes())
        .replace(/uE/g, '\\E')
        .replace(/[\[\{]/g, '(')
        .replace(/[\}\]]/g, ')');

    fs.readFile(ICONFONT_FILE, 'utf-8', (err, data) => {
        if (err) {
            return console.log(err);
        }

        const newData = data.replace(/\$icons:[\w\s\(:'",\\\)-]*/i, `\$icons: ${codes}`);

        fs.writeFileSync(ICONFONT_FILE, newData, 'utf-8')
    });
}

const [arg] = process.argv.slice(-1);

if (arg === '--rename') {
    replaceFileNames();
} else if (arg === '--rewrite') {
    writeArrayOfCodes();
}
