const fs = require('fs')

// const {
//     scrypt,
//     randomFill,
//     createCipheriv,
//     createDecipheriv
//   } = require('node:crypto');


// const algorithm = 'aes-192-cbc';
// const salt = "COMPL"
var CryptoJS = require("crypto-js");


// const iv = [
//     221, 217, 218, 211,  87,
//     174, 218, 216,  33,   4,
//     250,  44, 252,  97, 225,
//     230
// ]

// let secretArray = new Uint8Array(16)

// iv.forEach((ele, index) => secretArray[index] = ele)
  
  

const SECRETSRAW = "LabEntries"
const POSTSRAW = "PostsRaw"
const POSTS = "posts"
const RESULT = `${POSTS}/posts.json`


const finalRes = {
    categories: new Set(),
    posts: [],
    secrets: []
}


let id = 1;

const getPostData = (outRaw, fileName) => {
    let metaRegex = new RegExp("<!--(.*)-->", "g");

    const title = metaRegex.exec(outRaw)[1].trim();
    const category = metaRegex.exec(outRaw)[1].trim();
    if (category != "Secret")
    finalRes.categories.add(category)
    const lineage = metaRegex.exec(outRaw)[1].trim();
    const description = metaRegex.exec(outRaw)[1].trim();
    const created = metaRegex.exec(outRaw)[1].trim();
    return {
        id: id++,
        category,
        lineage,
        title,
        description,
        created,
        link: fileName,
        backup: ""
    }

}


const processSecrets = () => {
    fs.readdir(SECRETSRAW, function (err, files) {
        //handling error
        if (err) {
            fs.writeFile(RESULT, JSON.stringify(finalRes), 'utf8', () => {
                console.log(finalRes)
            });
            return console.log('Unable to scan directory: ' + err);
        }

        //listing all files using forEach
        files.forEach(function (file) {

            if (file.endsWith(".md")) {
                const outRaw = fs.readFileSync(`${SECRETSRAW}/${file}`,
                    {encoding:'utf8', flag:'r'});
                console.log("processing secret", file)
                let postData = getPostData(outRaw, file)
                

                let password = "icecreamsandwich"
                if (postData.lineage == "Research") {
                    password = "unequivocal"
                }

                finalRes.secrets.push(postData)

                fs.readFile(`${SECRETSRAW}/${file}`, {encoding: 'utf-8'}, function(err,data){
                    // Encrypt
                    var ciphertext = CryptoJS.AES.encrypt(data, password).toString();
                    console.log(ciphertext)
                    
                    // // Decrypt
                    // var bytes  = CryptoJS.AES.decrypt(ciphertext, password);
                    // var originalText = bytes.toString(CryptoJS.enc.Utf8);

                    // console.log(originalText);

                    
                    fs.writeFile(`${POSTS}/${file}`, ciphertext, 'utf8', (err) => {
                        if (err) throw err;
                        console.log("copied secret: ", file)
                    });
                    
                }); 
                // scrypt(password, salt, 24, (err, key) => {
                //     // encrypt file contents
                //     const cipher = createCipheriv(algorithm, key, secretArray);
    
                //     let encrypted = cipher.update(data, 'utf8', 'hex');
                //     encrypted += cipher.final('hex');    
                // });
            }
            
            // Do whatever you want to do with the file
        });

        fs.writeFile(RESULT, JSON.stringify(finalRes), 'utf8', (err) => {
            console.log("finalRes")
        });
    });
}


const startProcessing = () => {
    fs.readdir(POSTSRAW, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
    
            if (file.endsWith(".md")) {
                const outRaw = fs.readFileSync(`${POSTSRAW}/${file}`,
                    {encoding:'utf8', flag:'r'});
                console.log("processing", file)
                let postData = getPostData(outRaw, file)
                if (postData.category == "Secret") {
                    finalRes.secrets.push(postData)
                } else {
                    finalRes.posts.push(postData)
                }
                fs.copyFile(`${POSTSRAW}/${file}`, `${POSTS}/${file}`, (err) => {
                    if (err) throw err;
                });
                  
            }
            
            // Do whatever you want to do with the file
        });
        finalRes.categories = Array.from(finalRes.categories)
    });

    processSecrets()
}

startProcessing()