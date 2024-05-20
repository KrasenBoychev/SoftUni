const { readTemplate, layout } = require('../util');

async function addCatHandler(req, res) {
    const template = await readTemplate('addCat');

    res.writeHead(200, [
        'Content-Type', 'text/html'
    ]);
    res.write(await layout(template));
    res.end();
}

module.exports = {
    addCatHandler
};