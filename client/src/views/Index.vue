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
              <img src="../assets/static/add-24px.svg" />
            </button>
            <button
              type="button"
              class="btn btn-outline-light btn-sm ml-2"
              @click.prevent="showInfo()"
            >
              <img src="../assets/static/info-24px.svg" />
            </button>
          </h4>
        </div>
        <hr class="m-2" />
        <p class="mb-0 text-center" v-if="this.noteNumber">
          You have
          <span
            class="badge badge-pill badge-light"
            style="font-size: 18px;"
          >{{ this.noteNumber }}</span>
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
                  <img src="../assets/static/schedule-24px.svg" />
                  {{ note.date | moment("Do MMMM YYYY") }}
                </div>
                <router-link
                  :to="{name: 'edit', params: { id: note._id }}"
                  class="btn btn-outline-primary btn-sm ml-2 mr-2"
                >
                  <img src="../assets/static/pencil-24px.svg" alt="button to edit note" />
                </router-link>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click.prevent="deleteNote(note._id)"
                >
                  <img src="../assets/static/trash.svg" alt="button to delete note" />
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
