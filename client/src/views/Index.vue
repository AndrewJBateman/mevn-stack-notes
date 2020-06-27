<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="alert alert-primary border-primary p-2 m-0" role="alert">
        <div class="d-flex justify-content-between">
          <h4 class="alert-heading text-center">
            Notes Hub
            <button
              type="button"
              class="btn btn-outline-light btn-sm"
              @click.prevent="showNoteAdd()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </button>
            <button
              type="button"
              class="btn btn-outline-light btn-sm ml-2"
              @click.prevent="showInfo()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                />
              </svg>
            </button>
          </h4>
        </div>
        <hr class="m-2" />
        <p class="mb-0 text-center" v-if="this.noteNumber">
          You have
          <span class="badge badge-pill badge-light" style="font-size: 18px;">{{ this.noteNumber }}</span>
          {{ notePlural }}
        </p>
      </div>
    </div>

    <div class="container-fluid mt-3">
      <div class="row justify-content-center">
        <div
          class="col-auto mb-3 pl-2 pr-2 justify-content-center"
          v-for="note in notes"
          :key="note._id"
        >
          <div class="card border-primary" style="width: 16rem;">
            <div class="card-body text-white bg-secondary p-2">
              <h5 class="card-title">{{ note.title }}</h5>
              <p class="card-text">{{ note.body }}</p>
            </div>
            <div class="card-footer p-2">
              <small class="text-muted d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    class="mr-1"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                    />
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  {{ note.date | moment("Do MMMM YYYY") }}
                </div>
                <router-link
                  :to="{name: 'edit', params: { id: note._id }}"
                  class="btn btn-outline-primary btn-sm ml-2 mr-2"
                >
                  <svg
                    class="bi bi-pencil"
                    width="1.5em"
                    height="1.5em"
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
                    width="1.5em"
                    height="1.5em"
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
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [],
      noteNumber: 0,
      notePlural: ""
    };
  },
  created: function() {
    this.fetchTodos();
  },
  methods: {
    fetchTodos() {
      const uri = "/notes";
      this.axios.get(uri).then(response => {
        this.notes = response.data;
        this.noteNumber = this.notes.length;
        this.notePlural = this.noteNumber === 1 ? "note" : "notes";
      });
    },

    deleteNote(id) {
      const uri = `/notes/delete/${id}`;
      this.axios.delete(uri).then(response => {
        this.fetchTodos();
      });
    },
    showNoteAdd() {
      this.$router.push("create");
    },
    showInfo() {
      this.$router.push("info");
    }
  }
};
</script>
