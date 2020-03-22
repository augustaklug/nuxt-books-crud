<template>
  <span>
    <div class="form-group">
      <label for="edit-name">Name</label>
      <input
        id="edit-name"
        v-model="theProduct.name"
        class="form-control"
        required
      />
    </div>
    <div class="form-group">
      <label for="edit-description">Description</label>
      <textarea
        id="edit-description"
        v-model="theProduct.description"
        class="form-control"
        rows="3"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="edit-price"
        >Price <span class="glyphicon glyphicon-euro"></span
      ></label>
      <input
        id="edit-price"
        v-model="theProduct.price"
        type="number"
        class="form-control"
      />
    </div>
  </span>
</template>

<script>
export default {
  name: 'ProductForm',
  props: ['theProduct']
}
</script>
