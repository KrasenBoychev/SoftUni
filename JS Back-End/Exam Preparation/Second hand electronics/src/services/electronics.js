const { Electronics } = require('../models/Electronics');

//TODO replace with real data service according to exam description

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

    //TODO replace with real properties
    record.prop = data.prop;

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

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
};