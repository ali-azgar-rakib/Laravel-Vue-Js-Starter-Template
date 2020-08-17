<template>
  <div>
    <div class="card mt-5">
      <div class="card-header">
        <h3 class="card-title">DataTable with default features</h3>
        <button
          class="float-right btn btn-primary"
          data-toggle="modal"
          data-target="#modelId"
          type="button"
        >
          Add User
          <i class="fas fa-user-plus fa-fw"></i>
        </button>
      </div>
      <!-- /.card-header -->
      <div class="card-body">
        <table id="example1" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in getUsers" :key="index">
              <td>{{index+1}}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.userType}}</td>
              <td>
                <div class="btn-group">
                  <a href class="btn btn-sm">
                    <i class="fa fa-edit fa-fw blue"></i>
                  </a>/
                  <a href class="btn btn-sm">
                    <i class="fa fa-trash fa-fw red"></i>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add User</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form action @submit.prevent="addUser">
            <div class="modal-body">
              <div class="form-group">
                <input
                  v-model="form.name"
                  type="text"
                  class="form-control"
                  placeholder="Enter User Name"
                  name="name"
                  :class="{ 'is-invalid': form.errors.has('name')}"
                />
                <has-error :form="form" field="name"></has-error>
              </div>
              <div class="form-group">
                <input
                  v-model="form.email"
                  type="text"
                  class="form-control"
                  placeholder="Enter User Email"
                  name="email"
                  :class="{'is-invalid':form.errors.has('email')}"
                />
                <has-error :form="form" field="email"></has-error>
              </div>
              <div class="form-group">
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  placeholder="Enter User Password"
                  name="password"
                  :class="{'is-invalid':form.errors.has('password')}"
                />
                <has-error :form="form" field="password"></has-error>
              </div>
              <div class="form-group">
                <input
                  v-model="form.password_confirmation"
                  type="password"
                  class="form-control"
                  placeholder="Enter User Confirm Password"
                />
              </div>

              <div class="form-group">
                <select
                  class="form-control"
                  v-model="form.userType"
                  name="userType"
                  :class="{'is-invalid':form.errors.has('userType')}"
                >
                  <option value disabled selected>Select One</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <has-error :form="form" field="userType"></has-error>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Add User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- modal end  -->
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("getUsers");
  },
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        userType: "",
      }),
    };
  },
  methods: {
    addUser() {
      this.form.post("/api/user").then((res) => {
        $("#modelId").modal("hide");
        toastr.fire("success");
      });
    },
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
};
</script>