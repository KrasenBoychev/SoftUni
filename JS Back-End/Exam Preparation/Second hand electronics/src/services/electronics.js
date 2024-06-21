const { Electronics } = require('../models/Electronics');

async function getAll() {
    return Electronics.find().lean();
}

async function searchElectronics(name, type) {
    const query = {};

    if (name) {
        query.name = new RegExp(name, 'i');
    }

    if (type && type != '---') {
        query.type = type;
    }

    return Electronics.find(query).lean();
}

async function getById(id) {
    return Electronics.findById(id).lean();
}

async function create(data, authorId) {
    const record = new Electronics({
        name: data.name,
        type: data.type,
        damages: data.damages,
        image: data.image,
        description: data.description,
        production: data.production,
        exploitation: data.exploitation,
        price: data.price,
        author: authorId
    });

    await record.save();

    return record;
}

async function update(id, data, userId) {
    const record = await Electronics.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    record.name = data.name,
    record.type = data.type,
    record.damages = data.damages,
    record.image = data.image,
    record.description = data.description,
    record.production = data.production,
    record.exploitation = data.exploitation,
    record.price = data.price,

    await record.save();

    return record;
}

async function deleteById(id, userId) {
    const record = await Electronics.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied');
    }

    await Electronics.findByIdAndDelete(id);
}

async function buy(id, userId) {
    const record = await Electronics.findById(id);

    if (!record) {
        throw new ReferenceError('Record not found ' + id);
    }

    if (record.author.toString() == userId) {
        throw new Error('Cannot buy your item');
    }

    if (record.buyingList.find(v => v.toString() == userId)) {
        throw new Error('Only one purchase is allowed per customer');
    }

    record.buyingList.push(userId);
    
    await record.save();

    return record;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    buy,
    searchElectronics
};