const fs = require('fs')

const POSTS = "posts"
const RESULT = "posts/posts.json"

const finalRes = {
    categories: [],
    posts: []
}


let id = 1;

const getPostData = (outRaw, fileName) => {
    let metaRegex = new RegExp("<!--(.*)-->", "g");

    const title = metaRegex.exec(outRaw)[1].trim();
    const category = metaRegex.exec(outRaw)[1].trim();
    finalRes.categories.push(category)
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

fs.readdir(POSTS, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {

        if (file.endsWith(".md")) {
            const outRaw = fs.readFileSync(`${POSTS}/${file}`,
                {encoding:'utf8', flag:'r'});
            console.log("processing", file)
            finalRes.posts.push(getPostData(outRaw, file))
        }
        
        // Do whatever you want to do with the file
    });
    fs.writeFile(RESULT, JSON.stringify(finalRes), 'utf8', () => {
        console.log(finalRes)
    });
});

