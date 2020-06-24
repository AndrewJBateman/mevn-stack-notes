<template>
  <div>
    <h1>Edit Note</h1>
    <form @submit.prevent="updateNote">
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
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Update</button>
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
  created() {
    const uri = `http://localhost:4000/notes/edit/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.note = response.data;
    });
  },
  methods: {
    updateNote() {
      const uri = `http://localhost:4000/notes/update/${this.$route.params.id}`;
      this.axios.post(uri, this.note).then(() => {
        this.$router.push({ name: "notes" });
      });
    }
  }
};
</script>
