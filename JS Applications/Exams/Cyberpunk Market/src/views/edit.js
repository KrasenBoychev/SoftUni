import { getSingleRecord, updateRecord } from "../data/records.js";
import { html, render, page  } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (record, onEdit) => html`
     <section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input type="text" name="item" id="item" placeholder="Item" .value=${record.item} />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
          .value=${record.imageUrl}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
          .value=${record.price}
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
          .value=${record.availability}
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
          .value=${record.type}
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
          .value=${record.description}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>

`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const record = await getSingleRecord(id);

  render(editTemplate(record, createSubmitHandler(onEdit)));

  async function onEdit({item, imageUrl, price, availability, type, description}){
    if (!item || !imageUrl || !price || !availability || !type || !description) {
      return alert('All fields are required!');
  }

    const data = {item, imageUrl, price, availability, type, description};
    await updateRecord(id, data);
    page.redirect('/details/' + id);
}
}


