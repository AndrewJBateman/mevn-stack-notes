<template>
  <div>
    <br />
    <div v-for="note in notes" :key="note._id">
      <div class="card">
        <h6 class="card-header">{{ note.title }}</h6>
        <div class="card-body">
          <p class="card-text">{{ note.body }}</p>
          <span class="badge badge-primary mr-2">Created: {{ note.date }}</span>
          <router-link
            :to="{name: 'edit', params: { id: note._id }}"
            class="btn btn-outline-info btn-sm mr-2"
          >
            <svg
              class="bi bi-pencil"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
              />
              <path
                fill-rule="evenodd"
                d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
              />
            </svg>
          </router-link>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            @click.prevent="deleteNote(note._id)"
          >
            <svg
              class="bi bi-trash"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: []
    };
  },
  created() {
    const uri = "http://localhost:4000/notes";
    this.axios.get(uri).then(response => {
      this.notes = response.data;
    });
  },
  methods: {
    deleteNote(id) {
      const uri = `http://localhost:4000/notes/delete/${id}`;
      this.axios.delete(uri).then(response => {
        this.notes.splice(this.notes.indexOf(id), 1);
      });
    }
  }
};
</script>
