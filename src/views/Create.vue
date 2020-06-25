<template>
  <div>
    <form @submit.prevent="addNote">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Note Title:</label>
            <input type="text" class="form-control" v-model="note.title" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Note Body:</label>
            <textarea class="form-control" v-model="note.body" rows="5"></textarea>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: {}
    };
  },
  methods: {
    addNote() {
      const uri = "http://localhost:4000/notes/add";
      this.axios.post(uri, this.note).then(() => {
        this.$router.push({ name: "notes" });
      });
    }
  }
};
</script>
